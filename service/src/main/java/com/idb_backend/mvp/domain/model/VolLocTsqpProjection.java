package com.idb_backend.mvp.domain.model;

import lombok.Data;

import java.io.Serializable;

@Data
public class VolLocTsqpProjection implements Serializable{

  private Integer id;
  private String num;
  private String name;
  private String country;
  private Double latitude;
  private Double longitude;
  private Integer elevation;
  private String morphology;
  private String status;
  private String timeErupt;

  public VolLocTsqpProjection(){}

}
