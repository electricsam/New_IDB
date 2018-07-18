package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vividsolutions.jts.geom.Geometry;
import lombok.AccessLevel;
import lombok.Getter;

import javax.persistence.Id;
import javax.persistence.Transient;
import java.math.BigInteger;
import java.util.Date;

public class VolcanoEventMoreInfoProjection {
  private Integer id;
  private Integer hazEventId;

  @JsonFormat(pattern = "yyyy-MM-dd", timezone = "UTC")
  private java.util.Date eventDate;
  @JsonFormat(pattern = "yyyy-MM-dd", timezone = "UTC")
  private java.util.Date startDate;
  @JsonFormat(pattern = "yyyy-MM-dd", timezone = "UTC")
  private java.util.Date endDate;
  private Integer vei;

  private String num;
  private String name;
  private String location;
  private Double latitude;
  private Double longitude;
  private Integer elevation;
  private String morphology;
  private String status;
  private String timeErupt;

  private Integer deathsAmountOrder;
  private Integer injuries;
  private Integer injuriesAmountOrder;
  private Double damageMillionsDollars;
  private Integer damageAmountOrder;
  private Integer housesDestroyed;
  private Integer housesAmountOrder;
  private Integer missing;
  private Integer missingAmountOrder;

  private Integer deathsTotal;
  private Integer deathsAmountOrderTotal;
  private Integer injuriesTotal;
  private Integer injuriesAmountOrderTotal;
  private Double damageMillionsDollarsTotal;
  private Integer damageAmountOrderTotal;
  private Integer housesDestroyedTotal;
  private Integer housesAmountOrderTotal;
  private Integer missingTotal;
  private Integer missingAmountOrderTotal;

  public VolcanoEventMoreInfoProjection(){}

  public Integer getId() { return id; }

  public void setId(Integer id) { this.id = id; }

  public Integer getHazEventId() { return hazEventId; }

  public void setHazEventId(Integer hazEventId) { this.hazEventId = hazEventId; }

  public Date getEventDate() { return eventDate; }

  public void setEventDate(Date eventDate) { this.eventDate = eventDate; }

  public Date getStartDate() { return startDate; }

  public void setStartDate(Date startDate) { this.startDate = startDate; }

  public Date getEndDate() { return endDate; }

  public void setEndDate(Date endDate) { this.endDate = endDate; }

  public Integer getVei() { return vei; }

  public void setVei(Integer vei) { this.vei = vei; }

  public String getNum() { return num; }

  public void setNum(String num) { this.num = num; }

  public String getName() { return name; }

  public void setName(String name) { this.name = name; }

  public String getLocation() { return location; }

  public void setLocation(String location) { this.location = location; }

  public Double getLatitude() { return latitude; }

  public void setLatitude(Double latitude) { this.latitude = latitude; }

  public Double getLongitude() { return longitude; }

  public void setLongitude(Double longitude) { this.longitude = longitude; }

  public Integer getElevation() { return elevation; }

  public void setElevation(Integer elevation) { this.elevation = elevation; }

  public String getMorphology() { return morphology; }

  public void setMorphology(String morphology) { this.morphology = morphology; }

  public String getStatus() { return status; }

  public void setStatus(String status) { this.status = status; }

  public String getTimeErupt() { return timeErupt; }

  public void setTimeErupt(String timeErupt) { this.timeErupt = timeErupt; }

  public Integer getDeathsAmountOrder() { return deathsAmountOrder; }

  public void setDeathsAmountOrder(Integer deathsAmountOrder) { this.deathsAmountOrder = deathsAmountOrder; }

  public Integer getInjuries() { return injuries; }

  public void setInjuries(Integer injuries) { this.injuries = injuries; }

  public Integer getInjuriesAmountOrder() { return injuriesAmountOrder; }

  public void setInjuriesAmountOrder(Integer injuriesAmountOrder) { this.injuriesAmountOrder = injuriesAmountOrder; }

  public Double getDamageMillionsDollars() { return damageMillionsDollars; }

  public void setDamageMillionsDollars(Double damageMillionsDollars) { this.damageMillionsDollars = damageMillionsDollars; }

  public Integer getDamageAmountOrder() { return damageAmountOrder; }

  public void setDamageAmountOrder(Integer damageAmountOrder) { this.damageAmountOrder = damageAmountOrder; }

  public Integer getHousesDestroyed() { return housesDestroyed; }

  public void setHousesDestroyed(Integer housesDestroyed) { this.housesDestroyed = housesDestroyed; }

  public Integer getHousesAmountOrder() { return housesAmountOrder; }

  public void setHousesAmountOrder(Integer housesAmountOrder) { this.housesAmountOrder = housesAmountOrder; }

  public Integer getMissing() { return missing; }

  public void setMissing(Integer missing) { this.missing = missing; }

  public Integer getMissingAmountOrder() { return missingAmountOrder; }

  public void setMissingAmountOrder(Integer missingAmountOrder) { this.missingAmountOrder = missingAmountOrder; }

  public Integer getDeathsTotal() { return deathsTotal; }

  public void setDeathsTotal(Integer deathsTotal) { this.deathsTotal = deathsTotal; }

  public Integer getDeathsAmountOrderTotal() { return deathsAmountOrderTotal; }

  public void setDeathsAmountOrderTotal(Integer deathsAmountOrderTotal) { this.deathsAmountOrderTotal = deathsAmountOrderTotal; }

  public Integer getInjuriesTotal() { return injuriesTotal; }

  public void setInjuriesTotal(Integer injuriesTotal) { this.injuriesTotal = injuriesTotal; }

  public Integer getInjuriesAmountOrderTotal() { return injuriesAmountOrderTotal; }

  public void setInjuriesAmountOrderTotal(Integer injuriesAmountOrderTotal) { this.injuriesAmountOrderTotal = injuriesAmountOrderTotal; }

  public Double getDamageMillionsDollarsTotal() { return damageMillionsDollarsTotal; }

  public void setDamageMillionsDollarsTotal(Double damageMillionsDollarsTotal) { this.damageMillionsDollarsTotal = damageMillionsDollarsTotal; }

  public Integer getDamageAmountOrderTotal() { return damageAmountOrderTotal; }

  public void setDamageAmountOrderTotal(Integer damageAmountOrderTotal) { this.damageAmountOrderTotal = damageAmountOrderTotal; }

  public Integer getHousesDestroyedTotal() { return housesDestroyedTotal; }

  public void setHousesDestroyedTotal(Integer housesDestroyedTotal) { this.housesDestroyedTotal = housesDestroyedTotal; }

  public Integer getHousesAmountOrderTotal() { return housesAmountOrderTotal; }

  public void setHousesAmountOrderTotal(Integer housesAmountOrderTotal) { this.housesAmountOrderTotal = housesAmountOrderTotal; }

  public Integer getMissingTotal() { return missingTotal; }

  public void setMissingTotal(Integer missingTotal) { this.missingTotal = missingTotal; }

  public Integer getMissingAmountOrderTotal() { return missingAmountOrderTotal; }

  public void setMissingAmountOrderTotal(Integer missingAmountOrderTotal) { this.missingAmountOrderTotal = missingAmountOrderTotal; }
}

