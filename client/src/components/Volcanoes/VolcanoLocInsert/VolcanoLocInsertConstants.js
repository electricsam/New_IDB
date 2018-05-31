import { countries, timeOfEruption, validationConstants, volcanoStatus, volcanoTypes } from '../../formConstants/constants';

const Location = [
  {
    type: 'DROPDOWN',
    title: 'Country',
    model: '.volcano.locInsert.country',
    id: '.volcano.locInsert.country',
    data: countries,
  },
  {
    type: 'TEXTNOVAL',
    title: 'Location',
    model: '.volcano.locInsert.location',
  },
  {
    type: 'TEXT',
    title: 'Latitude',
    model: '.volcano.locInsert.latitude',
    minThreshold: validationConstants.latitude.min,
    maxThreshold: validationConstants.latitude.max,
    validMessage: 'Invalid Latitude',
  },
  {
    type: 'TEXT',
    title: 'Longitude',
    model: '.volcano.locInsert.longitude',
    minThreshold: validationConstants.longitude.min,
    maxThreshold: validationConstants.longitude.max,
    validMessage: 'Invalid Longitude',
  },
];

const Details = [
  {
    type: 'TEXTNOVAL',
    title: 'Name',
    model: '.volcano.locInsert.name',
    id: '.volcano.locInsert.name',
  },
  {
    type: 'DROPDOWN',
    title: 'Volcano Type',
    model: '.volcano.locInsert.morphology',
    id: '.volcano.locInsert.morphology',
    data: volcanoTypes,
  },
  {
    type: 'TEXTNOVAL',
    title: 'Elevation',
    model: '.volcano.locInsert.elevation',
    id: '.volcano.locInsert.elevation',
  },
  {
    type: 'DROPDOWN',
    title: 'Status',
    model: '.volcano.locInsert.status',
    id: '.volcano.locInsert.status',
    data: volcanoStatus,
  },
  {
    type: 'DROPDOWN',
    title: 'Time of Eruption',
    model: '.volcano.locInsert.timeErupt',
    id: '.volcano.locInsert.timeErupt',
    data: timeOfEruption,
  },
];

export {
  Location,
  Details,
};
