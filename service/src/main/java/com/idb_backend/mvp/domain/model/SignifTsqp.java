package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryEntity;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Pattern;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.HashSet;
import java.util.Set;

@QueryEntity
@Entity(name = "SIGNIF_TSQP")
@Table(name = "SIGNIF_TSQP")
@Data
public class SignifTsqp implements Serializable {

  @Id
  private Integer id;

  private String flagDuplicate;
  private Integer year;

  @Range(min = 1, max = 12)
  private Integer month;
  @Range(min = 1, max = 31)
  private Integer day;


  @Range(min = 0, max = 23)
  private Integer hour;
  @Range(min = 0, max = 59)
  private Integer minute;

  @DecimalMin(value = "0")
  @DecimalMax(value = "59.9")
  private Double second;

  @DecimalMin(value = "-90")
  @DecimalMax(value = "90")
  private Double latitude;

  @DecimalMin(value = "-180")
  @DecimalMax(value = "180")
  private Double longitude;

  private String locationName;
  private String area;
  private String country;

  @Range(min = 0, max = 800)
  private Integer eqDepth;

  @DecimalMin(value = "0")
  @DecimalMax(value = "9.9")
  private Double eqMagUnk;
  @DecimalMin(value = "0")
  @DecimalMax(value = "9.9")
  private Double eqMagMb;
  @DecimalMin(value = "0")
  @DecimalMax(value = "9.9")
  private Double eqMagMs;
  @DecimalMin(value = "0")
  @DecimalMax(value = "9.9")
  private Double eqMagMw;

  @Pattern(regexp = "^([1-9]|[0-1][0-2])$")
  private String intensity;

  private Double damageMillionsDollars;

  @Range(min = 0, max = 4)
  private Integer damageAmountOrder;

  private Integer deaths;

  @Range(min = 0, max = 4)
  private Integer deathsAmountOrder;

  private Integer injuries;

  @Range(min = 0, max = 4)
  private Integer injuriesAmountOrder;

  private String flagTsunami;
  private java.sql.Date ngdcDate;
  private String temporalAccuracy;
  private BigInteger objectid;


  @Getter(value = AccessLevel.PRIVATE)
  private Geometry shape;

  private String comments;
  private Integer housesDestroyed;

  @Range(min = 0, max = 4)
  private Integer housesAmountOrder;

  /*This is going to be a onetomany or manytoone relationship*/
  private Integer tsuId;
  private java.sql.Date lastUpdate;
  private Integer deathsTotal;

  @Range(min = 0, max = 4)
  private Integer deathsAmountOrderTotal;

  private Integer injuriesTotal;

  @Range(min = 0, max = 4)
  private Integer injuriesAmountOrderTotal;

  private Double damageMillionsDollarsTotal;

  @Range(min = 0, max = 4)
  private Integer damageAmountOrderTotal;

  private Integer housesDestroyedTotal;

  @Range(min = 0, max = 4)
  private Integer housesAmountOrderTotal;

  private Integer missing;

  @Range(min = 0, max = 4)
  private Integer missingAmountOrder;

  private Integer missingTotal;

  @Range(min = 0, max = 4)
  private Integer missingAmountOrderTotal;

  @DecimalMin(value = "0")
  @DecimalMax(value = "9.9")
  private Double eqMagMl;
  @DecimalMin(value = "0")
  @DecimalMax(value = "9.9")
  private Double eqMagMfa;

  private String flagEpicenterChk;
  private String flagMagnitudeChk;
  private String flagEffectsChk;
  private Integer regionCode;
  private Integer housesDamaged;
  private Integer housesDamagedTotal;

  @Range(min = 0, max = 4)
  private Integer housesDamagedAmountOrder;
  @Range(min = 0, max = 4)
  private Integer housesDamAmountOrderTotal;

  private String publish;
  private String previousState;

  @OneToMany(mappedBy = "signifTsqp", fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<SignifAndVolEvent> signifAndVolEvents = new HashSet<>();

  @OneToMany(mappedBy = "signifTsqp", fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<SignifRefs> signifRefs = new HashSet<>();

  @OneToMany(mappedBy = "signifTsqp", fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<SignifToTsEvent> signifToTsEvents = new HashSet<>();

}
