import {
  regions,
  validationConstants,
  countries,
  rnpMeasureType,
  states,
  indonesianProvince,
  japanesePrefecture,
  canadianProvince,
  chileanProvince,
} from '../../formConstants/constants';

const RunupLocInfo = [
  {
    type: 'DROPDOWN',
    title: 'Region',
    model: '.tsunami.rnpsearch.regionCode',
    data: regions,
    id: '.tsunami.rnpsearch.regionCode',
  },
  {
    type: 'DROPDOWN',
    title: 'Country',
    model: '.tsunami.rnpsearch.country',
    id: '.tsunami.rnpsearch.country',
    data: countries,
  },
  {
    type: 'DROPDOWNOR',
    title: 'Area',
    dropDowns: [
      {
        model: '.tsunami.rnpsearch.area',
        id: '.tsunami.rnpsearch.area',
        data: states,
        disabled: 'USA',
      },
      {
        model: '.tsunami.rnpsearch.area',
        id: '.tsunami.rnpsearch.area',
        data: canadianProvince,
        disabled: 'CANADA',
      },
      {
        model: '.tsunami.rnpsearch.area',
        id: '.tsunami.rnpsearch.area',
        data: chileanProvince,
        disabled: 'CHILE',
      },
      {
        model: '.tsunami.rnpsearch.area',
        id: '.tsunami.rnpsearch.area',
        data: indonesianProvince,
        disabled: 'INDONESIA',
      },
      {
        model: '.tsunami.rnpsearch.runupArea',
        id: '.tsunami.rnpsearch.runupArea',
        data: japanesePrefecture,
        disabled: 'JAPAN',
      },
    ],
  },
  {
    type: 'RADIO',
    title: 'Location',
    htmlFor: '.tsunami.rnpLocType',
    model: '.tsunami.rnpLocType',
    radios: [
      { value: 'locStart', label: 'Starts With' },
      { value: 'locEnd', label: 'Ends With' },
      { value: 'locIncludes', label: 'Includes' },
      { value: 'locMatch', label: 'Matches' },
      { value: 'locNot', label: 'or Does Not Match' },
    ],
    textModelPreface: '.tsunami.rnpsearch.',
    condition: 'rnpLocType',
  },
  {
    type: 'MINMAX',
    title: 'Distance',
    minThreshold: validationConstants.distanceRnpLoc.min,
    maxThreshold: validationConstants.distanceRnpLoc.max,
    min: {

      model: '.tsunami.rnpsearch.minDistFromSource',
      validMessage: 'Invalid Min Distance',
    },
    max: {
      model: '.tsunami.rnpsearch.maxDistFromSource',
      validMessage: 'Invalid Max Distance',
    },
  },
  {
    type: 'MINMAX',
    title: 'Travel Time',
    minThreshold: validationConstants.travelTime.min,
    maxThreshold: validationConstants.travelTime.max,
    min: {
      model: '.tsunami.rnpsearch.minTravHours',
      validMessage: 'Invalid Min Travel Time',
    },
    max: {
      model: '.tsunami.rnpsearch.maxTravHours',
      validMessage: 'Invalid Max Travel Time',
    },
  },
  {
    type: 'MULTIMINMAX',
    title: 'Range of Coordinates in decimal degrees of the Runup Location',
    data: [
      {
        model: '.tsunami.rnpsearch.maxLatitude',
        title: 'Northermost Latitude',
        minThreshold: validationConstants.latitude.min,
        maxThreshold: validationConstants.latitude.max,
        validMessage: 'Invalid Latitude',
      },
      {
        model: '.tsunami.rnpsearch.minLatitude',
        title: 'Southernmost Latitude',
        minThreshold: validationConstants.latitude.min,
        maxThreshold: validationConstants.latitude.max,
        validMessage: 'Invalid Latitude',
      },
      {
        model: '.tsunami.rnpsearch.minLongitude',
        title: 'Westernmost Longitude',
        minThreshold: validationConstants.longitude.min,
        maxThreshold: validationConstants.longitude.max,
        validMessage: 'Invalid Longitude',
      },
      {
        model: '.tsunami.rnpsearch.maxLongitude',
        title: 'Easternmost Longitude',
        minThreshold: validationConstants.longitude.min,
        maxThreshold: validationConstants.longitude.max,
        validMessage: 'Invalid Longitude',
      },
    ],
  },
  {
    type: 'RADIO',
    title: 'Comments',
    htmlFor: '.tsunami.rnpCommentType',
    model: '.tsunami.rnpCommentType',
    radios: [
      { value: 'commentsStart', label: 'Starts With' },
      { value: 'commentsEnd', label: 'Ends With' },
      { value: 'commentsInclude', label: 'Includes' },
      { value: 'commentsMatch', label: 'Matches' },
      { value: 'commentsNot', label: 'or Does Not Match' },
    ],
    textModelPreface: '.tsunami.rnpsearch.',
    condition: 'rnpCommentType',
  }
];


const RunupSourceInfo = [
  {
    type: 'MINMAX',
    title: 'Year',
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    min: {
      model: '.tsunami.rnpsearch.tsMinYear',
      validMessage: 'Invalid Year',
    },
    max: {
      model: '.tsunami.rnpsearch.tsMaxYear',
      validMessage: 'Invalid Year',
    },
  },
  {
    type: 'DROPDOWN',
    title: 'Region',
    model: '.tsunami.rnpsearch.tsRegionCode',
    id: '.tsunami.rnpsearch.tsRegionCode',
    data: regions,
  },
  {
    type: 'DROPDOWN',
    title: 'Country',
    model: '.tsunami.rnpsearch.tsCountry',
    id: '.tsunami.rnpsearch.tsCountry',
    data: countries,
  },
  {
    type: 'DROPDOWNOR',
    title: 'Area',
    dropDowns: [
      {
        model: '.tsunami.rnpsearch.tsArea',
        id: '.tsunami.rnpsearch.tsArea',
        data: states,
        disabled: 'USA',
      },
      {
        model: '.tsunami.rnpsearch.tsArea',
        id: '.tsunami.rnpsearch.tsArea',
        data: canadianProvince,
        disabled: 'CANADA',
      },
    ],
  },
  {
    type: "MINMAX",
    title: "Validity",
    minThreshold: validationConstants.validity.min,
    maxThreshold: validationConstants.validity.max,
    min: {
      model: '.tsunami.rnpsearch.tsMinValidity',
      validMessage: "Invalid Source Event Validity"
    },
    max: {
      model: '.tsunami.rnpsearch.tsMaxValidity',
      validMessage: "Invalid Source Event Validity"
    }
  },
  {
    type: "MINMAX",
    title: "Cause",
    minThreshold: validationConstants.cause.min,
    maxThreshold: validationConstants.cause.max,
    min: {
      model: '.tsunami.rnpsearch.tsMinCause',
      validMessage: "Invalid Source Event Cause"
    },
    max: {
      model: '.tsunami.rnpsearch.tsMaxCause',
      validMessage: "Invalid Source Event Cause"
    }
  },
  {
    type: "MINMAX",
    title: "Earthquake Magnitude",
    minThreshold: validationConstants.eqMag.min,
    maxThreshold: validationConstants.eqMag.max,
    min: {
      model: '.tsunami.rnpsearch.tsMinEqMag',
      validMessage: "Invalid Source Event Magnitude"
    },
    max: {
      model: '.tsunami.rnpsearch.tsMaxEqMag',
      validMessage: "Invalid Source Event Magnitude"
    }
  },
];


const RunupParamsEffects = [
  {
    type: 'DROPDOWN',
    title: 'Type of Measurement',
    model: '.tsunami.rnpsearch.typeMeasurementId',
    id: '.tsunami.rnpsearch.typeMeasurementId',
    data: rnpMeasureType,
  },
  {
    type: 'MINMAX',
    title: 'Water Height',
    minThreshold: validationConstants.waterHeight.min,
    maxThreshold: validationConstants.waterHeight.max,
    min: {
      model: '.tsunami.rnpsearch.minRunupHt',
      validMessage: 'Invalid Min Water Height',
    },
    max: {
      model: '.tsunami.rnpsearch.maxRunupHt',
      validMessage: 'Invalid Max Water Height',
    },
  },
  {
    type: 'MINMAX',
    title: 'Maximum Inundation Distance',
    minThreshold: validationConstants.horizInnundation.min,
    maxThreshold: validationConstants.horizInnundation.max,
    min: {
      model: '.tsunami.rnpsearch.minRunupHoriz',
      validMessage: 'Invalid Max Inundation',
    },
    max: {
      model: '.tsunami.rnpsearch.maxRunupHoriz',
      validMessage: 'Invalid Max Inundation',
    },
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
    model: '.tsunami.rnpsearch.doubtful',
    id: '.tsunami.rnpsearch.doubtful',
    htmlFor: '.tsunami.rnpsearch.doubtful',
    noText: true,
  },
  {
    type: 'MINMAX',
    title: 'Number of Deaths',
    minThreshold: validationConstants.numberOfDeaths.min,
    maxThreshold: validationConstants.numberOfDeaths.max,
    min: {
      model: '.tsunami.rnpsearch.minDeaths',
      validMessage: 'Invalid Deaths',
    },
    max: {
      model: '.tsunami.rnpsearch.maxDeaths',
      validMessage: 'Invalid Deaths',
    },
  },
  {
    type: 'MINMAX',
    title: 'Death Description',
    minThreshold: validationConstants.deathDescription.min,
    maxThreshold: validationConstants.deathDescription.max,
    min: {
      model: '.tsunami.rnpsearch.minDeathsAmountOrder',
      validMessage: 'Invalid Death Description',
    },
    max: {
      model: '.tsunami.rnpsearch.maxDeathsAmountOrder',
      validMessage: 'Invalid Death Description',
    },
  },
  {
    type: 'MINMAX',
    title: 'Number of Injuries',
    minThreshold: validationConstants.numberOfInjuries.min,
    maxThreshold: validationConstants.numberOfInjuries.max,
    min: {
      model: '.tsunami.rnpsearch.minInjuries',
      validMessage: 'Invalid Number of Injuries',
    },
    max: {
      model: '.tsunami.rnpsearch.maxInjuries',
      validMessage: 'Invalid Number of Injuries',
    },
  },
  {
    type: 'MINMAX',
    title: 'Injury Description',
    minThreshold: validationConstants.injuryDescription.min,
    maxThreshold: validationConstants.injuryDescription.max,
    min: {
      model: '.tsunami.rnpsearch.minInjuriesAmountOrder',
      validMessage: 'Invalid Injury Description',
    },
    max: {
      model: '.tsunami.rnpsearch.maxInjuriesAmountOrder',
      validMessage: 'Invalid Injury Description',
    },
  },
  {
    type: 'MINMAX',
    title: 'Damage in Millions of Dollars',
    minThreshold: validationConstants.damageInMillions.min,
    maxThreshold: validationConstants.damageInMillions.max,
    min: {
      model: '.tsunami.rnpsearch.minDamageMillionsDollarsTotal',
      validMessage: 'Invalid Damage',
    },
    max: {
      model: '.tsunami.rnpsearch.maxDamageMillionsDollarsTotal',
      validMessage: 'Invalid Damage',
    },
  },
  {
    type: 'MINMAX',
    title: 'Damage Description',
    minThreshold: validationConstants.damageDescription.min,
    maxThreshold: validationConstants.damageDescription.max,
    min: {
      model: '.tsunami.rnpsearch.minDamageAmountOrder',
      validMessage: 'Invalid Damage Description',
    },
    max: {
      model: '.tsunami.rnpsearch.maxDamageAmountOrder',
      validMessage: 'Invalid Damage Description',
    },
  },
  {
    type: 'MINMAX',
    title: 'Number of Houses Destroyed',
    minThreshold: validationConstants.numberOfHousesDestroyed.min,
    maxThreshold: validationConstants.numberOfHousesDestroyed.max,
    min: {
      model: '.tsunami.rnpsearch.minHousesDestroyed',
      validMessage: 'Invalid Number of Houses',
    },
    max: {
      model: '.tsunami.rnpsearch.maxHousesDestroyed',
      validMessage: 'Invalid Number of Houses',
    },
  },
  {
    type: 'MINMAX',
    title: 'Houses Destroyed Description',
    minThreshold: validationConstants.housesDestroyedDescription.min,
    maxThreshold: validationConstants.housesDestroyedDescription.max,
    min: {
      model: '.tsunami.rnpsearch.minHousesAmountOrder',
      validMessage: 'Invalid Houses Destroyed Description',
    },
    max: {
      model: '.tsunami.rnpsearch.maxHousesAmountOrder',
      validMessage: 'Invalid Houses Destroyed Description',
    },
  },
];


export {
  RunupLocInfo,
  RunupSourceInfo,
  RunupParamsEffects,
};
