package com.idb_backend.mvp.domain.model;

import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;
import org.hibernate.annotations.Immutable;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity(name = "TSEVENT_VSQP")
@Immutable
public class TsunamiEventView {

  @Id
  @Column(name = "ID", nullable = false)
  private int id;

  @Column(name = "YEAR")
  private Integer year;

  @Column(name = "MONTH")
  private Integer month;

  @Column(name = "DAY")
  private Integer day;

  @Column(name = "SECOND")
  private Float Second;

  @Column(name = "LATITUDE")
  private Float latitude;

  @Column(name = "LONGITUDE")
  private Float longitude;

  @Column(name = "LOCATION_NAME")
  private String locationName;

  @Column(name = "AREA")
  private String area;

  @Column(name = "COUNTRY")
  private String country;

  @Column(name = "REGION_CODE")
  private Integer regionCode;

  @Column(name = "CAUSE_CODE")
  private Integer causeCode;

  @Column(name = "EVENT_VALIDITY")
  private Integer eventValidity;

  @Column(name = "EQ_MAG_UNK")
  private Float eqMagUnk;

  @Column(name = "EQ_MAG_MB")
  private Float eqMagMb;

  @Column(name = "EQ_MAG_MS")
  private Float eqMagMs;

  @Column(name = "EQ_MAG_MW")
  private Float eqMagMw;

  @Column(name = "EQ_MAG_ML")
  private Float eqMagMl;

  @Column(name= "EQ_MAG_MFA")
  private Float eqMagMfa;

  @Column(name = "EQ_MAGNITUDE")
  private Float eqMagnitude;

  @Column(name = "EQ_DEPTH")
  private Integer eqDepth;

  @Column(name = "MAX_EVENT_RUNUP")
  private Float maxEventRunup;

  @Column(name = "TS_MT_ABE")
  private Float tsMtAbe;

  @Column(name = "TS_MT_II")
  private Float tsMtIi;

  @Column(name = "TS_INTENSITY")
  private Float tsIntensity;

  @Column(name = "DAMAGE_MILLIONS_DOLLARS")
  private Float damageMillionsDollars;

  @Column(name = "DAMAGE_AMOUNT_ORDER")
  private Integer damageAmountOrder;

  @Column(name = "HOUSES_DESTROYED")
  private Integer housesDestroyed;

  @Column(name = "HOUSES_AMOUNT_ORDER")
  private Integer housesAmountOrder;

  @Column(name = "DEATHS")
  private Integer deaths;

  @Column(name = "DEATHS_AMOUNT_ORDER")
  private Integer deathsAmountOrder;

  @Column(name = "INJURIES")
  private Integer injuries;

  @Column(name = "INJURIES_AMOUNT_ORDER")
  private Integer injuriesAmountOrder;

  @Column(name = "MISSING")
  private Integer missing;

  //TODO: Default null
  @Column(name = "MISSING_AMOUNT_ORDER")
  private Integer missingAmountOrder;

  @Column(name = "WARNING_STATUS_ID")
  private Integer warningStatusId;

  @Column(name = "COMMENTS")
  private String comments;

  @Column(name = "NGDC_DATE")
  private Date ngdcDate;

  @Column(name = "TEMPORAL_ACCURACY")
  private Integer temporalAccuracy;

  @Column(name = "TSDATE")
  private String tsDate;

  @Column(name = "NUM_RUNUP")
  private Integer numRunup;

  //  TODO: this is a foreign key so add necessary annotations
  @Column(name = "ID_RUNUP")
  private Integer idRunup;

  @Column(name = "HAS_REF")
  private String hasRef;

  //    TODO: this is a foreign key so add necessary annotations
  @Column(name = "ID_REF")
  private Integer idRef;

  @Column(name = "SLIDES_URL")
  private String slidesUrl;

  @Column(name = "NUM_SLIDES")
  private Integer numSlides;

  //  TODO: add annotation for foreign key
  @Column(name = "MAP_SLIDE_ID")
  private Integer mapSlideId;

  //  TODO: add annotation for foreign key
  @Column(name = "MAP_EQ_ID")
  private Integer mapEqId;

  @Column(name = "DAMAGE_MILLIONS_DOLLARS_TOTAL")
  private Float damageMillionsDollarsTotal;

  @Column(name = "DAMAGE_AMOUNT_ORDER_TOTAL")
  private Integer damageAmountOrderTotal;

  @Column(name = "HOUSES_DESTROYED_TOTAL")
  private Integer housesDestroyedTotal;

  @Column(name = "HOUSES_AMOUNT_ORDER_TOTAL")
  private Integer housesAmountOrderTotal;

  @Column(name = "DEATHS_TOTAL")
  private Integer deathsTotal;

  @Column(name = "DEATHS_AMOUNT_ORDER_TOTAL")
  private Integer deathsAmountOrderTotal;

  @Column(name = "INJURIES_TOTAL")
  private Integer injuriesTotal;

  @Column(name = "INJURIES_AMOUNT_ORDER_TOTAL")
  private Integer injuriesAmountOrderTotal;

  @Column(name = "MISSING_TOTAL")
  private Integer missingTotal;

  //TODO: Default null
  @Column(name = "MISSING_AMOUNT_ORDER_TOTAL")
  private Integer missingAmountOrderTotal;

  //  TODO: add annotation for foreign key
  @Column(name = "MAP_VOL_ID")
  private Integer mapVolId;

  @Column(name = "OBJECTID")
  private Long objectId;
  @Column(name = "SHAPE")
  private Geometry shape;

  @Column(name = "HOUSES_DAMAGED")
  private Integer housesDamaged;

  @Column(name = "HOUSES_DAMAGED_TOTAL")
  private Integer housesDamagedTotal;

  @Column(name = "HOUSES_DAMAGED_AMOUNT_ORDER")
  private Integer housesDamagedAmountOrder;

  @Column(name = "HOUSES_DAM_AMOUNT_ORDER_TOTAL")
  private Integer housesDamAmountOrderTotal;

  @Column(name = "NUM_DEPOSITS")
  private Integer numDeposits;

  @OneToMany( mappedBy = "tsunamiEventView", cascade = CascadeType.ALL)
  private List<TsunamiRunupView> tsunamiRunupViews = new ArrayList<>();

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

  public Float getSecond() {
    return Second;
  }

  public void setSecond(Float second) {
    Second = second;
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

  public Integer getCauseCode() {
    return causeCode;
  }

  public void setCauseCode(Integer causeCode) {
    this.causeCode = causeCode;
  }

  public Integer getEventValidity() {
    return eventValidity;
  }

  public void setEventValidity(Integer eventValidity) {
    this.eventValidity = eventValidity;
  }

  public Float getEqMagUnk() {
    return eqMagUnk;
  }

  public void setEqMagUnk(Float eqMagUnk) {
    this.eqMagUnk = eqMagUnk;
  }

  public Float getEqMagMb() {
    return eqMagMb;
  }

  public void setEqMagMb(Float eqMagMb) {
    this.eqMagMb = eqMagMb;
  }

  public Float getEqMagMs() {
    return eqMagMs;
  }

  public void setEqMagMs(Float eqMagMs) {
    this.eqMagMs = eqMagMs;
  }

  public Float getEqMagMw() {
    return eqMagMw;
  }

  public void setEqMagMw(Float eqMagMw) {
    this.eqMagMw = eqMagMw;
  }

  public Float getEqMagMl() {
    return eqMagMl;
  }

  public void setEqMagMl(Float eqMagMl) {
    this.eqMagMl = eqMagMl;
  }

  public Float getEqMagMfa() {
    return eqMagMfa;
  }

  public void setEqMagMfa(Float eqMagMfa) {
    this.eqMagMfa = eqMagMfa;
  }

  public Float getEqMagnitude() {
    return eqMagnitude;
  }

  public void setEqMagnitude(Float eqMagnitude) {
    this.eqMagnitude = eqMagnitude;
  }

  public Integer getEqDepth() {
    return eqDepth;
  }

  public void setEqDepth(Integer eqDepth) {
    this.eqDepth = eqDepth;
  }

  public Float getMaxEventRunup() {
    return maxEventRunup;
  }

  public void setMaxEventRunup(Float maxEventRunup) {
    this.maxEventRunup = maxEventRunup;
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

  public Integer getWarningStatusId() {
    return warningStatusId;
  }

  public void setWarningStatusId(Integer warningStatusId) {
    this.warningStatusId = warningStatusId;
  }

  public String getComments() {
    return comments;
  }

  public void setComments(String comments) {
    this.comments = comments;
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

  public String getTsDate() {
    return tsDate;
  }

  public void setTsDate(String tsDate) {
    this.tsDate = tsDate;
  }

  public Integer getNumRunup() {
    return numRunup;
  }

  public void setNumRunup(Integer numRunup) {
    this.numRunup = numRunup;
  }

  public Integer getIdRunup() {
    return idRunup;
  }

  public void setIdRunup(Integer idRunup) {
    this.idRunup = idRunup;
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

  public Integer getMapEqId() {
    return mapEqId;
  }

  public void setMapEqId(Integer mapEqId) {
    this.mapEqId = mapEqId;
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

  public Integer getMapVolId() {
    return mapVolId;
  }

  public void setMapVolId(Integer mapVolId) {
    this.mapVolId = mapVolId;
  }

  public Long getObjectId() {
    return objectId;
  }

  public void setObjectId(Long objectId) {
    this.objectId = objectId;
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

  public Integer getNumDeposits() {
    return numDeposits;
  }

  public void setNumDeposits(Integer numDeposits) {
    this.numDeposits = numDeposits;
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

}
