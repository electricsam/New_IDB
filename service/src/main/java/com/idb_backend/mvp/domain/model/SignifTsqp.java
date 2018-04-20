package com.idb_backend.mvp.domain.model;

import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "SIGNIF_TSQP")
@Table(name = "SIGNIF_TSQP")
public class SignifTsqp {

  @Id
  private String id;

  private String flagDuplicate;
  private String year;
  private String month;
  private String day;
  private String hour;
  private String minute;
  private String second;
  private String latitude;
  private String longitude;
  private String locationName;
  private String area;
  private String country;
  private String eqDepth;
  private String eqMagUnk;
  private String eqMagMb;
  private String eqMagMs;
  private String eqMagMw;
  private String intensity;
  private String damageMillionsDollars;
  private String damageAmountOrder;
  private String deaths;
  private String deathsAmountOrder;
  private String injuries;
  private String injuriesAmountOrder;
  private String flagTsunami;
  private java.sql.Date ngdcDate;
  private String temporalAccuracy;
  private String objectid;
  private Geometry shape;
  private String comments;
  private String housesDestroyed;
  private String housesAmountOrder;
  private String tsuId;
  private java.sql.Date lastUpdate;
  private String deathsTotal;
  private String deathsAmountOrderTotal;
  private String injuriesTotal;
  private String injuriesAmountOrderTotal;
  private String damageMillionsDollarsTotal;
  private String damageAmountOrderTotal;
  private String housesDestroyedTotal;
  private String housesAmountOrderTotal;
  private String missing;
  private String missingAmountOrder;
  private String missingTotal;
  private String missingAmountOrderTotal;
  private String eqMagMl;
  private String eqMagMfa;
  private String flagEpicenterChk;
  private String flagMagnitudeChk;
  private String flagEffectsChk;
  private String regionCode;
  private String housesDamaged;
  private String housesDamagedTotal;
  private String housesDamagedAmountOrder;
  private String housesDamAmountOrderTotal;
  private String publish;
  private String previousState;


  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public String getFlagDuplicate() {
    return flagDuplicate;
  }

  public void setFlagDuplicate(String flagDuplicate) {
    this.flagDuplicate = flagDuplicate;
  }


  public String getYear() {
    return year;
  }

  public void setYear(String year) {
    this.year = year;
  }


  public String getMonth() {
    return month;
  }

  public void setMonth(String month) {
    this.month = month;
  }


  public String getDay() {
    return day;
  }

  public void setDay(String day) {
    this.day = day;
  }


  public String getHour() {
    return hour;
  }

  public void setHour(String hour) {
    this.hour = hour;
  }


  public String getMinute() {
    return minute;
  }

  public void setMinute(String minute) {
    this.minute = minute;
  }


  public String getSecond() {
    return second;
  }

  public void setSecond(String second) {
    this.second = second;
  }


  public String getLatitude() {
    return latitude;
  }

  public void setLatitude(String latitude) {
    this.latitude = latitude;
  }


  public String getLongitude() {
    return longitude;
  }

  public void setLongitude(String longitude) {
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


  public String getEqDepth() {
    return eqDepth;
  }

  public void setEqDepth(String eqDepth) {
    this.eqDepth = eqDepth;
  }


  public String getEqMagUnk() {
    return eqMagUnk;
  }

  public void setEqMagUnk(String eqMagUnk) {
    this.eqMagUnk = eqMagUnk;
  }


  public String getEqMagMb() {
    return eqMagMb;
  }

  public void setEqMagMb(String eqMagMb) {
    this.eqMagMb = eqMagMb;
  }


  public String getEqMagMs() {
    return eqMagMs;
  }

  public void setEqMagMs(String eqMagMs) {
    this.eqMagMs = eqMagMs;
  }


  public String getEqMagMw() {
    return eqMagMw;
  }

  public void setEqMagMw(String eqMagMw) {
    this.eqMagMw = eqMagMw;
  }


  public String getIntensity() {
    return intensity;
  }

  public void setIntensity(String intensity) {
    this.intensity = intensity;
  }


  public String getDamageMillionsDollars() {
    return damageMillionsDollars;
  }

  public void setDamageMillionsDollars(String damageMillionsDollars) {
    this.damageMillionsDollars = damageMillionsDollars;
  }


  public String getDamageAmountOrder() {
    return damageAmountOrder;
  }

  public void setDamageAmountOrder(String damageAmountOrder) {
    this.damageAmountOrder = damageAmountOrder;
  }


  public String getDeaths() {
    return deaths;
  }

  public void setDeaths(String deaths) {
    this.deaths = deaths;
  }


  public String getDeathsAmountOrder() {
    return deathsAmountOrder;
  }

  public void setDeathsAmountOrder(String deathsAmountOrder) {
    this.deathsAmountOrder = deathsAmountOrder;
  }


  public String getInjuries() {
    return injuries;
  }

  public void setInjuries(String injuries) {
    this.injuries = injuries;
  }


  public String getInjuriesAmountOrder() {
    return injuriesAmountOrder;
  }

  public void setInjuriesAmountOrder(String injuriesAmountOrder) {
    this.injuriesAmountOrder = injuriesAmountOrder;
  }


  public String getFlagTsunami() {
    return flagTsunami;
  }

  public void setFlagTsunami(String flagTsunami) {
    this.flagTsunami = flagTsunami;
  }


  public java.sql.Date getNgdcDate() {
    return ngdcDate;
  }

  public void setNgdcDate(java.sql.Date ngdcDate) {
    this.ngdcDate = ngdcDate;
  }


  public String getTemporalAccuracy() {
    return temporalAccuracy;
  }

  public void setTemporalAccuracy(String temporalAccuracy) {
    this.temporalAccuracy = temporalAccuracy;
  }


  public String getObjectid() {
    return objectid;
  }

  public void setObjectid(String objectid) {
    this.objectid = objectid;
  }


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


  public String getComments() {
    return comments;
  }

  public void setComments(String comments) {
    this.comments = comments;
  }


  public String getHousesDestroyed() {
    return housesDestroyed;
  }

  public void setHousesDestroyed(String housesDestroyed) {
    this.housesDestroyed = housesDestroyed;
  }


  public String getHousesAmountOrder() {
    return housesAmountOrder;
  }

  public void setHousesAmountOrder(String housesAmountOrder) {
    this.housesAmountOrder = housesAmountOrder;
  }


  public String getTsuId() {
    return tsuId;
  }

  public void setTsuId(String tsuId) {
    this.tsuId = tsuId;
  }


  public java.sql.Date getLastUpdate() {
    return lastUpdate;
  }

  public void setLastUpdate(java.sql.Date lastUpdate) {
    this.lastUpdate = lastUpdate;
  }


  public String getDeathsTotal() {
    return deathsTotal;
  }

  public void setDeathsTotal(String deathsTotal) {
    this.deathsTotal = deathsTotal;
  }


  public String getDeathsAmountOrderTotal() {
    return deathsAmountOrderTotal;
  }

  public void setDeathsAmountOrderTotal(String deathsAmountOrderTotal) {
    this.deathsAmountOrderTotal = deathsAmountOrderTotal;
  }


  public String getInjuriesTotal() {
    return injuriesTotal;
  }

  public void setInjuriesTotal(String injuriesTotal) {
    this.injuriesTotal = injuriesTotal;
  }


  public String getInjuriesAmountOrderTotal() {
    return injuriesAmountOrderTotal;
  }

  public void setInjuriesAmountOrderTotal(String injuriesAmountOrderTotal) {
    this.injuriesAmountOrderTotal = injuriesAmountOrderTotal;
  }


  public String getDamageMillionsDollarsTotal() {
    return damageMillionsDollarsTotal;
  }

  public void setDamageMillionsDollarsTotal(String damageMillionsDollarsTotal) {
    this.damageMillionsDollarsTotal = damageMillionsDollarsTotal;
  }


  public String getDamageAmountOrderTotal() {
    return damageAmountOrderTotal;
  }

  public void setDamageAmountOrderTotal(String damageAmountOrderTotal) {
    this.damageAmountOrderTotal = damageAmountOrderTotal;
  }


  public String getHousesDestroyedTotal() {
    return housesDestroyedTotal;
  }

  public void setHousesDestroyedTotal(String housesDestroyedTotal) {
    this.housesDestroyedTotal = housesDestroyedTotal;
  }


  public String getHousesAmountOrderTotal() {
    return housesAmountOrderTotal;
  }

  public void setHousesAmountOrderTotal(String housesAmountOrderTotal) {
    this.housesAmountOrderTotal = housesAmountOrderTotal;
  }


  public String getMissing() {
    return missing;
  }

  public void setMissing(String missing) {
    this.missing = missing;
  }


  public String getMissingAmountOrder() {
    return missingAmountOrder;
  }

  public void setMissingAmountOrder(String missingAmountOrder) {
    this.missingAmountOrder = missingAmountOrder;
  }


  public String getMissingTotal() {
    return missingTotal;
  }

  public void setMissingTotal(String missingTotal) {
    this.missingTotal = missingTotal;
  }


  public String getMissingAmountOrderTotal() {
    return missingAmountOrderTotal;
  }

  public void setMissingAmountOrderTotal(String missingAmountOrderTotal) {
    this.missingAmountOrderTotal = missingAmountOrderTotal;
  }


  public String getEqMagMl() {
    return eqMagMl;
  }

  public void setEqMagMl(String eqMagMl) {
    this.eqMagMl = eqMagMl;
  }


  public String getEqMagMfa() {
    return eqMagMfa;
  }

  public void setEqMagMfa(String eqMagMfa) {
    this.eqMagMfa = eqMagMfa;
  }


  public String getFlagEpicenterChk() {
    return flagEpicenterChk;
  }

  public void setFlagEpicenterChk(String flagEpicenterChk) {
    this.flagEpicenterChk = flagEpicenterChk;
  }


  public String getFlagMagnitudeChk() {
    return flagMagnitudeChk;
  }

  public void setFlagMagnitudeChk(String flagMagnitudeChk) {
    this.flagMagnitudeChk = flagMagnitudeChk;
  }


  public String getFlagEffectsChk() {
    return flagEffectsChk;
  }

  public void setFlagEffectsChk(String flagEffectsChk) {
    this.flagEffectsChk = flagEffectsChk;
  }


  public String getRegionCode() {
    return regionCode;
  }

  public void setRegionCode(String regionCode) {
    this.regionCode = regionCode;
  }


  public String getHousesDamaged() {
    return housesDamaged;
  }

  public void setHousesDamaged(String housesDamaged) {
    this.housesDamaged = housesDamaged;
  }


  public String getHousesDamagedTotal() {
    return housesDamagedTotal;
  }

  public void setHousesDamagedTotal(String housesDamagedTotal) {
    this.housesDamagedTotal = housesDamagedTotal;
  }


  public String getHousesDamagedAmountOrder() {
    return housesDamagedAmountOrder;
  }

  public void setHousesDamagedAmountOrder(String housesDamagedAmountOrder) {
    this.housesDamagedAmountOrder = housesDamagedAmountOrder;
  }


  public String getHousesDamAmountOrderTotal() {
    return housesDamAmountOrderTotal;
  }

  public void setHousesDamAmountOrderTotal(String housesDamAmountOrderTotal) {
    this.housesDamAmountOrderTotal = housesDamAmountOrderTotal;
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
