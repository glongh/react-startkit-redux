import { AN_ACTION } from '../constants';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  something: 0,
});

function appReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
  case AN_ACTION:
    return state
    .update('anAction', () => action.payload);
  default:
    return state;
  }
}

export default appReducer;
