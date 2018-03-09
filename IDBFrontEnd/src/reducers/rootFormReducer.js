import { combineForms } from 'react-redux-form/immutable';

import tsunamiReducer from './tsunamiReducer';

export default combineForms({
  tsunami: tsunamiReducer
}, 'deep');