package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.idb_backend.mvp.domain.annotations.In;
import com.idb_backend.mvp.domain.annotations.InString;
import com.idb_backend.mvp.service.Constants;
import com.querydsl.core.annotations.QueryEntity;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.*;

@QueryEntity
@Entity(name = "TSEVENT_TSQP")
@DynamicUpdate(value = true)
@Table(name = "TSEVENT_TSQP")
@Data
public class TsunamiEvent implements Serializable {
  private static final long serialVersionUID = 1905162041950251407L;

  @Id
  private Integer id;

  @Min(value = Constants.minYear)
  private Integer year;

  @Min(value = Constants.minMonth)
  @Max(value = Constants.maxMonth)
  private Integer month;

  @Min(value = Constants.minDay)
  @Max(value = Constants.maxDay)
  private Integer day;

  @Min(value = Constants.minHour)
  @Max(value = Constants.maxHour)
  private Integer hour;

  @Min(value = Constants.minMin)
  @Max(value = Constants.maxMin)
  private Integer minute;

//  @Min(value = Constants.minSec)
//  @Max(value = Constants.maxSec)
  private Float second;

  @Min(value = Constants.latMin)
  @Max(value = Constants.latMax)
  private Float latitude;

  @Min(value = Constants.longMin)
  @Max(value = Constants.longMax)
  private Float longitude;

  private String locationName;

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

  @In(nums = {
      30, 40, 50, 60, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89
  })
  private Integer regionCode;

  @Min(value = Constants.minCause)
  @Max(value = Constants.maxCause)
  private Integer causeCode;

  @Min(value = Constants.minValidity)
  @Max(value = Constants.maxValidity)
  private Integer eventValidity;

//  @Min(value = Constants.eqMagMin)
//  @Max(value = Constants.eqMagMax)
  private BigDecimal eqMagUnk;

//  @Min(value = Constants.eqMagMin)
//  @Max(value = Constants.eqMagMax)
  private BigDecimal eqMagMb;

//  @Min(value = Constants.eqMagMin)
//  @Max(value = Constants.eqMagMax)
  private BigDecimal eqMagMs;

//  @Min(value = Constants.eqMagMin)
//  @Max(value = Constants.eqMagMax)
  private BigDecimal eqMagMw;

  @Min(value = Constants.minWaterHt)
  @Max(value = Constants.maxWaterHt)
  private Integer eqDepth;

  @Min(value = Constants.minWaterHt)
  @Max(value = Constants.maxWaterHt)
  private Float maxEventRunup;

//  @Min(value = Constants.minTsMt)
//  @Max(value = Constants.maxTsMt)
  private Float tsMtAbe;

//  @Min(value = Constants.minTsMt)
//  @Max(value = Constants.maxTsMt)
  private Float tsMtIi;

//  @Min(value = Constants.minTsMt)
//  @Max(value = Constants.maxTsMt)
  private Float tsIntensity;

  private BigDecimal damageMillionsDollars;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer damageAmountOrder;

  private Integer housesDestroyed;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesAmountOrder;

  private Integer deaths;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer deathsAmountOrder;

  private Integer injuries;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer injuriesAmountOrder;

  private Integer warningStatusId;

  private String comments;

  private Date ngdcDate;

  private Integer temporalAccuracy;

  private Long objectid;

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

  @JsonIgnore
  @Getter(AccessLevel.PRIVATE)
  private Geometry shape;


  private BigDecimal damageMillionsDollarsTotal;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer damageAmountOrderTotal;

  private Integer housesDestroyedTotal;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesAmountOrderTotal;

  private Integer deathsTotal;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer deathsAmountOrderTotal;

  private Integer injuriesTotal;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer injuriesAmountOrderTotal;

  private Date lastUpdate;

  private Integer missing;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer missingAmountOrder;

  private Integer missingTotal;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer missingAmountOrderTotal;

//  @Min(value = Constants.eqMagMin)
//  @Max(value = Constants.eqMagMax)
  private Float eqMagMl;

//  @Min(value = Constants.eqMagMin)
//  @Max(value = Constants.eqMagMax)
  private Float eqMagMfa;

  private Character flagLocTimeChk;

  private Character flagEffectsChk;

  private Character flagMaxRunupChk;

  private String flagEditNatwc;

  private Integer housesDamaged;

  private Integer housesDamagedTotal;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesDamagedAmountOrder;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesDamAmountOrderTotal;

  private String publish;

  private String previousState;

  @OneToMany( mappedBy = "tsunamiEvent", cascade = CascadeType.ALL, fetch=FetchType.LAZY)
  @JsonIgnore
  private List<TsunamiRunup> tsunamiRunups = new ArrayList<>();

  @OneToMany( mappedBy = "tsunamiEvent", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<TsunamiRefs> tsunamiRefs = new HashSet<>();

  @OneToMany(mappedBy = "tsunamiEvent", fetch = FetchType.EAGER)
  @JsonIgnore
  private Set<SignifToTsEvent> signifToTsEvents = new HashSet<>();

  @OneToMany(mappedBy =  "tsunamiEvent", fetch = FetchType.EAGER)
  @JsonIgnore
  private Set<TseventAndVolEvent> tseventAndVolEvents = new HashSet<>();

}