import {
  validationConstants,
  countries,
  regions,
  states,
  japanesePrefecture,
  indonesianProvince,
  canadianProvince,
  effectDescriptions,
  damageMillions,
} from '../../formConstants/constants';

const DateAndLocation = [
  {
    type: 'TEXT',
    title: 'Year',
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    model: '.earthquake.earthquakes[0].year',
    validMessage: 'Invalid Year',
  },
  {
    type: 'TEXT',
    title: 'Month',
    minThreshold: validationConstants.month.min,
    maxThreshold: validationConstants.month.max,
    model: '.earthquake.earthquakes[0].month',
    validMessage: 'Invalid Month',
  },
  {
    type: 'TEXT',
    title: 'Day',
    minThreshold: validationConstants.day.min,
    maxThreshold: validationConstants.day.max,
    model: '.earthquake.earthquakes[0].day',
    validMessage: 'Invalid Day',
  },
  {
    type: 'TEXT',
    title: 'Hour',
    minThreshold: validationConstants.hour.min,
    maxThreshold: validationConstants.hour.max,
    model: '.earthquake.earthquakes[0].hour',
    validMessage: 'Invalid Hour',
  },
  {
    type: 'TEXT',
    title: 'Min',
    minThreshold: validationConstants.minute.min,
    maxThreshold: validationConstants.minute.max,
    model: '.earthquake.earthquakes[0].minute',
    validMessage: 'Invalid Min',
  },
  {
    type: 'TEXT',
    title: 'Second',
    minThreshold: validationConstants.second.min,
    maxThreshold: validationConstants.second.max,
    model: '.earthquake.earthquakes[0].second',
    validMessage: 'Invalid Second',
  },
  {
    type: 'TEXT',
    title: 'Latitude',
    minThreshold: validationConstants.latitude.min,
    maxThreshold: validationConstants.latitude.max,
    model: '.earthquake.earthquakes[0].latitude',
    validMessage: 'Invalid Latitude',
  },
  {
    type: 'TEXT',
    title: 'Longitude',
    minThreshold: validationConstants.longitude.min,
    maxThreshold: validationConstants.longitude.max,
    model: '.earthquake.earthquakes[0].longitude',
    validMessage: 'Invalid Longitude',
  },
  {
    type: 'DROPDOWN',
    title: 'Region',
    model: '.earthquake.earthquakes[0].regionCode',
    id: '.earthquake.earthquakes[0].regionCode',
    data: regions,
  },
  {
    type: 'DROPDOWN',
    title: 'Country',
    model: '.earthquake.earthquakes[0].country',
    id: '.earthquake.earthquakes[0].country',
    data: countries,
  },
  {
    type: 'DROPDOWNOR',
    title: 'Area',
    dropDowns: [
      {
        model: '.earthquake.earthquakes[0].area',
        id: '.earthquake.earthquakes[0].area',
        data: states,
        disabled: 'USA',
      },
      {
        model: '.earthquake.earthquakes[0].area',
        id: '.earthquake.earthquakes[0].area',
        data: canadianProvince,
        disabled: 'CANADA',
      },
      {
        model: '.earthquake.earthquakes[0].area',
        id: '.earthquake.earthquakes[0].area',
        data: japanesePrefecture,
        disabled: 'JAPAN',
      },
      {
        model: '.earthquake.earthquakes[0].area',
        id: '.earthquake.earthquakes[0].area',
        data: indonesianProvince,
        disabled: 'INDONESIA',
      },
    ],
  },
  {
    type: 'TEXTNOVAL',
    title: 'Location',
    model: '.earthquake.earthquakes[0].locationName',
  },
];


const Measurements = [
  {
    type: 'MULTIMINMAX',
    title: 'Earthquake Magnitude',
    data: [
      {
        model: '.earthquake.earthquakes[0].eqMagUnk',
        title: 'UNK',
        minThreshold: validationConstants.eqMag.min,
        maxThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.earthquake.earthquakes[0].eqMagMb',
        title: 'MB',
        minThreshold: validationConstants.eqMag.min,
        maxThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.earthquake.earthquakes[0].eqMagMs',
        title: 'MS',
        minThreshold: validationConstants.eqMag.min,
        maxThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.earthquake.earthquakes[0].eqMagMw',
        title: 'MW',
        minThreshold: validationConstants.eqMag.min,
        maxThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.earthquake.earthquakes[0].eqMagMfa',
        title: 'MFA',
        minThreshold: validationConstants.eqMag.min,
        maxThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
      {
        model: '.earthquake.earthquakes[0].eqMagMl',
        title: 'ML',
        minThreshold: validationConstants.eqMag.min,
        maxThreshold: validationConstants.eqMag.max,
        validMessage: 'Invalid Earthquake Magnitude',
      },
    ],
  },
  {
    type: 'TEXT',
    title: 'MMI Intensity',
    minThreshold: validationConstants.eqIntensity.min,
    maxThreshold: validationConstants.eqIntensity.max,
    model: '.earthquake.earthquakes[0].intensity',
    validMessage: 'Invalid Intensity',
  },
  {
    type: 'TEXT',
    title: 'Depth',
    minThreshold: validationConstants.eqDepth.min,
    maxThreshold: validationConstants.eqDepth.max,
    model: '.earthquake.earthquakes[0].eqDepth',
    validMessage: 'Invalid Depth',
  },
];


const Effects = [
  {
    type: 'TEXT',
    title: 'Deaths',
    minThreshold: validationConstants.numberOfDeaths.min,
    maxThreshold: validationConstants.numberOfDeaths.max,
    model: '.earthquake.earthquakes[0].deaths',
    validMessage: 'Invalid Deaths',
  },
  {
    type: 'DROPDOWN',
    title: 'Death Description',
    model: '.earthquake.earthquakes[0].deathsAmountOrder',
    id: '.earthquake.earthquakes[0].deathsAmountOrder',
    data: effectDescriptions,
  },
  {
    type: 'TEXT',
    title: 'Injuries',
    minThreshold: validationConstants.numberOfInjuries.min,
    maxThreshold: validationConstants.numberOfInjuries.max,
    model: '.earthquake.earthquakes[0].injuries',
    validMessage: 'Invalid Injuries',
  },
  {
    type: 'DROPDOWN',
    title: 'Injury Description',
    model: '.earthquake.earthquakes[0].injuriesAmountOrder',
    id: '.earthquake.earthquakes[0].injuriesAmountOrder',
    data: effectDescriptions,
  },
  {
    type: 'TEXT',
    title: 'Missing',
    minThreshold: validationConstants.deathDescription.min,
    maxThreshold: validationConstants.deathDescription.max,
    model: '.earthquake.earthquakes[0].missing',
    validMessage: 'Invalid Missing',
  },
  {
    type: 'DROPDOWN',
    title: 'Missing Description',
    model: '.earthquake.earthquakes[0].missingAmountOrder',
    id: '.earthquake.earthquakes[0].missingAmountOrder',
    data: effectDescriptions,
  },
  {
    type: 'TEXT',
    title: 'Number of Houses Damaged',
    minThreshold: validationConstants.numberOfHousesDestroyed.min,
    maxThreshold: validationConstants.numberOfHousesDestroyed.max,
    model: '.earthquake.earthquakes[0].housesDamaged',
    validMessage: 'Invalid Number of Houses Damaged',
  },
  {
    type: 'DROPDOWN',
    title: 'Houses Damaged Description',
    model: '.earthquake.earthquakes[0].housesDamagedAmountOrder',
    id: '.earthquake.earthquakes[0].housesDamagedAmountOrder',
    data: effectDescriptions,
  },
  {
    type: 'TEXT',
    title: 'Number of Houses Destroyed',
    minThreshold: validationConstants.numberOfHousesDestroyed.min,
    maxThreshold: validationConstants.numberOfHousesDestroyed.max,
    model: '.earthquake.earthquakes[0].housesDestroyed',
    validMessage: 'Invalid Number of Houses Destroyed',
  },
  {
    type: 'DROPDOWN',
    title: 'Houses Destroyed Description',
    model: '.earthquake.earthquakes[0].housesAmountOrder',
    id: '.earthquake.earthquakes[0].housesAmountOrder',
    data: effectDescriptions,
  },
  {
    type: 'TEXT',
    title: 'Damage in Millions of Dollars',
    minThreshold: validationConstants.damageInMillions.min,
    maxThreshold: validationConstants.damageInMillions.max,
    model: '.earthquake.earthquakes[0].damageMillionsDollars',
    validMessage: 'Invalid Number of Houses Destroyed',
  },
  {
    type: 'DROPDOWN',
    title: 'Damage in Millions of Dollars Description',
    model: '.earthquake.earthquakes[0].damageAmountOrder',
    id: '.earthquake.earthquakes[0].damageAmountOrder',
    data: damageMillions,
  },
];

const TotalEffects = [
  {
    type: 'TEXT',
    title: 'Total Deaths',
    minThreshold: validationConstants.numberOfDeaths.min,
    maxThreshold: validationConstants.numberOfDeaths.max,
    model: '.earthquake.earthquakes[0].deathsTotal',
    validMessage: 'Invalid Total Deaths',
  },
  {
    type: 'DROPDOWN',
    title: 'Total Death Description',
    model: '.earthquake.earthquakes[0].deathsAmountOrderTotal',
    id: '.earthquake.earthquakes[0].deathsAmountOrderTotal',
    data: effectDescriptions,
  },
  {
    type: 'TEXT',
    title: 'Total Injuries',
    minThreshold: validationConstants.numberOfInjuries.min,
    maxThreshold: validationConstants.numberOfInjuries.max,
    model: '.earthquake.earthquakes[0].injuriesTotal',
    validMessage: 'Invalid Total Injuries',
  },
  {
    type: 'DROPDOWN',
    title: 'Total Injury Description',
    model: '.earthquake.earthquakes[0].injuriesAmountOrderTotal',
    id: '.earthquake.earthquakes[0].injuriesAmountOrderTotal',
    data: effectDescriptions,
  },
  {
    type: 'TEXT',
    title: 'Total Missing',
    minThreshold: validationConstants.deathDescription.min,
    maxThreshold: validationConstants.deathDescription.max,
    model: '.earthquake.earthquakes[0].missingTotal',
    validMessage: 'Invalid Total Missing',
  },
  {
    type: 'DROPDOWN',
    title: 'Total Missing Description',
    model: '.earthquake.earthquakes[0].missingAmountOrderTotal',
    id: '.earthquake.earthquakes[0].missingAmountOrderTotal',
    data: effectDescriptions,
  },
  {
    type: 'TEXT',
    title: 'Total Number of Houses Damaged',
    minThreshold: validationConstants.numberOfHousesDestroyed.min,
    maxThreshold: validationConstants.numberOfHousesDestroyed.max,
    model: '.earthquake.earthquakes[0].housesDamagedTotal',
    validMessage: 'Invalid Number of Total Houses Damaged',
  },
  {
    type: 'DROPDOWN',
    title: 'Total Houses Damaged Description',
    model: '.earthquake.earthquakes[0].housesDamagedAmountOrderTotal',
    id: '.earthquake.earthquakes[0].housesDamagedAmountOrderTotal',
    data: effectDescriptions,
  },
  {
    type: 'TEXT',
    title: 'Number of Total Houses Destroyed',
    minThreshold: validationConstants.numberOfHousesDestroyed.min,
    maxThreshold: validationConstants.numberOfHousesDestroyed.max,
    model: '.earthquake.earthquakes[0].housesDestroyedTotal',
    validMessage: 'Invalid Number of Houses Destroyed',
  },
  {
    type: 'DROPDOWN',
    title: 'Total Houses Destroyed Description',
    model: '.earthquake.earthquakes[0].housesAmountOrderTotal',
    id: '.earthquake.earthquakes[0].housesAmountOrderTotal',
    data: effectDescriptions,
  },
  {
    type: 'TEXT',
    title: 'Total Damage in Millions of Dollars',
    minThreshold: validationConstants.damageInMillions.min,
    maxThreshold: validationConstants.damageInMillions.max,
    model: '.earthquake.earthquakes[0].damageMillionsDollarsTotal',
    validMessage: 'Invalid Total Number of Houses Destroyed',
  },
  {
    type: 'DROPDOWN',
    title: 'Total Damage in Millions of Dollars Description',
    model: '.earthquake.earthquakes[0].damageAmountOrderTotal',
    id: '.earthquake.earthquakes[0].damageAmountOrderTotal',
    data: damageMillions,
  },
  {
    type: 'TEXTAREA',
    model: '.earthquake.earthquakes[0].comments',
    id: '.earthquake.earthquakes[0].comments',
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
