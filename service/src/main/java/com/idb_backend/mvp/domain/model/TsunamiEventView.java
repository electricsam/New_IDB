package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.querydsl.core.annotations.QueryEntity;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import org.hibernate.annotations.Immutable;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.*;

@Data
@Immutable
@QueryEntity
@Table(name = "TSEVENT_VSQP")
@Entity(name = "TSEVENT_VSQP")
public class TsunamiEventView implements Serializable{
  private static final long serialVersionUID = 3678107792576131001L;

  @Id
  private int id;

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
  @Getter(AccessLevel.PRIVATE)
  private String locStart;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String locEnd;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String locIncludes;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String locMatch;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String locNot;

  private String area;

  private String country;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer regionCode;

  private Integer causeCode;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minCauseCode;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxCauseCode;

  private Integer eventValidity;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minEventValidity;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxEventValidity;

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

  @Getter(value = AccessLevel.PRIVATE)
  private Integer eqDepth;

  private Double maxEventRunup;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double maxMaxEventRunup;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double minMaxEventRunup;

  @Getter(value = AccessLevel.PRIVATE)
  private BigDecimal tsMtAbe;
  @Getter(value = AccessLevel.PRIVATE)
  private BigDecimal tsMtIi;

  private BigDecimal tsIntensity;

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

  private Integer housesDestroyed;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minHousesDestroyed;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxHousesDestroyed;

  private Integer housesAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minHousesAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxHousesAmountOrder;

  private Integer deaths;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minDeaths;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxDeaths;

  private Integer deathsAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minDeathsAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxDeathsAmountOrder;

  private Integer injuries;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minInjuries;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxInjuries;

  private Integer injuriesAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minInjuriesAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxInjuriesAmountOrder;

  private Integer missing;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minMissing;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxMissing;

  //TODO: Default null
  private Integer missingAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minMissingAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxMissingAmountOrder;

  private Integer housesDamaged;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minHousesDamaged;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxHousesDamaged;

  private Integer housesDamagedAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minHousesDamagedAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxHousesDamagedAmountOrder;

  private Integer numRunup;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minNumRunup;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxNumRunup;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer warningStatusId;

  private String comments;

  @Getter(value = AccessLevel.PRIVATE)
  private Date ngdcDate;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer temporalAccuracy;

  @Getter(value = AccessLevel.PRIVATE)
  @Column(name = "TSDATE")
  private String tsdate;

  //TODO: this is a foreign key so add necessary annotations
  @Getter(value = AccessLevel.PRIVATE)
  private Integer idRunup;

  @Getter(value = AccessLevel.PRIVATE)
  private String hasRef;

  //TODO: this is a foreign key so add necessary annotations
  @Getter(value = AccessLevel.PRIVATE)
  private Integer idRef;

  @Getter(value = AccessLevel.PRIVATE)
  private String slidesUrl;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer numSlides;

  //TODO: add annotation for foreign key
  @Getter(value = AccessLevel.PRIVATE)
  private Integer mapSlideId;

  //TODO: add annotation for foreign key
  @Getter(value = AccessLevel.PRIVATE)
  private Integer mapEqId;

  private Double damageMillionsDollarsTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double minDamageMillionsDollarsTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double maxDamageMillionsDollarsTotal;

  private Integer damageAmountOrderTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minDamageAmountOrderTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxDamageAmountOrderTotal;

  private Integer housesDestroyedTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minhousesDestroyedTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxhousesDestroyedTotal;

  private Integer housesAmountOrderTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minhousesAmountOrderTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxhousesAmountOrderTotal;

  private Integer deathsTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minDeathsTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxDeathsTotal;

  private Integer deathsAmountOrderTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minDeathsAmountOrderTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxDeathsAmountOrderTotal;

  private Integer injuriesTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minInjuriesTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxInjuriesTotal;

  private Integer injuriesAmountOrderTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minInjuriesAmountOrderTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxInjuriesAmountOrderTotal;

  private Integer missingTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minMissingTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxMissingTotal;

  private Integer housesDamagedTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minHousesDamagedTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxHousesDamagedTotal;

  private Integer housesDamAmountOrderTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minHousesDamAmountOrderTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxHousesDamAmountOrderTotal;

  //TODO: Default null
  private Integer missingAmountOrderTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minMissingAmountOrderTotal;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxMissingAmountOrderTotal;

  //  TODO: add annotation for foreign key
  @Getter(value = AccessLevel.PRIVATE)
  private Integer mapVolId;

  @Getter(value = AccessLevel.PRIVATE)
  private BigInteger objectid;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer numDeposits;

  @OneToMany( mappedBy = "tsunamiEventView", cascade = CascadeType.ALL)
  @JsonIgnore
  private Set<TsunamiRunupView> tsunamiRunupViews = new HashSet<>();

}
