package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.idb_backend.mvp.domain.annotations.In;
import com.idb_backend.mvp.domain.annotations.InString;
import com.idb_backend.mvp.service.Constants;
import com.querydsl.core.annotations.QueryEntity;
import com.vividsolutions.jts.geom.Geometry;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@QueryEntity
@Table(name = "TSRUNUP_TSQP")
@Entity(name = "TSRUNUP_TSQP")
public class TsunamiRunup implements Serializable{
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
  private Double period;

  @Size(min = 1, max = 1)
  @InString(strs = {"F", "R"})
  private String firstMotion;

  @Min(value = Constants.latMin)
  @Max(value = Constants.latMax)
  private Double latitude;

  @Min(value = Constants.longMin)
  @Max(value = Constants.longMax)
  private Double longitude;

  private String locationName;

  private String area;

  private String country;

  @In(nums = {30, 40, 50, 60, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89})
  private Integer regionCode;

  @Min(value = Constants.minWaterHt)
  @Max(value = Constants.maxWaterHt)
  private Double runupHt;

  @Min(value = Constants.minHoriz)
  @Max(value= Constants.maxHoriz)
  private Double runupHoriz;

  @Min(value = Constants.measureTypeMin)
  @Max(value = Constants.measureTypeMax)
  private Integer typeMeasurementId;

  @Min(value = 0)
  private Double damageMillionsDollars;

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

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
  private Date ngdcDate;

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
  private Integer temporalAccuracy;

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
  private Long objectid;

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
  private Geometry shape;

  private String comments;

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
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

  private Character flagArrTravTimeChk;

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
  private Integer maxWaveArrMin;

  private Integer maxWaveNum;

  private Double predTravHours;

  private Integer predTravMins;

  @Min(value = 0)
  private Integer housesDamaged;

  @Min(value = Constants.descripMin)
  @Max(value = Constants.descripMax)
  private Integer housesDamagedAmountOrder;

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
  private String publish;

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
  private String previousState;

  @OneToMany(mappedBy = "tsunamiRunup", fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<TsrunupRefs> tsrunupRefs = new HashSet<>();

}

