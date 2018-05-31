import { validationConstants, volcanoAgent } from '../../formConstants/constants';

const Dates = [
  {
    type: 'TEXT',
    title: 'Year',
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    model: '.volcano.volcanoEvents[0].year',
    validMessage: 'Invalid Year',
  },
  {
    type: 'TEXT',
    title: 'Month',
    minThreshold: validationConstants.month.min,
    maxThreshold: validationConstants.month.max,
    model: '.volcano.volcanoEvents[0].mo',
    validMessage: 'Invalid Month',
  },
  {
    type: 'TEXT',
    title: 'Day',
    minThreshold: validationConstants.day.min,
    maxThreshold: validationConstants.day.max,
    model: '.volcano.volcanoEvents[0].day',
    validMessage: 'Invalid Day',
  },

  {
    type: 'DATETIME',
    title: 'Event Date',
    model: '.volcano.volcanoEvents[0].eventDate',
    validMessage: 'Invalid Date or Time',
  },
  {
    type: 'DATETIME',
    title: 'Start Date',
    model: '.volcano.volcanoEvents[0].startDate',
    validMessage: 'Invalid Start Date',
  },
  {
    type: 'DATETIME',
    title: 'End Date',
    model: '.volcano.volcanoEvents[0].endDate',
    validMessage: 'Invalid End Date',
  },
];


const Measurements = [
  {
    type: 'TEXT',
    title: 'VEI',
    minThreshold: validationConstants.vei.min,
    maxThreshold: validationConstants.vei.max,
    model: '.volcano.volcanoEvents[0].vei',
    validMessage: 'Invalid VEI',
  },
  {
    type: 'DROPDOWN',
    title: 'Agent',
    model: '.volcano.volcanoEvents[0].agent',
    data: volcanoAgent,
  },
];


const Effects = [
  {
    type: 'MULTIMINMAX',
    title: 'Deaths',
    data: [
      {
        model: '.volcano.volcanoEvents[0].deaths',
        title: 'Number of Deaths',
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: 'Invalid Number of Deaths',
      },
      {
        model: '.volcano.volcanoEvents[0].deathsAmountOrder',
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
        model: '.volcano.volcanoEvents[0].missing',
        title: 'Number of Missing',
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: 'Invalid Number of Missing',
      },
      {
        model: '.volcano.volcanoEvents[0].missingAmountOrder',
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
        model: '.volcano.volcanoEvents[0].injuries',
        title: 'Number of Injuries',
        minThreshold: validationConstants.numberOfInjuries.min,
        maxThreshold: validationConstants.numberOfInjuries.max,
        validMessage: 'Invalid Number of Injuries',
      },
      {
        model: '.volcano.volcanoEvents[0].injuriesAmountOrder',
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
        model: '.volcano.volcanoEvents[0].damageMillionsDollars',
        title: 'Damage in Millions of Dollars',
        minThreshold: validationConstants.damageInMillions.min,
        maxThreshold: validationConstants.damageInMillions.max,
        validMessage: 'Invalid Damage',
      },
      {
        model: '.volcano.volcanoEvents[0].damageAmountOrder',
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
        model: '.volcano.volcanoEvents[0].housesDestroyed',
        title: 'Number of Houses Destroyed',
        minThreshold: validationConstants.numberOfHousesDestroyed.min,
        maxThreshold: validationConstants.numberOfHousesDestroyed.max,
        validMessage: 'Invalid Houses Destroyed',
      },
      {
        model: '.volcano.volcanoEvents[0].housesAmountOrder',
        title: 'Houses Destroyed Description',
        minThreshold: validationConstants.housesDestroyedDescription.min,
        maxThreshold: validationConstants.housesDestroyedDescription.max,
        validMessage: 'Invalid Houses Destroyed Description',
      },
    ],
  },
  {
    type: 'TEXTAREA',
    model: '.volcano.volcanoEvents[0].comments',
    id: '.volcano.volcanoEvents[0].comments',
    title: 'Comments',
  },
];

export {
  Dates,
  Measurements,
  Effects,
};
