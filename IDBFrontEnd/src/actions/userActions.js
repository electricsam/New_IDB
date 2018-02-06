
import axios from 'axios';

export function getAllUsers() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_USERS' });
    return axios
      .get('http://localhost:8080/users')
      .then((response) => {
        dispatch({ type: 'FETCH_USER_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_USER_REJECTED', payload: err });
      });
  };
}

export function addNewUserAttribute(key, value) {
  return {
    type: 'ADD_USER_ATTRIBUTE',
    payload: {
      key,
      value,
    },
  };
}

export function updateNewUserGender(gender) {
  return { type: 'UPDATE_USER_GENDER', payload: gender };
}

export function addNewUser(newUser) {
  return (dispatch) => {
    dispatch({ type: 'ADD_USER' });
    return axios
      .post('http://localhost:8080/user', newUser)
      .then((response) => {
        dispatch({ type: 'ADD_USER_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_USER_REJECTED', payload: err });
      });
  };
}

export function addNewUserAndGetAllUsers(newUser) {
  return dispatch => dispatch(addNewUser(newUser)).then(() => dispatch(getAllUsers()));
}

