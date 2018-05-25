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
      {value: "nameMatches", label: "Matches"},
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
      {value: "locMatches", label: "Matches"},
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
    
  }
];


export {
  Parameters,
  Effects
}