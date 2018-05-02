package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryEntity;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import org.hibernate.annotations.Immutable;

import javax.persistence.*;
import java.util.Date;

@Data
@Immutable
@QueryEntity
@Table(name = "TSRUNUP_VSQP")
@Entity(name = "TSRUNUP_VSQP")
public class TsunamiRunupView {
  @Id
  private int id;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "TSEVENT_ID")
  private TsunamiEventView tsunamiEventView;


  private Integer year;

  private Integer month;

  private Integer day;

  private Integer arrDay;

  private Integer arrHour;

  private Integer arrMin;

  private Integer travHours;

  private Integer travMins;

  private Double period;

  private String firstMotion;

  private Double latitude;

  private Double longitude;

  private String locationName;

  private String area;

  private String country;

  private Integer regionCode;

  private Double runupHt;

  private Double runupHoriz;

  private Integer typeOfMeasurementId;

  private Double damageMillionsDollars;

  private Integer damageAmountOrder;

  private Integer housesDestroyed;

  private Integer housesAmountOrder;

  private Integer deaths;

  private Integer deathsAmountOrder;

  private Integer injuries;

  private Integer injuriesAmountOrder;

  private Date ngdcDate;

  private Integer temporalAccuracy;

  private Long objectid;

  private Integer idRef;

  private String tsdate;

  private String hasEvent;

  private String comments;

  private String hasRef;

  private String doubtful;

  private Integer distFromSource;

//  private Geometry shape;
//
//  public String getShape() {
//    if(shape == null){
//      return null;
//    }else{
//      WKTWriter w = new WKTWriter();
//      return w.write(shape);
//    }
//  }
//
//  public void setShape(Geometry shape) {
//    this.shape = shape;
//  }

  private Integer eventRegionCode;

  private Integer predTravHours;

  private Integer predTravMins;

  private Integer housesDamaged;

  private Integer housesDamagedAmountOrder;

}
