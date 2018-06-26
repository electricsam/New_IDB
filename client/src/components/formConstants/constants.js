const countries = [
  { name: 'Select a Country', value: '' },
  { name: 'ALBANIA', value: 'ALBANIA' },
  { name: 'ALGERIA', value: 'ALGERIA' },
  { name: 'ANTARCTICA', value: 'ANTARCTICA' },
  { name: 'ANTIGUA AND BARBUDA', value: 'ANTIGUA AND BARBUDA' },
  { name: 'ATLANTIC OCEAN', value: 'ATLANTIC OCEAN' },
  { name: 'AUSTRALIA', value: 'AUSTRALIA' },
  { name: 'BALTIC SEA', value: 'BALTIC SEA' },
  { name: 'BANGLADESH', value: 'BANGLADESH' },
  { name: 'BULGARIA', value: 'BULGARIA' },
  { name: 'CANADA', value: 'CANADA' },
  { name: 'CHILE', value: 'CHILE' },
  { name: 'CHINA', value: 'CHINA' },
  { name: 'COLOMBIA', value: 'COLOMBIA' },
  { name: 'CONGO', value: 'CONGO' },
  { name: 'COOK ISLANDS', value: 'COOK ISLANDS' },
  { name: 'COSTA RICA', value: 'COSTA RICA' },
  { name: 'CROATIA', value: 'CROATIA' },
  { name: 'CUBA', value: 'CUBA' },
  { name: 'CYPRUS', value: 'CYPRUS' },
  { name: 'CYPRUS ISLAND', value: 'CYPRUS ISLAND' },
  { name: 'DEAD SEA', value: 'DEAD SEA' },
  { name: 'DENMARK', value: 'DENMARK' },
  { name: 'DOMINICAN REPUBLIC', value: 'DOMINICAN REPUBLIC' },
  { name: 'EAST CHINA SEA', value: 'EAST CHINA SEA' },
  { name: 'ECUADOR', value: 'ECUADOR' },
  { name: 'EGYPT', value: 'EGYPT' },
  { name: 'EL SALVADOR', value: 'EL SALVADOR' },
  { name: 'ERITREA', value: 'ERITREA' },
  { name: 'FIJI', value: 'FIJI' },
  { name: 'FRANCE', value: 'FRANCE' },
  { name: 'FRENCH POLYNESIA', value: 'FRENCH POLYNESIA' },
  { name: 'GEORGIA', value: 'GEORGIA' },
  { name: 'GERMANY', value: 'GERMANY' },
  { name: 'GHANA', value: 'GHANA' },
  { name: 'GREECE', value: 'GREECE' },
  { name: 'GREENLAND', value: 'GREENLAND' },
  { name: 'GUADELOUPE (FRENCH TERRITORY)', value: 'GUADELOUPE (FRENCH TERRITORY)' },
  { name: 'GUATEMALA', value: 'GUATEMALA' },
  { name: 'HAITI', value: 'HAITI' },
  { name: 'HOLLAND', value: 'HOLLAND' },
  { name: 'HONDURAS', value: 'HONDURAS' },
  { name: 'ICELAND', value: 'ICELAND' },
  { name: 'INDIA', value: 'INDIA' },
  { name: 'INDONESIA', value: 'INDONESIA' },
  { name: 'IRAN', value: 'IRAN' },
  { name: 'IRELAND', value: 'IRELAND' },
  { name: 'IRISH SEA', value: 'IRISH SEA' },
  { name: 'ISRAEL', value: 'ISRAEL' },
  { name: 'ITALY', value: 'ITALY' },
  { name: 'JAMAICA', value: 'JAMAICA' },
  { name: 'JAPAN', value: 'JAPAN' },
  { name: 'JORDAN', value: 'JORDAN' },
  { name: 'KENYA', value: 'KENYA' },
  { name: 'KERMADEC ISLANDS', value: 'KERMADEC ISLANDS' },
  { name: 'KOREA', value: 'KOREA' },
  { name: 'LEBANON', value: 'LEBANON' },
  { name: 'MARSHALL ISLANDS, REP. OF', value: 'MARSHALL ISLANDS, REP. OF' },
  { name: 'MARTINIQUE (FRENCH TERRITORY)', value: 'MARTINIQUE (FRENCH TERRITORY)' },
  { name: 'MEXICO', value: 'MEXICO' },
  { name: 'MICRONESIA, FED. STATES OF', value: 'MICRONESIA, FED. STATES OF' },
  { name: 'MONTSERRAT', value: 'MONTSERRAT' },
  { name: 'MOROCCO', value: 'MOROCCO' },
  { name: 'MYANMAR (BURMA)', value: 'MYANMAR (BURMA)' },
  { name: 'NAURU', value: 'NAURU' },
  { name: 'NEPAL', value: 'NEPAL' },
  { name: 'NETHERLANDS', value: 'NETHERLANDS' },
  { name: 'NEW CALEDONIA', value: 'NEW CALEDONIA' },
  { name: 'NEW ZEALAND', value: 'NEW ZEALAND' },
  { name: 'NICARAGUA', value: 'NICARAGUA' },
  { name: 'NORTH KOREA', value: 'NORTH KOREA' },
  { name: 'NORTH SEA', value: 'NORTH SEA' },
  { name: 'NORTHWEST PACIFIC OCEAN', value: 'NORTHWEST PACIFIC OCEAN' },
  { name: 'NORWAY', value: 'NORWAY' },
  { name: 'PACIFIC OCEAN', value: 'PACIFIC OCEAN' },
  { name: 'PAKISTAN', value: 'PAKISTAN' },
  { name: 'PANAMA', value: 'PANAMA' },
  { name: 'PAPUA NEW GUINEA', value: 'PAPUA NEW GUINEA' },
  { name: 'PERU', value: 'PERU' },
  { name: 'PHILIPPINES', value: 'PHILIPPINES' },
  { name: 'PORTUGAL', value: 'PORTUGAL' },
  { name: 'RUSSIA', value: 'RUSSIA' },
  { name: 'SAINT VINCENT AND THE GRENADINES', value: 'SAINT VINCENT AND THE GRENADINES' },
  { name: 'SAMOA', value: 'SAMOA' },
  { name: 'SCOTLAND', value: 'SCOTLAND' },
  { name: 'SERBIA AND MONTENEGRO', value: 'SERBIA AND MONTENEGRO' },
  { name: 'SOLOMON ISLANDS', value: 'SOLOMON ISLANDS' },
  { name: 'SOUTH AFRICA', value: 'SOUTH AFRICA' },
  { name: 'SOUTH KOREA', value: 'SOUTH KOREA' },
  { name: 'SPAIN', value: 'SPAIN' },
  { name: 'SRI LANKA', value: 'SRI LANKA' },
  { name: 'SUDAN', value: 'SUDAN' },
  { name: 'SWEDEN', value: 'SWEDEN' },
  { name: 'SWITZERLAND', value: 'SWITZERLAND' },
  { name: 'SYRIA', value: 'SYRIA' },
  { name: 'TAIWAN', value: 'TAIWAN' },
  { name: 'TOGO', value: 'TOGO' },
  { name: 'TONGA', value: 'TONGA' },
  { name: 'TRINIDAD AND TOBAGO', value: 'TRINIDAD AND TOBAGO' },
  { name: 'TUNISIA', value: 'TUNISIA' },
  { name: 'TURKEY', value: 'TURKEY' },
  { name: 'TURKMENISTAN', value: 'TURKMENISTAN' },
  { name: 'UK', value: 'UK' },
  { name: 'UK TERRITORY', value: 'UK TERRITORY' },
  { name: 'UKRAINE', value: 'UKRAINE' },
  { name: 'URUGUAY', value: 'URUGUAY' },
  { name: 'USA', value: 'USA' },
  { name: 'USA TERRITORY', value: 'USA TERRITORY' },
  { name: 'VANUATU', value: 'VANUATU' },
  { name: 'VENEZUELA', value: 'VENEZUELA' },
  { name: 'WALLIS AND FUTUNA (FRENCH TERRITORY)', value: 'WALLIS AND FUTUNA (FRENCH TERRITORY)' },
];

const states = [
  {
    name: 'Select a State',
    value: '',
  },
  {
    name: 'Alabama',
    value: 'AL',
  },
  {
    name: 'Alaska',
    value: 'AK',
  },
  {
    name: 'American Samoa',
    value: 'AS',
  },
  {
    name: 'Arizona',
    value: 'AZ',
  },
  {
    name: 'Arkansas',
    value: 'AR',
  },
  {
    name: 'California',
    value: 'CA',
  },
  {
    name: 'Colorado',
    value: 'CO',
  },
  {
    name: 'Connecticut',
    value: 'CT',
  },
  {
    name: 'Delaware',
    value: 'DE',
  },
  {
    name: 'District Of Columbia',
    value: 'DC',
  },
  {
    name: 'Federated States Of Micronesia',
    value: 'FM',
  },
  {
    name: 'Florida',
    value: 'FL',
  },
  {
    name: 'Georgia',
    value: 'GA',
  },
  {
    name: 'Guam',
    value: 'GU',
  },
  {
    name: 'Hawaii',
    value: 'HI',
  },
  {
    name: 'Idaho',
    value: 'ID',
  },
  {
    name: 'Illinois',
    value: 'IL',
  },
  {
    name: 'Indiana',
    value: 'IN',
  },
  {
    name: 'Iowa',
    value: 'IA',
  },
  {
    name: 'Kansas',
    value: 'KS',
  },
  {
    name: 'Kentucky',
    value: 'KY',
  },
  {
    name: 'Louisiana',
    value: 'LA',
  },
  {
    name: 'Maine',
    value: 'ME',
  },
  {
    name: 'Marshall Islands',
    value: 'MH',
  },
  {
    name: 'Maryland',
    value: 'MD',
  },
  {
    name: 'Massachusetts',
    value: 'MA',
  },
  {
    name: 'Michigan',
    value: 'MI',
  },
  {
    name: 'Minnesota',
    value: 'MN',
  },
  {
    name: 'Mississippi',
    value: 'MS',
  },
  {
    name: 'Missouri',
    value: 'MO',
  },
  {
    name: 'Montana',
    value: 'MT',
  },
  {
    name: 'Nebraska',
    value: 'NE',
  },
  {
    name: 'Nevada',
    value: 'NV',
  },
  {
    name: 'New Hampshire',
    value: 'NH',
  },
  {
    name: 'New Jersey',
    value: 'NJ',
  },
  {
    name: 'New Mexico',
    value: 'NM',
  },
  {
    name: 'New York',
    value: 'NY',
  },
  {
    name: 'North Carolina',
    value: 'NC',
  },
  {
    name: 'North Dakota',
    value: 'ND',
  },
  {
    name: 'Northern Mariana Islands',
    value: 'MP',
  },
  {
    name: 'Ohio',
    value: 'OH',
  },
  {
    name: 'Oklahoma',
    value: 'OK',
  },
  {
    name: 'Oregon',
    value: 'OR',
  },
  {
    name: 'Palau',
    value: 'PW',
  },
  {
    name: 'Pennsylvania',
    value: 'PA',
  },
  {
    name: 'Puerto Rico',
    value: 'PR',
  },
  {
    name: 'Rhode Island',
    value: 'RI',
  },
  {
    name: 'South Carolina',
    value: 'SC',
  },
  {
    name: 'South Dakota',
    value: 'SD',
  },
  {
    name: 'Tennessee',
    value: 'TN',
  },
  {
    name: 'Texas',
    value: 'TX',
  },
  {
    name: 'Utah',
    value: 'UT',
  },
  {
    name: 'Vermont',
    value: 'VT',
  },
  {
    name: 'Virgin Islands',
    value: 'VI',
  },
  {
    name: 'Virginia',
    value: 'VA',
  },
  {
    name: 'Washington',
    value: 'WA',
  },
  {
    name: 'West Virginia',
    value: 'WV',
  },
  {
    name: 'Wisconsin',
    value: 'WI',
  },
  {
    name: 'Wyoming',
    value: 'WY',
  },
];

const canadianProvince = [
  {
    name: 'Select a Province',
    value: '',
  },
  {
    name: 'British Columbia',
    value: 'BC',
  },
  {
    name: 'Newfoundland',
    value: 'NL',
  },
  {
    name: 'Nova Scotia',
    value: 'NS',
  },
];


const japanesePrefecture = [
  { name: 'Select a Prefecture', value: '' },
  { name: 'AICHI', value: 'AICHI' },
  { name: 'AKITA', value: 'AKITA' },
  { name: 'AOMORI', value: 'AOMORI' },
  { name: 'BONIN IS, TOKYO', value: 'BONIN IS, TOKYO' },
  { name: 'CHIBA', value: 'CHIBA' },
  { name: 'EHIME', value: 'EHIME' },
  { name: 'FUKUI', value: 'FUKUI' },
  { name: 'FUKUOKA', value: 'FUKUOKA' },
  { name: 'FUKUSHIMA', value: 'FUKUSHIMA' },
  { name: 'GIFU', value: 'GIFU' },
  { name: 'GUMMA', value: 'GUMMA' },
  { name: 'HIROSHIMA', value: 'HIROSHIMA' },
  { name: 'HOKKAIDO', value: 'HOKKAIDO' },
  { name: 'HYOGO', value: 'HYOGO' },
  { name: 'IBARAKI', value: 'IBARAKI' },
  { name: 'ISHIKAWA', value: 'ISHIKAWA' },
  { name: 'IWATE', value: 'IWATE' },
  { name: 'IZU-OSHIMA, TOKYO', value: 'IZU-OSHIMA, TOKYO' },
  { name: 'KAGAWA', value: 'KAGAWA' },
  { name: 'KAGOSHIMA', value: 'KAGOSHIMA' },
  { name: 'KANAGAWA', value: 'KANAGAWA' },
  { name: 'KOCHI', value: 'KOCHI' },
  { name: 'KUMAMOTO', value: 'KUMAMOTO' },
  { name: 'KYOTO', value: 'KYOTO' },
  { name: 'MIE', value: 'MIE' },
  { name: 'MIYAGI', value: 'MIYAGI' },
  { name: 'MIYAZAKI', value: 'MIYAZAKI' },
  { name: 'NAGANO', value: 'NAGANO' },
  { name: 'NAGASAKI', value: 'NAGASAKI' },
  { name: 'NARA', value: 'NARA' },
  { name: 'NIIGATA', value: 'NIIGATA' },
  { name: 'OITA', value: 'OITA' },
  { name: 'OKAYAMA', value: 'OKAYAMA' },
  { name: 'OKINAWA', value: 'OKINAWA' },
  { name: 'OKUSHIRI IS, HOKKAIDO', value: 'OKUSHIRI IS, HOKKAIDO' },
  { name: 'OSAKA', value: 'OSAKA' },
  { name: 'SAGA', value: 'SAGA' },
  { name: 'SAITAMA', value: 'SAITAMA' },
  { name: 'SHIGA', value: 'SHIGA' },
  { name: 'SHIMANE', value: 'SHIMANE' },
  { name: 'SHIZUOKA', value: 'SHIZUOKA' },
  { name: 'TOKUSHIMA', value: 'TOKUSHIMA' },
  { name: 'TOKUSIMA', value: 'TOKUSIMA' },
  { name: 'TOKYO', value: 'TOKYO' },
  { name: 'TOTTORI', value: 'TOTTORI' },
  { name: 'TOYAMA', value: 'TOYAMA' },
  { name: 'TSHIBA', value: 'TSHIBA' },
  { name: 'WAKAYAMA', value: 'WAKAYAMA' },
  { name: 'YAMAGATA', value: 'YAMAGATA' },
  { name: 'YAMAGUCHI', value: 'YAMAGUCHI' },
];

const indonesianProvince = [
  { name: 'Select a Province', value: '' },
  { name: 'ACEH', value: 'ACEH' },
  { name: 'BALI', value: 'BALI' },
  { name: 'BANGKA-BELITUNG', value: 'BANGKA-BELITUNG' },
  { name: 'BANTEN', value: 'BANTEN' },
  { name: 'BENGKULU', value: 'BENGKULU' },
  { name: 'CENTRAL JAVA', value: 'CENTRAL JAVA' },
  { name: 'CENTRAL SULAWESI', value: 'CENTRAL SULAWESI' },
  { name: 'EAST JAVA', value: 'EAST JAVA' },
  { name: 'EAST NUSA TENGGARA', value: 'EAST NUSA TENGGARA' },
  { name: 'GORONTALO', value: 'GORONTALO' },
  { name: 'JAKARTA', value: 'JAKARTA' },
  { name: 'LAMPUNG', value: 'LAMPUNG' },
  { name: 'MALUKU', value: 'MALUKU' },
  { name: 'NORTH MALUKU', value: 'NORTH MALUKU' },
  { name: 'NORTH SULAWESI', value: 'NORTH SULAWESI' },
  { name: 'NORTH SUMATRA', value: 'NORTH SUMATRA' },
  { name: 'PAPUA', value: 'PAPUA' },
  { name: 'RIAU', value: 'RIAU' },
  { name: 'SOUTH EAST SULAWESI', value: 'SOUTH EAST SULAWESI' },
  { name: 'SOUTH KALIMANTAN', value: 'SOUTH KALIMANTAN' },
  { name: 'SOUTH SULAWESI', value: 'SOUTH SULAWESI' },
  { name: 'SUNDA STRAIT', value: 'SUNDA STRAIT' },
  { name: 'WEST JAVA', value: 'WEST JAVA' },
  { name: 'WEST KALIMANTAN', value: 'WEST KALIMANTAN' },
  { name: 'WEST NUSA TENGGARA', value: 'WEST NUSA TENGGARA' },
  { name: 'WEST PAPUA', value: 'WEST PAPUA' },
  { name: 'WEST SULAWESI', value: 'WEST SULAWESI' },
  { name: 'WEST SUMATRA', value: 'WEST SUMATRA' },
  { name: 'WESTJAVA', value: 'WESTJAVA' },
  { name: 'YOGYAKARTA', value: 'YOGYAKARTA' },
];


const regions = [
  {
    name: 'Select a Region',
    value: '',
  },
  {
    name: 'West coast of Africa',
    value: 77,
  },
  {
    name: 'Central Africa',
    value: 78,
  },
  {
    name: 'Northeast Atlantic Ocean',
    value: 73,
  },
  {
    name: 'Northwest Atlantic Ocean',
    value: 72,
  },
  {
    name: 'Southeast Atlantic Ocean',
    value: 70,
  },
  {
    name: 'Southwest Atlantic Ocean',
    value: 71,
  },
  {
    name: 'East Coast of United States and Canada',
    value: 75,
  },
  {
    name: 'Gulf of Mexico',
    value: 76,
  },
  {
    name: 'Caribbean Sea',
    value: 74,
  },
  {
    name: 'Black Sea and Caspian Sea',
    value: 40,
  },
  {
    name: 'Mediterranean Sea',
    value: 50,
  },
  {
    name: 'Red Sea and Persian Gulf',
    value: 30,
  },
  {
    name: 'Indian Ocean (including W. Australia and W. Indonesia)',
    value: 60,
  },
  {
    name: 'Alaska (including Aleutian Islands)',
    value: 87,
  },
  {
    name: 'China, North and South Korea, Philippines, Taiwan',
    value: 84,
  },
  {
    name: 'E. Australia, New Zealand, South Pacific Is.',
    value: 81,
  },
  {
    name: 'Hawaii, Johnston Atoll, Midway I',
    value: 80,
  },
  {
    name: 'E. Indonesia and Malaysia',
    value: 83,
  },
  {
    name: 'New Caledonia, New Guinea, Solomon Is., Vanuatu',
    value: 82,
  },
  {
    name: 'Japan',
    value: 85,
  },
  {
    name: 'Kamchatka and Kuril Islands',
    value: 86,
  },
  {
    name: 'West Coast of North and Central America',
    value: 88,
  },
  {
    name: 'West Coast of South America ',
    value: 89,
  },

];

const effectDescriptions = [
  { name: 'None Selected', value: 0 },
  { name: 'Few (1 to 50)', value: 1 },
  { name: 'Some (51 to 100)', value: 2 },
  { name: 'Many (101 to 1000)', value: 3 },
  { name: 'Very Many (> 1000)', value: 4 },
];

const damageMillions = [
  { name: 'None Selected', value: 0 },
  { name: 'Limited (< $1 Million)', value: 1 },
  { name: 'Moderate ($1 to $5 Million)', value: 2 },
  { name: 'Severe (> $5 to $24 Million)', value: 3 },
  { name: 'Extreme (> $24 Million)', value: 4 },
];

const firstMotion = [
  { name: 'None Selected', value: '' },
  { name: 'Rise', value: 'R' },
  { name: 'Fall', value: 'F' },
];

const rnpMeasureType = [
  { name: 'Select a Measurement Type', value: '' },
  { name: 'Eyewitness measurement', value: 1 },
  { name: 'Tide-gauge measurement', value: 2 },
  { name: 'Deep ocean gauge', value: 3 },
  { name: 'Water Height, Post-TsunamiLandingPage survey measurement', value: 4 },
  { name: 'TsunamiRunupDataDisplay Height, Post-TsunamiLandingPage survey measurement', value: 5 },
  { name: 'Atmospheric Pressure Wave', value: 6 },
  { name: 'Seiche', value: 7 },
  { name: 'Water Height in harbor, Post-TsunamiLandingPage survey measurement', value: 8 },
  { name: 'Splash mark, Post-TsunamiLandingPage survey measurement', value: 9 },
  { name: 'Flow Depth, Post-TsunamiLandingPage survey measurement', value: 10 },

];

const referenceHave = [
  { name: 'Select DB Status', value: '' },
  { name: "Don't have", value: null },
  { name: 'Not Available', value: -1 },
  { name: 'Have', value: 1 },
  { name: 'Requested', value: 2 },
  { name: 'Have, data needs to be added to Tsunami DB', value: 3 },
  { name: 'Requested, data needs to be added to Tsunami DB' },
  { name: "Have, all data added and QC'd", value: 5 },
  { name: 'Have, needs to be added to Deposits DB', value: 6 },
  { name: 'Have, checked and no data to enter', value: 7 },
  { name: 'Have the document in analog but not in digital format', value: 8 },
  { name: 'Have, data needs to be added to the Significant Earthquake DB', value: 9 },
];

const volcanoTypes = [

  { name: 'Select Volcano Type', value: '' },
  { name: 'Caldera', value: 'Caldera' },
  { name: 'Cinder cone', value: 'Cinder cone' },
  { name: 'Complex volcano', value: 'Complex volcano' },
  { name: 'Compound volcano', value: 'Compound volcano' },
  { name: 'Crater rows', value: 'Crater rows' },
  { name: 'Fissure vent', value: 'Fissure vent' },
  { name: 'Lava cone', value: 'Lava cone' },
  { name: 'Lava dome', value: 'Lava dome' },
  { name: 'Maar', value: 'Maar' },
  { name: 'Mud volcano', value: 'Mud volcano' },
  { name: 'Pumice cone', value: 'Pumice cone' },
  { name: 'Pyroclastic cone', value: 'Pyroclastic cone' },
  { name: 'Pyroclastic shield', value: 'Pyroclastic shield' },
  { name: 'Shield volcano', value: 'Shield volcano' },
  { name: 'Stratovolcano', value: 'Stratovolcano' },
  { name: 'Subglacial volcano', value: 'Subglacial volcano' },
  { name: 'Submarine volcano', value: 'Submarine volcano' },
  { name: 'Tuff cone', value: 'Tuff cone' },
  { name: 'Volcanic field', value: 'Volcanic field' },
];

const volcanoStatus = [
  { name: 'Select Status', value: '' },
  { name: 'Anthropology', value: 'Anthropology' },
  { name: 'Ar/Ar', value: 'Ar/Ar' },
  { name: 'Dendrochronology', value: 'Dendrochronology' },
  { name: 'Fumarolic', value: 'Fumarolic' },
  { name: 'Historical', value: 'Historical' },
  { name: 'Holocene', value: 'Holocene' },
  { name: 'Holocene?', value: 'Holocene?' },
  { name: 'Hot Springs', value: 'Hot Springs' },
  { name: 'Hydration Rind', value: 'Hydration Rind' },
  { name: 'Hydrophonic', value: 'Hydrophonic' },
  { name: 'Ice Core', value: 'Ice Core' },
  { name: 'K-Ar', value: 'K-Ar' },
  { name: 'Lichenometry', value: 'Lichenometry' },
  { name: 'Magnetism', value: 'Magnetism' },
  { name: 'Pleistocene', value: 'Pleistocene' },
  { name: 'Pleistocene-Fumarol', value: 'Pleistocene-Fumarol' },
  { name: 'Radiocarbon', value: 'Radiocarbon' },
  { name: 'Seismicity', value: 'Seismicity' },
  { name: 'Tephrochronology', value: 'Tephrochronology' },
  { name: 'Uncertain', value: 'Uncertain' },
  { name: 'Uranium-series', value: 'Uranium-series' },
  { name: 'Varve Count', value: 'Varve Count' },
];

const validationConstants = {
  cause: { min: 0, max: 11 },
  year: { min: -2000, max: (new Date()).getFullYear() },
  month: { min: 1, max: 12 },
  day: { min: 1, max: 31 },
  hour: { min: 0, max: 23 },
  minute: { min: 0, max: 59 },
  second: { min: 0, max: 59 },
  validity: { min: -1, max: 4 },
  latitude: { min: -90, max: 90 },
  longitude: { min: -180, max: 180 },
  eqMag: { min: 0.0, max: 9.5 },
  runupDistance: { min: 0, max: 2000 },
  travelTime: { min: 0, max: 60 },
  numberOfRunups: { min: 0, max: 6200 },
  waterHeight: { min: 0, max: 525 },
  horizInnundation: { min: 0, max: 10000 },
  numberOfDeaths: { min: 0, max: 300000 },
  deathDescription: { min: 0, max: 4 },
  numberOfInjuries: { min: 0, max: 20000 },
  injuryDescription: { min: 0, max: 4 },
  damageInMillions: { min: 0, max: 10000 },
  damageDescription: { min: 0, max: 4 },
  numberOfHousesDestroyed: { min: 0, max: 32000 },
  housesDestroyedDescription: { min: 0, max: 4 },
  eqDepth: { min: 0, max: 800 },
  tsMag: { min: -20, max: -20 },
  warningStatus: { min: -1, max: 4 },
  period: { min: 0, max: 180 },
  distanceRnpLoc: { min: 0, max: 20000 },
  runupHt: { min: 0, max: 800 },
  eqIntensity: { min: 0, max: 12 },
  vei: { min: 0, max: 8 },
};

const volcanoAgent = [
  { name: 'Select Agent', value: '' },
  { name: 'Avalance (Debris and landslides', value: 'A' },
  { name: 'Electrical (lightning)', value: 'E' },
  { name: 'Floods (& Jokulhlaups)', value: 'F' },
  { name: 'Gas (emission from eruptive craters as well as fumarolic/solfataric activity)', value: 'G' },
  { name: 'Indirect deaths (disease, starvation, exposure, desolation)', value: 'I' },
  { name: 'Lava Flows', value: 'L' },
  { name: 'Mudflows/Lahars', value: 'M' },
  { name: 'Secondary (post-eruption) mudflows', value: 'm' },
  { name: 'Pyroclastic flows, surges, & direct blasts', value: 'P' },
  { name: 'Seismic, or volcanic earthquake (tectonic earthquake deaths excluded)', value: 'S' },
  { name: 'Tephra (ash, bombs, lapilli, steam blasts.', value: 'T' },
  { name: 'Waves or tsunami', value: 'W' },
];

const timeOfEruption = [
  { name: 'Select Time of Eruption', value: '' },
  { name: '?', value: '?' },
  { name: 'D', value: 'D' },
  { name: 'D1', value: 'D1' },
  { name: 'D2', value: 'D2' },
  { name: 'D3', value: 'D3' },
  { name: 'D4', value: 'D4' },
  { name: 'D5', value: 'D5' },
  { name: 'D6', value: 'D6' },
  { name: 'D7', value: 'D7' },
  { name: 'P', value: 'P' },
  { name: 'Q', value: 'Q' },
  { name: 'U', value: 'U' },
  { name: 'U1', value: 'U1' },
  { name: 'U7', value: 'U7' },
  { name: 'Unknown', value: 'Unknown' },
];


const tsunamiEventColumnDefinitions = {
  year: {
    title: "Year",
    data: "Format +/-yyyy (-is B.C, +is A.D.) \n" +
    "    The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). " +
    "The local date may be one day different.",
    validValues: "-2000 to <Present>"
  },
  month: {
    title: 'Month',
    validValues: '1-12',
    data: "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  day: {
    title: 'Day',
    validValues: '1-31',
    data: "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  hour: {
    title: 'Hr',
    validValues: '0-23',
    data: "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  minute: {
    title: 'Min',
    validValues: '0-59',
    data: "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  second: {
    title: 'Sec',
    validValues: '0-59',
    data: "The Date and Time are given in Universal Coordinated Time (also known as Greenwich Mean Time). The local date may be one day different."
  },
  eventValidity: {
    title: 'Tsunami Event Validity',
    validValues: '-1 to 4',
    data: "Validity of the actual tsunami occurrence is indicated by a numerical rating of the reports of that event:\n" +
    "\n" +
    "4 = definite tsunami\n" +
    "3 = probable tsunami\n" +
    "2 = questionable tsunami\n" +
    "1 = very doubtful tsunami\n" +
    "0 = event that only caused a seiche or disturbance in an inland river\n" +
    "-1 = erroneous entry"
  },
  causeCode: {
    title: 'Tsunami Cause Code',
    validValues: '0 to 11',
    data: "The source of the tsunami:\n" +
    "\n" +
    "0 = Unknown\n" +
    "1 = Earthquake\n" +
    "2 = Questionable Earthquake\n" +
    "3 = Earthquake and Landslide\n" +
    "4 = Volcano and Earthquake\n" +
    "5 = Volcano, Earthquake, and Landslide\n" +
    "6 = Volcano\n" +
    "7 = Volcano and Landslide\n" +
    "8 = Landslide\n" +
    "9 = Meteorological\n" +
    "10 = Explosion\n" +
    "11 = Astronomical Tide"
  },
  eqMagnitude: {
    title: "Earthquake Magnitude",
    validValues: '0.0 to 9.9',
    data: 'The value in this column contains the primary earthquake magnitude. Magnitude measures the energy released at the source of the earthquake. Magnitude is determined from measurements on seismographs. For pre-instrumental events, the magnitudes are derived from intensities. There are several different scales for measuring earthquake magnitudes. The primary magnitude is chosen from the available magnitude scales in this order:\n' +
    '\n'
  },
  relatedVolcano: {
    title: "Volcano",
    data: 'The Volcano link will display additional information in a new browser window if the tsunami was associated with an volcanic eruption. The information may include information such as the VEI index, morphology, and the effects of the eruption.',
    validValues: null
  },
  moreInfo: {
    title: "Additional Tsunami Event Information",
    validValues: null,
    data: 'The Addl Info link will display additional tsunami information in a new browser window. The information may include effects such as the numbers of injuries and houses destroyed, the tsunami magnitude and intensity, warning status, references and comments.'
  },
  country: {
    title: 'Country',
    validValues: null,
    data: 'The Country where the tsunami source occurred (For example enter: Japan or Russia)'
  },
  locationName: {
    title: 'Source Location Name',
    validValues: null,
    data: 'The Country, State, Province or Island where the tsunami source occurred (For example enter: Japan or Honshu)\n' +
    'This is only an approximate geographic location. Events prior to 1900 were not instrumentally located, therefore, the location given is based on the latitude and longitude of the city where the maximum effects occurred. If there are different spellings of a city name the additional names are in parentheses.'
  },
  latitude: {
    title: "Latitude",
    validValues: '-90 to 90',
    data: "Latitude: 0 to 90 (Northern Hemisphere) -90 to 0 (Southern Hemisphere)\n" +
    "\n" +
    "Events prior to 1900 were not instrumentally located, therefore, the location given is based on the latitude and longitude of the city where the maximum effects occurred.\n" +
    "\n" +
    "The event coordinates of over 800 tsunami sources in this database are not known and the latitude and longitude are listed as null. Therefore, to retrieve all the events from a particular country or state, leave the event coordinates search parameter blank and enter the country or select the region name.",
  },
  longitude: {
    title: "Longitude",
    validValues: '-180 to 180',
    data: 'Longitude: 0 to 180 (Eastern Hemisphere) -180 to 0 (Western Hemisphere)\n' +
    '\n' +
    'Events prior to 1900 were not instrumentally located, therefore, the location given is based on the latitude and longitude of the city where the maximum effects occurred.\n' +
    '\n' +
    'The event coordinates of over 800 tsunami sources in this database are not known and the latitude and longitude are listed as null. Therefore, to retrieve all the events from a particular country or state, leave the event coordinates search parameter blank and enter the country or select the region name.'
  },
  maxEventRunup: {
    title: "Maximum Water Height",
    validValues: null,
    data: 'The maximum water height above sea level in meters for this event. If the type of measurement of the runup was a:\n' +
    '\n' +
    'Tide Gauge - half of the maximum height (minus the normal tide)of a tsunami wave recorded at the coast by a tide gauge.\n' +
    'Runup Height - the maximum elevation the wave reaches at the maximum inundation.'
  },
  numRunup: {
    title: "Number of Runups",
    validValues: null,
    data: "The total number of runups link will display the runup locations associated with a particular tsunami event."
  },
  // {
  //   title: "Tsunami Magnitude (Abe)",
  //   validValues: "-5 to 10",
  //   data: "Abe defined two different tsunami magnitude amplitudes. His first tsunami magnitude (1979) is:\n" +
  //   "\n" +
  //   "Mt = logH + B\n" +
  //   "\n" +
  //   "where H is the maximum single crest or trough amplitude of the tsunami waves (in meters) and B a constant. The second definition (1981) is:\n" +
  //   "\n" +
  //   "Mt = logH + alogR + D\n" +
  //   "\n" +
  //   "where R is the distance in km from the earthquake epicenter to the tide station along the shortest oceanic path, and a and D are constants."
  // },
  // {
  //   title: "Tsunami Magnitude (Iida)",
  //   validValues: '-5 to 10',
  //   data: "Tsunami magnitude (M) is defined by Iida and others (1967) as\n" +
  //   "\n" +
  //   "M = log2h, where \"h\" is the maximum runup height of the wave."
  // },
  // {
  //   title: 'Tsunami Intensity',
  //   validValues: '-5 to 10',
  //   data: 'Tsunami intensity is defined by Soloviev and Go (1974) as\n' +
  //   '\n' +
  //   'I = log2(21/2 * h), where "h" is the maximum runup height of the wave.'
  // },
  // {
  //   title: "Number of Deaths",
  //   validValues: null,
  //   data: "If an actual number of deaths due to the tsunami is known, enter a number in this search field. If only a description is available such as \"few\", \"some\", or \"many\", the database can be searched using the search field:Death Description"
  // },
  // {
  //   title: "Description of Deaths from Tsunami",
  //   validValues: '0 to 4',
  //   data: "When a description was found in the historical literature instead of an actual number of deaths, this value was coded and listed in the Deaths De column. If the actual number of deaths was listed, a descriptor was also added for search purposes.\n" +
  //   "\n" +
  //   "0 = None\n" +
  //   "1 = Few (~1 to 50 deaths)\n" +
  //   "2 = Some (~51 to 100 deaths)\n" +
  //   "3 = Many (~101 to 1000 deaths)\n" +
  //   "4 = Very Many (~1001 or more deaths)"
  // },
  // {
  //   title: "Number of Missing from Tsunami",
  //   validValues: null,
  //   data: "Whenever possible, numbers of Missing from the tsunami are listed."
  // },
  // {
  //   title: "Description of Missing from the Tsunami",
  //   validValues: "0 to 4",
  //   data: "When a description was found in the historical literature instead of an actual number of missing, this value was coded and listed in the Missing De column. If the actual number of missing was listed, a descriptor was also added for search purposes.\n" +
  //   "\n" +
  //   "0 = None\n" +
  //   "1 = Few (~1 to 50 missing)\n" +
  //   "2 = Some(~51 to 100 missing)\n" +
  //   "3 = Many (~101 to 1000 missing)\n" +
  //   "4 = Very Many (~1001 or more missing)"
  // },
  // {
  //   title: "Damage in Millions of Dollars from the Tsunami",
  //   validValues: null,
  //   data: "The value in the Damage column should be multiplied by 1,000,000 to obtain the actual dollar amount.\n" +
  //   "\n" +
  //   "If an actual number of dollars in damage due to the tsunami is known, enter a number in this search field. If only a description is available such as \"limited\", \"moderate\", or \"severe\", the database can be searched using the search field:Damage Description\n" +
  //   "\n" +
  //   "When a dollar amount for damage was found in the literature, it was listed in the Damage column in millions of U.S. dollars. The dollar value listed is the value at the time of the event. To convert the damage to current dollar values, please use the Consumer Price Index Calculator. Monetary conversion tables for the time of the event were used to convert foreign currency to U.S. dollars.\n" +
  //   "\n"
  // },
  // {
  //   title: "Description of Damage from the Tsunami",
  //   validValues: "0 to 4",
  //   data: "For those events not offering a monetary evaluation of damage, the following five-level scale was used to classify damage (1990 dollars) and was listed in the Damage De column. If the actual dollar amount of damage was listed, a descriptor was also added for search purposes.\n" +
  //   "\n" +
  //   "0 = NONE\n" +
  //   "1 = LIMITED (roughly corresponding to less than $1 million)\n" +
  //   "2 = MODERATE (~$1 to $5 million)\n" +
  //   "3 = SEVERE (~>$5 to $24 million)\n" +
  //   "4 = EXTREME (~$25 million or more)\n" +
  //   "When possible, a rough estimate was made of the dollar amount of damage based upon the description provided, in order to choose the damage category. In many cases, only a single descriptive term was available. These terms were converted to the damage categories based upon the authors apparent use of the term elsewhere. In the absence of other information, LIMITED is considered synonymous with slight, minor, and light, SEVERE as synonymous with major, extensive, and heavy, and EXTREME as synonymous with catastrophic.\n" +
  //   "\n" +
  //   "Note: The descriptive terms relate approximately to current dollar values."
  // },
  // {
  //   title: "Number of Houses Destroyed by the Tsunami",
  //   validValues: null,
  //   data: "Whenever possible, number of houses destroyed by the tsunami are listed."
  // },
  // {
  //   title: "Description of Houses Destroyed by the Tsunami",
  //   validValues: "0 to 4",
  //   data: "For those events not offering an exact number of houses destroyed, the following four-level scale was used to classify the destruction and was listed in the Houses Destroyed De column. If the actual number of houses destroyed was listed, a descriptor was also added for search purposes.\n" +
  //   "\n" +
  //   "0 = None\n" +
  //   "1 = Few (~1 to 50 houses)\n" +
  //   "2 = Some (~51 to 100 houses)\n" +
  //   "3 = Many (~101 to 1000 houses)\n" +
  //   "4 = Very Many (~1001 or more houses)\n"
  // },
  // {
  //   title: "Number of Houses Damaged by the Tsunami",
  //   validValues: null,
  //   data: "Whenever possible, number of houses damaged by the tsunami are listed."
  // },
  // {
  //   title: "Description of Houses Damaged by the Tsunami",
  //   validValues: "0 to 4",
  //   data: "For those events not offering an exact number of houses damaged, the following four-level scale was used to classify the damage and was listed in the Houses Damaged De column. If the actual number of houses damaged was listed, a descriptor was also added for search purposes.\n" +
  //   "\n" +
  //   "0 = None\n" +
  //   "1 = Few (~1 to 50 houses)\n" +
  //   "2 = Some (~51 to 100 houses)\n" +
  //   "3 = Many (~101 to 1000 houses)\n" +
  //   "4 = Very Many (~1001 or more houses)"
  // }

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
  referenceHave,
  volcanoTypes,
  volcanoStatus,
  timeOfEruption,
  volcanoAgent,
  tsunamiEventColumnDefinitions,
};
