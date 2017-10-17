import {
  either,
  isNil,
  isEmpty,
  complement,
  test,
  map,
  keys,
  curry,
  replace,
  both,
  pipe,
  gt,
  lt,
} from 'ramda';

const isBlank = either(isNil, isEmpty);
const isNotBlank = complement(isBlank);
const isNumeric = pipe(replace(',', '.'), Number);
const isInteger = test(/^\+?\d+$/);
const isNotInteger = complement(isInteger);
const isNotNumeric = complement(isNumeric);
const isEmail = test(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
const isStrongPassword = test(
  /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
);
const isNotEmail = complement(isEmail);
const isNotStrongPassword = complement(isStrongPassword);
const gte = curry((length, value) => value.length >= length);
const lte = curry((length, value) => value.length <= length);

const Validations = {
  integer: () => value =>
    both(isNotBlank, isNotInteger)(value) && 'Not an integer value',
  range: ([min, max]) => value =>
    isNotBlank(value) &&
    isNumeric(value) &&
    (gt(value, max) || lt(value, min)) &&
    `Not in the range [${min}, ${max}]`,

  required: () => value => isBlank(value) && 'Required',
  numeric: () => value => both(isNotBlank, isNotNumeric)(value) && 'Must be numeric',
  email: () => value => isNotEmail(value) && 'Not a valid email',
  strongPassword: ({ errorMessage }) => (value, allValues, form, name) =>
    isNotStrongPassword(value) &&
    (errorMessage || `${name} does not meet security requirements.`),

  confirm: ({ field, errorMessage }) => (value, allValues, form, name) =>
    value !== allValues[field || `${name}Confirmation`] &&
    (errorMessage || `${field} and confirmation do not match`),
  length: ({ min, max, equal }) => value =>
    (max && gte(max)(value) && `Max length: ${max} characters`) ||
    (min && lte(min)(value) && `Min length: ${min} characters`) ||
    (equal && value.length !== equal && `Length not equal to ${equal}`),
  in: ({ min, max }) => value =>
    (max && max < value && `Upper limit: ${max}`) ||
    (min && min > value && `Lower limit: ${min}`),
};

const createValidator = validate =>
  map(
    validation => Validations[validation](validate[validation]),
    keys(validate),
  );

export default createValidator;
