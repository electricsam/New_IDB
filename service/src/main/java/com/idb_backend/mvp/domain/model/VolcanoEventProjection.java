package com.idb_backend.mvp.domain.model;

import java.io.Serializable;

public class VolcanoEventProjection implements Serializable{

  private Integer hazEventId;
  private Integer year;
  private Integer mo;
  private Integer day;
  private String assocTsu;
  private String assocEq;

  private String name;
  private String location;
  private String country;
  private Double latitude;
  private Double longitude;
  private Integer elevation;
  private String morphology;

  private Integer vei;
  private String agent;
  private Double damageMillionsDollars;
  private Integer damageAmountOrder;
  private Integer deathsAmountOrder;
  private Integer injuries;
  private Integer injuriesAmountOrder;
  private Integer housesDestroyed;
  private Integer housesAmountOrder;


  public VolcanoEventProjection(){}

  public String getAssocTsu() {
    return assocTsu;
  }

  public void setAssocTsu(String assocTsu) {
    this.assocTsu = assocTsu;
  }

  public String getAssocEq() {
    return assocEq;
  }

  public void setAssocEq(String assocEq) {
    this.assocEq = assocEq;
  }

  public Integer getHazEventId() {
    return hazEventId;
  }

  public void setHazEventId(Integer hazEventId) {
    this.hazEventId = hazEventId;
  }

  public Integer getYear() {
    return year;
  }

  public void setYear(Integer year) {
    this.year = year;
  }

  public Integer getMo() {
    return mo;
  }

  public void setMo(Integer mo) {
    this.mo = mo;
  }

  public Integer getDay() {
    return day;
  }

  public void setDay(Integer day) {
    this.day = day;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
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

  public Integer getVei() {
    return vei;
  }

  public void setVei(Integer vei) {
    this.vei = vei;
  }

  public String getAgent() {
    return agent;
  }

  public void setAgent(String agent) {
    this.agent = agent;
  }

  public Double getDamageMillionsDollars() {
    return damageMillionsDollars;
  }

  public void setDamageMillionsDollars(Double damageMillionsDollars) {
    this.damageMillionsDollars = damageMillionsDollars;
  }

  public Integer getDamageAmountOrder() {
    return damageAmountOrder;
  }

  public void setDamageAmountOrder(Integer damageAmountOrder) {
    this.damageAmountOrder = damageAmountOrder;
  }

  public Integer getDeathsAmountOrder() {
    return deathsAmountOrder;
  }

  public void setDeathsAmountOrder(Integer deathsAmountOrder) {
    this.deathsAmountOrder = deathsAmountOrder;
  }

  public Integer getInjuries() {
    return injuries;
  }

  public void setInjuries(Integer injuries) {
    this.injuries = injuries;
  }

  public Integer getInjuriesAmountOrder() {
    return injuriesAmountOrder;
  }

  public void setInjuriesAmountOrder(Integer injuriesAmountOrder) {
    this.injuriesAmountOrder = injuriesAmountOrder;
  }

  public Integer getHousesDestroyed() {
    return housesDestroyed;
  }

  public void setHousesDestroyed(Integer housesDestroyed) {
    this.housesDestroyed = housesDestroyed;
  }

  public Integer getHousesAmountOrder() {
    return housesAmountOrder;
  }

  public void setHousesAmountOrder(Integer housesAmountOrder) {
    this.housesAmountOrder = housesAmountOrder;
  }
}
