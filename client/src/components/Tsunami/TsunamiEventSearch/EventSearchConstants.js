import {
  regions, validationConstants, countries, rnpMeasureType, states,
  canadianProvince, indonesianProvince, japanesePrefecture,
} from '../../formConstants/constants';

import TsunamiSearchContainer from './TsunamiSearchContainer.jsx';

console.log(TsunamiSearchContainer);

const TsunamiSourceParameters = [
  {
    type: 'MINMAX',
    title: 'Year',
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    min: {
      model: '.tsunami.search.minYear',
      validMessage: 'Invalid Year',
    },
    max: {
      model: '.tsunami.search.maxYear',
      validMessage: 'Invalid Year',
    },
  },
  {
    type: 'DROPDOWN',
    title: 'Region',
    model: '.tsunami.search.regionCode',
    data: regions,
    id: '.tsunami.search.regionCode',
  },
  {
    type: 'DROPDOWN',
    title: 'Country',
    model: '.tsunami.search.country',
    data: countries,
    id: '.tsunami.search.country',
  },
  {
    type: 'DROPDOWNOR',
    title: 'Area',
    dropDowns: [
      {
        model: '.tsunami.search.area',
        data: states,
        id: '.tsunami.search.area',
        disabled: 'USA',
      },
      {
        model: '.tsunami.search.area',
        data: canadianProvince,
        id: '.tsunami.search.area',
        disabled: 'CANADA',
      },
    ],
  },

  {
    type: 'MULTIMINMAX',
    title: 'Lat / Long',
    data: [
      {
        model: '.tsunami.search.maxLatitude',
        title: 'Northernmost Latitude',
        minThreshold: validationConstants.latitude.min,
        maxThreshold: validationConstants.latitude.max,
        validMessage: 'Invalid Latitude',
      },
      {
        model: '.tsunami.search.minLatitude',
        title: 'Southernmost Latitude',
        minThreshold: validationConstants.latitude.min,
        maxThreshold: validationConstants.latitude.max,
        validMessage: 'Invalid Latitude',
      },
      {
        model: '.tsunami.search.minLongitude',
        title: 'Westernmost Longitude',
        minThreshold: validationConstants.longitude.min,
        maxThreshold: validationConstants.longitude.max,
        validMessage: 'Invalid Longitude',
      },
      {
        model: '.tsunami.search.maxLongitude',
        title: 'Easternmost Longitude',
        minThreshold: validationConstants.longitude.min,
        maxThreshold: validationConstants.longitude.max,
        validMessage: 'Invalid Longitude',
      },
    ],
  },
  {
    type: 'MINMAX',
    title: 'Validity',
    minThreshold: validationConstants.validity.min,
    maxThreshold: validationConstants.validity.max,
    min: {
      model: '.tsunami.search.minEventValidity',
      validMessage: 'Invalid Event Validity',
    },
    max: {
      model: '.tsunami.search.maxEventValidity',
      validMessage: 'Invalid Event Validity',
    },
  },
  {
    type: 'MINMAX',
    title: 'Cause of Tsunami',
    minThreshold: validationConstants.cause.min,
    maxThreshold: validationConstants.cause.max,
    min: {
      model: '.tsunami.search.minCauseCode',
      validMessage: 'Invalid Cause',
    },
    max: {
      model: '.tsunami.search.maxCauseCode',
      validMessage: 'Invalid Cause',
    },
  },
  {
    type: 'MINMAX',
    title: 'Earthquake Magnitude',
    minThreshold: validationConstants.eqMag.min,
    maxThreshold: validationConstants.eqMag.max,
    min: {
      model: '.tsunami.search.minEqMagnitude',
      validMessage: 'Invalid Magnitude',
    },
    max: {
      model: '.tsunami.search.maxEqMagnitude',
      validMessage: 'Invalid Magnitude',
    },
  },
  {
    type: 'RADIO',
    title: 'Location',
    htmlFor: '.tsunami.locType',
    model: '.tsunami.locType',
    radios: [
      { value: 'locStart', label: 'Starts With' },
      { value: 'locEnd', label: 'Ends With' },
      { value: 'locIncludes', label: 'Includes' },
      { value: 'locMatch', label: 'Matches' },
      { value: 'locNot', label: 'or Does Not Match' },
    ],
    textModelPreface: '.tsunami.search.',
    condition: 'locType',
  },
  {
    type: 'RADIO',
    title: 'Comments',
    model: '.tsunami.commentType',
    radios: [
      { value: 'commentsStart', label: 'Starts With' },
      { value: 'commentsEnd', label: 'Ends With' },
      { value: 'commentsInclude', label: 'Includes' },
      { value: 'commentsMatch', label: 'Matches' },
      { value: 'commentsNot', label: 'or Does Not Match' },
    ],
    textModelPreface: '.tsunami.search.',
    condition: 'commentType',
  }
];

const TsunamiRunupByPlace = [
  {
    type: 'DROPDOWN',
    title: 'Region',
    model: '.tsunami.search.runupRegion',
    id: '.tsunami.search.runupRegion',
    data: regions,
  },
  {
    type: 'DROPDOWN',
    title: 'Country',
    model: '.tsunami.search.runupCountry',
    id: '.tsunami.search.runupCountry',
    data: countries,
  },
  {
    type: 'DROPDOWNOR',
    title: 'Area',
    dropDowns: [
      {
        model: '.tsunami.search.runupArea',
        id: '.tsunami.search.runupArea',
        data: states,
        disabled: 'USA',
      },
      {
        model: '.tsunami.search.runupArea',
        id: '.tsunami.search.runupArea',
        data: canadianProvince,
        disabled: 'CANADA',
      },
      {
        model: '.tsunami.search.runupArea',
        id: '.tsunami.search.runupArea',
        data: indonesianProvince,
        disabled: 'INDONESIA',
      },
      {
        model: '.tsunami.search.runupArea',
        id: '.tsunami.search.runupArea',
        data: japanesePrefecture,
        disabled: 'JAPAN',
      },
    ],
  },
  {
    type: 'MINMAX',
    title: 'Distance of Runup Location',
    minThreshold: validationConstants.distanceRnpLoc.min,
    maxThreshold: validationConstants.distanceRnpLoc.max,
    min: {
      model: '.tsunami.search.runupMinDistance',
      validMessage: 'Invalid Distance',
    },
    max: {
      model: '.tsunami.search.runupMaxDistance',
      validMessage: 'Invalid Distance',
    },
  },
  {
    type: 'MINMAX',
    title: 'Travel Time (Hours)',
    minThreshold: validationConstants.travelTime.min,
    maxThreshold: validationConstants.travelTime.max,
    min: {
      model: '.tsunami.search.runupMinTravelTime',
      validMessage: 'Invalid Travel Time',
    },
    max: {
      model: '.tsunami.search.runupMaxTravelTime',
      validMessage: 'Invalid Travel Time',
    },
  },
  {
    type: 'RADIO',
    title: 'Runup Location',
    htmlFor: '.tsunami.runupLocType',
    model: '.tsunami.runupLocType',
    radios: [
      { value: 'runupLocStart', label: 'Starts With' },
      { value: 'runupLocEnd', label: 'Ends With' },
      { value: 'runupLocIncludes', label: 'Includes' },
      { value: 'runupLocMatch', label: 'Matches' },
      { value: 'runupLocNot', label: 'or Does Not Match' },
    ],
    textModelPreface: '.tsunami.search.',
    condition: 'runupLocType',
  },
];

const TotalTsunamiEffects = [
  {
    type: 'MINMAX',
    title: 'Number of Runups',
    minThreshold: validationConstants.numberOfRunups.min,
    maxThreshold: validationConstants.numberOfRunups.max,
    min: {
      model: '.tsunami.search.minNumRunup',
      validMessage: 'Invalid Number of Runups',
    },
    max: {
      model: '.tsunami.search.maxNumRunup',
      validMessage: 'Invalid Number of Runups',
    },
  },
  {
    type: 'MINMAX',
    title: 'Maximum Water Height',
    minThreshold: validationConstants.waterHeight.min,
    maxThreshold: validationConstants.waterHeight.max,
    min: {
      model: '.tsunami.search.minMaxEventRunup',
      validMessage: 'Invalid Max Event Runup',
    },
    max: {
      model: '.tsunami.search.maxMaxEventRunup',
      validMessage: 'Invalid Max Event Runup',
    },
  },
  {
    type: 'MINMAX',
    title: 'Number of Deaths',
    minThreshold: validationConstants.numberOfDeaths.min,
    maxThreshold: validationConstants.numberOfDeaths.max,
    min: {
      model: '.tsunami.search.minDeaths',
      validMessage: 'Invalid Deaths',
    },
    max: {
      model: '.tsunami.search.maxDeaths',
      validMessage: 'Invalid Deaths',
    },
  },
  {
    type: 'MINMAX',
    title: 'Death Description',
    minThreshold: validationConstants.deathDescription.min,
    maxThreshold: validationConstants.deathDescription.max,
    min: {
      model: '.tsunami.search.minDeathsAmountOrder',
      validMessage: 'Invalid Death Description',
    },
    max: {
      model: '.tsunami.search.maxDeathsAmountOrder',
      validMessage: 'Invalid Death Description',
    },
  },
  {
    type: 'MINMAX',
    title: 'Number of Injuries',
    minThreshold: validationConstants.numberOfInjuries.min,
    maxThreshold: validationConstants.numberOfInjuries.max,
    min: {
      model: '.tsunami.search.minInjuries',
      validMessage: 'Invalid Number of Injuries',
    },
    max: {
      model: '.tsunami.search.maxInjuries',
      validMessage: 'Invalid Number of Injuries',
    },
  },
  {
    type: 'MINMAX',
    title: 'Injury Description',
    minThreshold: validationConstants.injuryDescription.min,
    maxThreshold: validationConstants.injuryDescription.max,
    min: {
      model: '.tsunami.search.minInjuriesAmountOrder',
      validMessage: 'Invalid Injury Description',
    },
    max: {
      model: '.tsunami.search.maxInjuriesAmountOrder',
      validMessage: 'Invalid Injury Description',
    },
  },
  {
    type: 'MINMAX',
    title: 'Damage in Millions of Dollars',
    minThreshold: validationConstants.damageInMillions.min,
    maxThreshold: validationConstants.damageInMillions.max,
    min: {
      model: '.tsunami.search.minDamageMillionsDollarsTotal',
      validMessage: 'Invalid Damage',
    },
    max: {
      model: '.tsunami.search.maxDamageMillionsDollarsTotal',
      validMessage: 'Invalid Damage',
    },
  },
  {
    type: 'MINMAX',
    title: 'Damage Description',
    minThreshold: validationConstants.damageDescription.min,
    maxThreshold: validationConstants.damageDescription.max,
    min: {
      model: '.tsunami.search.minDamageAmountOrder',
      validMessage: 'Invalid Damage Description',
    },
    max: {
      model: '.tsunami.search.maxDamageAmountOrder',
      validMessage: 'Invalid Damage Description',
    },
  },
  {
    type: 'MINMAX',
    title: 'Number of Houses Destroyed',
    minThreshold: validationConstants.numberOfHousesDestroyed.min,
    maxThreshold: validationConstants.numberOfHousesDestroyed.max,
    min: {
      model: '.tsunami.search.minHousesDestroyed',
      validMessage: 'Invalid Number of Houses',
    },
    max: {
      model: '.tsunami.search.maxHousesDestroyed',
      validMessage: 'Invalid Number of Houses',
    },
  },
  {
    type: 'MINMAX',
    title: 'Houses Destroyed Description',
    minThreshold: validationConstants.housesDestroyedDescription.min,
    maxThreshold: validationConstants.housesDestroyedDescription.max,
    min: {
      model: '.tsunami.search.minHousesAmountOrder',
      validMessage: 'Invalid Houses Destroyed Description',
    },
    max: {
      model: '.tsunami.search.maxHousesAmountOrder',
      validMessage: 'Invalid Houses Destroyed Description',
    },
  },
];

const TotalTsunamiAndSourceEffects = [
  {
    type: 'MINMAX',
    title: 'Total Number of Deaths',
    minThreshold: validationConstants.numberOfDeaths.min,
    maxThreshold: validationConstants.numberOfDeaths.max,
    min: {
      model: '.tsunami.search.minDeathsTotal',
      validMessage: 'Invalid Number of Deaths',
    },
    max: {
      model: '.tsunami.search.maxDeathsTotal',
      validMessage: 'Invalid Number of Deaths',
    },
  },
  {
    type: 'MINMAX',
    title: 'Total Death Description',
    minThreshold: validationConstants.deathDescription.min,
    maxThreshold: validationConstants.deathDescription.max,
    min: {
      model: '.tsunami.search.minDeathsAmountOrderTotal',
      validMessage: 'Invalid Death Description',
    },
    max: {
      model: '.tsunami.search.maxDeathsAmountOrderTotal',
      validMessage: 'Invalid Death Description',
    },
  },
  {
    type: 'DROPDOWN',
    title: 'Type of Measurement',
    model: '.tsunami.search.runupMeasureType',
    id: '.tsunami.search.runupMeasureType',
    data: rnpMeasureType,
  },
  {
    type: 'MINMAX',
    title: 'Vertical Height at Runup Location',
    minThreshold: validationConstants.waterHeight.min,
    maxThreshold: validationConstants.waterHeight.max,
    min: {
      model: '.tsunami.search.runupMinHeight',
      validMessage: 'Invalid Height',
    },
    max: {
      model: '.tsunami.search.runupMaxHeight',
      validMessage: 'Invalid Height',
    },
  },
  {
    type: 'MINMAX',
    title: 'Number of Deaths at Runup Location',
    minThreshold: validationConstants.numberOfDeaths.min,
    maxThreshold: validationConstants.numberOfDeaths.max,
    min: {
      model: '.tsunami.search.runupMinDeaths',
      validMessage: 'Invalid Number of Deaths',
    },
    max: {
      model: '.tsunami.search.runupMaxDeaths',
      validMessage: 'Invalid Number of Deaths',
    },
  },
  {
    type: 'MINMAX',
    title: 'Description of Deaths at Runup Location',
    minThreshold: validationConstants.deathDescription.min,
    maxThreshold: validationConstants.deathDescription.max,
    min: {
      model: '.tsunami.search.runupMinDeathsAmountOrder',
      validMessage: 'Invalid Deaths Description',
    },
    max: {
      model: '.tsunami.search.runupMaxDeathsAmountOrder',
      validMessage: 'Invalid Deaths Description',
    },
  },
  {
    type: 'MINMAX',
    title: 'Number of Injuries at Runup Location',
    minThreshold: validationConstants.numberOfInjuries.min,
    maxThreshold: validationConstants.numberOfInjuries.max,
    min: {
      model: '.tsunami.search.runupMinInjuries',
      validMessage: 'Invalid Number of Injuries',
    },
    max: {
      model: '.tsunami.search.runupMaxInjuries',
      validMessage: 'Invalid Number of Injuries',
    },
  },
  {
    type: 'MINMAX',
    title: 'Injury Description at Runup Location',
    minThreshold: validationConstants.injuryDescription.min,
    maxThreshold: validationConstants.injuryDescription.max,
    min: {
      model: '.tsunami.search.runupMinInjuriesAmountOrder',
      validMessage: 'Invalid Injury Description',
    },
    max: {
      model: '.tsunami.search.runupMaxInjuriesAmountOrder',
      validMessage: 'Invalid Injury Description',
    },
  },
  {
    type: 'MINMAX',
    title: 'Damage in Millions of Dollars at Runup Location',
    minThreshold: validationConstants.damageInMillions.min,
    maxThreshold: validationConstants.damageInMillions.max,
    min: {
      model: '.tsunami.search.runupMinDamageInMillions',
      validMessage: 'Invalid Damage',
    },
    max: {
      model: '.tsunami.search.runupMaxDamageInMillions',
      validMessage: 'Invalid Damage',
    },
  },
  {
    type: 'MINMAX',
    title: 'Damage Description at Runup Location',
    minThreshold: validationConstants.damageDescription.min,
    maxThreshold: validationConstants.damageDescription.max,
    min: {
      model: '.tsunami.search.runupMinDamageAmountOrder',
      validMessage: 'Invalid Damage Description',
    },
    max: {
      model: '.tsunami.search.runupMaxDamageAmountOrder',
      validMessage: 'Invalid Damage Description',
    },
  },
  {
    type: 'MINMAX',
    title: 'Number of Houses Destroyed at Runup Location',
    minThreshold: validationConstants.numberOfHousesDestroyed.min,
    maxThreshold: validationConstants.numberOfHousesDestroyed.max,
    min: {
      model: '.tsunami.search.runupMinHousesDestroyed',
      validMessage: 'Invalid Number of Houses Destoryed',
    },
    max: {
      model: '.tsunami.search.runupMaxHousesDestroyed',
      validMessage: 'Invalid Number of Houses Destoryed',
    },
  },
  {
    type: 'MINMAX',
    title: 'Houses Destroyed Description at Runup Location',
    minThreshold: validationConstants.housesDestroyedDescription.min,
    maxThreshold: validationConstants.housesDestroyedDescription.max,
    min: {
      model: '.tsunami.search.runupMinHousesAmountOrder',
      validMessage: 'Invalid Houses Destroyed Description',
    },
    max: {
      model: '.tsunami.search.runupMaxHousesAmountOrder',
      validMessage: 'Invalid Houses Destroyed Description',
    },
  },
];


export {
  TsunamiSourceParameters,
  TsunamiRunupByPlace,
  TotalTsunamiEffects,
  TotalTsunamiAndSourceEffects,
};
