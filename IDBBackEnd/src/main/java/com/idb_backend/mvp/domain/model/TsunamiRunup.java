package com.idb_backend.mvp.domain.model;

import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "TSRUNUP_TSQP")
public class TsunamiRunup {
  @Id
  @Column(name = "ID", nullable = false)
  private int id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "TSEVENT_ID")
  private TsunamiEvent tsunamiEvent;

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
  private Integer missing;

  //TODO: Default null
  @Column(name = "MISSING_AMOUNT_ORDER")
  private Integer missingAmountOrder;

  @Column(name = "DOUBTFUL")
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
  private Integer waveArrHt;

  @Column(name = "MAX_WAVE_ARR_DAY")
  private Integer maxWaveArrDay;

  @Column(name = "MAX_WAVE_ARR_HOUR")
  private Integer maxWaveArrHour;

  @Column(name = "MAX_WAVE_ARR_MIN")
  private Integer getMaxWaveArrMin;

  @Column(name = "MAX_WAVE_NUM")
  private Integer maxWaveNum;

  @Column(name = "PRED_TRAV_HOURS")
  private Float predTravHours;

  @Column(name = "PRED_TRAV_MINS")
  private Integer predTravMins;

  @Column(name = "HOUSES_DAMAGED")
  private Integer housesDamaged;

  @Column(name = "HOUSES_DAMAGED_AMOUNT_ORDER")
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

