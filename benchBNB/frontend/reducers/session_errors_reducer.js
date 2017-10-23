import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';


const SessionErrorsReducer = (oldState=[], action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      let newState = action.errors;
      return newState;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }
};

export default SessionErrorsReducer;
