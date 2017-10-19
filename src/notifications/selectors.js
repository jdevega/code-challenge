import { propOr } from 'ramda';
import { DOMAIN } from './constants';

const root = propOr({}, DOMAIN);
export const getAll = state => ({ notifications: root(state) });
