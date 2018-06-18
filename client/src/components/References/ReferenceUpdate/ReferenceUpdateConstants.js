

import { referenceHave } from '../../formConstants/constants';

const Parameters = [
  {
    type: 'TEXTNOVAL',
    title: 'Year',
    model: '.reference.references[0].year',
  },
  {
    type: 'TEXTNOVAL',
    title: 'Author',
    model: '.reference.references[0].author',
  },
  {
    type: 'TEXTAREANOVAL',
    title: 'Citation',
    model: '.reference.references[0].citation',
  },
  {
    type: 'DROPDOWN',
    title: 'Have and DB Status',
    model: '.reference.references[0].have',
    model: '.reference.references[0].have',
    data: referenceHave,
  },
  {
    type: 'TEXTAREA',
    title: 'Comments',
    model: '.reference.references[0].comments',
    maxLength: 3600
  },
];

export {
  Parameters,
};
