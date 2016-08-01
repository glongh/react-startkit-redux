import { AN_ACTION } from '../constants';

export function anAction(value) {
  return {
    type: AN_ACTION,
    payload: value,
  };
}
