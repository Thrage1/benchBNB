import * as SESSIONApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};
const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};
export const login = (user) => (dispatch) => {
  return SESSIONApiUtil.login(user).then(userpayload => {
    return dispatch(receiveCurrentUser(userpayload)), error => {
      return dispatch(receiveErrors(error));
    };
  });
};
export const logout = () => (dispatch) => {
  return SESSIONApiUtil.logout().then(()=> dispatch(receiveCurrentUser(null)) );
};


export const signup = user => dispatch => {
  return SESSIONApiUtil.signup(user).then(userPayload => {
    return dispatch(receiveCurrentUser(userPayload));
  }, err => {
    return dispatch(receiveErrors(err.responseJSON));
  });
};
