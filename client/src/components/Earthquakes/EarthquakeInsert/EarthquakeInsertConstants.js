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
} from "../../formConstants/constants";

const DateAndLocation = [
  {
    type: "TEXT",
    title: "Year",
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    model: ".earthquake.insert.year",
    validMessage: "Invalid Year"
  },
  {
    type: "TEXT",
    title: "Month",
    minThreshold: validationConstants.month.min,
    maxThreshold: validationConstants.month.max,
    model: ".earthquake.insert.month",
    validMessage: "Invalid Month"
  },
  {
    type: "TEXT",
    title: "Day",
    minThreshold: validationConstants.day.min,
    maxThreshold: validationConstants.day.max,
    model: ".earthquake.insert.day",
    validMessage: "Invalid Day"
  },
  {
    type: "TEXT",
    title: "Hour",
    minThreshold: validationConstants.hour.min,
    maxThreshold: validationConstants.hour.max,
    model: ".earthquake.insert.hour",
    validMessage: "Invalid Hour"
  },
  {
    type: "TEXT",
    title: "Min",
    minThreshold: validationConstants.minute.min,
    maxThreshold: validationConstants.minute.max,
    model: ".earthquake.insert.minute",
    validMessage: "Invalid Min"
  },
  {
    type: "TEXT",
    title: "Second",
    minThreshold: validationConstants.second.min,
    maxThreshold: validationConstants.second.max,
    model: ".earthquake.insert.second",
    validMessage: "Invalid Second"
  },
  {
    type: "TEXT",
    title: "Latitude",
    minThreshold: validationConstants.latitude.min,
    maxThreshold: validationConstants.latitude.max,
    model: ".earthquake.insert.latitude",
    validMessage: "Invalid Latitude"
  },
  {
    type: "TEXT",
    title: "Longitude",
    minThreshold: validationConstants.longitude.min,
    maxThreshold: validationConstants.longitude.max,
    model: ".earthquake.insert.longitude",
    validMessage: "Invalid Longitude"
  },
  {
    type: "DROPDOWN",
    title: "Region",
    model: ".earthquake.insert.regionCode",
    id: ".earthquake.insert.regionCode",
    data: regions,
  },
  {
    type: "DROPDOWN",
    title: "Country",
    model: ".earthquake.insert.country",
    id: ".earthquake.insert.country",
    data: countries,
  },
  {
    type: "DROPDOWNOR",
    title: "Area",
    dropDowns: [
      {
        model: ".earthquake.insert.area",
        id: ".earthquake.insert.area",
        data: states,
        disabled: "USA",
      },
      {
        model:".earthquake.insert.area",
        id: ".earthquake.insert.area",
        data: canadianProvince,
        disabled: "CANADA",
      } ,
      {
        model:".earthquake.insert.area",
        id: ".earthquake.insert.area",
        data: japanesePrefecture,
        disabled: "JAPAN",
      },
      {
        model:".earthquake.insert.area",
        id: ".earthquake.insert.area",
        data: indonesianProvince,
        disabled: "INDONESIA",
      }
    ],
  },
  {
    type: "TEXTNOVAL",
    title: "Location",
    model: ".earthquake.insert.locationName",
  },
];


const Measurements = [
  {
    type: "MULTIMINMAX",
    title: "Earthquake Magnitude",
    data: [
      {
        model: ".earthquake.insert.eqMagUnk",
        title: "UNK",
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: "Invalid Earthquake Magnitude"
      },
      {
        model: ".earthquake.insert.eqMagMb",
        title: "MB",
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: "Invalid Earthquake Magnitude"
      },
      {
        model: ".earthquake.insert.eqMagMs",
        title: "MS",
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: "Invalid Earthquake Magnitude"
      },
      {
        model: ".earthquake.insert.eqMagMw",
        title: "MW",
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: "Invalid Earthquake Magnitude"
      },
      {
        model: ".earthquake.insert.eqMagMfa",
        title: "MFA",
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: "Invalid Earthquake Magnitude"
      },
      {
        model: ".earthquake.insert.eqMagMl",
        title: "ML",
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: "Invalid Earthquake Magnitude"
      }
    ]
  },
  {
    type: "TEXT",
    title: "MMI Intensity",
    minThreshold: validationConstants.eqIntensity.min,
    maxThreshold: validationConstants.eqIntensity.max,
    model: ".earthquake.insert.intensity",
    validMessage: "Invalid Intensity"
  },
  {
    type: "TEXT",
    title: "Depth",
    minThreshold: validationConstants.eqDepth.min,
    maxThreshold: validationConstants.eqDepth.max,
    model: ".earthquake.insert.eqDepth",
    validMessage: "Invalid Depth"
  }
];


const Effects = [
  {
    type: "TEXT",
    title: "Deaths",
    minThreshold: validationConstants.numberOfDeaths.min,
    maxThreshold: validationConstants.numberOfDeaths.max,
    model: ".earthquake.insert.deaths",
    validMessage: "Invalid Deaths"
  },
  {
    type: "DROPDOWN",
    title: "Death Description",
    model: ".earthquake.insert.deathsAmountOrder",
    id: ".earthquake.insert.deathsAmountOrder",
    data: effectDescriptions
  },
  {
    type: "TEXT",
    title: "Injuries",
    minThreshold: validationConstants.numberOfInjuries.min,
    maxThreshold: validationConstants.numberOfInjuries.max,
    model: ".earthquake.insert.injuries",
    validMessage: "Invalid Injuries"
  },
  {
    type: "DROPDOWN",
    title: "Injury Description",
    model: ".earthquake.insert.injuriesAmountOrder",
    id: ".earthquake.insert.injuriesAmountOrder",
    data: effectDescriptions
  },
  {
    type: "TEXT",
    title: "Missing",
    minThreshold: validationConstants.deathDescription.min,
    maxThreshold: validationConstants.deathDescription.max,
    model: ".earthquake.insert.missing",
    validMessage: "Invalid Missing"
  },
  {
    type: "DROPDOWN",
    title: "Missing Description",
    model: ".earthquake.insert.missingAmountOrder",
    id: ".earthquake.insert.missingAmountOrder",
    data: effectDescriptions
  },
  {
    type: "TEXT",
    title: "Number of Houses Damaged",
    minThreshold: validationConstants.numberOfHousesDestroyed.min,
    maxThreshold: validationConstants.numberOfHousesDestroyed.max,
    model: ".earthquake.insert.housesDamaged",
    validMessage: "Invalid Number of Houses Damaged"
  },
  {
    type: "DROPDOWN",
    title: "Houses Damaged Description",
    model: ".earthquake.insert.housesDamagedAmountOrder",
    id: ".earthquake.insert.housesDamagedAmountOrder",
    data: effectDescriptions
  },
  {
    type: "TEXT",
    title: "Number of Houses Destroyed",
    minThreshold: validationConstants.numberOfHousesDestroyed.min,
    maxThreshold: validationConstants.numberOfHousesDestroyed.max,
    model: ".earthquake.insert.housesDestroyed",
    validMessage: "Invalid Number of Houses Destroyed"
  },
  {
    type: "DROPDOWN",
    title: "Houses Destroyed Description",
    model: ".earthquake.insert.housesAmountOrder",
    id: ".earthquake.insert.housesAmountOrder",
    data: effectDescriptions
  },
  {
    type: "TEXT",
    title: "Damage in Millions of Dollars",
    minThreshold: validationConstants.damageInMillions.min,
    maxThreshold: validationConstants.damageInMillions.max,
    model: ".earthquake.insert.damageMillionsDollars",
    validMessage: "Invalid Number of Houses Destroyed"
  },
  {
    type: "DROPDOWN",
    title: "Damage in Millions of Dollars Description",
    model: ".earthquake.insert.damageAmountOrder",
    id: ".earthquake.insert.damageAmountOrder",
    data: damageMillions
  }
];

const TotalEffects = [
  {
    type: "TEXT",
    title: "Total Deaths",
    minThreshold: validationConstants.numberOfDeaths.min,
    maxThreshold: validationConstants.numberOfDeaths.max,
    model: ".earthquake.insert.deathsTotal",
    validMessage: "Invalid Total Deaths"
  },
  {
    type: "DROPDOWN",
    title: "Total Death Description",
    model: ".earthquake.insert.deathsAmountOrderTotal",
    id: ".earthquake.insert.deathsAmountOrderTotal",
    data: effectDescriptions
  },
  {
    type: "TEXT",
    title: "Total Injuries",
    minThreshold: validationConstants.numberOfInjuries.min,
    maxThreshold: validationConstants.numberOfInjuries.max,
    model: ".earthquake.insert.injuriesTotal",
    validMessage: "Invalid Total Injuries"
  },
  {
    type: "DROPDOWN",
    title: "Total Injury Description",
    model: ".earthquake.insert.injuriesAmountOrderTotal",
    id: ".earthquake.insert.injuriesAmountOrderTotal",
    data: effectDescriptions
  },
  {
    type: "TEXT",
    title: "Total Missing",
    minThreshold: validationConstants.deathDescription.min,
    maxThreshold: validationConstants.deathDescription.max,
    model: ".earthquake.insert.missingTotal",
    validMessage: "Invalid Total Missing"
  },
  {
    type: "DROPDOWN",
    title: "Total Missing Description",
    model: ".earthquake.insert.missingAmountOrderTotal",
    id: ".earthquake.insert.missingAmountOrderTotal",
    data: effectDescriptions
  },
  {
    type: "TEXT",
    title: "Total Number of Houses Damaged",
    minThreshold: validationConstants.numberOfHousesDestroyed.min,
    maxThreshold: validationConstants.numberOfHousesDestroyed.max,
    model: ".earthquake.insert.housesDamagedTotal",
    validMessage: "Invalid Number of Total Houses Damaged"
  },
  {
    type: "DROPDOWN",
    title: "Total Houses Damaged Description",
    model: ".earthquake.insert.housesDamagedAmountOrderTotal",
    id: ".earthquake.insert.housesDamagedAmountOrderTotal",
    data: effectDescriptions
  },
  {
    type: "TEXT",
    title: "Number of Total Houses Destroyed",
    minThreshold: validationConstants.numberOfHousesDestroyed.min,
    maxThreshold: validationConstants.numberOfHousesDestroyed.max,
    model: ".earthquake.insert.housesDestroyedTotal",
    validMessage: "Invalid Number of Houses Destroyed"
  },
  {
    type: "DROPDOWN",
    title: "Total Houses Destroyed Description",
    model: ".earthquake.insert.housesAmountOrderTotal",
    id: ".earthquake.insert.housesAmountOrderTotal",
    data: effectDescriptions
  },
  {
    type: "TEXT",
    title: "Total Damage in Millions of Dollars",
    minThreshold: validationConstants.damageInMillions.min,
    maxThreshold: validationConstants.damageInMillions.max,
    model: ".earthquake.insert.damageMillionsDollarsTotal",
    validMessage: "Invalid Total Number of Houses Destroyed"
  },
  {
    type: "DROPDOWN",
    title: "Total Damage in Millions of Dollars Description",
    model: ".earthquake.insert.damageAmountOrderTotal",
    id: ".earthquake.insert.damageAmountOrderTotal",
    data: damageMillions
  },
  {
    type: "TEXTAREA",
    model: ".earthquake.insert.comments",
    id: ".earthquake.insert.comments",
    title: "Comments"
  }
];


export {
  DateAndLocation,
  Measurements,
  Effects,
  TotalEffects
}
