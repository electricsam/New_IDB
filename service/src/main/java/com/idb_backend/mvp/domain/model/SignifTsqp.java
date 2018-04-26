package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.querydsl.core.annotations.QueryEntity;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.sql.Date;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@QueryEntity
@Entity(name = "SIGNIF_TSQP")
@Table(name = "SIGNIF_TSQP")
@Data
public class SignifTsqp implements Serializable {

  @Id
  private Integer id;
  private String flagDuplicate;
  private Integer year;
  private Integer month;
  private Integer day;
  private Integer hour;
  private Integer minute;
  private Double second;
  private Double latitude;
  private Double longitude;
  private String locationName;
  private String area;
  private String country;
  private Integer eqDepth;
  private Double eqMagUnk;
  private Double eqMagMb;
  private Double eqMagMs;
  private Double eqMagMw;
  private String intensity;
  private Double damageMillionsDollars;
  private Integer damageAmountOrder;
  private Integer deaths;
  private Integer deathsAmountOrder;
  private Integer injuries;
  private Integer injuriesAmountOrder;
  private String flagTsunami;
  private java.sql.Date ngdcDate;
  private String temporalAccuracy;
  private BigInteger objectid;
  private Geometry shape;
  private String comments;
  private Integer housesDestroyed;
  private Integer housesAmountOrder;
  /*This is going to be a onetomany or manytoone relationship*/
  private Integer tsuId;
  private java.sql.Date lastUpdate;
  private Integer deathsTotal;
  private Integer deathsAmountOrderTotal;
  private Integer injuriesTotal;
  private Integer injuriesAmountOrderTotal;
  private Double damageMillionsDollarsTotal;
  private Integer damageAmountOrderTotal;
  private Integer housesDestroyedTotal;
  private Integer housesAmountOrderTotal;
  private Integer missing;
  private Integer missingAmountOrder;
  private Integer missingTotal;
  private Integer missingAmountOrderTotal;
  private Double eqMagMl;
  private Double eqMagMfa;
  private String flagEpicenterChk;
  private String flagMagnitudeChk;
  private String flagEffectsChk;
  private Integer regionCode;
  private Integer housesDamaged;
  private Integer housesDamagedTotal;
  private Integer housesDamagedAmountOrder;
  private Integer housesDamAmountOrderTotal;
  private String publish;
  private String previousState;

  @OneToMany(mappedBy = "signifTsqp", fetch = FetchType.EAGER)
  @JsonManagedReference
  private Set<SignifToTsEvent> signifToTsEvents = new HashSet<>();


  public String getShape() {
    if(shape == null){
      return null;
    }else{
      WKTWriter w = new WKTWriter();
      return w.write(shape);
    }
  }

}
