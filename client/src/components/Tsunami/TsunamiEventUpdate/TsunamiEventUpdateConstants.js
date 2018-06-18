import {
  canadianProvince, countries, indonesianProvince, japanesePrefecture, regions, states,
  validationConstants,
} from '../../formConstants/constants';

const DateAndLocation = [
  {
    type: 'TEXT',
    title: 'Year',
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    model: '.tsunami.tsEvent[0].year',
    validMessage: 'Invalid Year',
  },
  {
    type: 'TEXT',
    title: 'Month',
    model: '.tsunami.tsEvent[0].month',
    minThreshold: validationConstants.month.min,
    maxThreshold: validationConstants.month.max,
    validMessage: 'Invalid Month',
  },
  {
    type: 'TEXT',
    title: 'Day',
    model: '.tsunami.tsEvent[0].day',
    minThreshold: validationConstants.day.min,
    maxThreshold: validationConstants.day.max,
    validMessage: 'Invalid Day',
  },
  {
    type: 'TEXT',
    title: 'Hour',
    model: '.tsunami.tsEvent[0].hour',
    minThreshold: validationConstants.hour.min,
    maxThreshold: validationConstants.hour.max,
    validMessage: 'Invalid Hour',
  },
  {
    type: 'TEXT',
    title: 'Minute',
    model: '.tsunami.tsEvent[0].minute',
    minThreshold: validationConstants.minute.min,
    maxThreshold: validationConstants.minute.max,
    validMessage: 'Invalid Minute',
  },
  {
    type: 'TEXT',
    title: 'Second',
    model: '.tsunami.tsEvent[0].second',
    minThreshold: validationConstants.second.min,
    maxThreshold: validationConstants.second.max,
    validMessage: 'Invalid Second',
  },
  {
    type: 'TEXT',
    title: 'Latitude',
    model: '.tsunami.tsEvent[0].latitude',
    minThreshold: validationConstants.latitude.min,
    maxThreshold: validationConstants.latitude.max,
    validMessage: 'Invalid Latitude',
  },
  {
    type: 'TEXT',
    title: 'Longitude',
    model: '.tsunami.tsEvent[0].longitude',
    minThreshold: validationConstants.longitude.min,
    maxThreshold: validationConstants.longitude.max,
    validMessage: 'Invalid Longitude',
  },
  {
    type: 'TEXTNOVAL',
    title: 'Location',
    model: '.tsunami.tsEvent[0].locationName',
  },
  {
    type: 'DROPDOWN',
    title: 'Region',
    model: '.tsunami.tsEvent[0].regionCode',
    id: '.tsunami.tsEvent[0].regionCode',
    data: regions,
  },
  {
    type: 'DROPDOWN',
    title: 'Country',
    model: '.tsunami.tsEvent[0].country',
    id: '.tsunami.tsEvent[0].country',
    data: countries,
  },
  {
    type: 'DROPDOWNOR',
    title: 'Area',
    dropDowns: [
      {
        model: '.tsunami.tsEvent[0].area',
        id: '.tsunami.tsEvent[0].area',
        data: states,
        disabled: 'USA',
      },
      {
        model: '.tsunami.tsEvent[0].area',
        id: '.tsunami.tsEvent[0].area',
        data: canadianProvince,
        disabled: 'CANADA',
      },
      {
        model: '.tsunami.tsEvent[0].area',
        id: '.tsunami.tsEvent[0].area',
        data: japanesePrefecture,
        disabled: 'JAPAN',
      },
      {
        model: '.tsunami.tsEvent[0].area',
        id: '.tsunami.tsEvent[0].area',
        data: indonesianProvince,
        disabled: 'INDONESIA',
      },
    ],
  },
];

const Measurement = [
  {
    type: 'TEXT',
    title: 'Earthquake Depth',
    model: '.tsunami.tsEvent[0].eqDepth',
    minThreshold: validationConstants.eqDepth.min,
    maxThreshold: validationConstants.eqDepth.max,
    validMessage: 'Invalid Earthquake Depth',
  },
  {
    type: 'MULTIMINMAX',
    title: 'Earthquake Magnitude',
    data: [
      {
        model: '.tsunami.tsEvent[0].eqMagUnk',
        title: 'UNK',
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.tsunami.tsEvent[0].eqMagMb',
        title: 'MB',
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.tsunami.tsEvent[0].eqMagMs',
        title: 'MS',
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.tsunami.tsEvent[0].eqMagMw',
        title: 'MW',
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.tsunami.tsEvent[0].eqMagMfa',
        title: 'MFA',
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.tsunami.tsEvent[0].eqMagMl',
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
    model: '.tsunami.tsEvent[0].causeCode',
    minThreshold: validationConstants.cause.min,
    maxThreshold: validationConstants.cause.max,
    validMessage: 'Invalid Cause Code',
  },
  {
    type: 'TEXT',
    title: 'Validity',
    model: '.tsunami.tsEvent[0].eventValidity',
    minThreshold: validationConstants.validity.min,
    maxThreshold: validationConstants.validity.max,
    validMessage: 'Invalid Validity',
  },
  {
    type: 'TEXT',
    title: 'Maximum Water Height (meters)',
    model: '.tsunami.tsEvent[0].maxEventRunup',
    minThreshold: validationConstants.waterHeight.min,
    maxThreshold: validationConstants.waterHeight.max,
    validMessage: 'Invalid Maximum Water Height',
  },
  {
    type: 'MULTIMINMAX',
    title: 'Tsunami Magnitude',
    data: [
      {
        model: '.tsunami.tsEvent[0].tsMtAbe',
        title: 'Abe',
        minThreshold: validationConstants.tsMag.min,
        maxThreshold: validationConstants.tsMag.max,
        validMessage: 'Invalid Tsunami Magnitude',
      },
      {
        model: '.tsunami.tsEvent[0].tsMtII',
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
    model: '.tsunami.tsEvent[0].tsIntensity',
    minThreshold: validationConstants.tsMag.min,
    maxThreshold: validationConstants.tsMag.max,
    validMessage: 'Invalid Intensity',
  },
  {
    type: 'TEXT',
    title: 'Tsunami Warning Status',
    model: '.tsunami.tsEvent[0].warningStatusId',
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
        model: '.tsunami.tsEvent[0].damageMillionsDollars',
        title: 'Damage in Millions of Dollars',
        minThreshold: validationConstants.damageInMillions.min,
        maxThreshold: validationConstants.damageInMillions.max,
        validMessage: 'Invalid Damage',
      },
      {
        model: '.tsunami.tsEvent[0].damageAmountOrder',
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
        model: '.tsunami.tsEvent[0].housesDestroyed',
        title: 'Number of Houses Destroyed',
        minThreshold: validationConstants.numberOfHousesDestroyed.min,
        maxThreshold: validationConstants.numberOfHousesDestroyed.max,
        validMessage: 'Invalid Houses Destroyed',
      },
      {
        model: '.tsunami.tsEvent[0].housesAmountOrder',
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
        model: '.tsunami.tsEvent[0].deaths',
        title: 'Number of Deaths',
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: 'Invalid Number of Deaths',
      },
      {
        model: '.tsunami.tsEvent[0].deathsAmountOrder',
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
        model: '.tsunami.tsEvent[0].injuries',
        title: 'Number of Injuries',
        minThreshold: validationConstants.numberOfInjuries.min,
        maxThreshold: validationConstants.numberOfInjuries.max,
        validMessage: 'Invalid Number of Injuries',
      },
      {
        model: '.tsunami.tsEvent[0].injuriesAmountOrder',
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
        model: '.tsunami.tsEvent[0].missing',
        title: 'Number of Missing',
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: 'Invalid Number of Missing',
      },
      {
        model: '.tsunami.tsEvent[0].missingAmountOrder',
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
        model: '.tsunami.tsEvent[0].damageMillionsDollarsTotal',
        title: 'Total Damage in Millions of Dollars',
        minThreshold: validationConstants.damageInMillions.min,
        maxThreshold: validationConstants.damageInMillions.max,
        validMessage: 'Invalid Damage',
      },
      {
        model: '.tsunami.tsEvent[0].damageAmountOrderTotal',
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
        model: '.tsunami.tsEvent[0].housesDestroyedTotal',
        title: 'Total Number of Houses Destroyed',
        minThreshold: validationConstants.numberOfHousesDestroyed.min,
        maxThreshold: validationConstants.numberOfHousesDestroyed.max,
        validMessage: 'Invalid Houses Destroyed',
      },
      {
        model: '.tsunami.tsEvent[0].housesAmountOrderTotal',
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
        model: '.tsunami.tsEvent[0].deathsTotal',
        title: 'Total Number of Deaths',
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: 'Invalid Number of Deaths',
      },
      {
        model: '.tsunami.tsEvent[0].deathsAmountOrderTotal',
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
        model: '.tsunami.tsEvent[0].injuriesTotal',
        title: 'Total Number of Injuries',
        minThreshold: validationConstants.numberOfInjuries.min,
        maxThreshold: validationConstants.numberOfInjuries.max,
        validMessage: 'Invalid Number of Injuries',
      },
      {
        model: '.tsunami.tsEvent[0].injuriesAmountOrderTotal',
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
        model: '.tsunami.tsEvent[0].missingTotal',
        title: 'Total Number of Missing',
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: 'Invalid Number of Missing',
      },
      {
        model: '.tsunami.tsEvent[0].missingAmountOrderTotal',
        title: 'Total Missing Description',
        minThreshold: validationConstants.deathDescription.min,
        maxThreshold: validationConstants.deathDescription.max,
        validMessage: 'Invalid Missing Description',
      },
    ],
  },
  {
    type: 'TEXTAREA',
    model: '.tsunami.tsEvent[0].comments',
    id: '.tsunami.tsEvent[0].comments',
    title: 'Comments',
    maxLength: 3600,
  },
];

export {
  DateAndLocation,
  Measurement,
  Effects,
  TotalEffects,
};

