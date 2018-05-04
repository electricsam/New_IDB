package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.idb_backend.mvp.domain.annotations.In;
import com.idb_backend.mvp.domain.annotations.InString;
import com.idb_backend.mvp.service.Constants;
import com.querydsl.core.annotations.QueryEntity;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@QueryEntity
@Table(name = "TSRUNUP_TSQP")
@Entity(name = "TSRUNUP_TSQP")
public class TsunamiRunup {
  @Id
  private Integer id;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "TSEVENT_ID")
  @JsonIgnore
  private TsunamiEvent tsunamiEvent;

  @Min(value = Constants.minYear)
  private Integer year;

  @Min(value = Constants.minMonth)
  @Max(value = Constants.maxMonth)
  private Integer month;

  @Min(value = Constants.minDay)
  @Max(value = Constants.maxDay)
  private Integer day;

  @Min(value = Constants.minDay)
  @Max(value = Constants.maxDay)
  private Integer arrDay;

  @Min(value = Constants.minHour)
  @Max(value = Constants.maxHour)
  private Integer arrHour;

  @Min(value = Constants.minMin)
  @Max(value = Constants.maxMin)
  private Integer arrMin;

  @Min(value = Constants.travelTimeMin)
  @Max(value = Constants.travelTimeMax)
  private Integer travHours;

  @Min(value = Constants.travelMinuteMin)
  @Max(value = Constants.travelMinuteMax)
  private Integer travMins;

  @DecimalMin(value = Constants.minPeriod)
  @DecimalMax(value = Constants.maxPeriod)
  private Float period;

  @Size(min = 1, max = 1)
  @InString(strs = {"F", "R"})
  private String firstMotion;

  @Min(value = Constants.latMin)
  @Max(value = Constants.latMax)
  private Float latitude;

  @Min(value = Constants.longMin)
  @Max(value = Constants.longMax)
  private Float longitude;

  private String locationName;

  @InString(strs = {"ACEH", "AICHI", "AK", "AKITA", "AL", "AOMORI", "AR", "AS", "AZ", "BALI", "BANGKA-BELITUNG", "BANTEN",
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
      "WI", "WV", "WY", "YAMAGATA", "YAMAGUCHI", "YOGYAKARTA"})
  private String area;

  @InString(strs = {
      "ALBANIA", "ALGERIA", "ANTARCTICA", "ANTIGUA AND BARBUDA", "ATLANTIC OCEAN", "AUSTRALIA","BALTIC SEA","BANGLADESH"
      ,"BULGARIA","CANADA","CHILE","CHINA","COLOMBIA","CONGO","COOK ISLANDS", "COSTA RICA","CROATIA","CUBA","CYPRUS",
      "CYPRUS ISLAND","DEAD SEA","DENMARK","DOMINICAN REPUBLIC","EAST CHINA SEA", "ECUADOR","EGYPT","EL SALVADOR",
      "ERITREA","FIJI","FRANCE","FRENCH POLYNESIA","GEORGIA","GERMANY","GHANA","GREECE","GREENLAND",
      "GUADELOUPE (FRENCH TERRITORY)","GUATEMALA","HAITI","HOLLAND","HONDURAS", "ICELAND","INDIA","INDONESIA","IRAN",
      "IRELAND","IRISH SEA","ISRAEL","ITALY","JAMAICA","JAPAN","JORDAN","KENYA","KERMADEC ISLANDS","KOREA","LEBANON",
      "MARSHALL ISLANDS, REP. OF","MARTINIQUE (FRENCH TERRITORY)","MEXICO","MICRONESIA, FED. STATES OF","MONTSERRAT",
      "MOROCCO","MYANMAR (BURMA)","NAURU","NEPAL","NETHERLANDS","NEW CALEDONIA","NEW ZEALAND","NICARAGUA","NORTH KOREA",
      "NORTH SEA","NORTHWEST PACIFIC OCEAN","NORWAY","PACIFIC OCEAN","PAKISTAN","PANAMA","PAPUA NEW GUINEA","PERU",
      "PHILIPPINES", "PORTUGAL", "RUSSIA", "SAINT VINCENT AND THE GRENADINES", "SAMOA", "SCOTLAND",
      "SERBIA AND MONTENEGRO", "SOLOMON ISLANDS", "SOUTH AFRICA", "SOUTH KOREA", "SPAIN", "SRI LANKA", "SUDAN",
      "SWEDEN", "SWITZERLAND", "SYRIA", "TAIWAN", "TOGO", "TONGA", "TRINIDAD AND TOBAGO", "TUNISIA", "TURKEY",
      "TURKMENISTAN", "UK", "UK TERRITORY", "UKRAINE", "URUGUAY", "USA", "USA TERRITORY", "VANUATU", "VENEZUELA",
      "WALLIS AND FUTUNA (FRENCH TERRITORY)"
  })
  private String country;

  @In(nums = {30, 40, 50, 60, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89})
  private Integer regionCode;

  @Min(value = Constants.minWaterHt)
  @Max(value = Constants.maxWaterHt)
  private Float runupHt;

  @Min(value = Constants.minHoriz)
  @Max(value= Constants.maxHoriz)
  private Float runupHoriz;

  @Min(value = Constants.measureTypeMin)
  @Max(value = Constants.measureTypeMax)
  private Integer typeOfMeasurementId;

  @Min(value = 0)
  private Float damageMillionsDollars;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer damageAmountOrder;

  @Min(value = 0)
  private Integer housesDestroyed;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesAmountOrder;

  @Min(value = 0)
  private Integer deaths;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer deathsAmountOrder;

  @Min(value = 0)
  private Integer injuries;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer injuriesAmountOrder;

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

  private Geometry shape;

  private String comments;

  private Date lastUpdate;

  @Min(value = 0)
  private Integer missing;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer missingAmountOrder;

//  Need to validate
  private String doubtful;

  private Character flagLocChk;

  private Character flagRunupChk;

  private Character flagArrvTravTimeChk;

  private Character flagEffectsChk;

  private String tideNetwork;

  private String flagEditNatwc;

  private Integer waveArrTravHoursCalc;

  private Integer waveArrTravMinsCalc;

  @Min(value = Constants.minWaterHt)
  @Max(value = Constants.maxWaterHt)
  private Integer waveArrHt;

  @Min(value = Constants.minDay)
  @Max(value = Constants.maxDay)
  private Integer maxWaveArrDay;

  @Min(value = Constants.minHour)
  @Max(value = Constants.maxHour)
  private Integer maxWaveArrHour;

  @Min(value = Constants.minMin)
  @Max(value = Constants.maxMin)
  private Integer getMaxWaveArrMin;

  private Integer maxWaveNum;

  private Float predTravHours;

  private Integer predTravMins;

  @Min(value = 0)
  private Integer housesDamaged;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesDamagedAmountOrder;

  private String publish;

  private String previousState;

  @OneToMany(mappedBy = "tsunamiRunup", fetch = FetchType.LAZY)
  private Set<TsrunupRefs> tsrunupRefs = new HashSet<>();

}

