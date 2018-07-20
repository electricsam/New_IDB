package com.idb_backend.mvp.domain.model;

import lombok.Data;

@Data
public class TsunamiEventMoreInfoProjection {
  private Integer id;
  private Integer year;
  private Integer month;
  private Integer day;
  private Integer hour;
  private Integer minute;
  private Double second;
  private Integer eventValidity;
  private Integer causeCode;
  private String country;
  private String locationName;
  private Double latitude;
  private Double longitude;
  private Double maxEventRunup;
  private Integer numRunup;
  private Double tsMtAbe;
  private Double tsMtIi;
  private Double tsIntensity;
  private Integer deaths;
  private Integer deathsAmountOrder;
  private Integer injuries;
  private Integer injuriesAmountOrder;
  private Integer missing;
  private Integer missingAmountOrder;
  private Double damageMillionsDollars;
  private Integer damageAmountOrder;
  private Integer housesDestroyed;
  private Integer housesAmountOrder;
  private Integer housesDamaged;
  private Integer housesDamagedAmountOrder;
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
  private Integer housesDamagedTotal;
  private Integer housesDamAmountOrderTotal;
  private String comments;

  public TsunamiEventMoreInfoProjection(){}

}
