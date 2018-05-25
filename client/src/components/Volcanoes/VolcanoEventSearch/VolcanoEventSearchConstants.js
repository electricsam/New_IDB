import {validationConstants, countries, regions, volcanoTypes} from "../../formConstants/constants";

const Parameters = [
  {
    type: "MINMAX",
    title: "Year",
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    min: {
      model: ".volcano.search.minYear",
      validMessage: "Invalid Year"
    },
    max: {
      model: ".volcano.search.maxYear",
      validMessage: "Invalid Year"
    }
  },
  {
    type: "RADIO",
    title: "Volcano Name",
    htmlFor:".volcano.name",
    model: ".volcano.name",
    radios: [
      {value: "nameStart", label: "Starts With"},
      {value: "nameIncludes", label: "Includes"},
      {value: "nameMatch", label: "Matches"},
      {value: "nameNot", label: "or Does Not Match"}
    ],
    textModelPreface: '.volcano.search.',
    condition: 'name'
  },
  {
    ype: "RADIO",
    title: "Volcano Location",
    htmlFor:".volcano.location",
    model: ".volcano.location",
    radios: [
      {value: "locStart", label: "Starts With"},
      {value: "locIncludes", label: "Includes"},
      {value: "locMatch", label: "Matches"},
      {value: "locNot", label: "or Does Not Match"}
    ],
    textModelPreface: '.volcano.search.',
    condition: 'location'
  },
  {
    type: "DROPDOWN",
    title: "Country",
    model: ".volcano.search.country",
    id: ".volcano.search.country",
    data: countries,
  },
  {
    type: "MULTIMINMAX",
    title: "Range of Coordinates in Decimal Degrees",
    data: [
      {
        model: ".volcano.search.maxLatitude",
        title: "Northernmost Latitude",
        minThreshold:validationConstants.latitude.min,
        maxThreshold:validationConstants.latitude.max,
        validMessage: "Invalid Latitude"
      },
      {
        model: ".volcano.search.minLatitude",
        title: "Southernmost Latitude",
        minThreshold:validationConstants.latitude.min,
        maxThreshold:validationConstants.latitude.max,
        validMessage: "Invalid Latitude"
      },
      {
        model: ".volcano.search.minLongitude",
        title: "Westernmost Longitude",
        minThreshold: validationConstants.longitude.min,
        maxThreshold: validationConstants.longitude.max,
        validMessage: "Invalid Longitude"
      },
      {
        model: ".volcano.search.maxLongitude",
        title: "Easternmost Longitude",
        minThreshold: validationConstants.longitude.min,
        maxThreshold: validationConstants.longitude.max,
        validMessage: "Invalid Longitude"
      }
    ]
  },
  {
    type: "DROPDOWN",
    title: "Volcano Type",
    model: ".volcano.search.morphology",
    id: ".volcano.search.morphology",
    data: volcanoTypes
  },
  {
    type: "MINMAX",
    title: "VEI",
    minThreshold: validationConstants.vei.min,
    maxThreshold: validationConstants.vei.max,
    min: {
      model: ".volcano.search.minVei",
      validMessage: "Invalid VEI"
    },
    max: {
      model: ".volcano.search.maxVei",
      validMessage: "Invalid VEI"
    }
  }
];

const Effects = [
  {
    type: "MINMAX",
    title: "Number of Deaths",
    minThreshold: validationConstants.numberOfDeaths.min,
    maxThreshold: validationConstants.numberOfDeaths.max,
    min: {
      model: ".volcano.search.minDeaths",
      validMessage: "Invalid Deaths"
    },
    max: {
      model: ".volcano.search.maxDeaths",
      validMessage: "Invalid Deaths"
    }
  },
  {
    type: "MINMAX",
    title: "Death Description",
    minThreshold: validationConstants.deathDescription.min,
    maxThreshold: validationConstants.deathDescription.max,
    min: {
      model: ".volcano.search.minDeathsAmountOrder",
      validMessage: "Invalid Death Description"
    },
    max: {
      model: ".volcano.search.maxDeathsAmountOrder",
      validMessage: "Invalid Death Description"
    }
  },
  {
    type: "MINMAX",
    title: "Damage in Millions of Dollars",
    minThreshold: validationConstants.damageInMillions.min,
    maxThreshold: validationConstants.damageInMillions.max,
    min: {
      model: ".volcano.search.minDamageMillionsDollarsTotal",
      validMessage: "Invalid Damage"
    },
    max: {
      model: ".volcano.search.maxDamageMillionsDollarsTotal",
      validMessage: "Invalid Damage"
    }
  },
  {
    type: "MINMAX",
    title: "Damage Description",
    minThreshold: validationConstants.damageDescription.min,
    maxThreshold: validationConstants.damageDescription.max,
    min: {
      model: ".volcano.search.minDamageAmountOrder",
      validMessage: "Invalid Damage Description"
    },
    max: {
      model: ".volcano.search.maxDamageAmountOrder",
      validMessage: "Invalid Damage Description"
    }
  },
  {
    ype: "RADIO",
    title: "Volcano Eruption Comments",
    htmlFor:".volcano.eruption",
    model: ".volcano.eruption",
    radios: [
      {value: "comStart", label: "Starts With"},
      {value: "comIncludes", label: "Includes"},
      {value: "comMatch", label: "Matches"},
      {value: "comNot", label: "or Does Not Match"}
    ],
    textModelPreface: '.volcano.search.',
    condition: 'comments'
  },
];


export {
  Parameters,
  Effects
}