import {
  canadianProvince, countries, firstMotion, indonesianProvince, japanesePrefecture, regions, rnpMeasureType, states,
  validationConstants
} from "../../formConstants/constants";

const DateAndLocation = [
  {
    type: "TEXT",
    title: "Year",
    model: ".tsunami.runupData[0].year",
    minThreshold: validationConstants.year.min,
    maxThreshold: validationConstants.year.max,
    validMessage: "Invalid Year"
  },
  {
    type: "TEXT",
    title: "Month",
    model: ".tsunami.runupData[0].month",
    minThreshold: validationConstants.month.min,
    maxThreshold: validationConstants.month.max,
    validMessage: "Invalid Month"
  },
  {
    type: "TEXT",
    title: "Day",
    model: ".tsunami.runupData[0].day",
    minThreshold: validationConstants.day.min,
    maxThreshold: validationConstants.day.max,
    validMessage: "Invalid Day"
  },
  {
    type: "TEXTNOVAL",
    title: "Location",
    model: ".tsunami.runupData[0].locationName",
  },
  {
    type: "DROPDOWN",
    title: "Region",
    model: ".tsunami.runupData[0].regionCode",
    id: ".tsunami.runupData[0].regionCode",
    data: regions
  },
  {
    type: "DROPDOWN",
    title: "Country",
    model: ".tsunami.runupData[0].country",
    id: ".tsunami.runupData[0].country",
    data: countries
  },
  {
    type: "DROPDOWNOR",
    title: "Area",
    dropDowns: [
      {
        model: ".tsunami.runupData[0].area",
        id: ".tsunami.runupData[0].area",
        data: states,
        disabled: "USA",
      },
      {
        model:".tsunami.runupData[0].area",
        id: ".tsunami.runupData[0].area",
        data: canadianProvince,
        disabled: "CANADA",
      } ,
      {
        model:".tsunami.runupData[0].area",
        id: ".tsunami.runupData[0].area",
        data: japanesePrefecture,
        disabled: "JAPAN",
      },
      {
        model:".tsunami.runupData[0].area",
        id: ".tsunami.runupData[0].area",
        data: indonesianProvince,
        disabled: "INDONESIA",
      }
    ]
  },
  {
    type: "TEXT",
    title: "Latitude",
    model: ".tsunami.runupData[0].latitude",
    minThreshold: validationConstants.latitude.min,
    maxThreshold: validationConstants.latitude.max,
    validMessage: "Invalid Latitude"
  },
  {
    type: "TEXT",
    title: "Longitude",
    model: ".tsunami.runupData[0].longitude",
    minThreshold: validationConstants.longitude.min,
    maxThreshold: validationConstants.longitude.max,
    validMessage: "Invalid Longitude"
  },
];

const Measurements = [
  {
    type:"DROPDOWN",
    title: "Type of Measurment",
    model: ".tsunami.runupData[0].typeMeasurementId",
    id: ".tsunami.runupData[0].typeMeasurementId",
    data: rnpMeasureType
  },
  {
    type: "TEXT",
    title: "Maximum Height",
    model: ".tsunami.runupData[0].runupHt",
    minThreshold: validationConstants.waterHeight.min,
    maxThreshold: validationConstants.waterHeight.max,
    validMessage: "Invalid Maximum Height"
  },
  {
    type: "TEXT",
    title: "Maximum Horizontal Inundation (meters)",
    model: ".tsunami.runupData[0].runupHoriz",
    minThreshold: validationConstants.horizInnundation.min,
    maxThreshold: validationConstants.horizInnundation.max,
    validMessage: "Invalid Maximum Horizontal Inundation"
  },
  {
    type: "TEXT",
    title: "Period",
    model: ".tsunami.runupData[0].period",
    minThreshold: validationConstants.period.min,
    maxThreshold: validationConstants.period.max,
    validMessage: "Invalid Period"
  },
  {
    type:"DROPDOWN",
    title: "First Motion",
    model: ".tsunami.runupData[0].firstMotion",
    id: ".tsunami.runupData[0].firstMotion",
    data: firstMotion
  },
  {
    type: "MULTIMINMAX",
    title: "Arrival Time",
    data: [
      {
        model: ".tsunami.runupData[0].arrDay",
        title: "Day",
        minThreshold: validationConstants.day.min,
        maxThreshold: validationConstants.day.max,
        validMessage: "Invalid Day"
      },
      {
        model: ".tsunami.runupData[0].arrHour",
        title: "Hour",
        minThreshold: validationConstants.hour.min,
        maxThreshold: validationConstants.hour.max,
        validMessage: "Invalid Hour"
      },
      {
        model: ".tsunami.runupData[0].arrMin",
        title: "Minute",
        minThreshold: validationConstants.minute.min,
        maxThreshold: validationConstants.minute.max,
        validMessage: "Invalid Minute"
      },
    ]
  },
  {
    type: "MULTIMINMAX",
    title: "Travel Time",
    data: [
      {
        model: ".tsunami.runupData[0].travHours",
        title: "Hour",
        minThreshold: validationConstants.hour.min,
        maxThreshold: validationConstants.hour.max,
        validMessage: "Invalid Hour"
      },
      {
        model: ".tsunami.runupData[0].travMins",
        title: "Minute",
        minThreshold: validationConstants.minute.min,
        maxThreshold: validationConstants.minute.max,
        validMessage: "Invalid Minute"
      },
    ]
  },
  {
    type: "MULTIMINMAX",
    title: "Max Arrival Time",
    data: [
      {
        model: ".tsunami.runupData[0].maxWaveArrDay",
        title: "Day",
        minThreshold: validationConstants.day.min,
        maxThreshold: validationConstants.day.max,
        validMessage: "Invalid Day"
      },
      {
        model: ".tsunami.runupData[0].maxWaveArrHour",
        title: "Hour",
        minThreshold: validationConstants.hour.min,
        maxThreshold: validationConstants.hour.max,
        validMessage: "Invalid Hour"
      },
      {
        model: ".tsunami.runupData[0].maxWaveArrMin",
        title: "Minute",
        minThreshold: validationConstants.minute.min,
        maxThreshold: validationConstants.minute.max,
        validMessage: "Invalid Minute"
      },

    ]
  },
  {
    type: "RADIONOTEXT",
    title: "Doubtfulness",
    data: [
      {
        value: "null",
        checked: true,
        label: "OK"
      },
      {
        value: "?",
        checked: false,
        label: "Doubtful"
      },
      {
        value: "M",
        checked: false,
        label: "Meteorological"
      }
    ],
    model: ".tsunami.runupData[0].doubtful",
    id: ".tsunami.runupData[0].doubtful",
    htmlFor: ".tsunami.runupData[0].doubtful",
    noText: true,
  }
];

const Effects = [
  {
    type: "MULTIMINMAX",
    title: "Damage",
    data: [
      {
        model: ".tsunami.runupData[0].damageMillionsDollars",
        title: "Damage in Millions of Dollars",
        minThreshold: validationConstants.damageInMillions.min,
        maxThreshold: validationConstants.damageInMillions.max,
        validMessage: "Invalid Damage"
      },
      {
        model: ".tsunami.runupData[0].damageAmountOrder",
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
        model: ".tsunami.runupData[0].housesDestroyed",
        title: "Number of Houses Destroyed",
        minThreshold: validationConstants.numberOfHousesDestroyed.min,
        maxThreshold: validationConstants.numberOfHousesDestroyed.max,
        validMessage: "Invalid Houses Destroyed"
      },
      {
        model: ".tsunami.runupData[0].housesAmountOrder",
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
        model: ".tsunami.runupData[0].deaths",
        title: "Number of Deaths",
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: "Invalid Number of Deaths"
      },
      {
        model: ".tsunami.runupData[0].deathsAmountOrder",
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
        model: ".tsunami.runupData[0].injuries",
        title: "Number of Injuries",
        minThreshold: validationConstants.numberOfInjuries.min,
        maxThreshold: validationConstants.numberOfInjuries.max,
        validMessage: "Invalid Number of Injuries"
      },
      {
        model: ".tsunami.runupData[0].injuriesAmountOrder",
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
        model: ".tsunami.runupData[0].missing",
        title: "Number of Missing",
        minThreshold: validationConstants.numberOfDeaths.min,
        maxThreshold: validationConstants.numberOfDeaths.max,
        validMessage: "Invalid Number of Missing"
      },
      {
        model: ".tsunami.runupData[0].missingAmountOrder",
        title: "Missing Description",
        minThreshold: validationConstants.deathDescription.min,
        maxThreshold: validationConstants.deathDescription.max,
        validMessage: "Invalid Missing Description"
      }
    ]
  },
  {
    type: "MULTIMINMAX",
    title: "Houses Damaged",
    data: [
      {
        model: ".tsunami.runupData[0].housesDamaged",
        title: "Number of Houses Damaged",
        minThreshold: validationConstants.numberOfHousesDestroyed.min,
        maxThreshold: validationConstants.numberOfHousesDestroyed.max,
        validMessage: "Invalid Number of Houses Damaged"
      },
      {
        model: ".tsunami.runupData[0].housesDamagedAmountOrder",
        title: "Houses Damaged Description",
        minThreshold: validationConstants.housesDestroyedDescription.min,
        maxThreshold: validationConstants.housesDestroyedDescription.max,
        validMessage: "Invalid Houses Damaged Description"
      }
    ]
  },
  {
    type: "TEXTAREA",
    title: "Comments",
    model: ".tsunami.runupData[0].comments",
    id: ".tsunami.runupData[0].comments",
  }
];



export {
  DateAndLocation,
  Effects,
  Measurements
}