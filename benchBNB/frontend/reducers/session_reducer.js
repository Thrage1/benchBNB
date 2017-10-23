import React from 'react';
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import merge from 'lodash/merge';

const _nullUser = Object.freeze({currentUser: null});
const SessionReducer = (oldState=_nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
      return merge({}, {currentUser});

    default:
      return oldState;
  }
};


export default SessionReducer;
