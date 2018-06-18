import { validationConstants,
  countries,
  regions,
  states,
  japanesePrefecture,
  indonesianProvince,
  canadianProvince } from '../../formConstants/constants';


const DateAndLocation = [
  {
    type: 'TEXT',
    title: 'Year',
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    model: '.tsunami.insert.year',
    validMessage: 'Invalid Year',
  },
  {
    type: 'TEXT',
    title: 'Month',
    model: '.tsunami.insert.month',
    minThreshold: validationConstants.month.min,
    maxThreshold: validationConstants.month.max,
    validMessage: 'Invalid Month',
  },
  {
    type: 'TEXT',
    title: 'Day',
    model: '.tsunami.insert.day',
    minThreshold: validationConstants.day.min,
    maxThreshold: validationConstants.day.max,
    validMessage: 'Invalid Day',
  },
  {
    type: 'TEXT',
    title: 'Hour',
    model: '.tsunami.insert.hour',
    minThreshold: validationConstants.hour.min,
    maxThreshold: validationConstants.hour.max,
    validMessage: 'Invalid Hour',
  },
  {
    type: 'TEXT',
    title: 'Minute',
    model: '.tsunami.insert.minute',
    minThreshold: validationConstants.minute.min,
    maxThreshold: validationConstants.minute.max,
    validMessage: 'Invalid Minute',
  },
  {
    type: 'TEXT',
    title: 'Second',
    model: '.tsunami.insert.second',
    minThreshold: validationConstants.second.min,
    maxThreshold: validationConstants.second.max,
    validMessage: 'Invalid Second',
  },
  {
    type: 'TEXT',
    title: 'Latitude',
    model: '.tsunami.insert.latitude',
    minThreshold: validationConstants.latitude.min,
    maxThreshold: validationConstants.latitude.max,
    validMessage: 'Invalid Latitude',
  },
  {
    type: 'TEXT',
    title: 'Longitude',
    model: '.tsunami.insert.longitude',
    minThreshold: validationConstants.longitude.min,
    maxThreshold: validationConstants.longitude.max,
    validMessage: 'Invalid Longitude',
  },
  {
    type: 'TEXTNOVAL',
    title: 'Location',
    model: '.tsunami.insert.locationName',
  },
  {
    type: 'DROPDOWN',
    title: 'Country',
    model: '.tsunami.insert.country',
    id: '.tsunami.insert.country',
    data: countries,
  },
  {
    type: 'DROPDOWN',
    title: 'Region',
    model: '.tsunami.insert.regionCode',
    id: '.tsunami.insert.regionCode',
    data: regions,
  },
  {
    type: 'DROPDOWNOR',
    title: 'Area',
    dropDowns: [
      {
        model: '.tsunami.insert.area',
        id: '.tsunami.insert.area',
        data: states,
        disabled: 'USA',
      },
      {
        model: '.tsunami.insert.area',
        id: '.tsunami.insert.area',
        data: canadianProvince,
        disabled: 'CANADA',
      },
      {
        model: '.tsunami.insert.area',
        id: '.tsunami.insert.area',
        data: japanesePrefecture,
        disabled: 'JAPAN',
      },
      {
        model: '.tsunami.insert.area',
        id: '.tsunami.insert.area',
        data: indonesianProvince,
        disabled: 'INDONESIA',
      },
    ],
  },
];

const Measurements = [
  {
    type: 'TEXT',
    title: 'Earthquake Depth',
    model: '.tsunami.insert.eqDepth',
    minThreshold: validationConstants.eqDepth.min,
    maxThreshold: validationConstants.eqDepth.max,
    validMessage: 'Invalid Earthquake Depth',
  },
  {
    type: 'MULTIMINMAX',
    title: 'Earthquake Magnitude',
    data: [
      {
        model: '.tsunami.insert.eqMagUnk',
        title: 'UNK',
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.tsunami.insert.eqMagMb',
        title: 'MB',
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.tsunami.insert.eqMagMs',
        title: 'MS',
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.tsunami.insert.eqMagMw',
        title: 'MW',
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.tsunami.insert.eqMagMfa',
        title: 'MFA',
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.tsunami.insert.eqMagMl',
        title: 'ML',
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
    ],
  },
  {
    type: 'TEXT',
    title: 'Cause Code',
    model: '.tsunami.insert.causeCode',
    minThreshold: validationConstants.cause.min,
    maxThreshold: validationConstants.cause.max,
    validMessage: 'Invalid Cause Code',
  },
  {
    type: 'TEXT',
    title: 'Validity',
    model: '.tsunami.insert.eventValidity',
    minThreshold: validationConstants.validity.min,
    maxThreshold: validationConstants.validity.max,
    validMessage: 'Invalid Validity',
  },
  {
    type: 'TEXT',
    title: 'Maximum Water Height (meters)',
    model: '.tsunami.insert.maxEventRunup',
    minThreshold: validationConstants.waterHeight.min,
    maxThreshold: validationConstants.waterHeight.max,
    validMessage: 'Invalid Maximum Water Height',
  },
  {
    type: 'MULTIMINMAX',
    title: 'Tsunami Magnitude',
    data: [
      {
        model: '.tsunami.insert.tsMtAbe',
        title: 'Abe',
        minThreshold: validationConstants.tsMag.min,
        maxThreshold: validationConstants.tsMag.max,
        validMessage: 'Invalid Tsunami Magnitude',
      },
      {
        model: '.tsunami.insert.tsMtII',
        title: 'Iida-Imamura',
        minThreshold: validationConstants.tsMag.min,
        maxThreshold: validationConstants.tsMag.max,
        validMessage: 'Invalid Tsunami Magnitude',
      },
    ],
  },
  {
    type: 'TEXT',
    title: 'Tsunami Intensity: Soloviev',
    model: '.tsunami.insert.tsIntensity',
    minThreshold: validationConstants.tsMag.min,
    maxThreshold: validationConstants.tsMag.max,
    validMessage: 'Invalid Intensity',
  },
  {
    type: 'TEXT',
    title: 'Tsunami Warning Status',
    model: '.tsunami.insert.warningStatusId',
    minThreshold: validationConstants.warningStatus.min,
    maxThreshold: validationConstants.warningStatus.max,
    validMessage: 'Invalid Warning Status',
  },
];

const Effects = [
  {
    type: 'MULTIMINMAX',
    title: 'Damage',
    data: [
      {
        model: '.tsunami.insert.damageMillionsDollars',
        title: 'Damage in Millions of Dollars',
        minThreshold: validationConstants.damageInMillions.min,
        maxThreshold: validationConstants.damageInMillions.max,
        validMessage: 'Invalid Damage',
      },
      {
        model: '.tsunami.insert.damageAmountOrder',
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
        model: '.tsunami.insert.housesDestroyed',
        title: 'Number of Houses Destroyed',
        minThreshold: validationConstants.numberOfHousesDestroyed.min,
        maxThreshold: validationConstants.numberOfHousesDestroyed.max,
        validMessage: 'Invalid Houses Destroyed',
      },
      {
        model: '.tsunami.insert.housesAmountOrder',
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
        model: '.tsunami.insert.deaths',
        title: 'Number of Deaths',
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: 'Invalid Number of Deaths',
      },
      {
        model: '.tsunami.insert.deathsAmountOrder',
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
        model: '.tsunami.insert.injuries',
        title: 'Number of Injuries',
        minThreshold: validationConstants.numberOfInjuries.min,
        maxThreshold: validationConstants.numberOfInjuries.max,
        validMessage: 'Invalid Number of Injuries',
      },
      {
        model: '.tsunami.insert.injuriesAmountOrder',
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
        model: '.tsunami.insert.missing',
        title: 'Number of Missing',
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: 'Invalid Number of Missing',
      },
      {
        model: '.tsunami.insert.missingAmountOrder',
        title: 'Missing Description',
        minThreshold: validationConstants.deathDescription.min,
        maxThreshold: validationConstants.deathDescription.max,
        validMessage: 'Invalid Missing Description',
      },
    ],
  },
];

const TotalEffects = [
  {
    type: 'MULTIMINMAX',
    title: 'Total Damage',
    data: [
      {
        model: '.tsunami.insert.damageMillionsDollarsTotal',
        title: 'Total Damage in Millions of Dollars',
        minThreshold: validationConstants.damageInMillions.min,
        maxThreshold: validationConstants.damageInMillions.max,
        validMessage: 'Invalid Damage',
      },
      {
        model: '.tsunami.insert.damageAmountOrderTotal',
        title: 'Total Damage Description',
        minThreshold: validationConstants.damageDescription.min,
        maxThreshold: validationConstants.damageDescription.max,
        validMessage: 'Invalid Damage Description',
      },
    ],
  },
  {
    type: 'MULTIMINMAX',
    title: 'Total Houses Destroyed',
    data: [
      {
        model: '.tsunami.insert.housesDestroyedTotal',
        title: 'Total Number of Houses Destroyed',
        minThreshold: validationConstants.numberOfHousesDestroyed.min,
        maxThreshold: validationConstants.numberOfHousesDestroyed.max,
        validMessage: 'Invalid Houses Destroyed',
      },
      {
        model: '.tsunami.insert.housesAmountOrderTotal',
        title: 'Total Houses Destroyed Description',
        minThreshold: validationConstants.housesDestroyedDescription.min,
        maxThreshold: validationConstants.housesDestroyedDescription.max,
        validMessage: 'Invalid Houses Destroyed Description',
      },
    ],
  },
  {
    type: 'MULTIMINMAX',
    title: 'Total Deaths',
    data: [
      {
        model: '.tsunami.insert.deathsTotal',
        title: 'Total Number of Deaths',
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: 'Invalid Number of Deaths',
      },
      {
        model: '.tsunami.insert.deathsAmountOrderTotal',
        title: 'Total Death Description',
        minThreshold: validationConstants.deathDescription.min,
        maxThreshold: validationConstants.deathDescription.max,
        validMessage: 'Invalid Death Description',
      },
    ],
  },
  {
    type: 'MULTIMINMAX',
    title: 'Total Injuries',
    data: [
      {
        model: '.tsunami.insert.injuriesTotal',
        title: 'Total Number of Injuries',
        minThreshold: validationConstants.numberOfInjuries.min,
        maxThreshold: validationConstants.numberOfInjuries.max,
        validMessage: 'Invalid Number of Injuries',
      },
      {
        model: '.tsunami.insert.injuriesAmountOrderTotal',
        title: 'Total Injury Description',
        minThreshold: validationConstants.injuryDescription.min,
        maxThreshold: validationConstants.injuryDescription.max,
        validMessage: 'Invalid Injury Description',
      },
    ],
  },
  {
    type: 'MULTIMINMAX',
    title: 'Total Missing',
    data: [
      {
        model: '.tsunami.insert.missingTotal',
        title: 'Total Number of Missing',
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: 'Invalid Number of Missing',
      },
      {
        model: '.tsunami.insert.missingAmountOrderTotal',
        title: 'Total Missing Description',
        minThreshold: validationConstants.deathDescription.min,
        maxThreshold: validationConstants.deathDescription.max,
        validMessage: 'Invalid Missing Description',
      },
    ],
  },
  {
    type: 'TEXTAREA',
    model: '.tsunami.insert.comments',
    id: '.tsunami.insert.comments',
    title: 'Comments',
    maxLength: 3600,
  },
];

export {
  DateAndLocation,
  Measurements,
  Effects,
  TotalEffects,
};
