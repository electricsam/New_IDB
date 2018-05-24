import {
  canadianProvince, countries, indonesianProvince, japanesePrefecture, regions, states,
  validationConstants
} from "../../formConstants/constants";

const DateAndLocation = [
  {
    type: "TEXT",
    title: "Year",
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    model: '.tsunami.tsEvent.year',
    validMessage: "Invalid Year"
  },
  {
    type: "TEXT",
    title: "Month",
    model: ".tsunami.tsEvent.month",
    minThreshold: validationConstants.month.min,
    maxThreshold: validationConstants.month.max,
    validMessage: "Invalid Month"
  },
  {
    type: "TEXT",
    title: "Day",
    model: ".tsunami.tsEvent.day",
    minThreshold: validationConstants.day.min,
    maxThreshold: validationConstants.day.max,
    validMessage: "Invalid Day"
  },
  {
    type: "TEXT",
    title: "Hour",
    model: ".tsunami.tsEvent.hour",
    minThreshold: validationConstants.hour.min,
    maxThreshold: validationConstants.hour.max,
    validMessage: "Invalid Hour"
  },
  {
    type: "TEXT",
    title: "Minute",
    model: ".tsunami.tsEvent.minute",
    minThreshold: validationConstants.minute.min,
    maxThreshold: validationConstants.minute.max,
    validMessage: "Invalid Minute"
  },
  {
    type: "TEXT",
    title: "Second",
    model: ".tsunami.tsEvent.second",
    minThreshold: validationConstants.second.min,
    maxThreshold: validationConstants.second.max,
    validMessage: "Invalid Second"
  },
  {
    type: "TEXT",
    title: "Latitude",
    model: ".tsunami.tsEvent.latitude",
    minThreshold: validationConstants.latitude.min,
    maxThreshold: validationConstants.latitude.max,
    validMessage: "Invalid Latitude"
  },
  {
    type: "TEXT",
    title: "Longitude",
    model: ".tsunami.tsEvent.longitude",
    minThreshold: validationConstants.longitude.min,
    maxThreshold: validationConstants.longitude.max,
    validMessage: "Invalid Longitude"
  },
  {
    type: "TEXTNOVAL",
    title: "Location",
    model: ".tsunami.tsEvent.locationName",
  },
  {
    type: "DROPDOWN",
    title: "Region",
    model: ".tsunami.tsEvent.regionCode",
    id: ".tsunami.tsEvent.regionCode",
    data: regions,
  },
  {
    type: "DROPDOWN",
    title: "Country",
    model: ".tsunami.tsEvent.country",
    id: ".tsunami.tsEvent.country",
    data: countries,
  },
  {
    type: "DROPDOWNOR",
    title: "Area",
    dropDowns: [
      {
        model: ".tsunami.tsEvent.area",
        id: ".tsunami.tsEvent.area",
        data: states,
        disabled: "USA",
      },
      {
        model:".tsunami.tsEvent.area",
        id: ".tsunami.tsEvent.area",
        data: canadianProvince,
        disabled: "CANADA",
      } ,
      {
        model:".tsunami.tsEvent.area",
        id: ".tsunami.tsEvent.area",
        data: japanesePrefecture,
        disabled: "JAPAN",
      },
      {
        model:".tsunami.tsEvent.area",
        id: ".tsunami.tsEvent.area",
        data: indonesianProvince,
        disabled: "INDONESIA",
      }
    ],
  }
];

const Measurement = [
  {
    type: "TEXT",
    title: "Earthquake Depth",
    model: ".tsunami.tsEvent.eqDepth",
    minThreshold: validationConstants.eqDepth.min,
    maxThreshold: validationConstants.eqDepth.max,
    validMessage: "Invalid Earthquake Depth"
  },
  {
    type: "MULTIMINMAX",
    title: "Earthquake Magnitude",
    data: [
      {
        model: ".tsunami.tsEvent.eqMagUnk",
        title: "UNK",
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: "Invalid Earthquake Magnitude"
      },
      {
        model: ".tsunami.tsEvent.eqMagMb",
        title: "MB",
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: "Invalid Earthquake Magnitude"
      },
      {
        model: ".tsunami.tsEvent.eqMagMs",
        title: "MS",
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: "Invalid Earthquake Magnitude"
      },
      {
        model: ".tsunami.tsEvent.eqMagMw",
        title: "MW",
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: "Invalid Earthquake Magnitude"
      },
      {
        model: ".tsunami.tsEvent.eqMagMfa",
        title: "MFA",
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: "Invalid Earthquake Magnitude"
      },
      {
        model: ".tsunami.tsEvent.eqMagMl",
        title: "ML",
        minThreshold: validationConstants.eqMag.min,
        minThreshold: validationConstants.eqMag.max,
        validMessage: "Invalid Earthquake Magnitude"
      }
    ]
  },
  {
    type: "TEXT",
    title: "Cause Code",
    model: ".tsunami.tsEvent.causeCode",
    minThreshold: validationConstants.cause.min,
    maxThreshold: validationConstants.cause.max,
    validMessage: "Invalid Cause Code"
  },
  {
    type: "TEXT",
    title: "Validity",
    model: ".tsunami.tsEvent.eventValidity",
    minThreshold: validationConstants.validity.min,
    maxThreshold: validationConstants.validity.max,
    validMessage: "Invalid Validity",
  },
  {
    type: "TEXT",
    title: "Maximum Water Height (meters)",
    model: ".tsunami.tsEvent.maxEventRunup",
    minThreshold: validationConstants.waterHeight.min,
    maxThreshold: validationConstants.waterHeight.max,
    validMessage: "Invalid Maximum Water Height"
  },
  {
    type: "MULTIMINMAX",
    title: "Tsunami Magnitude",
    data:[
      {
        model: ".tsunami.tsEvent.tsMtAbe",
        title: "Abe",
        minThreshold: validationConstants.tsMag.min,
        maxThreshold: validationConstants.tsMag.max,
        validMessage: "Invalid Tsunami Magnitude"
      },
      {
        model: ".tsunami.tsEvent.tsMtII",
        title: "Iida-Imamura",
        minThreshold: validationConstants.tsMag.min,
        maxThreshold: validationConstants.tsMag.max,
        validMessage: "Invalid Tsunami Magnitude"
      }
    ]
  },
  {
    type: "TEXT",
    title: "Tsunami Intensity: Soloviev",
    model: ".tsunami.tsEvent.tsIntensity",
    minThreshold: validationConstants.tsMag.min,
    maxThreshold: validationConstants.tsMag.max,
    validMessage: "Invalid Intensity"
  },
  {
    type: "TEXT",
    title: "Tsunami Warning Status",
    model: ".tsunami.tsEvent.warningStatusId",
    minThreshold: validationConstants.warningStatus.min,
    maxThreshold: validationConstants.warningStatus.max,
    validMessage: "Invalid Warning Status"
  }
];

const Effects = [
  {
    type: "MULTIMINMAX",
    title: "Damage",
    data: [
      {
        model: ".tsunami.tsEvent.damageMillionsDollars",
        title: "Damage in Millions of Dollars",
        minThreshold: validationConstants.damageInMillions.min,
        maxThreshold: validationConstants.damageInMillions.max,
        validMessage: "Invalid Damage"
      },
      {
        model: ".tsunami.tsEvent.damageAmountOrder",
        title: "Damage Description",
        minThreshold: validationConstants.damageDescription.min,
        maxThreshold: validationConstants.damageDescription.max,
        validMessage: "Invalid Damage Description"
      }
    ]
  },
  {
    type: "MULTIMINMAX",
    title: "Houses Destroyed",
    data: [
      {
        model: ".tsunami.tsEvent.housesDestroyed",
        title: "Number of Houses Destroyed",
        minThreshold: validationConstants.numberOfHousesDestroyed.min,
        maxThreshold: validationConstants.numberOfHousesDestroyed.max,
        validMessage: "Invalid Houses Destroyed"
      },
      {
        model: ".tsunami.tsEvent.housesAmountOrder",
        title: "Houses Destroyed Description",
        minThreshold: validationConstants.housesDestroyedDescription.min,
        maxThreshold: validationConstants.housesDestroyedDescription.max,
        validMessage: "Invalid Houses Destroyed Description"
      }
    ]
  },
  {
    type: "MULTIMINMAX",
    title: "Deaths",
    data: [
      {
        model: ".tsunami.tsEvent.deaths",
        title: "Number of Deaths",
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: "Invalid Number of Deaths"
      },
      {
        model: ".tsunami.tsEvent.deathsAmountOrder",
        title: "Death Description",
        minThreshold: validationConstants.deathDescription.min,
        maxThreshold: validationConstants.deathDescription.max,
        validMessage: "Invalid Death Description"
      }
    ]
  },
  {
    type: "MULTIMINMAX",
    title: "Injuries",
    data: [
      {
        model: ".tsunami.tsEvent.injuries",
        title: "Number of Injuries",
        minThreshold: validationConstants.numberOfInjuries.min,
        maxThreshold: validationConstants.numberOfInjuries.max,
        validMessage: "Invalid Number of Injuries"
      },
      {
        model: ".tsunami.tsEvent.injuriesAmountOrder",
        title: "Injury Description",
        minThreshold: validationConstants.injuryDescription.min,
        maxThreshold: validationConstants.injuryDescription.max,
        validMessage: "Invalid Injury Description"
      }
    ]
  },
  {
    type: "MULTIMINMAX",
    title: "Missing",
    data: [
      {
        model: ".tsunami.tsEvent.missing",
        title: "Number of Missing",
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: "Invalid Number of Missing"
      },
      {
        model: ".tsunami.tsEvent.missingAmountOrder",
        title: "Missing Description",
        minThreshold: validationConstants.deathDescription.min,
        maxThreshold: validationConstants.deathDescription.max,
        validMessage: "Invalid Missing Description"
      }
    ]
  },
];

const TotalEffects = [
  {
    type: "MULTIMINMAX",
    title: "Total Damage",
    data: [
      {
        model: ".tsunami.tsEvent.damageMillionsDollarsTotal",
        title: "Total Damage in Millions of Dollars",
        minThreshold: validationConstants.damageInMillions.min,
        maxThreshold: validationConstants.damageInMillions.max,
        validMessage: "Invalid Damage"
      },
      {
        model: ".tsunami.tsEvent.damageAmountOrderTotal",
        title: "Total Damage Description",
        minThreshold: validationConstants.damageDescription.min,
        maxThreshold: validationConstants.damageDescription.max,
        validMessage: "Invalid Damage Description"
      }
    ]
  },
  {
    type: "MULTIMINMAX",
    title: "Total Houses Destroyed",
    data: [
      {
        model: ".tsunami.tsEvent.housesDestroyedTotal",
        title: "Total Number of Houses Destroyed",
        minThreshold: validationConstants.numberOfHousesDestroyed.min,
        maxThreshold: validationConstants.numberOfHousesDestroyed.max,
        validMessage: "Invalid Houses Destroyed"
      },
      {
        model: ".tsunami.tsEvent.housesAmountOrderTotal",
        title: "Total Houses Destroyed Description",
        minThreshold: validationConstants.housesDestroyedDescription.min,
        maxThreshold: validationConstants.housesDestroyedDescription.max,
        validMessage: "Invalid Houses Destroyed Description"
      }
    ]
  },
  {
    type: "MULTIMINMAX",
    title: "Total Deaths",
    data: [
      {
        model: ".tsunami.tsEvent.deathsTotal",
        title: "Total Number of Deaths",
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: "Invalid Number of Deaths"
      },
      {
        model: ".tsunami.tsEvent.deathsAmountOrderTotal",
        title: "Total Death Description",
        minThreshold: validationConstants.deathDescription.min,
        maxThreshold: validationConstants.deathDescription.max,
        validMessage: "Invalid Death Description"
      }
    ]
  },
  {
    type: "MULTIMINMAX",
    title: "Total Injuries",
    data: [
      {
        model: ".tsunami.tsEvent.injuriesTotal",
        title: "Total Number of Injuries",
        minThreshold: validationConstants.numberOfInjuries.min,
        maxThreshold: validationConstants.numberOfInjuries.max,
        validMessage: "Invalid Number of Injuries"
      },
      {
        model: ".tsunami.tsEvent.injuriesAmountOrderTotal",
        title: "Total Injury Description",
        minThreshold: validationConstants.injuryDescription.min,
        maxThreshold: validationConstants.injuryDescription.max,
        validMessage: "Invalid Injury Description"
      }
    ]
  },
  {
    type: "MULTIMINMAX",
    title: "Total Missing",
    data: [
      {
        model: ".tsunami.tsEvent.missingTotal",
        title: "Total Number of Missing",
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: "Invalid Number of Missing"
      },
      {
        model: ".tsunami.tsEvent.missingAmountOrderTotal",
        title: "Total Missing Description",
        minThreshold: validationConstants.deathDescription.min,
        maxThreshold: validationConstants.deathDescription.max,
        validMessage: "Invalid Missing Description"
      }
    ]
  },
  {
    type: "TEXTAREA",
    model: ".tsunami.tsEvent.comments",
    id: ".tsunami.tsEvent.comments",
    title: "Comments"
  }
];

export {
  DateAndLocation,
  Measurement,
  Effects,
  TotalEffects
}

