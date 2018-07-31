package com.idb_backend.mvp.domain.model;

import lombok.Data;

@Data
public class EarthquakeMoreInfoProjection {
  private Integer id;
  private Integer year;
  private Integer month;
  private Integer day;
  private Integer hour;
  private Integer minute;
  private Double second;
  private String locationName;
  private Double latitude;
  private Double longitude;
  private Integer eqDepth;
  private Double eqMagMw;
  private Double eqMagMs;
  private Double eqMagMb;
  private Double eqMagMl;
  private Double eqMagMfa;
  private Double eqMagUnk;
  private String intensity;
  private Integer deaths;
  private Integer deathsAmountOrder;
  private Integer missing;
  private Integer missingAmountOrder;
  private Integer injuries;
  private Integer injuriesAmountOrder;
  private Double damageMillionsDollars;
  private Integer damageAmountOrder;
  private Integer housesDestroyed;
  private Integer housesAmountOrder;
  private Integer housesDamaged;
  private Integer housesDamagedTotal;
  private Integer deathsTotal;
  private Integer deathsAmountOrderTotal;
  private Integer injuriesTotal;
  private Integer injuriesAmountOrderTotal;
  private Integer missingTotal;
  private Integer missingAmountOrderTotal;
  private Double damageMillionsDollarsTotal;
  private Integer damageAmountOrderTotal;
  private Integer housesDestroyedTotal;
  private Integer housesAmountOrderTotal;
  private Integer housesDamagedAmountOrder;
  private Integer housesDamAmountOrderTotal;
  private String comments;

  public EarthquakeMoreInfoProjection(){}
}
