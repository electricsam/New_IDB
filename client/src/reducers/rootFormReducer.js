import { combineForms } from 'react-redux-form/lib/immutable';

import tsunamiReducer from './tsunamiReducer';

export default combineForms({
  tsunami: tsunamiReducer
}, 'deep');