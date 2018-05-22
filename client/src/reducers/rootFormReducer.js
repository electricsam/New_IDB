import { combineForms } from 'react-redux-form/lib/immutable';

import tsunamiReducer from './tsunamiReducer';
import earthquakeReducer from './earthquakeReducer';
import referenceReducer from './referenceReducer';

export default combineForms({
  reference: referenceReducer,
  tsunami: tsunamiReducer,
  earthquake: earthquakeReducer
}, 'deep');