package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.idb_backend.mvp.domain.annotations.In;
import com.idb_backend.mvp.domain.annotations.InString;
import com.idb_backend.mvp.service.Constants;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Date;

@Entity(name = "TSRUNUP_TSQP")
public class TsunamiRunup {
  @Id
  @Column(name = "ID", nullable = false)
  private int id;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "TSEVENT_ID")
  @JsonIgnore
  private TsunamiEvent tsunamiEvent;

  @Column(name = "YEAR")
  @Min(value = Constants.minYear)
  private Integer year;

  @Column(name = "MONTH")
  @Min(value = Constants.minMonth)
  @Max(value = Constants.maxMonth)
  private Integer month;

  @Column(name = "DAY")
  @Min(value = Constants.minDay)
  @Max(value = Constants.maxDay)
  private Integer day;

  @Column(name = "ARR_DAY")
  @Min(value = Constants.minDay)
  @Max(value = Constants.maxDay)
  private Integer arrDay;

  @Column(name = "ARR_HOUR")
  @Min(value = Constants.minHour)
  @Max(value = Constants.maxHour)
  private Integer arrHour;

  @Column(name = "ARR_MIN")
  @Min(value = Constants.minMin)
  @Max(value = Constants.maxMin)
  private Integer arrMin;

  @Column(name = "TRAV_HOURS")
  @Min(value = Constants.travelTimeMin)
  @Max(value = Constants.travelTimeMax)
  private Integer travHours;

  @Column(name = "TRAV_MINS")
  @Min(value = Constants.travelMinuteMin)
  @Max(value = Constants.travelMinuteMax)
  private Integer travMins;

  @Column(name = "PERIOD")
  @DecimalMin(value = Constants.minPeriod)
  @DecimalMax(value = Constants.maxPeriod)
  private Float period;

  @Column(name = "FIRST_MOTION")
  @Size(min = 1, max = 1)
  @InString(strs = {"F", "R"})
  private String firstMotion;

  @Column(name = "LATITUDE")
  @Min(value = Constants.latMin)
  @Max(value = Constants.latMax)
  private Float latitude;

  @Column(name = "LONGITUDE")
  @Min(value = Constants.longMin)
  @Max(value = Constants.longMax)
  private Float longitude;

  @Column(name = "LOCATION_NAME")
  private String locationName;

  @Column(name = "AREA")
  @InString(strs = {"ACEH", "AICHI", "AK", "AKITA", "AL", "AOMORI", "AR", "AS", "AZ", "BALI", "BANGKA-BELITUNG", "BANTEN",
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
      "WI", "WV", "WY", "YAMAGATA", "YAMAGUCHI", "YOGYAKARTA"})
  private String area;

  @Column(name = "COUNTRY")
  @InString(strs = {
      "ALBANIA", "ALGERIA", "ANTARCTICA", "ANTIGUA AND BARBUDA", "ATLANTIC OCEAN", "AUSTRALIA","BALTIC SEA","BANGLADESH"
      ,"BULGARIA","CANADA","CHILE","CHINA","COLOMBIA","CONGO","COOK ISLANDS", "COSTA RICA","CROATIA","CUBA","CYPRUS",
      "CYPRUS ISLAND","DEAD SEA","DENMARK","DOMINICAN REPUBLIC","EAST CHINA SEA", "ECUADOR","EGYPT","EL SALVADOR",
      "ERITREA","FIJI","FRANCE","FRENCH POLYNESIA","GEORGIA","GERMANY","GHANA","GREECE","GREENLAND",
      "GUADELOUPE (FRENCH TERRITORY)","GUATEMALA","HAITI","HOLLAND","HONDURAS", "ICELAND","INDIA","INDONESIA","IRAN",
      "IRELAND","IRISH SEA","ISRAEL","ITALY","JAMAICA","JAPAN","JORDAN","KENYA","KERMADEC ISLANDS","KOREA","LEBANON",
      "MARSHALL ISLANDS, REP. OF","MARTINIQUE (FRENCH TERRITORY)","MEXICO","MICRONESIA, FED. STATES OF","MONTSERRAT",
      "MOROCCO","MYANMAR (BURMA)","NAURU","NEPAL","NETHERLANDS","NEW CALEDONIA","NEW ZEALAND","NICARAGUA","NORTH KOREA",
      "NORTH SEA","NORTHWEST PACIFIC OCEAN","NORWAY","PACIFIC OCEAN","PAKISTAN","PANAMA","PAPUA NEW GUINEA","PERU",
      "PHILIPPINES", "PORTUGAL", "RUSSIA", "SAINT VINCENT AND THE GRENADINES", "SAMOA", "SCOTLAND",
      "SERBIA AND MONTENEGRO", "SOLOMON ISLANDS", "SOUTH AFRICA", "SOUTH KOREA", "SPAIN", "SRI LANKA", "SUDAN",
      "SWEDEN", "SWITZERLAND", "SYRIA", "TAIWAN", "TOGO", "TONGA", "TRINIDAD AND TOBAGO", "TUNISIA", "TURKEY",
      "TURKMENISTAN", "UK", "UK TERRITORY", "UKRAINE", "URUGUAY", "USA", "USA TERRITORY", "VANUATU", "VENEZUELA",
      "WALLIS AND FUTUNA (FRENCH TERRITORY)"
  })
  private String country;

  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  @Column(name = "REGION_CODE")
  @In(nums = {30, 40, 50, 60, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89})
  private Integer regionCode;

  @Column(name = "RUNUP_HT")
  @Min(value = Constants.minWaterHt)
  @Max(value = Constants.maxWaterHt)
  private Float runupHt;

  @Column(name = "RUNUP_HORIZ")
  @Min(value = Constants.minHoriz)
  @Max(value= Constants.maxHoriz)
  private Float runupHoriz;

  @Column(name = "TYPE_OF_MEASUREMENT_ID")
  @Min(value = Constants.measureTypeMin)
  @Max(value = Constants.measureTypeMax)
  private Integer typeOfMeasurementId;

  @Column(name = "DAMAGE_MILLIONS_DOLLARS")
  @Min(value = 0)
  private Float damageMillionsDollars;

  @Column(name = "DAMAGE_AMOUNT_ORDER")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer damageAmountOrder;

  @Column(name = "HOUSES_DESTROYED")
  @Min(value = 0)
  private Integer housesDestroyed;

  @Column(name = "HOUSES_AMOUNT_ORDER")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesAmountOrder;

  @Column(name = "DEATHS")
  @Min(value = 0)
  private Integer deaths;

  @Column(name = "DEATHS_AMOUNT_ORDER")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer deathsAmountOrder;

  @Column(name = "INJURIES")
  @Min(value = 0)
  private Integer injuries;

  @Column(name = "INJURIES_AMOUNT_ORDER")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer injuriesAmountOrder;

  @Column(name = "NGDC_DATE")
  private Date ngdcDate;

  @Column(name = "TEMPORAL_ACCURACY")
  private Integer temporalAccuracy;

  @Column(name = "OBJECTID")
  private Long objectId;

  public String getShape() {
    if(shape == null){
      return null;
    }else{
      WKTWriter w = new WKTWriter();
      return w.write(shape);
    }
  }

  public void setShape(Geometry shape) {
    this.shape = shape;
  }

  @Column(name = "SHAPE")
  private Geometry shape;

  @Column(name = "COMMENTS")
  private String comments;

  @Column(name = "LAST_UPDATE")
  private Date lastUpdate;

  @Column(name = "MISSING")
  @Min(value = 0)
  private Integer missing;

  @Column(name = "MISSING_AMOUNT_ORDER")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer missingAmountOrder;

  @Column(name = "DOUBTFUL")
//  Need to validate
  private String doubtful;

  @Column(name = "FLAG_LOC_CHK")
  private Character flagLocChk;

  @Column(name = "FLAG_RUNUP_CHK")
  private Character flagRunupChk;

  @Column(name = "FLAG_ARRV_TRAV_TIME_CHK")
  private Character flagArrvTravTimeChk;

  @Column(name = "FLAG_EFFECTS_CHK")
  private Character flagEffectsChk;

  @Column(name = "TIDE_NETWORK")
  private String tideNetwork;

  @Column(name = "FLAG_EDIT_NATWC")
  private String flagEditNatwc;

  @Column(name = "WAVE_ARR_TRAV_HOURS_CALC")
  private Integer waveArrTravHoursCalc;

  @Column(name = "WAVE_ARR_TRAV_MINS_CALC")
  private Integer waveArrTravMinsCalc;

  @Column(name = "WAVE_ARR_HT")
  @Min(value = Constants.minWaterHt)
  @Max(value = Constants.maxWaterHt)
  private Integer waveArrHt;

  @Column(name = "MAX_WAVE_ARR_DAY")
  @Min(value = Constants.minDay)
  @Max(value = Constants.maxDay)
  private Integer maxWaveArrDay;

  @Column(name = "MAX_WAVE_ARR_HOUR")
  @Min(value = Constants.minHour)
  @Max(value = Constants.maxHour)
  private Integer maxWaveArrHour;

  @Column(name = "MAX_WAVE_ARR_MIN")
  @Min(value = Constants.minMin)
  @Max(value = Constants.maxMin)
  private Integer getMaxWaveArrMin;

  @Column(name = "MAX_WAVE_NUM")
  private Integer maxWaveNum;

  @Column(name = "PRED_TRAV_HOURS")
  private Float predTravHours;

  @Column(name = "PRED_TRAV_MINS")
  private Integer predTravMins;

  @Column(name = "HOUSES_DAMAGED")
  @Min(value = 0)
  private Integer housesDamaged;

  @Column(name = "HOUSES_DAMAGED_AMOUNT_ORDER")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesDamagedAmountOrder;

  @Column(name = "PUBLISH")
  private String publish;

  @Column(name = "PREVIOUS_STATE")
  private String previousState;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public TsunamiEvent getTsunamiEvent() {
    return tsunamiEvent;
  }

  public void setTsunamiEvent(TsunamiEvent tsunamiEvent) {
    this.tsunamiEvent = tsunamiEvent;
  }

  public Integer getYear() {
    return year;
  }

  public void setYear(Integer year) {
    this.year = year;
  }

  public Integer getMonth() {
    return month;
  }

  public void setMonth(Integer month) {
    this.month = month;
  }

  public Integer getDay() {
    return day;
  }

  public void setDay(Integer day) {
    this.day = day;
  }

  public Integer getArrDay() {
    return arrDay;
  }

  public void setArrDay(Integer arrDay) {
    this.arrDay = arrDay;
  }

  public Integer getArrHour() {
    return arrHour;
  }

  public void setArrHour(Integer arrHour) {
    this.arrHour = arrHour;
  }

  public Integer getArrMin() {
    return arrMin;
  }

  public void setArrMin(Integer arrMin) {
    this.arrMin = arrMin;
  }

  public Integer getTravHours() {
    return travHours;
  }

  public void setTravHours(Integer travHours) {
    this.travHours = travHours;
  }

  public Integer getTravMins() {
    return travMins;
  }

  public void setTravMins(Integer travMins) {
    this.travMins = travMins;
  }

  public Float getPeriod() {
    return period;
  }

  public void setPeriod(Float period) {
    this.period = period;
  }

  public String getFirstMotion() {
    return firstMotion;
  }

  public void setFirstMotion(String firstMotion) {
    this.firstMotion = firstMotion;
  }

  public Float getLatitude() {
    return latitude;
  }

  public void setLatitude(Float latitude) {
    this.latitude = latitude;
  }

  public Float getLongitude() {
    return longitude;
  }

  public void setLongitude(Float longitude) {
    this.longitude = longitude;
  }

  public String getLocationName() {
    return locationName;
  }

  public void setLocationName(String locationName) {
    this.locationName = locationName;
  }

  public String getArea() {
    return area;
  }

  public void setArea(String area) {
    this.area = area;
  }

  public Integer getRegionCode() {
    return regionCode;
  }

  public void setRegionCode(Integer regionCode) {
    this.regionCode = regionCode;
  }

  public Float getRunupHt() {
    return runupHt;
  }

  public void setRunupHt(Float runupHt) {
    this.runupHt = runupHt;
  }

  public Float getRunupHoriz() {
    return runupHoriz;
  }

  public void setRunupHoriz(Float runupHoriz) {
    this.runupHoriz = runupHoriz;
  }

  public Integer getTypeOfMeasurementId() {
    return typeOfMeasurementId;
  }

  public void setTypeOfMeasurementId(Integer typeOfMeasurementId) {
    this.typeOfMeasurementId = typeOfMeasurementId;
  }

  public Float getDamageMillionsDollars() {
    return damageMillionsDollars;
  }

  public void setDamageMillionsDollars(Float damageMillionsDollars) {
    this.damageMillionsDollars = damageMillionsDollars;
  }

  public Integer getDamageAmountOrder() {
    return damageAmountOrder;
  }

  public void setDamageAmountOrder(Integer damageAmountOrder) {
    this.damageAmountOrder = damageAmountOrder;
  }

  public Integer getHousesDestroyed() {
    return housesDestroyed;
  }

  public void setHousesDestroyed(Integer housesDestroyed) {
    this.housesDestroyed = housesDestroyed;
  }

  public Integer getHousesAmountOrder() {
    return housesAmountOrder;
  }

  public void setHousesAmountOrder(Integer housesAmountOrder) {
    this.housesAmountOrder = housesAmountOrder;
  }

  public Integer getDeaths() {
    return deaths;
  }

  public void setDeaths(Integer deaths) {
    this.deaths = deaths;
  }

  public Integer getDeathsAmountOrder() {
    return deathsAmountOrder;
  }

  public void setDeathsAmountOrder(Integer deathsAmountOrder) {
    this.deathsAmountOrder = deathsAmountOrder;
  }

  public Integer getInjuries() {
    return injuries;
  }

  public void setInjuries(Integer injuries) {
    this.injuries = injuries;
  }

  public Integer getInjuriesAmountOrder() {
    return injuriesAmountOrder;
  }

  public void setInjuriesAmountOrder(Integer injuriesAmountOrder) {
    this.injuriesAmountOrder = injuriesAmountOrder;
  }

  public Date getNgdcDate() {
    return ngdcDate;
  }

  public void setNgdcDate(Date ngdcDate) {
    this.ngdcDate = ngdcDate;
  }

  public Integer getTemporalAccuracy() {
    return temporalAccuracy;
  }

  public void setTemporalAccuracy(Integer temporalAccuracy) {
    this.temporalAccuracy = temporalAccuracy;
  }

  public Long getObjectId() {
    return objectId;
  }

  public void setObjectId(Long objectId) {
    this.objectId = objectId;
  }

  public String getComments() {
    return comments;
  }

  public void setComments(String comments) {
    this.comments = comments;
  }

  public Date getLastUpdate() {
    return lastUpdate;
  }

  public void setLastUpdate(Date lastUpdate) {
    this.lastUpdate = lastUpdate;
  }

  public Integer getMissing() {
    return missing;
  }

  public void setMissing(Integer missing) {
    this.missing = missing;
  }

  public Integer getMissingAmountOrder() {
    return missingAmountOrder;
  }

  public void setMissingAmountOrder(Integer missingAmountOrder) {
    this.missingAmountOrder = missingAmountOrder;
  }

  public String getDoubtful() {
    return doubtful;
  }

  public void setDoubtful(String doubtful) {
    this.doubtful = doubtful;
  }

  public Character getFlagLocChk() {
    return flagLocChk;
  }

  public void setFlagLocChk(Character flagLocChk) {
    this.flagLocChk = flagLocChk;
  }

  public Character getFlagRunupChk() {
    return flagRunupChk;
  }

  public void setFlagRunupChk(Character flagRunupChk) {
    this.flagRunupChk = flagRunupChk;
  }

  public Character getFlagArrvTravTimeChk() {
    return flagArrvTravTimeChk;
  }

  public void setFlagArrvTravTimeChk(Character flagArrvTravTimeChk) {
    this.flagArrvTravTimeChk = flagArrvTravTimeChk;
  }

  public Character getFlagEffectsChk() {
    return flagEffectsChk;
  }

  public void setFlagEffectsChk(Character flagEffectsChk) {
    this.flagEffectsChk = flagEffectsChk;
  }

  public String getTideNetwork() {
    return tideNetwork;
  }

  public void setTideNetwork(String tideNetwork) {
    this.tideNetwork = tideNetwork;
  }

  public String getFlagEditNatwc() {
    return flagEditNatwc;
  }

  public void setFlagEditNatwc(String flagEditNatwc) {
    this.flagEditNatwc = flagEditNatwc;
  }

  public Integer getWaveArrTravHoursCalc() {
    return waveArrTravHoursCalc;
  }

  public void setWaveArrTravHoursCalc(Integer waveArrTravHoursCalc) {
    this.waveArrTravHoursCalc = waveArrTravHoursCalc;
  }

  public Integer getWaveArrTravMinsCalc() {
    return waveArrTravMinsCalc;
  }

  public void setWaveArrTravMinsCalc(Integer waveArrTravMinsCalc) {
    this.waveArrTravMinsCalc = waveArrTravMinsCalc;
  }

  public Integer getWaveArrHt() {
    return waveArrHt;
  }

  public void setWaveArrHt(Integer waveArrHt) {
    this.waveArrHt = waveArrHt;
  }

  public Integer getMaxWaveArrDay() {
    return maxWaveArrDay;
  }

  public void setMaxWaveArrDay(Integer maxWaveArrDay) {
    this.maxWaveArrDay = maxWaveArrDay;
  }

  public Integer getMaxWaveArrHour() {
    return maxWaveArrHour;
  }

  public void setMaxWaveArrHour(Integer maxWaveArrHour) {
    this.maxWaveArrHour = maxWaveArrHour;
  }

  public Integer getGetMaxWaveArrMin() {
    return getMaxWaveArrMin;
  }

  public void setGetMaxWaveArrMin(Integer getMaxWaveArrMin) {
    this.getMaxWaveArrMin = getMaxWaveArrMin;
  }

  public Integer getMaxWaveNum() {
    return maxWaveNum;
  }

  public void setMaxWaveNum(Integer maxWaveNum) {
    this.maxWaveNum = maxWaveNum;
  }

  public Float getPredTravHours() {
    return predTravHours;
  }

  public void setPredTravHours(Float predTravHours) {
    this.predTravHours = predTravHours;
  }

  public Integer getPredTravMins() {
    return predTravMins;
  }

  public void setPredTravMins(Integer predTravMins) {
    this.predTravMins = predTravMins;
  }

  public Integer getHousesDamaged() {
    return housesDamaged;
  }

  public void setHousesDamaged(Integer housesDamaged) {
    this.housesDamaged = housesDamaged;
  }

  public Integer getHousesDamagedAmountOrder() {
    return housesDamagedAmountOrder;
  }

  public void setHousesDamagedAmountOrder(Integer housesDamagedAmountOrder) {
    this.housesDamagedAmountOrder = housesDamagedAmountOrder;
  }

  public String getPublish() {
    return publish;
  }

  public void setPublish(String publish) {
    this.publish = publish;
  }

  public String getPreviousState() {
    return previousState;
  }

  public void setPreviousState(String previousState) {
    this.previousState = previousState;
  }
}

