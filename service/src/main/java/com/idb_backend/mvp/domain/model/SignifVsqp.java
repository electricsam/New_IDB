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
@Entity
@Table
public class SignifVsqp implements Serializable{

  @Id
  private Integer id;
  private String flagDuplicate;

  private Integer year;

  @Transient
  private Integer minYear;

  @Transient
  private Integer maxYear;

  private Integer month;
  private Integer day;
  private Integer hour;
  private Integer minute;
  private Double second;

  private Double latitude;

  @Transient
  private Double minLatitude;

  @Transient
  private Double maxLatitude;

  private Double longitude;

  @Transient
  private Double minLongitude;

  @Transient
  private Double maxLongitude;

  private String locationName;
  private String area;
  private String country;
  private Integer regionCode;

  private Integer eqDepth;

  @Transient
  private Integer minEqDepth;

  @Transient
  private Integer maxEqDepth;

  private Double eqMagUnk;
  private Double eqMagMb;
  private Double eqMagMs;
  private Double eqMagMw;
  private Double eqMagMl;
  private Double eqMagMfa;

  private Double eqMagnitude;

  @Transient
  private Double minEqMagnitude;

  @Transient
  private Double maxEqMagnitude;

  private String intensity;

  @Transient
  private String minIntensity;

  @Transient
  private String maxIntensity;

  private Double damageMillionsDollars;

  @Transient
  private Double minDamageMillionsDollars;

  @Transient
  private Double maxDamageMillionsDollars;

  private Integer damageAmountOrder;

  @Transient
  private Integer minDamageAmountOrder;

  @Transient
  private Integer maxDamageAmountOrder;

  private Integer deaths;

  @Transient
  private Integer minDeaths;

  @Transient
  private Integer maxDeaths;

  private Integer deathsAmountOrder;

  @Transient
  private Integer minDeathsAmountOrder;

  @Transient
  private Integer maxDeathsAmountOrder;

  private Integer injuries;
  private Integer injuriesAmountOrder;
  private Integer missing;
  private Integer missingAmountOrder;
  private Integer housesDestroyed;
  private Integer housesAmountOrder;

  private Integer deathsTotal;

  @Transient
  private Integer minDeathsTotal;

  @Transient
  private Integer maxDeathsTotal;

  private Integer deathsAmountOrderTotal;

  @Transient
  private Integer minDeathsAmountOrderTotal;

  @Transient
  private Integer maxDeathsAmountOrderTotal;

  private Integer injuriesTotal;
  private Integer injuriesAmountOrderTotal;
  private Integer missingTotal;
  private Integer missingAmountOrderTotal;
  private Double damageMillionsDollarsTotal;
  private Integer damageAmountOrderTotal;
  private Integer housesDestroyedTotal;
  private Integer housesAmountOrderTotal;
  private String flagTsunami;
  private String flagVolEvent;
  private java.sql.Date ngdcDate;
  private Integer temporalAccuracy;
  private String hasRef;
  /*idRef will likely be a mapping relationship (onetomany or manytoone)*/
  private Integer idRef;
  private String slidesUrl;
  private Integer numSlides;
  /*mapSlideId will likely be a mapping relationship (onetomany or manytoone)*/
  private Integer mapSlideId;
  /*mapTsunamiId will likely be a mapping relationship (onetomany or manytoone)*/
  private Integer mapTsunamiId;
  private String comments;
  private BigInteger objectid;
  private Geometry shape;
  private Integer housesDamaged;
  private Integer housesDamagedTotal;
  private Integer housesDamagedAmountOrder;
  private Integer housesDamAmountOrderTotal;

  public Double getMinLatitude() {
    return minLatitude;
  }

  public void setMinLatitude(Double minLatitude) {
    this.minLatitude = minLatitude;
  }

  public Double getMaxLatitude() {
    return maxLatitude;
  }

  public void setMaxLatitude(Double maxLatitude) {
    this.maxLatitude = maxLatitude;
  }

  public Double getMinLongitude() {
    return minLongitude;
  }

  public void setMinLongitude(Double minLongitude) {
    this.minLongitude = minLongitude;
  }

  public Double getMaxLongitude() {
    return maxLongitude;
  }

  public void setMaxLongitude(Double maxLongitude) {
    this.maxLongitude = maxLongitude;
  }

  public Integer getMinYear() {
    return minYear;
  }

  public void setMinYear(Integer minYear) {
    this.minYear = minYear;
  }

  public Integer getMaxYear() {
    return maxYear;
  }

  public void setMaxYear(Integer maxYear) {
    this.maxYear = maxYear;
  }

  public Integer getMinEqDepth() {
    return minEqDepth;
  }

  public void setMinEqDepth(Integer minEqDepth) {
    this.minEqDepth = minEqDepth;
  }

  public Integer getMaxEqDepth() {
    return maxEqDepth;
  }

  public void setMaxEqDepth(Integer maxEqDepth) {
    this.maxEqDepth = maxEqDepth;
  }

  public Double getMinEqMagnitude() {
    return minEqMagnitude;
  }

  public void setMinEqMagnitude(Double minEqMagnitude) {
    this.minEqMagnitude = minEqMagnitude;
  }

  public Double getMaxEqMagnitude() {
    return maxEqMagnitude;
  }

  public void setMaxEqMagnitude(Double maxEqMagnitude) {
    this.maxEqMagnitude = maxEqMagnitude;
  }

  public String getMinIntensity() {
    return minIntensity;
  }

  public void setMinIntensity(String minIntensity) {
    this.minIntensity = minIntensity;
  }

  public String getMaxIntensity() {
    return maxIntensity;
  }

  public void setMaxIntensity(String maxIntensity) {
    this.maxIntensity = maxIntensity;
  }

  public Double getMinDamageMillionsDollars() {
    return minDamageMillionsDollars;
  }

  public void setMinDamageMillionsDollars(Double minDamageMillionsDollars) {
    this.minDamageMillionsDollars = minDamageMillionsDollars;
  }

  public Double getMaxDamageMillionsDollars() {
    return maxDamageMillionsDollars;
  }

  public void setMaxDamageMillionsDollars(Double maxDamageMillionsDollars) {
    this.maxDamageMillionsDollars = maxDamageMillionsDollars;
  }

  public Integer getMinDamageAmountOrder() {
    return minDamageAmountOrder;
  }

  public void setMinDamageAmountOrder(Integer minDamageAmountOrder) {
    this.minDamageAmountOrder = minDamageAmountOrder;
  }

  public Integer getMaxDamageAmountOrder() {
    return maxDamageAmountOrder;
  }

  public void setMaxDamageAmountOrder(Integer maxDamageAmountOrder) {
    this.maxDamageAmountOrder = maxDamageAmountOrder;
  }

  public Integer getMinDeaths() {
    return minDeaths;
  }

  public void setMinDeaths(Integer minDeaths) {
    this.minDeaths = minDeaths;
  }

  public Integer getMaxDeaths() {
    return maxDeaths;
  }

  public void setMaxDeaths(Integer maxDeaths) {
    this.maxDeaths = maxDeaths;
  }

  public Integer getMinDeathsAmountOrder() {
    return minDeathsAmountOrder;
  }

  public void setMinDeathsAmountOrder(Integer minDeathsAmountOrder) {
    this.minDeathsAmountOrder = minDeathsAmountOrder;
  }

  public Integer getMaxDeathsAmountOrder() {
    return maxDeathsAmountOrder;
  }

  public void setMaxDeathsAmountOrder(Integer maxDeathsAmountOrder) {
    this.maxDeathsAmountOrder = maxDeathsAmountOrder;
  }

  public Integer getMinDeathsTotal() {
    return minDeathsTotal;
  }

  public void setMinDeathsTotal(Integer minDeathsTotal) {
    this.minDeathsTotal = minDeathsTotal;
  }

  public Integer getMaxDeathsTotal() {
    return maxDeathsTotal;
  }

  public void setMaxDeathsTotal(Integer maxDeathsTotal) {
    this.maxDeathsTotal = maxDeathsTotal;
  }

  public Integer getMinDeathsAmountOrderTotal() {
    return minDeathsAmountOrderTotal;
  }

  public void setMinDeathsAmountOrderTotal(Integer minDeathsAmountOrderTotal) {
    this.minDeathsAmountOrderTotal = minDeathsAmountOrderTotal;
  }

  public Integer getMaxDeathsAmountOrderTotal() {
    return maxDeathsAmountOrderTotal;
  }

  public void setMaxDeathsAmountOrderTotal(Integer maxDeathsAmountOrderTotal) {
    this.maxDeathsAmountOrderTotal = maxDeathsAmountOrderTotal;
  }

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

  public Integer getRegionCode() {
    return regionCode;
  }

  public void setRegionCode(Integer regionCode) {
    this.regionCode = regionCode;
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

  public Double getEqMagnitude() {
    return eqMagnitude;
  }

  public void setEqMagnitude(Double eqMagnitude) {
    this.eqMagnitude = eqMagnitude;
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

  public String getFlagTsunami() {
    return flagTsunami;
  }

  public void setFlagTsunami(String flagTsunami) {
    this.flagTsunami = flagTsunami;
  }

  public String getFlagVolEvent() {
    return flagVolEvent;
  }

  public void setFlagVolEvent(String flagVolEvent) {
    this.flagVolEvent = flagVolEvent;
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

  public String getHasRef() {
    return hasRef;
  }

  public void setHasRef(String hasRef) {
    this.hasRef = hasRef;
  }

  public Integer getIdRef() {
    return idRef;
  }

  public void setIdRef(Integer idRef) {
    this.idRef = idRef;
  }

  public String getSlidesUrl() {
    return slidesUrl;
  }

  public void setSlidesUrl(String slidesUrl) {
    this.slidesUrl = slidesUrl;
  }

  public Integer getNumSlides() {
    return numSlides;
  }

  public void setNumSlides(Integer numSlides) {
    this.numSlides = numSlides;
  }

  public Integer getMapSlideId() {
    return mapSlideId;
  }

  public void setMapSlideId(Integer mapSlideId) {
    this.mapSlideId = mapSlideId;
  }

  public Integer getMapTsunamiId() {
    return mapTsunamiId;
  }

  public void setMapTsunamiId(Integer mapTsunamiId) {
    this.mapTsunamiId = mapTsunamiId;
  }

  public String getComments() {
    return comments;
  }

  public void setComments(String comments) {
    this.comments = comments;
  }

  public BigInteger getObjectid() {
    return objectid;
  }

  public void setObjectid(BigInteger objectid) {
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
}
