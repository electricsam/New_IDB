package com.idb_backend.mvp.domain.model;

import com.vividsolutions.jts.geom.Geometry;

import java.util.Date;

public class TsunamiRunupViewNonPersist {
  private int id;
  private Integer year;
  private Integer month;
  private Integer day;
  private Integer hour;
  private Float second;
  private Integer arrDay;
  private Integer arrHour;
  private Integer arrMin;
  private Integer travHours;
  private Integer travMins;
  private Float period;
  private String firstMotion;
  private Float latitude;
  private Float longitude;
  private String locationName;
  private String area;
  private String country;
  private Integer regionCode;
  private Float runupHt;
  private Float runupHoriz;
  private Integer typeOfMeasurementId;
  private Float damageMillionsDollars;
  private Integer damageAmountOrder;
  private Integer housesDestroyed;
  private Integer housesAmountOrder;
  private Integer deaths;
  private Integer deathsAmountOrder;
  private Integer injuries;
  private Integer injuriesAmountOrder;
  private Date ngdcDate;
  private Integer temporalAccuracy;
  private Long objectId;
  private Geometry shape;
  private String comments;
  private Date lastUpdate;
  private Integer missing;
  private Integer missingAmountOrder;
  private String doubtful;
  private Character flagLocChk;
  private Character flagRunupChk;
  private Character flagArrvTravTimeChk;
  private Character flagEffectsChk;
  private String tideNetwork;
  private String flagEditNatwc;
  private Integer waveArrTravHoursCalc;
  private Integer waveArrTravMinsCalc;
  private Integer waveArrHt;
  private Integer maxWaveArrDay;
  private Integer maxWaveArrHour;
  private Integer getMaxWaveArrMin;
  private Integer maxWaveNum;
  private Float predTravHours;
  private Integer predTravMins;
  private Integer housesDamaged;
  private Integer housesDamagedAmountOrder;
  private Integer eventValidity;
  private Integer causeCode;
  private Float eqMagnitude;
  private Integer distFromSource;

  public TsunamiRunupViewNonPersist(
      int id,
      Integer year,
      Integer month,
      Integer day,
      Integer hour,
      Float second,
      Integer eventValidity,
      Integer causeCode,
      Float eqMagnitude,
      String country,
      String area,
      String locationName,
      Float latitude,
      Float longitude,
      Integer distFromSource,
      Integer arrDay,
      Integer arrHour,
      Integer arrMin,
      Integer travHours,
      Integer travMins,
      Float runupHt,
      Float runupHoriz,
      Integer typeOfMeasurementId,
      Float period,
      String firstMotion,
      Integer deaths,
      Integer deathsAmountOrder,
      Integer injuries,
      Integer injuriesAmountOrder,
      Float damageMillionsDollars,
      Integer damageAmountOrder,
      Integer housesDestroyed,
      Integer housesAmountOrder,
      Integer housesDamaged,
      Integer housesDamagedAmountOrder
  ){
    this.id = id;
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.second = second;
    this.eventValidity = eventValidity;
    this.causeCode = causeCode;
    this.eqMagnitude = eqMagnitude;
    this.country = country;
    this.area = area;
    this.locationName = locationName;
    this.latitude = latitude;
    this.longitude = longitude;
    this.distFromSource = distFromSource;
    this.arrDay = arrDay;
    this.arrHour = arrHour;
    this.arrMin = arrMin;
    this.travHours = travHours;
    this.travMins = travMins;
    this.runupHt = runupHt;
    this.runupHoriz = runupHoriz;
    this.typeOfMeasurementId = typeOfMeasurementId;
    this.period = period;
    this.firstMotion = firstMotion;
    this.deaths = deaths;
    this.deathsAmountOrder = deathsAmountOrder;
    this.injuries = injuries;
    this.injuriesAmountOrder = injuriesAmountOrder;
    this.damageMillionsDollars = damageMillionsDollars;
    this.damageAmountOrder = damageAmountOrder;
    this.housesDestroyed = housesDestroyed;
    this.housesAmountOrder = housesAmountOrder;
    this.housesDamaged = housesDamaged;
    this.housesDamagedAmountOrder = housesDamagedAmountOrder;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
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

  public Integer getHour() {
    return hour;
  }

  public void setHour(Integer hour) {
    this.hour = hour;
  }

  public Float getSecond() {
    return second;
  }

  public void setSecond(Float second) {
    this.second = second;
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

  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
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

  public Geometry getShape() {
    return shape;
  }

  public void setShape(Geometry shape) {
    this.shape = shape;
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

  public Integer getEventValidity() {
    return eventValidity;
  }

  public void setEventValidity(Integer eventValidity) {
    this.eventValidity = eventValidity;
  }

  public Integer getCauseCode() {
    return causeCode;
  }

  public void setCauseCode(Integer causeCode) {
    this.causeCode = causeCode;
  }

  public Float getEqMagnitude() {
    return eqMagnitude;
  }

  public void setEqMagnitude(Float eqMagnitude) {
    this.eqMagnitude = eqMagnitude;
  }

  public Integer getDistFromSource() {
    return distFromSource;
  }

  public void setDistFromSource(Integer distFromSource) {
    this.distFromSource = distFromSource;
  }
}
