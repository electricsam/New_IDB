import { combineForms } from 'react-redux-form/lib/immutable';

import tsunamiReducer from './tsunamiReducer';
import earthquakeReducer from './earthquakeReducer';

export default combineForms({
  tsunami: tsunamiReducer,
  earthquake: earthquakeReducer
}, 'deep');