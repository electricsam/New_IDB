package com.idb_backend.mvp.domain.model;

import com.idb_backend.mvp.service.Constants;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;
import oracle.jdbc.driver.Const;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.io.Serializable;
import java.util.*;

@Entity(name = "TSEVENT_TSQP")
@DynamicUpdate(value = true)
@Table(name = "TSEVENT_TSQP")
public class TsunamiEvent implements Serializable {
  private static final long serialVersionUID = 1905162041950251407L;

  @Id
  @Column(name = "ID", nullable = false)
  private Integer id;

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

  @Column(name = "HOUR")
  @Min(value = Constants.minHour)
  @Max(value = Constants.maxHour)
  private Integer hour;

  @Column(name = "MINUTE")
  @Min(value = Constants.minMin)
  @Max(value = Constants.maxMin)
  private Integer minute;

  @Column(name = "SECOND")
//  @Min(value = Constants.minSec)
//  @Max(value = Constants.maxSec)
  private Float second;

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
  @InString(strs = {
      "ACEH", "AICHI", "AK", "AKITA", "AL", "AOMORI", "AR", "AS", "AZ", "BALI", "BANGKA-BELITUNG", "BANTEN",
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
      "WI", "WV", "WY", "YAMAGATA", "YAMAGUCHI", "YOGYAKARTA"
  })
  private String area;

  @Column(name = "COUNTRY")
  @InString(strs = {
      "ALBANIA", "ALGERIA", "ANTARCTICA", "ANTIGUA AND BARBUDA", "ATLANTIC OCEAN", "AUSTRALIA","BALTIC SEA",
      "BANGLADESH","BULGARIA","CANADA","CHILE","CHINA","COLOMBIA","CONGO","COOK ISLANDS", "COSTA RICA",
      "CROATIA","CUBA","CYPRUS", "CYPRUS ISLAND","DEAD SEA","DENMARK","DOMINICAN REPUBLIC","EAST CHINA SEA",
      "ECUADOR","EGYPT","EL SALVADOR", "ERITREA","FIJI","FRANCE","FRENCH POLYNESIA","GEORGIA","GERMANY","GHANA",
      "GREECE","GREENLAND", "GUADELOUPE (FRENCH TERRITORY)","GUATEMALA","HAITI","HOLLAND","HONDURAS", "ICELAND",
      "INDIA","INDONESIA","IRAN", "IRELAND","IRISH SEA","ISRAEL","ITALY","JAMAICA","JAPAN","JORDAN","KENYA",
      "KERMADEC ISLANDS","KOREA","LEBANON", "MARSHALL ISLANDS, REP. OF","MARTINIQUE (FRENCH TERRITORY)",
      "MEXICO","MICRONESIA, FED. STATES OF","MONTSERRAT", "MOROCCO","MYANMAR (BURMA)","NAURU","NEPAL",
      "NETHERLANDS","NEW CALEDONIA","NEW ZEALAND","NICARAGUA","NORTH KOREA", "NORTH SEA",
      "NORTHWEST PACIFIC OCEAN","NORWAY","PACIFIC OCEAN","PAKISTAN","PANAMA","PAPUA NEW GUINEA","PERU",
      "PHILIPPINES", "PORTUGAL", "RUSSIA", "SAINT VINCENT AND THE GRENADINES", "SAMOA", "SCOTLAND",
      "SERBIA AND MONTENEGRO", "SOLOMON ISLANDS", "SOUTH AFRICA", "SOUTH KOREA", "SPAIN", "SRI LANKA", "SUDAN",
      "SWEDEN", "SWITZERLAND", "SYRIA", "TAIWAN", "TOGO", "TONGA", "TRINIDAD AND TOBAGO", "TUNISIA", "TURKEY",
      "TURKMENISTAN", "UK", "UK TERRITORY", "UKRAINE", "URUGUAY", "USA", "USA TERRITORY", "VANUATU", "VENEZUELA",
      "WALLIS AND FUTUNA (FRENCH TERRITORY)"
  })
  private String country;

  @Column(name = "REGION_CODE")
  @In(nums = {
      30, 40, 50, 60, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89
  })
  private Integer regionCode;

  @Column(name = "CAUSE_CODE")
  @Min(value = Constants.minCause)
  @Max(value = Constants.maxCause)
  private Integer causeCode;

  @Column(name = "EVENT_VALIDITY")
  @Min(value = Constants.minValidity)
  @Max(value = Constants.maxValidity)
  private Integer eventValidity;

  @Column(name = "EQ_MAG_UNK")
//  @Min(value = Constants.eqMagMin)
//  @Max(value = Constants.eqMagMax)
  private Float eqMagUnk;

  @Column(name = "EQ_MAG_MB")
//  @Min(value = Constants.eqMagMin)
//  @Max(value = Constants.eqMagMax)
  private Float eqMagMb;

  @Column(name = "EQ_MAG_MS")
//  @Min(value = Constants.eqMagMin)
//  @Max(value = Constants.eqMagMax)
  private Float eqMagMs;

  @Column(name = "EQ_MAG_MW")
//  @Min(value = Constants.eqMagMin)
//  @Max(value = Constants.eqMagMax)
  private Float eqMagMw;

  @Column(name = "EQ_DEPTH")
  @Min(value = Constants.minWaterHt)
  @Max(value = Constants.maxWaterHt)
  private Integer eqDepth;

  @Column(name = "MAX_EVENT_RUNUP")
  @Min(value = Constants.minWaterHt)
  @Max(value = Constants.maxWaterHt)
  private Float maxEventRunup;

  @Column(name = "TS_MT_ABE")
//  @Min(value = Constants.minTsMt)
//  @Max(value = Constants.maxTsMt)
  private Float tsMtAbe;

  @Column(name = "TS_MT_II")
//  @Min(value = Constants.minTsMt)
//  @Max(value = Constants.maxTsMt)
  private Float tsMtIi;

  @Column(name = "TS_INTENSITY")
//  @Min(value = Constants.minTsMt)
//  @Max(value = Constants.maxTsMt)
  private Float tsIntensity;

  @Column(name = "DAMAGE_MILLIONS_DOLLARS")
  private Float damageMillionsDollars;

  @Column(name = "DAMAGE_AMOUNT_ORDER")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer damageAmountOrder;

  @Column(name = "HOUSES_DESTROYED")
  private Integer housesDestroyed;

  @Column(name = "HOUSES_AMOUNT_ORDER")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesAmountOrder;

  @Column(name = "DEATHS")
  private Integer deaths;

  @Column(name = "DEATHS_AMOUNT_ORDER")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer deathsAmountOrder;

  @Column(name = "INJURIES")
  private Integer injuries;

  @Column(name = "INJURIES_AMOUNT_ORDER")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer injuriesAmountOrder;

  @Column(name = "WARNING_STATUS_ID")
  private Integer warningStatusId;

  @Column(name = "COMMENTS")
  private String comments;

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

  @Column(name = "DAMAGE_MILLIONS_DOLLARS_TOTAL")
  private Float damageMillionsDollarsTotal;

  @Column(name = "DAMAGE_AMOUNT_ORDER_TOTAL")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer damageAmountOrderTotal;

  @Column(name = "HOUSES_DESTROYED_TOTAL")
  private Integer housesDestroyedTotal;

  @Column(name = "HOUSES_AMOUNT_ORDER_TOTAL")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesAmountOrderTotal;

  @Column(name = "DEATHS_TOTAL")
  private Integer deathsTotal;

  @Column(name = "DEATHS_AMOUNT_ORDER_TOTAL")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer deathsAmountOrderTotal;

  @Column(name = "INJURIES_TOTAL")
  private Integer injuriesTotal;

  @Column(name = "INJURIES_AMOUNT_ORDER_TOTAL")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer injuriesAmountOrderTotal;

  @Column(name = "LAST_UPDATE")
  private Date lastUpdate;

  @Column(name = "MISSING")
  private Integer missing;

  @Column(name = "MISSING_AMOUNT_ORDER")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer missingAmountOrder;

  @Column(name = "MISSING_TOTAL")
  private Integer missingTotal;

  @Column(name = "MISSING_AMOUNT_ORDER_TOTAL")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer missingAmountOrderTotal;

  @Column(name = "EQ_MAG_ML")
//  @Min(value = Constants.eqMagMin)
//  @Max(value = Constants.eqMagMax)
  private Float eqMagMl;

  @Column(name = "EQ_MAG_MFA")
//  @Min(value = Constants.eqMagMin)
//  @Max(value = Constants.eqMagMax)
  private Float eqMagMfa;

  @Column(name = "FLAG_LOC_TIME_CHK")
  private Character flagLocTimeChk;

  @Column(name = "FLAG_EFFECTS_CHK")
  private Character flagEffectsChk;

  @Column(name = "FLAG_MAX_RUNUP_CHK")
  private Character flagMaxRunupChk;

  @Column(name = "FLAG_EDIT_NATWC")
  private String flagEditNatwc;

  @Column(name = "HOUSES_DAMAGED")
  private Integer housesDamaged;

  @Column(name = "HOUSES_DAMAGED_TOTAL")
  private Integer housesDamagedTotal;

  @Column(name = "HOUSES_DAMAGED_AMOUNT_ORDER")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesDamagedAmountOrder;

  @Column(name = "HOUSES_DAM_AMOUNT_ORDER_TOTAL")
  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesDamAmountOrderTotal;

  @Column(name = "PUBLISH")
  private String publish;

  @Column(name = "PREVIOUS_STATE")
  private String previousState;

  @OneToMany( mappedBy = "tsunamiEvent", cascade = CascadeType.ALL, fetch=FetchType.LAZY)
  private List<TsunamiRunup> tsunamiRunups = new ArrayList<>();

//  @OneToMany( mappedBy = "tsEventId", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//  private Set<TsunamiRefs> tsunamiRefs = new HashSet<>();


  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(
      name = "TSEVENT_REFS",
      joinColumns = {@JoinColumn(name="TSEVENT_ID")},
      inverseJoinColumns = {@JoinColumn(name= "TSREF_ID")}
  )
  Set<Reference> references = new HashSet<>();

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
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

  public Float getSecond() {
    return second;
  }

  public void setSecond(Float second) {
    this.second = second;
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

  public Date getNgdcDateDate() {
    return ngdcDate;
  }

  public void setNgdcDateDate(Date date) {
    this.ngdcDate = date;
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

  public Character getFlagLocTimeChk() {
    return flagLocTimeChk;
  }

  public void setFlagLocTimeChk(Character flagLocTimeChk) {
    this.flagLocTimeChk = flagLocTimeChk;
  }

  public Character getFlagEffectsChk() {
    return flagEffectsChk;
  }

  public void setFlagEffectsChk(Character flagEffectsChk) {
    this.flagEffectsChk = flagEffectsChk;
  }

  public Character getFlagMaxRunupChk() {
    return flagMaxRunupChk;
  }

  public void setFlagMaxRunupChk(Character flagMaxRunupChk) {
    this.flagMaxRunupChk = flagMaxRunupChk;
  }

  public String getFlagEditNatwc() {
    return flagEditNatwc;
  }

  public void setFlagEditNatwc(String flagEditNatwc) {
    this.flagEditNatwc = flagEditNatwc;
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
    this.previousState = previousState;
  }
}