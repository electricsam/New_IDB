const countries = [
  { name: "Select a Country", value: ""},
  { name:'ALBANIA', value: 'ALBANIA'},
  { name:'ALGERIA', value: 'ALGERIA'},
  { name:'ANTARCTICA', value: 'ANTARCTICA'},
  { name:'ANTIGUA AND BARBUDA', value: 'ANTIGUA AND BARBUDA'},
  { name:'ATLANTIC OCEAN', value: 'ATLANTIC OCEAN'},
  { name:'AUSTRALIA', value: 'AUSTRALIA'},
  { name:'BALTIC SEA', value: 'BALTIC SEA'},
  { name:'BANGLADESH', value: 'BANGLADESH'},
  { name:'BULGARIA', value: 'BULGARIA'},
  { name:'CANADA', value: 'CANADA'},
  { name:'CHILE', value: 'CHILE'},
  { name:'CHINA', value: 'CHINA'},
  { name:'COLOMBIA', value: 'COLOMBIA'},
  { name:'CONGO', value: 'CONGO'},
  { name:'COOK ISLANDS', value: 'COOK ISLANDS'},
  { name:'COSTA RICA', value: 'COSTA RICA'},
  { name:'CROATIA', value: 'CROATIA'},
  { name:'CUBA', value: 'CUBA'},
  { name:'CYPRUS', value: 'CYPRUS'},
  { name:'CYPRUS ISLAND', value: 'CYPRUS ISLAND'},
  { name:'DEAD SEA', value: 'DEAD SEA'},
  { name:'DENMARK', value: 'DENMARK'},
  { name:'DOMINICAN REPUBLIC', value: 'DOMINICAN REPUBLIC'},
  { name:'EAST CHINA SEA', value: 'EAST CHINA SEA'},
  { name:'ECUADOR', value: 'ECUADOR'},
  { name:'EGYPT', value: 'EGYPT'},
  { name:'EL SALVADOR', value: 'EL SALVADOR'},
  { name:'ERITREA', value: 'ERITREA'},
  { name:'FIJI', value: 'FIJI'},
  { name:'FRANCE', value: 'FRANCE'},
  { name:'FRENCH POLYNESIA', value: 'FRENCH POLYNESIA'},
  { name:'GEORGIA', value: 'GEORGIA'},
  { name:'GERMANY', value: 'GERMANY'},
  { name:'GHANA', value: 'GHANA'},
  { name:'GREECE', value: 'GREECE'},
  { name:'GREENLAND', value: 'GREENLAND'},
  { name:'GUADELOUPE (FRENCH TERRITORY)', value: 'GUADELOUPE (FRENCH TERRITORY)'},
  { name:'GUATEMALA', value: 'GUATEMALA'},
  { name:'HAITI', value: 'HAITI'},
  { name: 'HOLLAND', value: 'HOLLAND'},
  { name: 'HONDURAS', value: 'HONDURAS'},
  { name: 'ICELAND', value: 'ICELAND'},
  { name: 'INDIA', value: 'INDIA'},
  { name: 'INDONESIA', value: 'INDONESIA'},
  { name: 'IRAN', value: 'IRAN'},
  { name: 'IRELAND', value: 'IRELAND'},
  { name: 'IRISH SEA', value: 'IRISH SEA'},
  { name: 'ISRAEL', value: 'ISRAEL'},
  { name: 'ITALY', value: 'ITALY'},
  { name: 'JAMAICA', value: 'JAMAICA'},
  { name: 'JAPAN', value: 'JAPAN'},
  { name: 'JORDAN', value: 'JORDAN'},
  { name: 'KENYA', value: 'KENYA'},
  { name: 'KERMADEC ISLANDS', value: 'KERMADEC ISLANDS'},
  { name: 'KOREA', value: 'KOREA'},
  { name: 'LEBANON', value: 'LEBANON'},
  { name: 'MARSHALL ISLANDS, REP. OF', value: 'MARSHALL ISLANDS, REP. OF'},
  { name: 'MARTINIQUE (FRENCH TERRITORY)', value: 'MARTINIQUE (FRENCH TERRITORY)'},
  { name: 'MEXICO', value: 'MEXICO'},
  { name: 'MICRONESIA, FED. STATES OF', value: 'MICRONESIA, FED. STATES OF'},
  { name: 'MONTSERRAT', value: 'MONTSERRAT'},
  { name: 'MOROCCO', value: 'MOROCCO'},
  { name: 'MYANMAR (BURMA)', value: 'MYANMAR (BURMA)'},
  { name: 'NAURU', value: 'NAURU'},
  { name: 'NEPAL', value: 'NEPAL'},
  { name: 'NETHERLANDS', value: 'NETHERLANDS'},
  { name: 'NEW CALEDONIA', value: 'NEW CALEDONIA'},
  { name: 'NEW ZEALAND', value: 'NEW ZEALAND'},
  { name: 'NICARAGUA', value: 'NICARAGUA'},
  { name: 'NORTH KOREA', value: 'NORTH KOREA'},
  { name: 'NORTH SEA', value: 'NORTH SEA'},
  { name: 'NORTHWEST PACIFIC OCEAN', value: 'NORTHWEST PACIFIC OCEAN'},
  { name: 'NORWAY', value: 'NORWAY'},
  { name: 'PACIFIC OCEAN', value: 'PACIFIC OCEAN'},
  { name: 'PAKISTAN', value: 'PAKISTAN'},
  { name: 'PANAMA', value: 'PANAMA'},
  { name: 'PAPUA NEW GUINEA', value: 'PAPUA NEW GUINEA'},
  { name: 'PERU', value: 'PERU'},
  { name: 'PHILIPPINES', value: 'PHILIPPINES'},
  { name: 'PORTUGAL', value: 'PORTUGAL'},
  { name: 'RUSSIA', value: 'RUSSIA'},
  { name: 'SAINT VINCENT AND THE GRENADINES', value: 'SAINT VINCENT AND THE GRENADINES'},
  { name: 'SAMOA', value: 'SAMOA'},
  { name: 'SCOTLAND', value: 'SCOTLAND'},
  { name: 'SERBIA AND MONTENEGRO', value: 'SERBIA AND MONTENEGRO'},
  { name: 'SOLOMON ISLANDS', value: 'SOLOMON ISLANDS'},
  { name: 'SOUTH AFRICA', value: 'SOUTH AFRICA'},
  { name: 'SOUTH KOREA', value: 'SOUTH KOREA'},
  { name: 'SPAIN', value: 'SPAIN'},
  { name:'SRI LANKA', value: 'SRI LANKA'},
  { name:'SUDAN', value: 'SUDAN'},
  { name:'SWEDEN', value: 'SWEDEN'},
  { name:'SWITZERLAND', value: 'SWITZERLAND'},
  { name:'SYRIA', value: 'SYRIA'},
  { name:'TAIWAN', value: 'TAIWAN'},
  { name:'TOGO', value: 'TOGO'},
  { name:'TONGA', value: 'TONGA'},
  { name:'TRINIDAD AND TOBAGO', value: 'TRINIDAD AND TOBAGO'},
  { name:'TUNISIA', value: 'TUNISIA'},
  { name:'TURKEY', value: 'TURKEY'},
  { name:'TURKMENISTAN', value: 'TURKMENISTAN'},
  { name:'UK', value: 'UK'},
  { name:'UK TERRITORY', value: 'UK TERRITORY'},
  { name:'UKRAINE', value: 'UKRAINE'},
  { name:'URUGUAY', value: 'URUGUAY'},
  { name:'USA', value: 'USA'},
  { name:'USA TERRITORY', value: 'USA TERRITORY'},
  { name:'VANUATU', value: 'VANUATU'},
  { name:'VENEZUELA', value: 'VENEZUELA'},
  { name:'WALLIS AND FUTUNA (FRENCH TERRITORY)', value: 'WALLIS AND FUTUNA (FRENCH TERRITORY)'},
]

const states = [
  {
    name: "Select a State",
    value: ""
  },
  {
    name: "Alabama",
    value: "AL"
  },
  {
    name: "Alaska",
    value: "AK"
  },
  {
    name: "American Samoa",
    value: "AS"
  },
  {
    name: "Arizona",
    value: "AZ"
  },
  {
    name: "Arkansas",
    value: "AR"
  },
  {
    name: "California",
    value: "CA"
  },
  {
    name: "Colorado",
    value: "CO"
  },
  {
    name: "Connecticut",
    value: "CT"
  },
  {
    name: "Delaware",
    value: "DE"
  },
  {
    name: "District Of Columbia",
    value: "DC"
  },
  {
    name: "Federated States Of Micronesia",
    value: "FM"
  },
  {
    name: "Florida",
    value: "FL"
  },
  {
    name: "Georgia",
    value: "GA"
  },
  {
    name: "Guam",
    value: "GU"
  },
  {
    name: "Hawaii",
    value: "HI"
  },
  {
    name: "Idaho",
    value: "ID"
  },
  {
    name: "Illinois",
    value: "IL"
  },
  {
    name: "Indiana",
    value: "IN"
  },
  {
    name: "Iowa",
    value: "IA"
  },
  {
    name: "Kansas",
    value: "KS"
  },
  {
    name: "Kentucky",
    value: "KY"
  },
  {
    name: "Louisiana",
    value: "LA"
  },
  {
    name: "Maine",
    value: "ME"
  },
  {
    name: "Marshall Islands",
    value: "MH"
  },
  {
    name: "Maryland",
    value: "MD"
  },
  {
    name: "Massachusetts",
    value: "MA"
  },
  {
    name: "Michigan",
    value: "MI"
  },
  {
    name: "Minnesota",
    value: "MN"
  },
  {
    name: "Mississippi",
    value: "MS"
  },
  {
    name: "Missouri",
    value: "MO"
  },
  {
    name: "Montana",
    value: "MT"
  },
  {
    name: "Nebraska",
    value: "NE"
  },
  {
    name: "Nevada",
    value: "NV"
  },
  {
    name: "New Hampshire",
    value: "NH"
  },
  {
    name: "New Jersey",
    value: "NJ"
  },
  {
    name: "New Mexico",
    value: "NM"
  },
  {
    name: "New York",
    value: "NY"
  },
  {
    name: "North Carolina",
    value: "NC"
  },
  {
    name: "North Dakota",
    value: "ND"
  },
  {
    name: "Northern Mariana Islands",
    value: "MP"
  },
  {
    name: "Ohio",
    value: "OH"
  },
  {
    name: "Oklahoma",
    value: "OK"
  },
  {
    name: "Oregon",
    value: "OR"
  },
  {
    name: "Palau",
    value: "PW"
  },
  {
    name: "Pennsylvania",
    value: "PA"
  },
  {
    name: "Puerto Rico",
    value: "PR"
  },
  {
    name: "Rhode Island",
    value: "RI"
  },
  {
    name: "South Carolina",
    value: "SC"
  },
  {
    name: "South Dakota",
    value: "SD"
  },
  {
    name: "Tennessee",
    value: "TN"
  },
  {
    name: "Texas",
    value: "TX"
  },
  {
    name: "Utah",
    value: "UT"
  },
  {
    name: "Vermont",
    value: "VT"
  },
  {
    name: "Virgin Islands",
    value: "VI"
  },
  {
    name: "Virginia",
    value: "VA"
  },
  {
    name: "Washington",
    value: "WA"
  },
  {
    name: "West Virginia",
    value: "WV"
  },
  {
    name: "Wisconsin",
    value: "WI"
  },
  {
    name: "Wyoming",
    value: "WY"
  }
]

const canadianProvince = [
  {
    name: "Select a Province",
    value: ""
  },
  { name: "British Columbia",
    value: "BC"
  },
  {
    name: "Newfoundland",
    value: "NL"
  },
  {
    name: "Nova Scotia",
    value: "NS"
  }
]


const japanesePrefecture = [
  {name: "Select a Prefecture", value: ""},
  { name: 'AICHI', value: 'AICHI'},
  { name: 'AKITA', value: 'AKITA'},
  { name: 'AOMORI', value: 'AOMORI'},
  { name: 'BONIN IS, TOKYO', value: 'BONIN IS, TOKYO'},
  { name: 'CHIBA', value: 'CHIBA'},
  { name: 'EHIME', value: 'EHIME'},
  { name: 'FUKUI', value: 'FUKUI'},
  { name: 'FUKUOKA', value: 'FUKUOKA'},
  { name: 'FUKUSHIMA', value: 'FUKUSHIMA'},
  { name: 'GIFU', value: 'GIFU'},
  { name: 'GUMMA', value: 'GUMMA'},
  { name: 'HIROSHIMA', value: 'HIROSHIMA'},
  { name: 'HOKKAIDO', value: 'HOKKAIDO'},
  { name: 'HYOGO', value: 'HYOGO'},
  { name: 'IBARAKI', value: 'IBARAKI'},
  { name: 'ISHIKAWA', value: 'ISHIKAWA'},
  { name: 'IWATE', value: 'IWATE'},
  { name: 'IZU-OSHIMA, TOKYO', value: 'IZU-OSHIMA, TOKYO'},
  { name: 'KAGAWA', value: 'KAGAWA'},
  { name: 'KAGOSHIMA', value: 'KAGOSHIMA'},
  { name: 'KANAGAWA', value: 'KANAGAWA'},
  { name: 'KOCHI', value: 'KOCHI'},
  { name: 'KUMAMOTO', value: 'KUMAMOTO'},
  { name: 'KYOTO', value: 'KYOTO'},
  { name: 'MIE', value: 'MIE'},
  { name: 'MIYAGI', value: 'MIYAGI'},
  { name: 'MIYAZAKI', value: 'MIYAZAKI'},
  { name: 'NAGANO', value: 'NAGANO'},
  { name: 'NAGASAKI', value: 'NAGASAKI'},
  { name: 'NARA', value: 'NARA'},
  { name: 'NIIGATA', value: 'NIIGATA'},
  { name: 'OITA', value: 'OITA'},
  { name: 'OKAYAMA', value: 'OKAYAMA'},
  { name: 'OKINAWA', value: 'OKINAWA'},
  { name: 'OKUSHIRI IS, HOKKAIDO', value: 'OKUSHIRI IS, HOKKAIDO'},
  { name: 'OSAKA', value: 'OSAKA'},
  { name: 'SAGA', value: 'SAGA'},
  { name: 'SAITAMA', value: 'SAITAMA'},
  { name: 'SHIGA', value: 'SHIGA'},
  { name: 'SHIMANE', value: 'SHIMANE'},
  { name: 'SHIZUOKA', value: 'SHIZUOKA'},
  { name: 'TOKUSHIMA', value: 'TOKUSHIMA'},
  { name: 'TOKUSIMA', value: 'TOKUSIMA'},
  { name: 'TOKYO', value: 'TOKYO'},
  { name: 'TOTTORI', value: 'TOTTORI'},
  { name: 'TOYAMA', value: 'TOYAMA'},
  { name: 'TSHIBA', value: 'TSHIBA'},
  { name: 'WAKAYAMA', value: 'WAKAYAMA'},
  { name: 'YAMAGATA', value: 'YAMAGATA'},
  { name: 'YAMAGUCHI', value: 'YAMAGUCHI'},
]

const indonesianProvince = [
  {name: "Select a Province", value: ""},
  {name: 'ACEH', value: 'ACEH'},
  {name: 'BALI', value: 'BALI'},
  {name: 'BANGKA-BELITUNG', value: 'BANGKA-BELITUNG'},
  {name: 'BANTEN', value: 'BANTEN'},
  {name: 'BENGKULU', value: 'BENGKULU'},
  {name: 'CENTRAL JAVA', value: 'CENTRAL JAVA'},
  {name: 'CENTRAL SULAWESI', value: 'CENTRAL SULAWESI'},
  {name: 'EAST JAVA', value: 'EAST JAVA'},
  {name: 'EAST NUSA TENGGARA', value: 'EAST NUSA TENGGARA'},
  {name: 'GORONTALO', value: 'GORONTALO'},
  {name: 'JAKARTA', value: 'JAKARTA'},
  {name: 'LAMPUNG', value: 'LAMPUNG'},
  {name: 'MALUKU', value: 'MALUKU'},
  {name: 'NORTH MALUKU', value: 'NORTH MALUKU'},
  {name: 'NORTH SULAWESI', value: 'NORTH SULAWESI'},
  {name: 'NORTH SUMATRA', value: 'NORTH SUMATRA'},
  {name: 'PAPUA', value: 'PAPUA'},
  {name: 'RIAU', value: 'RIAU'},
  {name: 'SOUTH EAST SULAWESI', value: 'SOUTH EAST SULAWESI'},
  {name: 'SOUTH KALIMANTAN', value: 'SOUTH KALIMANTAN'},
  {name: 'SOUTH SULAWESI', value: 'SOUTH SULAWESI'},
  {name: 'SUNDA STRAIT', value: 'SUNDA STRAIT'},
  {name: 'WEST JAVA', value: 'WEST JAVA'},
  {name: 'WEST KALIMANTAN', value: 'WEST KALIMANTAN'},
  {name: 'WEST NUSA TENGGARA', value: 'WEST NUSA TENGGARA'},
  {name: 'WEST PAPUA', value: 'WEST PAPUA'},
  {name: 'WEST SULAWESI', value: 'WEST SULAWESI'},
  {name: 'WEST SUMATRA', value: 'WEST SUMATRA'},
  {name: 'WESTJAVA', value: 'WESTJAVA'},
  {name: 'YOGYAKARTA', value: 'YOGYAKARTA'},
]


const regions = [
  {
    name: "Select a Region",
    value: ""
  },
  { name: "West coast of Africa",
    value: 77
  },
  {
    name: "Central Africa",
    value:78
  },
  {
    name: "Northeast Atlantic Ocean",
    value: 73
  },
  {
    name: "Northwest Atlantic Ocean",
    value: 72
  },
  {
    name: "Southeast Atlantic Ocean",
    value: 70
  },
  {
    name: "Southwest Atlantic Ocean",
    value: 71
  },
  {
    name: "East Coast of United States and Canada",
    value: 75
  },
  {
    name: "Gulf of Mexico",
    value: 76
  },
  {
    name: "Caribbean Sea",
    value: 74
  },
  {
    name: "Black Sea and Caspian Sea",
    value: 40
  },
  {
    name: "Mediterranean Sea",
    value: 50
  },
  {
    name: "Red Sea and Persian Gulf",
    value: 30
  },
  {
    name: "Indian Ocean (including W. Australia and W. Indonesia)",
    value: 60
  },
  {
    name: "Alaska (including Aleutian Islands)",
    value: 87
  },
  {
    name: "China, North and South Korea, Philippines, Taiwan",
    value: 84
  },
  {
    name: "E. Australia, New Zealand, South Pacific Is.",
    value: 81
  },
  {
    name: "Hawaii, Johnston Atoll, Midway I",
    value: 80
  },
  {
    name: "E. Indonesia and Malaysia",
    value: 83
  },
  {
    name: "New Caledonia, New Guinea, Solomon Is., Vanuatu",
    value: 82
  },
  {
    name: "Japan",
    value: 85
  },
  {
    name:"Kamchatka and Kuril Islands",
    value: 86
  },
  {
    name: "West Coast of North and Central America",
    value: 88
  },
  {
    name: "West Coast of South America ",
    value: 89
  }

];

const effectDescriptions = [
  {name: "None Selected", value: 0},
  {name: "Few (1 to 50)", value: 1},
  {name: "Some (51 to 100)", value: 2},
  {name: "Many (101 to 1000)", value: 3},
  {name: "Very Many (> 1000)", value: 4},
];

const damageMillions =[
  {name: "None Selected", value: 0},
  {name: "Limited (< $1 Million)", value: 1},
  {name: "Moderate ($1 to $5 Million)", value: 2},
  {name: "Severe (> $5 to $24 Million)", value: 3},
  {name: "Extreme (> $24 Million)", value: 4},
];

const firstMotion = [
  {name: "None Selected", value: ""},
  {name: "Rise", value: "R"},
  {name: "Fall", value: "F"}
];

const runupValidity = [
  {
    name: "Valid"
  }
];


const rnpMeasureType = [
  { name: "Select a Measurement Type", value: ""},
  { name: "Eyewitness measurement", value: 1},
  { name: "Tide-gauge measurement", value: 2},
  { name: "Deep ocean gauge", value: 3},
  { name: "Water Height, Post-tsunami survey measurement", value: 4},
  { name: "Runup Height, Post-tsunami survey measurement", value: 5},
  { name: "Atmospheric Pressure Wave", value: 6},
  { name: "Seiche", value: 7},
  { name: "Water Height in harbor, Post-tsunami survey measurement", value: 8},
  { name: "Splash mark, Post-tsunami survey measurement", value: 9},
  { name: "Flow Depth, Post-tsunami survey measurement", value: 10}

]

const validationConstants = {
  cause: {min: 0, max: 11},
  year: {min: -2000, max: (new Date).getFullYear()},
  month: {min: 1, max: 12},
  //TODO: develope a function that validates num days based on the inputed month;
  day: {min: 1, max: 31},
  hour: {min: 0, max: 24},
  minute: {min: 0, max: 60},
  second: {min:0, max:60},
  validity: {min: -1, max: 4},
  latitude: {min: -90, max: 90},
  longitude: {min: -180, max: 180},
  eqMag: {min: 0.0, max: 9.5},
  runupDistance: {min: 0, max: 2000},
  travelTime: {min: 0, max: 60},
  numberOfRunups: {min: 0, max: 6200},
  waterHeight: {min: 0, max: 525},
  horizInnundation: {min: 0, max: 10000},
  numberOfDeaths: {min: 0, max: 300000},
  deathDescription: {min: 0, max: 4},
  numberOfInjuries: {min: 0, max: 20000},
  injuryDescription: {min: 0, max: 4},
  damageInMillions: {min: 0, max: 10000},
  damageDescription: {min: 0, max: 4},
  numberOfHousesDestroyed:{min: 0, max: 32000},
  housesDestroyedDescription: {min: 0, max: 4},
  eqDepth: {min:0, max:800},
  tsMag: {min: -20, max: -20},
  warningStatus: {min: -1, max: 4},
  period: {min: 0, max: 180},
}

export {
  countries,
  states,
  canadianProvince,
  validationConstants,
  regions,
  indonesianProvince,
  japanesePrefecture,
  rnpMeasureType,
  firstMotion,
  effectDescriptions,
  damageMillions,

}