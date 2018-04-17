package com.idb_backend.mvp.service;

public class Constants {
  public static final int minYear = -2000;
  public static final int maxYear = 3000;
  public static final int minMonth = 1;
  public static final int maxMonth = 12;
  public static final int minDay = 1;
  public static final int maxDay = 31;
  public static final int minHour = 0;
  public static final int maxHour = 23;
  public static final int minMin = 0;
  public static final int maxMin = 59;
  public static final String minPeriod = "0";
  public static final String maxPeriod = "180";
  public static final int minHoriz = 0;
  public static final int maxHoriz = 10000;
  public static final double minSec = 0;
  public static final double maxSec = 59.9;
  public static final float minTsMt = -20;
  public static final float maxTsMt = 20;
  public static final int minValidity = -1;
  public static final int maxValidity = 4;
  public static final int minCause = 0;
  public static final int maxCause = 11;
  public static final double eqMagMin = 0;
  public static final double eqMagMax = 9.5;
  public static final int travelTimeMin = 0;
  public static final int travelTimeMax = 60;
  public static final int travelMinuteMin = 0;
  public static final int travelMinuteMax = 59;
  public static final int runupDistanceMin = 0;
  public static final int runupDistanceMax = 20000;
  public static final int numRunupsMin = 0;
  public static final int numRunupsMax = 1042;
  public static final int latMin = -90;
  public static final int latMax = 90;
  public static final int longMin = -180;
  public static final int longMax = 180;
  public static final int minWaterHt = 0;
  public static final int maxWaterHt = 800;
  public static final int measureTypeMin = 1;
  public static final int measureTypeMax = 10;
  public static final int deathsMin = 0;
  public static final int deathsMax = 300000;
  public static final int injuriesMin = 0;
  public static final int injuriesMax = 20000;
  public static final int housesDestroyedMin = 0;
  public static final int housesDestroyedMax = 32000;
  public static final int damageMillionsMin = 0;
  public static final int damageMillionsMax = 4500;
  public static final int rnpHousesMin = 0;
  public static final int rnpHouseMax = 250000;
  public static final int descripMin = 0;
  public static final int descripMax = 4;
  public static final int rnpInjuryMin = 0;
  public static final int rnpInjuryMax = 1000;
  public static final int[] regions = {
      30, 40, 50, 60, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89
  };
  public static final String[] countries = {
      "ALBANIA", "ALGERIA", "ANTARCTICA", "ANTIGUA AND BARBUDA", "ATLANTIC OCEAN", "AUSTRALIA","BALTIC SEA",
      "BANGLADESH","BULGARIA","CANADA","CHILE","CHINA","COLOMBIA","CONGO","COOK ISLANDS", "COSTA RICA",
      "CROATIA","CUBA","CYPRUS", "CYPRUS ISLAND","DEAD SEA","DENMARK","DOMINICAN REPUBLIC","EAST CHINA SEA",
      "ECUADOR","EGYPT","EL SALVADOR", "ERITREA","FIJI","FRANCE","FRENCH POLYNESIA","GEORGIA","GERMANY","GHANA",
      "GREECE","GREENLAND", "GUADELOUPE (FRENCH TERRITORY)","GUATEMALA","HAITI","HOLLAND","HONDURAS", "ICELAND",
      "INDIA","INDONESIA","IRAN", "IRELAND","IRISH SEA","ISRAEL","ITALY","JAMAICA","JAPAN","JORDAN","KENYA",
      "KERMADEC ISLANDS","KOREA","LEBANON", "MARSHALL ISLANDS, REP. OF","MARTINIQUE (FRENCH TERRITORY)",
      "MEXICO","MICRONESIA, FED. STATES OF","MONTSERRAT", "MOROCCO","MYANMAR (BURMA)","NAURU","NEPAL",
      "NETHERLANDS","NEW CALEDONIA","NEW ZEALAND","NICARAGUA","NORTH KOREA", "NORTH SEA",
      "NORTHWEST PACIFIC OCEAN","NORWAY","PACIFIC OCEAN","PAKISTAN","PANAMA","PAPUA NEW GUINEA","PERU",
      "PHILIPPINES", "PORTUGAL", "RUSSIA", "SAINT VINCENT AND THE GRENADINES", "SAMOA", "SCOTLAND",
      "SERBIA AND MONTENEGRO", "SOLOMON ISLANDS", "SOUTH AFRICA", "SOUTH KOREA", "SPAIN", "SRI LANKA", "SUDAN",
      "SWEDEN", "SWITZERLAND", "SYRIA", "TAIWAN", "TOGO", "TONGA", "TRINIDAD AND TOBAGO", "TUNISIA", "TURKEY",
      "TURKMENISTAN", "UK", "UK TERRITORY", "UKRAINE", "URUGUAY", "USA", "USA TERRITORY", "VANUATU", "VENEZUELA",
      "WALLIS AND FUTUNA (FRENCH TERRITORY)"
  };
  public static final String[] areas = {
      "ACEH", "AICHI", "AK", "AKITA", "AL", "AOMORI", "AR", "AS", "AZ", "BALI", "BANGKA-BELITUNG", "BANTEN",
      "BC", "BENGKULU", "BONIN IS, TOKYO", "CA", "CENTRAL JAVA", "CENTRAL SULAWESI", "CHIBA", "CO", "CT", "DC", "DE",
      "EAST JAVA", "EAST NUSA TENGGARA", "EHIME", "FL", "FM", "FUKUI", "FUKUOKA", "FUKUSHIMA", "GA", "GIFU",
      "GORONTALO", "GU", "GUMMA", "HI", "HIROSHIMA", "HOKKAIDO", "HYOGO", "IA", "IBARAKI", "ID", "IL", "IN", "ISHIKAWA",
      "IWATE", "IZU-OSHIMA, TOKYO", "JAKARTA", "KAGAWA", "KAGOSHIMA", "KANAGAWA", "KOCHI", "KS", "KUMAMOTO", "KY",
      "KYOTO", "LA", "LAMPUNG", "MA", "MALUKU", "MD", "ME", "MH", "MI", "MIE", "MIYAGI", "MIYAZAKI", "MN", "MO", "MP",
      "MS", "MT", "NAGANO", "NAGASAKI", "NARA", "NC", "ND", "NE", "NH", "NIIGATA", "NJ", "NL", "NM", "NORTH MALUKU",
      "NORTH SULAWESI", "NORTH SUMATRA", "NS", "NV", "NY", "OH", "OITA", "OK", "OKAYAMA", "OKINAWA",
      "OKUSHIRI IS, HOKKAIDO", "OR", "OSAKA", "PA", "PAPUA", "PR", "PW", "RI", "RIAU", "SAGA", "SAITAMA", "SC", "SD",
      "SHIGA", "SHIMANE", "SHIZUOKA", "SOUTH EAST SULAWESI", "SOUTH KALIMANTAN", "SOUTH SULAWESI", "SUNDA STRAIT", "TN",
      "TOKUSHIMA", "TOKUSIMA", "TOKYO", "TOTTORI", "TOYAMA", "TSHIBA", "TX", "UT", "VA", "VI", "VT", "WA", "WAKAYAMA",
      "WEST JAVA", "WEST KALIMANTAN", "WEST NUSA TENGGARA", "WEST PAPUA", "WEST SULAWESI", "WEST SUMATRA", "WESTJAVA",
      "WI", "WV", "WY", "YAMAGATA", "YAMAGUCHI", "YOGYAKARTA"
  };

  public static int getMinHoriz() {
    return minHoriz;
  }

  public static int getMaxHoriz() {
    return maxHoriz;
  }

  public static String getMinPeriod() {
    return minPeriod;
  }

  public static String getMaxPeriod() {
    return maxPeriod;
  }

  public static int getTravelMinuteMin() {
    return travelMinuteMin;
  }

  public static int getTravelMinuteMax() {
    return travelMinuteMax;
  }

  public static float getMinTsMt() {
    return minTsMt;
  }

  public static float getMaxTsMt() {
    return maxTsMt;
  }

  public static int getMinMin() {
    return minMin;
  }

  public static int getMaxMin() {
    return maxMin;
  }

  public static double getMinSec() {
    return minSec;
  }

  public static double getMaxSec() {
    return maxSec;
  }

  public static int getMinHour() {
    return minHour;
  }

  public static int getMaxHour() {
    return maxHour;
  }

  public static int getMinDay() {
    return minDay;
  }

  public static int getMaxDay() {
    return maxDay;
  }

  public static int getMinMonth() {
    return minMonth;
  }

  public static int getMaxMonth() {
    return maxMonth;
  }

  public static int getRnpHousesMin() {
    return rnpHousesMin;
  }

  public static int getRnpHouseMax() {
    return rnpHouseMax;
  }

  public static int getRnpInjuryMin() {
    return rnpInjuryMin;
  }

  public static int getRnpInjuryMax() {
    return rnpInjuryMax;
  }

  public static int getDescripMin() {
    return descripMin;
  }

  public static int getDescripMax() {
    return descripMax;
  }

  public static int getHousesDestroyedMin() {
    return housesDestroyedMin;
  }

  public static int getHousesDestroyedMax() {
    return housesDestroyedMax;
  }

  public static int getInjuriesMin() {
    return injuriesMin;
  }

  public static int getInjuriesMax() {
    return injuriesMax;
  }

  public static int getNumRunupsMin() {
    return numRunupsMin;
  }

  public static int getNumRunupsMax() {
    return numRunupsMax;
  }

  public static int getTravelTimeMin() {
    return travelTimeMin;
  }

  public static int getTravelTimeMax() {
    return travelTimeMax;
  }

  public static double getEqMagMin() {
    return eqMagMin;
  }

  public static double getEqMagMax() {
    return eqMagMax;
  }

  public static String[] getAreas() {
    return areas;
  }

  public static int getMinValidity() {
    return minValidity;
  }

  public static int getMaxValidity() {
    return maxValidity;
  }

  public static int getMinCause() {
    return minCause;
  }

  public static int getMaxCause() {
    return maxCause;
  }

  public static int getMinYear() {
    return minYear;
  }

  public static int getMaxYear() {
    return maxYear;
  }

  public static int getRunupDistanceMin() {
    return runupDistanceMin;
  }

  public static int getRunupDistanceMax() {
    return runupDistanceMax;
  }

  public static int getLatMin() {
    return latMin;
  }

  public static int getLatMax() {
    return latMax;
  }

  public static int getLongMin() {
    return longMin;
  }

  public static int getLongMax() {
    return longMax;
  }

  public static int getMinWaterHt() {
    return minWaterHt;
  }

  public static int getMaxWaterHt() {
    return maxWaterHt;
  }

  public static int getMeasureTypeMin() {
    return measureTypeMin;
  }

  public static int getMeasureTypeMax() {
    return measureTypeMax;
  }

  public static int getDeathsMin() {
    return deathsMin;
  }

  public static int getDeathsMax() {
    return deathsMax;
  }

  public static int getDamageMillionsMin() {
    return damageMillionsMin;
  }

  public static int getDamageMillionsMax() {
    return damageMillionsMax;
  }

  public static int[] getRegions() {
    return regions;
  }

  public static String[] getCountries() {
    return countries;
  }
}
