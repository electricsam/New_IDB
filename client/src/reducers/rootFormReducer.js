import { combineForms } from 'react-redux-form/lib/immutable';

import tsunamiReducer from './tsunamiReducer';
import earthquakeReducer from './earthquakeReducer';
import referenceReducer from './referenceReducer';
import volcanoReducer from './volcanoReducer';

export default combineForms({
  volcano: volcanoReducer,
  reference: referenceReducer,
  tsunami: tsunamiReducer,
  earthquake: earthquakeReducer,
}, 'deep');
