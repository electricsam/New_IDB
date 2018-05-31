import {
  countries,
  regions,
  validationConstants,
  volcanoStatus,
  volcanoTypes,
  timeOfEruption,
} from '../../formConstants/constants';

const Parameters = [
  {
    type: 'RADIO',
    title: 'Volcano Name',
    htmlFor: '.volcano.locName',
    model: '.volcano.locName',
    radios: [
      { value: 'nameStart', label: 'Starts With' },
      { value: 'nameIncludes', label: 'Includes' },
      { value: 'nameMatch', label: 'Matches' },
      { value: 'nameNot', label: 'or Does Not Match' },
    ],
    textModelPreface: '.volcano.locSearch.',
    condition: 'locName',
  },
  {
    type: 'DROPDOWN',
    title: 'Country',
    model: '.volcano.locSearch.country',
    id: '.volcano.locSearch.country',
    data: countries,
  },
  {
    type: 'DROPDOWN',
    title: 'Region',
    model: '.volcano.locSearch.region',
    id: '.volcano.locSearch.region',
    data: regions,
  },
  {
    type: 'MULTIMINMAX',
    title: 'Range of Coordinates in Decimal Degrees',
    data: [
      {
        model: '.volcano.locSearch.maxLatitude',
        title: 'Northernmost Latitude',
        minThreshold: validationConstants.latitude.min,
        maxThreshold: validationConstants.latitude.max,
        validMessage: 'Invalid Latitude',
      },
      {
        model: '.volcano.locSearch.minLatitude',
        title: 'Southernmost Latitude',
        minThreshold: validationConstants.latitude.min,
        maxThreshold: validationConstants.latitude.max,
        validMessage: 'Invalid Latitude',
      },
      {
        model: '.volcano.locSearch.minLongitude',
        title: 'Westernmost Longitude',
        minThreshold: validationConstants.longitude.min,
        maxThreshold: validationConstants.longitude.max,
        validMessage: 'Invalid Longitude',
      },
      {
        model: '.volcano.locSearch.maxLongitude',
        title: 'Easternmost Longitude',
        minThreshold: validationConstants.longitude.min,
        maxThreshold: validationConstants.longitude.max,
        validMessage: 'Invalid Longitude',
      },
    ],
  },
  {
    type: 'DROPDOWN',
    title: 'Volcano Type',
    model: '.volcano.locSearch.morphology',
    id: '.volcano.locSearch.morphology',
    data: volcanoTypes,
  },
  {
    type: 'DROPDOWN',
    title: 'Volcano Status',
    model: '.volcano.locSearch.status',
    id: '.volcano.locSearch.status',
    data: volcanoStatus,
  },
  {
    type: 'DROPDOWN',
    title: 'Time of Eruption',
    model: '.volcano.locSearch.timeErupt',
    id: '.volcano.locSearch.timeErupt',
    data: timeOfEruption,
  },
];

export {
  Parameters,
};
