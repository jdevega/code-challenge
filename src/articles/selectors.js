import { propOr } from 'ramda';
import { DOMAIN } from './constants';

const root = propOr({}, DOMAIN);
export const getAll = state => {
  const articles = propOr([], 'items')(root(state));
  return { articles };
}
;
