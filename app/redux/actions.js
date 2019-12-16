/*
 *
 * Global store saga actions
 *
 */
import * as types from './types';

export function clearStore() {
  return {
    type: types.CLEAR_STORE,
    value: {},
  };
}
