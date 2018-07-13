import {regions, states, validationConstants} from "../../formConstants/constants";

const testDropDownData = [
  {name: 'nameOne', value: 'nameOne'},
  {name: 'nameTwo', value: 'nameTwo'}
];

const MinMax =  {
  type: 'MINMAX',
  title: 'Min Max Component',
  minThreshold: 0,
  maxThreshold: 10,
  min: {
    model: 'minModel',
    validMessage: 'Invalid Min',
  },
  max: {
    model: 'maxModel',
    validMessage: 'Invalid Max',
  },
};

const DropDown =  {
  type: 'DROPDOWN',
  title: 'DropDown Component',
  model: 'DropDownModel',
  id: 'DropDownId',
  data: testDropDownData,
};

const DropDownOr = {
  type: 'DROPDOWNOR',
  title: 'DropdownList Component',
  dropDowns: [
    {
      model: 'modelOne',
      id: 'modelOne',
      data: testDropDownData,
      disabled: 'DISABLEON',
    },
  ],
};

const Radio = {
  type: 'RADIO',
  title: 'Radio Component',
  htmlFor: 'model',
  model: 'model',
  radios: [
    { value: 'start', label: 'Starts With' },
    { value: 'includes', label: 'Includes' },
    { value: 'matches', label: 'Matches' },
    { value: 'not', label: 'or Does Not Match' },
  ],
  textModelPreface: 'preface.',
  condition: 'condition'
};

const MultiMinMax = {
  type: 'MULTIMINMAX',
  title: 'MultiMinMax',
  data: [
    {
      model: 'min',
      title: 'Min',
      minThreshold: 0,
      maxThreshold: 10,
      validMessage: 'Invalid Min',
    },
    {
      model: 'max',
      title: 'Max',
      minThreshold: 0,
      maxThreshold: 10,
      validMessage: 'Invalid Max',
    }
  ],
};

const Text = {
  type: 'TEXT',
  title: 'Text',
  minThreshold: 0,
  maxThreshold: 10,
  model: 'text',
  validMessage: 'Invalid Text',
};

const TextNoVal = {
  type: 'TEXTNOVAL',
  title: 'TextNoVal',
  model: 'textNoVal',
};

const TextArea  = {
  type: 'TEXTAREA',
  title: 'TextArea',
  model: 'textArea',
  id: 'textArea',
  maxLength: 10,
};

const DateTime = {
  type: 'DATETIME',
  title: 'DateTime',
  model: 'dateTime',
  validMessage: 'Invalid Date or Time',
};
const RadioNoText = {
  type: 'RADIONOTEXT',
  title: 'RadioNoText',
  data: [
    {
      value: 'Y',
      checked: true,
      label: 'OK',
    },
    {
      value: 'null',
      checked: false,
      label: 'Not Ok',
    },
    {
      value: 'X',
      checked: false,
      label: 'Other',
    },
  ],
  model: 'radioNoText',
  id: 'radioNoText',
  htmlFor: 'radioNoText',
  noText: true,
};

const TextAreaNoVal = {
  type: 'TEXTAREANOVAL',
  title: 'TextAreaNoVal',
  model: 'textAreaNoVal',
};

export {
  MinMax,
  DropDown,
  DropDownOr,
  Radio,
  RadioNoText,
  MultiMinMax,
  Text,
  TextNoVal,
  TextArea,
  DateTime,
  TextAreaNoVal,
}