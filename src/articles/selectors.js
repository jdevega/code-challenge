import { propOr, pathOr } from 'ramda';
import { DOMAIN } from './constants';

const root = propOr({}, DOMAIN);
export const getAll = state => ({ articles: propOr([], 'list')(root(state)) });
export const getOne = state => pathOr({}, ['item'], root(state));
