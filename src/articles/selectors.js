import { propOr, prop } from 'ramda';
import { DOMAIN } from './constants';

const root = propOr({}, DOMAIN);
export const getAll = state => propOr([], 'list')(root(state));
export const getOne = state => prop('item', root(state));
