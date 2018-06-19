import { referenceHave } from '../../formConstants/constants';

const Parameters = [
  {
    type: 'TEXTNOVAL',
    title: 'Year',
    model: '.reference.insert.year',
  },
  {
    type: 'TEXTNOVAL',
    title: 'Author',
    model: '.reference.insert.author',
  },
  {
    type: 'TEXTAREANOVAL',
    title: 'Citation',
    model: '.reference.insert.citation',
    id: '.reference.insert.citation',
    maxLength: 3600
  },
  {
    type: 'DROPDOWN',
    title: 'Have and DB Status',
    model: '.reference.insert.have',
    data: referenceHave,
  },
  {
    type: 'TEXTAREA',
    title: 'Comments',
    model: '.reference.insert.comments',
    id: '.reference.insert.comments',
    maxLength: 3600
  },
];

export {
  Parameters,
};
