import Immutable from 'seamless-immutable';

// TODO: clean up all commented out return statements once seamless-immutable is verified to work


const initialState = Immutable({
  fetchingUsers: false,
  fetchedUsers: false,
  error: null,
  users: null,
  newUser: {
    firstName: null,
    lastName: null,
    email: null,
    gender: 'male',
    avatar: 'https://robohash.org/quinemorepellendus.bmp?size=50x50&set=set1',
    company: null,
    address: null,
  },
  addingUser: false,
  addedUser: false,
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case 'FETCH_USER': {
    return Immutable.set(state, 'fetchingUsers', true);
    // return { ...state, fetchingUsers: true };
  }
  case 'FETCH_USER_REJECTED': {
    return Immutable.merge(state, { fetchingUsers: false, error: action.payload });
    // return { ...state, fetchingUsers: false, error: action.payload };
  }
  case 'FETCH_USER_FULFILLED': {
    return Immutable.merge(state, { fetchingUsers: false, fetchedUsers: true, users: action.payload });

    // return {
    //   ...state,
    //   fetchingUsers: false,
    //   fetchedUsers: true,
    //   users: action.payload,
    // };
  }
  case 'ADD_USER_ATTRIBUTE': {
    return Immutable.setIn(state, ['newUser', action.payload.key], action.payload.value);

    // const tmp = { ...state.newUser };
    // tmp[action.payload.key] = action.payload.value;
    //
    // return {
    //   ...state,
    //   newUser: tmp,
    // };
  }
  case 'UPDATE_USER_GENDER': {
    return Immutable.setIn(state, ['newUser', 'gender'], action.payload);

    // const tmp = { ...state.newUser };
    // tmp.gender = action.payload;
    //
    // return {
    //   ...state,
    //   newUser: tmp,
    // };
  }
  case 'ADD_USER': {
    return Immutable.set(state, 'addingUser', true);
    // return { ...state, addingUser: true };
  }
  case 'ADDED_USER_FULFILLED': {
    return Immutable.merge(state, { addingUser: false, newUser: initialState.newUser, addedUser: true });

    // return {
    //   ...state,
    //   addingUser: false,
    //   newUser: initialState.newUser,
    //   addedUser: true,
    // };
  }
  case 'ADD_USER_REJECTED': {
    return Immutable.merge(state, { addingUser: false, error: action.payload });

    // return { ...state, addingUser: false, error: action.payload };
  }
  }
  return state;
}
