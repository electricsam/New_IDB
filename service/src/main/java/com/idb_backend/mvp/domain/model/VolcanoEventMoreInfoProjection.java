package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vividsolutions.jts.geom.Geometry;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;

import javax.persistence.Id;
import javax.persistence.Transient;
import java.math.BigInteger;
import java.util.Date;

@Data
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
  private String comments;


  public VolcanoEventMoreInfoProjection(){}
}

