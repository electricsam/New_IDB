package com.idb_backend.mvp.domain.model;

import lombok.Data;

@Data
public class TsunamiEventMoreInfoRunupProjection {
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

  public TsunamiEventMoreInfoRunupProjection(){}
}
