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
import lombok.Setter;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;
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
  
  private Double second;

  @Min(value = Constants.latMin)
  @Max(value = Constants.latMax)
  private Double latitude;

  @Min(value = Constants.longMin)
  @Max(value = Constants.longMax)
  private Double longitude;

  private String locationName;
  
  private String area;
  
  private String country;
  
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
  private Double maxEventRunup;

//  @Min(value = Constants.minTsMt)
//  @Max(value = Constants.maxTsMt)
  private Double tsMtAbe;

//  @Min(value = Constants.minTsMt)
//  @Max(value = Constants.maxTsMt)
  private Double tsMtIi;

//  @Min(value = Constants.minTsMt)
//  @Max(value = Constants.maxTsMt)
  private Double tsIntensity;

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

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
  private Date ngdcDate;

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
  private Integer temporalAccuracy;

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
  private Long objectid;

  @JsonIgnore
  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
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

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
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
  private Double eqMagMl;

//  @Min(value = Constants.eqMagMin)
//  @Max(value = Constants.eqMagMax)
  private Double eqMagMfa;

  private Character flagLocTimeChk;

  private Character flagEffectsChk;

  private Character flagMaxRunupChk;

  @Size(max = 1)
  private String flagEditNatwc;

  private Integer housesDamaged;

  private Integer housesDamagedTotal;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesDamagedAmountOrder;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesDamAmountOrderTotal;

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
  private String publish;

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
  private String previousState;

  @OneToMany( mappedBy = "tsunamiEvent", cascade = CascadeType.ALL, fetch=FetchType.LAZY)
  @JsonIgnore
//  @Getter(AccessLevel.PRIVATE)
  private List<TsunamiRunup> tsunamiRunups = new ArrayList<>();

  @OneToMany( mappedBy = "tsunamiEvent", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JsonIgnore
//  @Getter(AccessLevel.PRIVATE)
  private Set<TsunamiRefs> tsunamiRefs = new HashSet<>();

  @OneToMany(mappedBy = "tsunamiEvent", fetch = FetchType.LAZY)
  @JsonIgnore
//  @Getter(AccessLevel.PRIVATE)
  private Set<SignifToTsEvent> signifToTsEvents = new HashSet<>();

  @OneToMany(mappedBy =  "tsunamiEvent", fetch = FetchType.LAZY)
  @JsonIgnore
//  @Getter(AccessLevel.PRIVATE)
  private Set<TseventAndVolEvent> tseventAndVolEvents = new HashSet<>();

  @Override
  public String toString(){
    return "TsunamiEvent" + this.hashCode();
  }
}