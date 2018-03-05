import { combineForms, createForms } from 'react-redux-form';

import tform from './tsunamiFormReducer';

const initialState = {
  name: '',
  age: '',
  height: '',
}

export default combineForms({
  user: tform
}, 'deep')