package com.idb_backend.mvp.domain.model;

public class TsunamiEventViewNonPersist {
  private int id;
  private Integer year;
  private Integer month;
  private Integer day;
  private Integer hour;
  private Integer minute;
  private Float second;
  private String country;
  private Integer eventValidity;
  private Integer causeCode;
  private Float eqMagnitude;
  private String locationName;
  private Float latitude;
  private Float longitude;
  private Float maxEventRunup;
  private Integer numRunup;
  private Float tsMtAbe;
  private Float tsMtIi;
  private Float tsIntensity;
  private Integer deaths;
  private Integer deathsAmountOrder;
  private Integer missing;
  private Integer missingAmountOrder;
  private Integer injuries;
  private Integer injuriesAmountOrder;
  private Float damageMillionsDollars;
  private Integer damageAmountOrder;
  private Integer housesDestroyed;
  private Integer housesAmountOrder;
  private Integer housesDamaged;
  private Integer housesDamagedAmountOrder;
  private Integer deathsTotal;
  private Integer deathsAmountOrderTotal;
  private Integer missingTotal;
  private Integer missingAmountOrderTotal;
  private Integer injuriesTotal;
  private Integer injuriesAmountOrderTotal;
  private Float damageMillionsDollarsTotal;
  private Integer damageAmountOrderTotal;
  private Integer housesDestroyedTotal;
  private Integer housesAmountOrderTotal;
  private Integer housesDamagedTotal;
  private Integer housesDamAmountOrderTotal;

  public TsunamiEventViewNonPersist(
       int id, Integer year, Integer month, Integer day, Integer hour, Integer minute, Float second, String country,
      Integer eventValidity, Integer causeCode, Float eqMagnitude, String locationName, Float latitude, Float longitude,
      Float maxEventRunup, Integer numRunup, Float tsMtAbe, Float tsMtIi, Float tsIntensity, Integer deaths,
      Integer deathsAmountOrder, Integer missing, Integer missingAmountOrder, Integer injuries,
      Integer injuriesAmountOrder, Float damageMillionsDollars, Integer damageAmountOrder, Integer housesDestroyed,
      Integer housesAmountOrder, Integer housesDamaged, Integer housesDamagedAmountOrder, Integer deathsTotal,
      Integer deathsAmountOrderTotal, Integer missingTotal, Integer missingAmountOrderTotal, Integer injuriesTotal,
      Integer injuriesAmountOrderTotal, Float damageMillionsDollarsTotal, Integer damageAmountOrderTotal,
      Integer housesDestroyedTotal, Integer housesAmountOrderTotal, Integer housesDamagedTotal,
      Integer housesDamAmountOrderTotal
  ){
    this.id = id;
    this.year = year;
    this.month = month;
    this.day = day;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
    this.country = country;
    this.eventValidity = eventValidity;
    this.causeCode = causeCode;
    this.eqMagnitude = eqMagnitude;
    this.locationName = locationName;
    this.latitude = latitude;
    this.longitude = longitude;
    this.maxEventRunup = maxEventRunup;
    this.numRunup = numRunup;
    this.tsMtAbe = tsMtAbe;
    this.tsMtIi = tsMtIi;
    this.tsIntensity = tsIntensity;
    this.deaths = deaths;
    this.deathsAmountOrder = deathsAmountOrder;
    this.missing = missing;
    this.missingAmountOrder = missingAmountOrder;
    this.injuries = injuries;
    this.injuriesAmountOrder = injuriesAmountOrder;
    this.damageMillionsDollars = damageMillionsDollars;
    this.damageAmountOrder = damageAmountOrder;
    this.housesDestroyed = housesDestroyed;
    this.housesAmountOrder = housesAmountOrder;
    this.housesDamaged = housesDamaged;
    this.housesDamagedAmountOrder = housesDamagedAmountOrder;
    this.deathsTotal = deathsTotal;
    this.deathsAmountOrderTotal = deathsAmountOrderTotal;
    this.missingTotal = missingTotal;
    this.missingAmountOrderTotal = missingAmountOrderTotal;
    this.injuriesTotal = injuriesTotal;
    this.injuriesAmountOrderTotal = injuriesAmountOrderTotal;
    this.damageMillionsDollarsTotal = damageMillionsDollarsTotal;
    this.damageAmountOrderTotal = damageAmountOrderTotal;
    this.housesDestroyedTotal = housesDestroyedTotal;
    this.housesAmountOrderTotal = housesAmountOrderTotal;
    this.housesDamagedTotal = housesDamagedTotal;
    this.housesDamAmountOrderTotal = housesDamAmountOrderTotal;
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

  public Integer getMinute() {
    return minute;
  }

  public void setMinute(Integer minute) {
    this.minute = minute;
  }

//
  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
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

  public Float getMaxEventRunup() {
    return maxEventRunup;
  }

  public void setMaxEventRunup(Float maxEventRunup) {
    this.maxEventRunup = maxEventRunup;
  }

  public Integer getNumRunup() {
    return numRunup;
  }

  public void setNumRunup(Integer numRunup) {
    this.numRunup = numRunup;
  }

  public Float getTsMtAbe() {
    return tsMtAbe;
  }

  public void setTsMtAbe(Float tsMtAbe) {
    this.tsMtAbe = tsMtAbe;
  }

  public Float getTsMtIi() {
    return tsMtIi;
  }

  public void setTsMtIi(Float tsMtIi) {
    this.tsMtIi = tsMtIi;
  }

  public Float getTsIntensity() {
    return tsIntensity;
  }

  public void setTsIntensity(Float tsIntensity) {
    this.tsIntensity = tsIntensity;
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

  public Integer getDeathsTotal() {
    return deathsTotal;
  }

  public void setDeathsTotal(Integer deathsTotal) {
    this.deathsTotal = deathsTotal;
  }

  public Integer getDeathsAmountOrderTotal() {
    return deathsAmountOrderTotal;
  }

  public void setDeathsAmountOrderTotal(Integer deathsAmountOrderTotal) {
    this.deathsAmountOrderTotal = deathsAmountOrderTotal;
  }

  public Integer getMissingTotal() {
    return missingTotal;
  }

  public void setMissingTotal(Integer missingTotal) {
    this.missingTotal = missingTotal;
  }

  public Integer getMissingAmountOrderTotal() {
    return missingAmountOrderTotal;
  }

  public void setMissingAmountOrderTotal(Integer missingAmountOrderTotal) {
    this.missingAmountOrderTotal = missingAmountOrderTotal;
  }

  public Integer getInjuriesTotal() {
    return injuriesTotal;
  }

  public void setInjuriesTotal(Integer injuriesTotal) {
    this.injuriesTotal = injuriesTotal;
  }

  public Integer getInjuriesAmountOrderTotal() {
    return injuriesAmountOrderTotal;
  }

  public void setInjuriesAmountOrderTotal(Integer injuriesAmountOrderTotal) {
    this.injuriesAmountOrderTotal = injuriesAmountOrderTotal;
  }

  public Float getDamageMillionsDollarsTotal() {
    return damageMillionsDollarsTotal;
  }

  public void setDamageMillionsDollarsTotal(Float damageMillionsDollarsTotal) {
    this.damageMillionsDollarsTotal = damageMillionsDollarsTotal;
  }

  public Integer getDamageAmountOrderTotal() {
    return damageAmountOrderTotal;
  }

  public void setDamageAmountOrderTotal(Integer damageAmountOrderTotal) {
    this.damageAmountOrderTotal = damageAmountOrderTotal;
  }

  public Integer getHousesDestroyedTotal() {
    return housesDestroyedTotal;
  }

  public void setHousesDestroyedTotal(Integer housesDestroyedTotal) {
    this.housesDestroyedTotal = housesDestroyedTotal;
  }

  public Integer getHousesAmountOrderTotal() {
    return housesAmountOrderTotal;
  }

  public void setHousesAmountOrderTotal(Integer housesAmountOrderTotal) {
    this.housesAmountOrderTotal = housesAmountOrderTotal;
  }

  public Integer getHousesDamagedTotal() {
    return housesDamagedTotal;
  }

  public void setHousesDamagedTotal(Integer housesDamagedTotal) {
    this.housesDamagedTotal = housesDamagedTotal;
  }

  public Integer getHousesDamAmountOrderTotal() {
    return housesDamAmountOrderTotal;
  }

  public void setHousesDamAmountOrderTotal(Integer housesDamAmountOrderTotal) {
    this.housesDamAmountOrderTotal = housesDamAmountOrderTotal;
  }


  public Float getSecond() {
    return second;
  }

  public void setSecond(Float second) {
    this.second = second;
  }
}
