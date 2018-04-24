package com.idb_backend.mvp.domain.model;

import com.querydsl.core.annotations.QueryEntity;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.io.Serializable;
import java.math.BigInteger;
import java.sql.Date;

@QueryEntity
@Entity(name = "SIGNIF_TSQP")
@Table(name = "SIGNIF_TSQP")
public class SignifTsqp implements Serializable {

  @Id
  private Integer id;

  private String flagDuplicate;
  private Integer year;
  private Integer month;
  private Integer day;
  private Integer hour;
  private Integer minute;
  private Double second;
  private Double latitude;
  private Double longitude;
  private String locationName;
  private String area;
  private String country;
  private Integer eqDepth;
  private Double eqMagUnk;
  private Double eqMagMb;
  private Double eqMagMs;
  private Double eqMagMw;
  private String intensity;
  private Double damageMillionsDollars;
  private Integer damageAmountOrder;
  private Integer deaths;
  private Integer deathsAmountOrder;
  private Integer injuries;
  private Integer injuriesAmountOrder;
  private String flagTsunami;
  private java.sql.Date ngdcDate;
  private String temporalAccuracy;
  private BigInteger objectid;
  private Geometry shape;
  private String comments;
  private Integer housesDestroyed;
  private Integer housesAmountOrder;

  /*This is going to be a onetomany or manytoone relationship*/
  private Integer tsuId;

  private java.sql.Date lastUpdate;
  private Integer deathsTotal;
  private Integer deathsAmountOrderTotal;
  private Integer injuriesTotal;
  private Integer injuriesAmountOrderTotal;
  private Double damageMillionsDollarsTotal;
  private Integer damageAmountOrderTotal;
  private Integer housesDestroyedTotal;
  private Integer housesAmountOrderTotal;
  private Integer missing;
  private Integer missingAmountOrder;
  private Integer missingTotal;
  private Integer missingAmountOrderTotal;
  private Double eqMagMl;
  private Double eqMagMfa;
  private String flagEpicenterChk;
  private String flagMagnitudeChk;
  private String flagEffectsChk;
  private Integer regionCode;
  private Integer housesDamaged;
  private Integer housesDamagedTotal;
  private Integer housesDamagedAmountOrder;
  private Integer housesDamAmountOrderTotal;
  private String publish;
  private String previousState;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getFlagDuplicate() {
    return flagDuplicate;
  }

  public void setFlagDuplicate(String flagDuplicate) {
    this.flagDuplicate = flagDuplicate;
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

  public Double getSecond() {
    return second;
  }

  public void setSecond(Double second) {
    this.second = second;
  }

  public Double getLatitude() {
    return latitude;
  }

  public void setLatitude(Double latitude) {
    this.latitude = latitude;
  }

  public Double getLongitude() {
    return longitude;
  }

  public void setLongitude(Double longitude) {
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

  public Integer getEqDepth() {
    return eqDepth;
  }

  public void setEqDepth(Integer eqDepth) {
    this.eqDepth = eqDepth;
  }

  public Double getEqMagUnk() {
    return eqMagUnk;
  }

  public void setEqMagUnk(Double eqMagUnk) {
    this.eqMagUnk = eqMagUnk;
  }

  public Double getEqMagMb() {
    return eqMagMb;
  }

  public void setEqMagMb(Double eqMagMb) {
    this.eqMagMb = eqMagMb;
  }

  public Double getEqMagMs() {
    return eqMagMs;
  }

  public void setEqMagMs(Double eqMagMs) {
    this.eqMagMs = eqMagMs;
  }

  public Double getEqMagMw() {
    return eqMagMw;
  }

  public void setEqMagMw(Double eqMagMw) {
    this.eqMagMw = eqMagMw;
  }

  public String getIntensity() {
    return intensity;
  }

  public void setIntensity(String intensity) {
    this.intensity = intensity;
  }

  public Double getDamageMillionsDollars() {
    return damageMillionsDollars;
  }

  public void setDamageMillionsDollars(Double damageMillionsDollars) {
    this.damageMillionsDollars = damageMillionsDollars;
  }

  public Integer getDamageAmountOrder() {
    return damageAmountOrder;
  }

  public void setDamageAmountOrder(Integer damageAmountOrder) {
    this.damageAmountOrder = damageAmountOrder;
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

  public String getFlagTsunami() {
    return flagTsunami;
  }

  public void setFlagTsunami(String flagTsunami) {
    this.flagTsunami = flagTsunami;
  }

  public Date getNgdcDate() {
    return ngdcDate;
  }

  public void setNgdcDate(Date ngdcDate) {
    this.ngdcDate = ngdcDate;
  }

  public String getTemporalAccuracy() {
    return temporalAccuracy;
  }

  public void setTemporalAccuracy(String temporalAccuracy) {
    this.temporalAccuracy = temporalAccuracy;
  }

  public BigInteger getObjectid() {
    return objectid;
  }

  public void setObjectid(BigInteger objectid) {
    this.objectid = objectid;
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

  public Integer getTsuId() {
    return tsuId;
  }

  public void setTsuId(Integer tsuId) {
    this.tsuId = tsuId;
  }

  public Date getLastUpdate() {
    return lastUpdate;
  }

  public void setLastUpdate(Date lastUpdate) {
    this.lastUpdate = lastUpdate;
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

  public Double getDamageMillionsDollarsTotal() {
    return damageMillionsDollarsTotal;
  }

  public void setDamageMillionsDollarsTotal(Double damageMillionsDollarsTotal) {
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

  public Double getEqMagMl() {
    return eqMagMl;
  }

  public void setEqMagMl(Double eqMagMl) {
    this.eqMagMl = eqMagMl;
  }

  public Double getEqMagMfa() {
    return eqMagMfa;
  }

  public void setEqMagMfa(Double eqMagMfa) {
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

  public Integer getRegionCode() {
    return regionCode;
  }

  public void setRegionCode(Integer regionCode) {
    this.regionCode = regionCode;
  }

  public Integer getHousesDamaged() {
    return housesDamaged;
  }

  public void setHousesDamaged(Integer housesDamaged) {
    this.housesDamaged = housesDamaged;
  }

  public Integer getHousesDamagedTotal() {
    return housesDamagedTotal;
  }

  public void setHousesDamagedTotal(Integer housesDamagedTotal) {
    this.housesDamagedTotal = housesDamagedTotal;
  }

  public Integer getHousesDamagedAmountOrder() {
    return housesDamagedAmountOrder;
  }

  public void setHousesDamagedAmountOrder(Integer housesDamagedAmountOrder) {
    this.housesDamagedAmountOrder = housesDamagedAmountOrder;
  }

  public Integer getHousesDamAmountOrderTotal() {
    return housesDamAmountOrderTotal;
  }

  public void setHousesDamAmountOrderTotal(Integer housesDamAmountOrderTotal) {
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
