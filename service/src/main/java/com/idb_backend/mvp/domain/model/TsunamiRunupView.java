package com.idb_backend.mvp.domain.model;

import com.querydsl.core.annotations.QueryEntity;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import org.hibernate.annotations.Immutable;

import javax.persistence.*;
import java.util.Date;

@Data
@Immutable
@QueryEntity
@Table(name = "TSRUNUP_VSQP")
@Entity(name = "TSRUNUP_VSQP")
public class TsunamiRunupView {
  @Id
  private Integer id;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "TSEVENT_ID")
  private TsunamiEventView tsunamiEventView;

  @Getter(AccessLevel.PRIVATE)
  private Integer year;
  @Getter(AccessLevel.PRIVATE)
  private Integer month;
  @Getter(AccessLevel.PRIVATE)
  private Integer day;

  private Integer arrDay;

  private Integer arrHour;

  private Integer arrMin;

  private Integer travHours;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minTravHours;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxTravHours;

  private Integer travMins;

  private Double period;

  private String firstMotion;

  private Double latitude;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private Double minLatitude;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private Double maxLatitude;

  private Double longitude;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private Double minLongitude;

  @Transient
  @Getter(AccessLevel.PRIVATE)
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

  private Integer regionCode;

  private Double runupHt;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private Double minRunupHt;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private Double maxRunupHt;

  private Double runupHoriz;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double minRunupHoriz;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double maxRunupHoriz;

  private Integer typeMeasurementId;

  private Double damageMillionsDollars;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private Double minDamageMillionsDollars;

  @Transient
  @Getter(AccessLevel.PRIVATE)
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
  @Getter(AccessLevel.PRIVATE)
  private Integer minDeaths;

  @Transient
  @Getter(AccessLevel.PRIVATE)
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

  @Getter(AccessLevel.PRIVATE)
  private Date ngdcDate;

  @Getter(AccessLevel.PRIVATE)
  private Integer temporalAccuracy;

  @Getter(AccessLevel.PRIVATE)
  private Long objectid;

  @Getter(value = AccessLevel.PRIVATE)
  private Integer idRef;

  @Getter(AccessLevel.PRIVATE)
  private String tsdate;

  @Getter(AccessLevel.PRIVATE)
  private String hasEvent;

  private String comments;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String commentsStart;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String commentsEnd;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String commentsInclude;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String commentsMatch;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String commentsNot;

  @Getter(AccessLevel.PRIVATE)
  private String hasRef;

  @Getter(AccessLevel.PRIVATE)
  private String doubtful;

  private Integer distFromSource;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private Integer minDistFromSource;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private Integer maxDistFromSource;

  @Getter(AccessLevel.PRIVATE)
  private Integer eventRegionCode;

  @Getter(AccessLevel.PRIVATE)
  private Integer predTravHours;

  @Getter(AccessLevel.PRIVATE)
  private Integer predTravMins;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minHousesDamaged;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxHousesDamaged;

  private Integer housesDamaged;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minHousesDamagedAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxHousesDamagedAmountOrder;

  private Integer housesDamagedAmountOrder;

}
