import {
  countries,
  timeOfEruption,
  validationConstants,
  volcanoStatus,
  volcanoTypes,
} from '../../formConstants/constants';

const Location = [
  {
    type: 'DROPDOWN',
    title: 'Country',
    model: '.volcano.volcanoLocs[0].country',
    id: '.volcano.volcanoLocs[0].country',
    data: countries,
  },
  {
    type: 'TEXTNOVAL',
    title: 'Location',
    model: '.volcano.volcanoLocs[0].location',
  },
  {
    type: 'TEXT',
    title: 'Latitude',
    model: '.volcano.volcanoLocs[0].latitude',
    minThreshold: validationConstants.latitude.min,
    maxThreshold: validationConstants.latitude.max,
    validMessage: 'Invalid Latitude',
  },
  {
    type: 'TEXT',
    title: 'Longitude',
    model: '.volcano.volcanoLocs[0].longitude',
    minThreshold: validationConstants.longitude.min,
    maxThreshold: validationConstants.longitude.max,
    validMessage: 'Invalid Longitude',
  },
];

const Details = [
  {
    type: 'TEXTNOVAL',
    title: 'Name',
    model: '.volcano.volcanoLocs[0].name',
    id: '.volcano.volcanoLocs[0].name',
  },
  {
    type: 'DROPDOWN',
    title: 'Volcano Type',
    model: '.volcano.volcanoLocs[0].morphology',
    id: '.volcano.volcanoLocs[0].morphology',
    data: volcanoTypes,
  },
  {
    type: 'TEXTNOVAL',
    title: 'Elevation',
    model: '.volcano.volcanoLocs[0].elevation',
    id: '.volcano.volcanoLocs[0].elevation',
  },
  {
    type: 'DROPDOWN',
    title: 'Status',
    model: '.volcano.volcanoLocs[0].status',
    id: '.volcano.volcanoLocs[0].status',
    data: volcanoStatus,
  },
  {
    type: 'DROPDOWN',
    title: 'Time of Eruption',
    model: '.volcano.volcanoLocs[0].timeErupt',
    id: '.volcano.volcanoLocs[0].timeErupt',
    data: timeOfEruption,
  },
];

export {
  Location,
  Details,
};

