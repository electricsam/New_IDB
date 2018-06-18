import { validationConstants, volcanoAgent } from '../../formConstants/constants';

const Dates = [
  {
    type: 'TEXT',
    title: 'Year',
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    model: '.volcano.insert.year',
    validMessage: 'Invalid Year',
  },
  {
    type: 'TEXT',
    title: 'Month',
    minThreshold: validationConstants.month.min,
    maxThreshold: validationConstants.month.max,
    model: '.volcano.insert.mo',
    validMessage: 'Invalid Month',
  },
  {
    type: 'TEXT',
    title: 'Day',
    minThreshold: validationConstants.day.min,
    maxThreshold: validationConstants.day.max,
    model: '.volcano.insert.day',
    validMessage: 'Invalid Day',
  },

  {
    type: 'DATETIME',
    title: 'Event Date',
    model: '.volcano.insert.eventDate',
    validMessage: 'Invalid Date or Time',
  },
  {
    type: 'DATETIME',
    title: 'Start Date',
    model: '.volcano.insert.startDate',
    validMessage: 'Invalid Start Date',
  },
  {
    type: 'DATETIME',
    title: 'End Date',
    model: '.volcano.insert.endDate',
    validMessage: 'Invalid End Date',
  },
];

const Measurements = [
  {
    type: 'TEXT',
    title: 'VEI',
    minThreshold: validationConstants.vei.min,
    maxThreshold: validationConstants.vei.max,
    model: '.volcano.insert.vei',
    validMessage: 'Invalid VEI',
  },
  {
    type: 'DROPDOWN',
    title: 'Agent',
    model: '.volcano.insert.agent',
    data: volcanoAgent,
  },
];


const Effects = [
  {
    type: 'MULTIMINMAX',
    title: 'Deaths',
    data: [
      {
        model: '.volcano.insert.deaths',
        title: 'Number of Deaths',
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: 'Invalid Number of Deaths',
      },
      {
        model: '.volcano.insert.deathsAmountOrder',
        title: 'Death Description',
        minThreshold: validationConstants.deathDescription.min,
        maxThreshold: validationConstants.deathDescription.max,
        validMessage: 'Invalid Death Description',
      },
    ],
  },
  {
    type: 'MULTIMINMAX',
    title: 'Missing',
    data: [
      {
        model: '.volcano.insert.missing',
        title: 'Number of Missing',
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: 'Invalid Number of Missing',
      },
      {
        model: '.volcano.insert.missingAmountOrder',
        title: 'Missing Description',
        minThreshold: validationConstants.deathDescription.min,
        maxThreshold: validationConstants.deathDescription.max,
        validMessage: 'Invalid Missing Description',
      },
    ],
  },
  {
    type: 'MULTIMINMAX',
    title: 'Injuries',
    data: [
      {
        model: '.volcano.insert.injuries',
        title: 'Number of Injuries',
        minThreshold: validationConstants.numberOfInjuries.min,
        maxThreshold: validationConstants.numberOfInjuries.max,
        validMessage: 'Invalid Number of Injuries',
      },
      {
        model: '.volcano.insert.injuriesAmountOrder',
        title: 'Injury Description',
        minThreshold: validationConstants.injuryDescription.min,
        maxThreshold: validationConstants.injuryDescription.max,
        validMessage: 'Invalid Injury Description',
      },
    ],
  },
  {
    type: 'MULTIMINMAX',
    title: 'Damage',
    data: [
      {
        model: '.volcano.insert.damageMillionsDollars',
        title: 'Damage in Millions of Dollars',
        minThreshold: validationConstants.damageInMillions.min,
        maxThreshold: validationConstants.damageInMillions.max,
        validMessage: 'Invalid Damage',
      },
      {
        model: '.volcano.insert.damageAmountOrder',
        title: 'Damage Description',
        minThreshold: validationConstants.damageDescription.min,
        maxThreshold: validationConstants.damageDescription.max,
        validMessage: 'Invalid Damage Description',
      },
    ],
  },
  {
    type: 'MULTIMINMAX',
    title: 'Houses Destroyed',
    data: [
      {
        model: '.volcano.insert.housesDestroyed',
        title: 'Number of Houses Destroyed',
        minThreshold: validationConstants.numberOfHousesDestroyed.min,
        maxThreshold: validationConstants.numberOfHousesDestroyed.max,
        validMessage: 'Invalid Houses Destroyed',
      },
      {
        model: '.volcano.insert.housesAmountOrder',
        title: 'Houses Destroyed Description',
        minThreshold: validationConstants.housesDestroyedDescription.min,
        maxThreshold: validationConstants.housesDestroyedDescription.max,
        validMessage: 'Invalid Houses Destroyed Description',
      },
    ],
  },
  {
    type: 'TEXTAREA',
    model: '.volcano.insert.comments',
    id: '.volcano.insert.comments',
    title: 'Comments',
    maxLength: 3600,
  },
];


export {
  Dates,
  Measurements,
  Effects,

};
