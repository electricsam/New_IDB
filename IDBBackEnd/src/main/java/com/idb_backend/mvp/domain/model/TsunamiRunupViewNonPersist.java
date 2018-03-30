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
  private Integer eventValidity;
  private Integer causeCode;
  private Float eqMagnitude;
  private String country;
  private String area;
  private String locationName;
  private Float latitude;
  private Float longitude;
  private Integer distFromSource;
  private Integer arrDay;
  private Integer arrHour;
  private Integer arrMin;
  private Integer travHours;
  private Integer travMins;
  private Float runupHt;
  private Float runupHoriz;
  private Integer typeOfMeasurementId;
  private Float period;
  private String firstMotion;
  private Integer deaths;
  private Integer deathsAmountOrder;
  private Integer injuries;
  private Integer injuriesAmountOrder;
  private Float damageMillionsDollars;
  private Integer damageAmountOrder;
  private Integer housesDestroyed;
  private Integer housesAmountOrder;
  private Integer housesDamaged;
  private Integer housesDamagedAmountOrder;
  private Integer eventId;

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
      Integer housesDamagedAmountOrder,
      Integer eventId
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
    this.eventId = eventId;
  }

  public Integer getEventId() {
    return eventId;
  }

  public void setEventId(Integer eventId) {
    this.eventId = eventId;
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

  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public String getArea() {
    return area;
  }

  public void setArea(String area) {
    this.area = area;
  }

  public String getLocationName() {
    return locationName;
  }

  public void setLocationName(String locationName) {
    this.locationName = locationName;
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

  public Integer getDistFromSource() {
    return distFromSource;
  }

  public void setDistFromSource(Integer distFromSource) {
    this.distFromSource = distFromSource;
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
}
