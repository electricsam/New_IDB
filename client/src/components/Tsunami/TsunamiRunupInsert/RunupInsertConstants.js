import {
  validationConstants, regions, countries, canadianProvince, japanesePrefecture,
  states, indonesianProvince, rnpMeasureType, firstMotion,
} from '../../formConstants/constants';

const DateAndLocation = [
  {
    type: 'TEXT',
    title: 'Year',
    model: '.tsunami.rnpinsert.year',
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    validMessage: 'Invalid Year',
  },
  {
    type: 'TEXT',
    title: 'Month',
    model: '.tsunami.rnpinsert.month',
    minThreshold: validationConstants.month.min,
    maxThreshold: validationConstants.month.max,
    validMessage: 'Invalid Month',
  },
  {
    type: 'TEXT',
    title: 'Day',
    model: '.tsunami.rnpinsert.day',
    minThreshold: validationConstants.day.min,
    maxThreshold: validationConstants.day.max,
    validMessage: 'Invalid Day',
  },
  {
    type: 'TEXTNOVAL',
    title: 'Location',
    model: '.tsunami.rnpinsert.locationName',
  },
  {
    type: 'DROPDOWN',
    title: 'Region',
    model: '.tsunami.rnpinsert.regionCode',
    id: '.tsunami.rnpinsert.regionCode',
    data: regions,
  },
  {
    type: 'DROPDOWN',
    title: 'Country',
    model: '.tsunami.rnpinsert.country',
    id: '.tsunami.rnpinsert.country',
    data: countries,
  },
  {
    type: 'DROPDOWNOR',
    title: 'Area',
    dropDowns: [
      {
        model: '.tsunami.rnpinsert.area',
        id: '.tsunami.rnpinsert.area',
        data: states,
        disabled: 'USA',
      },
      {
        model: '.tsunami.rnpinsert.area',
        id: '.tsunami.rnpinsert.area',
        data: canadianProvince,
        disabled: 'CANADA',
      },
      {
        model: '.tsunami.rnpinsert.area',
        id: '.tsunami.rnpinsert.area',
        data: japanesePrefecture,
        disabled: 'JAPAN',
      },
      {
        model: '.tsunami.rnpinsert.area',
        id: '.tsunami.rnpinsert.area',
        data: indonesianProvince,
        disabled: 'INDONESIA',
      },
    ],
  },
  {
    type: 'TEXT',
    title: 'Latitude',
    model: '.tsunami.rnpinsert.latitude',
    minThreshold: validationConstants.latitude.min,
    maxThreshold: validationConstants.latitude.max,
    validMessage: 'Invalid Latitude',
  },
  {
    type: 'TEXT',
    title: 'Longitude',
    model: '.tsunami.rnpinsert.longitude',
    minThreshold: validationConstants.longitude.min,
    maxThreshold: validationConstants.longitude.max,
    validMessage: 'Invalid Longitude',
  },
];

const Measurements = [
  {
    type: 'DROPDOWN',
    title: 'Type of Measurment',
    model: '.tsunami.rnpinsert.typeMeasurementId',
    id: '.tsunami.rnpinsert.typeMeasurementId',
    data: rnpMeasureType,
  },
  {
    type: 'TEXT',
    title: 'Maximum Height',
    model: '.tsunami.rnpinsert.runupHt',
    minThreshold: validationConstants.waterHeight.min,
    maxThreshold: validationConstants.waterHeight.max,
    validMessage: 'Invalid Maximum Height',
  },
  {
    type: 'TEXT',
    title: 'Maximum Horizontal Inundation (meters)',
    model: '.tsunami.rnpinsert.runupHoriz',
    minThreshold: validationConstants.horizInnundation.min,
    maxThreshold: validationConstants.horizInnundation.max,
    validMessage: 'Invalid Maximum Horizontal Inundation',
  },
  {
    type: 'TEXT',
    title: 'Period',
    model: '.tsunami.rnpinsert.period',
    minThreshold: validationConstants.period.min,
    maxThreshold: validationConstants.period.max,
    validMessage: 'Invalid Period',
  },
  {
    type: 'DROPDOWN',
    title: 'First Motion',
    model: '.tsunami.rnpinsert.firstMotion',
    id: '.tsunami.rnpinsert.firstMotion',
    data: firstMotion,
  },
  {
    type: 'MULTIMINMAX',
    title: 'Arrival Time',
    data: [
      {
        model: '.tsunami.rnpinsert.arrDay',
        title: 'Day',
        minThreshold: validationConstants.day.min,
        maxThreshold: validationConstants.day.max,
        validMessage: 'Invalid Day',
      },
      {
        model: '.tsunami.rnpinsert.arrHour',
        title: 'Hour',
        minThreshold: validationConstants.hour.min,
        maxThreshold: validationConstants.hour.max,
        validMessage: 'Invalid Hour',
      },
      {
        model: '.tsunami.rnpinsert.arrMin',
        title: 'Minute',
        minThreshold: validationConstants.minute.min,
        maxThreshold: validationConstants.minute.max,
        validMessage: 'Invalid Minute',
      },
    ],
  },
  {
    type: 'MULTIMINMAX',
    title: 'Travel Time',
    data: [
      {
        model: '.tsunami.rnpinsert.travHours',
        title: 'Hour',
        minThreshold: validationConstants.hour.min,
        maxThreshold: validationConstants.hour.max,
        validMessage: 'Invalid Hour',
      },
      {
        model: '.tsunami.rnpinsert.travMins',
        title: 'Minute',
        minThreshold: validationConstants.minute.min,
        maxThreshold: validationConstants.minute.max,
        validMessage: 'Invalid Minute',
      },
    ],
  },
  {
    type: 'MULTIMINMAX',
    title: 'Max Arrival Time',
    data: [
      {
        model: '.tsunami.rnpinsert.maxWaveArrDay',
        title: 'Day',
        minThreshold: validationConstants.day.min,
        maxThreshold: validationConstants.day.max,
        validMessage: 'Invalid Day',
      },
      {
        model: '.tsunami.rnpinsert.maxWaveArrHour',
        title: 'Hour',
        minThreshold: validationConstants.hour.min,
        maxThreshold: validationConstants.hour.max,
        validMessage: 'Invalid Hour',
      },
      {
        model: '.tsunami.rnpinsert.maxWaveArrMin',
        title: 'Minute',
        minThreshold: validationConstants.minute.min,
        maxThreshold: validationConstants.minute.max,
        validMessage: 'Invalid Minute',
      },

    ],
  },
  {
    type: 'RADIONOTEXT',
    title: 'Doubtfulness',
    data: [
      {
        value: 'null',
        checked: true,
        label: 'OK',
      },
      {
        value: '?',
        checked: false,
        label: 'Doubtful',
      },
      {
        value: 'M',
        checked: false,
        label: 'Meteorological',
      },
    ],
    model: '.tsunami.rnpinsert.doubtful',
    id: '.tsunami.rnpinsert.doubtful',
    htmlFor: '.tsunami.rnpinsert.doubtful',
    noText: true,
  },
];


const Effects = [
  {
    type: 'MULTIMINMAX',
    title: 'Damage',
    data: [
      {
        model: '.tsunami.rnpinsert.damageMillionsDollars',
        title: 'Damage in Millions of Dollars',
        minThreshold: validationConstants.damageInMillions.min,
        maxThreshold: validationConstants.damageInMillions.max,
        validMessage: 'Invalid Damage',
      },
      {
        model: '.tsunami.rnpinsert.damageAmountOrder',
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
        model: '.tsunami.rnpinsert.housesDestroyed',
        title: 'Number of Houses Destroyed',
        minThreshold: validationConstants.numberOfHousesDestroyed.min,
        maxThreshold: validationConstants.numberOfHousesDestroyed.max,
        validMessage: 'Invalid Houses Destroyed',
      },
      {
        model: '.tsunami.rnpinsert.housesAmountOrder',
        title: 'Houses Destroyed Description',
        minThreshold: validationConstants.housesDestroyedDescription.min,
        maxThreshold: validationConstants.housesDestroyedDescription.max,
        validMessage: 'Invalid Houses Destroyed Description',
      },
    ],
  },
  {
    type: 'MULTIMINMAX',
    title: 'Deaths',
    data: [
      {
        model: '.tsunami.rnpinsert.deaths',
        title: 'Number of Deaths',
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: 'Invalid Number of Deaths',
      },
      {
        model: '.tsunami.rnpinsert.deathsAmountOrder',
        title: 'Death Description',
        minThreshold: validationConstants.deathDescription.min,
        maxThreshold: validationConstants.deathDescription.max,
        validMessage: 'Invalid Death Description',
      },
    ],
  },
  {
    type: 'MULTIMINMAX',
    title: 'Injuries',
    data: [
      {
        model: '.tsunami.rnpinsert.injuries',
        title: 'Number of Injuries',
        minThreshold: validationConstants.numberOfInjuries.min,
        maxThreshold: validationConstants.numberOfInjuries.max,
        validMessage: 'Invalid Number of Injuries',
      },
      {
        model: '.tsunami.rnpinsert.injuriesAmountOrder',
        title: 'Injury Description',
        minThreshold: validationConstants.injuryDescription.min,
        maxThreshold: validationConstants.injuryDescription.max,
        validMessage: 'Invalid Injury Description',
      },
    ],
  },
  {
    type: 'MULTIMINMAX',
    title: 'Missing',
    data: [
      {
        model: '.tsunami.rnpinsert.missing',
        title: 'Number of Missing',
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: 'Invalid Number of Missing',
      },
      {
        model: '.tsunami.rnpinsert.missingAmountOrder',
        title: 'Missing Description',
        minThreshold: validationConstants.deathDescription.min,
        maxThreshold: validationConstants.deathDescription.max,
        validMessage: 'Invalid Missing Description',
      },
    ],
  },
  {
    type: 'MULTIMINMAX',
    title: 'Houses Damaged',
    data: [
      {
        model: '.tsunami.rnpinsert.housesDamaged',
        title: 'Number of Houses Damaged',
        minThreshold: validationConstants.numberOfHousesDestroyed.min,
        maxThreshold: validationConstants.numberOfHousesDestroyed.max,
        validMessage: 'Invalid Number of Houses Damaged',
      },
      {
        model: '.tsunami.rnpinsert.housesDamagedAmountOrder',
        title: 'Houses Damaged Description',
        minThreshold: validationConstants.housesDestroyedDescription.min,
        maxThreshold: validationConstants.housesDestroyedDescription.max,
        validMessage: 'Invalid Houses Damaged Description',
      },
    ],
  },
  {
    type: 'TEXTAREA',
    title: 'Comments',
    model: '.tsunami.rnpinsert.comments',
    id: '.tsunami.rnpinsert.comments',
    maxLength: 3600,
  },
];

export {
  DateAndLocation,
  Measurements,
  Effects,
};
