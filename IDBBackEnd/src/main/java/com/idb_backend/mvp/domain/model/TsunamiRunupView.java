package com.idb_backend.mvp.domain.model;

import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;
import org.hibernate.annotations.Immutable;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "TSRUNUP_VSQP")
@Immutable
public class TsunamiRunupView {
  @Id
  @Column(name = "ID", nullable = false)
  private int id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "TSEVENT_ID")
  private TsunamiEventView tsunamiEventView;

  @Column(name = "YEAR")
  private Integer year;

  @Column(name = "MONTH")
  private Integer month;

  @Column(name = "DAY")
  private Integer day;

  @Column(name = "ARR_DAY")
  private Integer arrDay;

  @Column(name = "ARR_HOUR")
  private Integer arrHour;

  @Column(name = "ARR_MIN")
  private Integer arrMin;

  @Column(name = "TRAV_HOURS")
  private Integer travHours;

  @Column(name = "TRAV_MINS")
  private Integer travMins;

  @Column(name = "PERIOD")
  private Float period;

  @Column(name = "FIRST_MOTION")
  private String firstMotion;

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

  @Column(name = "RUNUP_HT")
  private Float runupHt;

  @Column(name = "RUNUP_HORIZ")
  private Float runupHoriz;

  @Column(name = "TYPE_OF_MEASUREMENT_ID")
  private Integer typeOfMeasurementId;

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

  @Column(name = "NGDC_DATE")
  private Date ngdcDate;

  @Column(name = "TEMPORAL_ACCURACY")
  private Integer temporalAccuracy;

  @Column(name = "OBJECTID")
  private Long objectId;

  @Column(name = "ID_REF")
  private Integer idRef;

  @Column(name = "TSDATE")
  private String tsDate;

  @Column(name = "HAS_EVENT")
  private String hasEvent;

  @Column(name = "COMMENTS")
  private String comments;

  @Column(name = "HAS_REF")
  private String hasRef;

  @Column(name = "DOUBTFUL")
  private String doubtful;

  @Column(name = "DIST_FROM_SOURCE")
  private Integer distFromSource;

  @Column(name = "SHAPE")
  private Geometry shape;

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

  @Column(name = "EVENT_REGION_CODE")
  private Integer eventRegionCode;

  @Column(name = "PRED_TRAV_HOURS")
  private Integer predTravHours;

  @Column(name = "PRED_TRAV_MINS")
  private Integer predTravMins;

  @Column(name = "HOUSES_DAMAGED")
  private Integer housesDamaged;

  @Column(name = "HOUSES_DAMAGED_AMOUNT_ORDER")
  private Integer housesDamagedAmountOrder;

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

  public Integer getIdRef() {
    return idRef;
  }

  public void setIdRef(Integer idRef) {
    this.idRef = idRef;
  }

  public String getTsDate() {
    return tsDate;
  }

  public void setTsDate(String tsDate) {
    this.tsDate = tsDate;
  }

  public String getHasEvent() {
    return hasEvent;
  }

  public void setHasEvent(String hasEvent) {
    this.hasEvent = hasEvent;
  }

  public String getComments() {
    return comments;
  }

  public void setComments(String comments) {
    this.comments = comments;
  }

  public String getHasRef() {
    return hasRef;
  }

  public void setHasRef(String hasRef) {
    this.hasRef = hasRef;
  }

  public String getDoubtful() {
    return doubtful;
  }

  public void setDoubtful(String doubtful) {
    this.doubtful = doubtful;
  }

  public Integer getDistFromSource() {
    return distFromSource;
  }

  public void setDistFromSource(Integer distFromSource) {
    this.distFromSource = distFromSource;
  }

  public Integer getEventRegionCode() {
    return eventRegionCode;
  }

  public void setEventRegionCode(Integer eventRegionCode) {
    this.eventRegionCode = eventRegionCode;
  }

  public Integer getPredTravHours() {
    return predTravHours;
  }

  public void setPredTravHours(Integer predTravHours) {
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
}
