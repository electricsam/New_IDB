import { validationConstants,
  regions,
  countries,
  states
} from "../../formConstants/constants";

const EarthquakeParameters = [
  {
    type: "MINMAX",
    title: "Year",
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    min: {
      model: ".earthquake.search.minYear",
      validMessage: "Invalid Min Year"
    },
    max: {
      model: ".earthquake.search.maxYear",
      validMessage: "Invalid Max Year"
    }
  },
  {
    type: "DROPDOWN",
    title: "Region",
    model: ".earthquake.search.region",
    id: ".earthquake.search.region",
    data: regions
  },
  {
    type: "DROPDOWN",
    title: "Country",
    model: ".earthquake.search.country",
    id: ".earthquake.search.country",
    data: countries
  },
  {
    type: "DROPDOWNOR",
    title: "Area",
    dropDowns: [
      {
        model: ".earthquake.search.area",
        id: ".earthquake.search.area",
        data: states,
        disabled: "USA"
      }
    ]
  },
  {
    type: "RADIO",
    title: "Earthquake Location",
    htmlFor: ".earthquake.locType",
    model: ".earthquake.locType",
    radios: [
      {value: "locStart", label: "Starts With"},
      {value: "locIncludes", label: "Includes"},
      {value: "locMatches", label: "Matches"},
      {value: "locNot", label: "or Does Not Match"}
    ],
    textModelPreface: ".earthquake.search."
  },
  {
    type: "MULTIMINMAX",
    title: "Range of Coordinates in Decimal Degrees",
    data: [
      {
        model: ".earthquake.search.maxLatitude",
        title: "Northernmost Latitude",
        minThreshold:validationConstants.latitude.min,
        maxThreshold:validationConstants.latitude.max,
        validMessage: "Invalid Latitude"
      },
      {
        model: ".earthquake.search.minLatitude",
        title: "Southernmost Latitude",
        minThreshold:validationConstants.latitude.min,
        maxThreshold:validationConstants.latitude.max,
        validMessage: "Invalid Latitude"
      },
      {
        model: ".earthquake.search.minLongitude",
        title: "Westernmost Longitude",
        minThreshold: validationConstants.longitude.min,
        maxThreshold: validationConstants.longitude.max,
        validMessage: "Invalid Longitude"
      },
      {
        model: ".earthquake.search.maxLongitude",
        title: "Easternmost Longitude",
        minThreshold: validationConstants.longitude.min,
        maxThreshold: validationConstants.longitude.max,
        validMessage: "Invalid Longitude"
      }
    ]
  },
  {
    type: "MINMAX",
    title: "Magnitude",
    minThreshold: validationConstants.eqMag.min,
    maxThreshold: validationConstants.eqMag.max,
    min: {
      model: ".earthquake.search.minEqMagnitude",
      validMessage: "Invalid Earthquake Magnitude"
    },
    max: {
      model: ".earthquake.search.maxEqMagnitude",
      validMessage: "Invalid Earthquake Magnitude"
    }
  },
  {
    type: "MINMAX",
    title: "Intensity",
    minThreshold: validationConstants.eqIntensity.min,
    maxThreshold: validationConstants.eqIntensity.max,
    min: {
      model: ".earthquake.search.minIntensity",
      validMessage: "Invalid Earthquake Magnitude"
    },
    max: {
      model: ".earthquake.search.maxIntensity",
      validMessage: "Invalid Earthquake Magnitude"
    }
  },
  {
    type: "MINMAX",
    title: "Focal Depth",
    minThreshold: validationConstants.eqDepth.min,
    maxThreshold: validationConstants.eqDepth.max,
    min: {
      model: ".earthquake.search.maxEqDepth",
      validMessage: "Invalid Earthquake Depth"
    },
    max: {
      model: ".earthquake.search.maxEqDepth",
      validMessage: "Invalid Earthquake Depth"
    }
  }
];

const EarthquakeEffects = [
  {
    type: "MINMAX",
    title: "Number of Deaths",
    minThreshold: validationConstants.numberOfDeaths.min,
    maxThreshold: validationConstants.numberOfDeaths.max,
    min: {
      model: ".earthquake.search.minDeaths",
      validMessage: "Invalid Deaths"
    },
    max: {
      model: ".earthquake.search.maxDeaths",
      validMessage: "Invalid Deaths"
    }
  },
  {
    type: "MINMAX",
    title: "Death Description",
    minThreshold: validationConstants.deathDescription.min,
    maxThreshold: validationConstants.deathDescription.max,
    min: {
      model: ".earthquake.search.minDeathsAmountOrder",
      validMessage: "Invalid Death Description"
    },
    max: {
      model: ".earthquake.search.maxDeathsAmountOrder",
      validMessage: "Invalid Death Description"
    }
  },
  {
    type: "MINMAX",
    title: "Damage in Millions of Dollars",
    minThreshold: validationConstants.damageInMillions.min,
    maxThreshold: validationConstants.damageInMillions.max,
    min: {
      model: ".earthquake.search.minDamageMillionsDollarsTotal",
      validMessage: "Invalid Damage"
    },
    max: {
      model: ".earthquake.search.maxDamageMillionsDollarsTotal",
      validMessage: "Invalid Damage"
    }
  },
  {
    type: "MINMAX",
    title: "Damage Description",
    minThreshold: validationConstants.damageDescription.min,
    maxThreshold: validationConstants.damageDescription.max,
    min: {
      model: ".earthquake.search.minDamageAmountOrder",
      validMessage: "Invalid Damage Description"
    },
    max: {
      model: ".earthquake.search.maxDamageAmountOrder",
      validMessage: "Invalid Damage Description"
    }
  },
  {

  }
];

const TotalEarthquakeAndSecondaryEffects = [
  {
    type: "MINMAX",
    title: "Total Number of Deaths",
    minThreshold: validationConstants.numberOfDeaths.min,
    maxThreshold: validationConstants.numberOfDeaths.max,
    min: {
      model: ".earthquake.search.minDeathsTotal",
      validMessage: "Invalid Number of Deaths"
    },
    max: {
      model: ".earthquake.search.maxDeathsTotal",
      validMessage: "Invalid Number of Deaths"
    }
  },
  {
    type: "MINMAX",
    title: "Total Death Description",
    minThreshold: validationConstants.deathDescription.min,
    maxThreshold: validationConstants.deathDescription.max,
    min: {
      model: ".earthquake.search.minDeathsAmountOrderTotal",
      validMessage: "Invalid Death Description"
    },
    max: {
      model: ".earthquake.search.maxDeathsAmountOrderTotal",
      validMessage: "Invalid Death Description"
    }
  },  
];

export {
  EarthquakeParameters,
  EarthquakeEffects,
  TotalEarthquakeAndSecondaryEffects
}