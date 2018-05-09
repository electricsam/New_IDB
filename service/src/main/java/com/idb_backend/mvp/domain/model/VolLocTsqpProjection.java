package com.idb_backend.mvp.domain.model;

import java.io.Serializable;

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

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getNum() {
    return num;
  }

  public void setNum(String num) {
    this.num = num;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public Double getLatitude() {
    return latitude;
  }

  public void setLatitude(Double latitude) {
    this.latitude = latitude;
  }

  public Double getLongitude() {
    return longitude;
  }

  public void setLongitude(Double longitude) {
    this.longitude = longitude;
  }

  public Integer getElevation() {
    return elevation;
  }

  public void setElevation(Integer elevation) {
    this.elevation = elevation;
  }

  public String getMorphology() {
    return morphology;
  }

  public void setMorphology(String morphology) {
    this.morphology = morphology;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public String getTimeErupt() {
    return timeErupt;
  }

  public void setTimeErupt(String timeErupt) {
    this.timeErupt = timeErupt;
  }
}
