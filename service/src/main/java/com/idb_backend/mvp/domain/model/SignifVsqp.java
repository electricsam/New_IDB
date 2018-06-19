package com.idb_backend.mvp.domain.model;

import com.querydsl.core.annotations.QueryEntity;
import com.vividsolutions.jts.geom.Geometry;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@QueryEntity
@Entity(name = "SIGNIF_VSQP")
@Table(name = "SIGNIF_VSQP")
@Data
public class SignifVsqp implements Serializable{

  @Id
  private Integer id;

  @Getter(value = AccessLevel.PRIVATE)
  private String flagDuplicate;

  private Integer year;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minYear;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxYear;

  private Integer month;
  private Integer day;
  private Integer hour;
  private Integer minute;
  private Double second;

  private Double latitude;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double minLatitude;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double maxLatitude;

  private Double longitude;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double minLongitude;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double maxLongitude;

  private String locationName;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String locStart;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String locEnd;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String locIncludes;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String locMatch;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String locNot;

  @Getter(value = AccessLevel.PRIVATE)
  private String area;

  @Getter(value = AccessLevel.PRIVATE)
  private String country;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer regionCode;

  private Integer eqDepth;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minEqDepth;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxEqDepth;

  @Getter(value = AccessLevel.PRIVATE)
  private Double eqMagUnk;

  @Getter(value = AccessLevel.PRIVATE)
  private Double eqMagMb;

  @Getter(value = AccessLevel.PRIVATE)
  private Double eqMagMs;

  @Getter(value = AccessLevel.PRIVATE)
  private Double eqMagMw;

  @Getter(value = AccessLevel.PRIVATE)
  private Double eqMagMl;

  @Getter(value = AccessLevel.PRIVATE)
  private Double eqMagMfa;

  private Double eqMagnitude;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double minEqMagnitude;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double maxEqMagnitude;

  private String intensity;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String minIntensity;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String maxIntensity;

  private Double damageMillionsDollars;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double minDamageMillionsDollars;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double maxDamageMillionsDollars;

  private Integer damageAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minDamageAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxDamageAmountOrder;

  private Integer deaths;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minDeaths;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxDeaths;

  private Integer deathsAmountOrder;

  @Transient
  private Integer minDeathsAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxDeathsAmountOrder;

  private Integer injuries;

  private Integer injuriesAmountOrder;

  private Integer missing;

  private Integer missingAmountOrder;

  private Integer housesDestroyed;

  private Integer housesAmountOrder;

  private Integer housesDamaged;

  private Integer housesDamagedAmountOrder;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer deathsTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minDeathsTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxDeathsTotal;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer deathsAmountOrderTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minDeathsAmountOrderTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxDeathsAmountOrderTotal;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer injuriesTotal;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer injuriesAmountOrderTotal;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer missingTotal;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer missingAmountOrderTotal;

  @Getter(value = AccessLevel.PRIVATE)
  private Double damageMillionsDollarsTotal;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer damageAmountOrderTotal;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer housesDestroyedTotal;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer housesAmountOrderTotal;

  @Getter(value = AccessLevel.PRIVATE)
  private String flagTsunami;

  @Getter(value = AccessLevel.PRIVATE)
  private String flagVolEvent;

  @Getter(value = AccessLevel.PRIVATE)
  private java.sql.Date ngdcDate;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer temporalAccuracy;

  @Getter(value = AccessLevel.PRIVATE)
  private String hasRef;

  /*idRef will likely be a mapping relationship (onetomany or manytoone)*/
  private Integer idRef;

  @Getter(value = AccessLevel.PRIVATE)
  private String slidesUrl;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer numSlides;

  /*mapSlideId will likely be a mapping relationship (onetomany or manytoone)*/
  @Getter(value = AccessLevel.PRIVATE)
  private Integer mapSlideId;

  /*mapTsunamiId will likely be a mapping relationship (onetomany or manytoone)*/
  private Integer mapTsunamiId;

  private String comments;

  @Getter(value = AccessLevel.PRIVATE)
  private BigInteger objectid;

  @Getter(value = AccessLevel.PRIVATE)
  private Geometry shape;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer housesDamagedTotal;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer housesDamAmountOrderTotal;

}
