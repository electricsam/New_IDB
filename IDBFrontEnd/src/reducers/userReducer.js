

const initialState = {
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
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case 'FETCH_USER': {
    return { ...state, fetchingUsers: true };
  }
  case 'FETCH_USER_REJECTED': {
    return { ...state, fetchingUsers: false, error: action.payload };
  }
  case 'FETCH_USER_FULFILLED': {
    return {
      ...state,
      fetchingUsers: false,
      fetchedUsers: true,
      users: action.payload,
    };
  }
  case 'ADD_USER_ATTRIBUTE': {
    const tmp = { ...state.newUser };
    tmp[action.payload.key] = action.payload.value;

    return {
      ...state,
      newUser: tmp,
    };
  }
  case 'UPDATE_USER_GENDER': {
    const tmp = { ...state.newUser };
    tmp.gender = action.payload;

    return {
      ...state,
      newUser: tmp,
    };
  }
  case 'ADD_USER': {
    return { ...state, addingUser: true };
  }
  case 'ADDED_USER_FULFILLED': {
    return {
      ...state,
      addingUser: false,
      newUser: initialState.newUser,
      addedUser: true,
    };
  }
  case 'ADD_USER_REJECTED': {
    return { ...state, addingUser: false, error: action.payload };
  }
  }
  return state;
}
