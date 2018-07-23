package com.idb_backend.mvp.domain.model;

import lombok.Data;

@Data
public class RunupMoreInfoProjection {
  private Integer id;
  private String country;
  private String locationName;
  private Double latitude;
  private Double longitude;
  private Integer distFromSource;
  private Integer travHours;
  private Integer travMins;
  private Double runupHt;
  private Double runupHoriz;
  private Integer typeMeasurementId;
  private Double period;
  private String firstMotion;
  private Integer deaths;
  private Integer deathsAmountOrder;
  private Integer injuries;
  private Integer injuriesAmountOrder;
  private Double damageMillionsDollars;
  private Integer damageAmountOrder;
  private Integer housesDestroyed;
  private Integer housesAmountOrder;
  private Integer housesDamaged;
  private Integer housesDamagedAmountOrder;
  private String comments;

  public RunupMoreInfoProjection(){}
}
