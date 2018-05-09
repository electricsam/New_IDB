package com.idb_backend.mvp.domain.model;


import com.querydsl.core.annotations.QueryEntity;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Data
@QueryEntity
@Table(name = "VOL_LOC_TSQP")
@Entity(name = "VOL_LOC_TSQP")
public class VolLocTsqp {

  @Id
  private Integer id;

  private String num;
  private String name;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String nameStart;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String nameEnd;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String nameIncludes;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String nameMatch;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String nameNot;



  private String location;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String locStart;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String locEnd;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String locIncludes;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String locMatch;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String locNot;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double minLatitude;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double maxLatitude;

  private Double latitude;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double minLongitude;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double maxLongitude;

  private Double longitude;

  private Integer elevation;
  private String morphology;
  private String status;
  private String timeErupt;
  private BigInteger objectid;
  private Geometry shape;
  private String country;
  private String publish;
  private String previousState;

  @OneToMany(mappedBy = "volLocTsqp", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private List<VolcanoEvent> volcanoEvents = new ArrayList<>();


  public String getShape() {
    if(shape == null){
      return null;
    }else{
      WKTWriter w = new WKTWriter();
      return w.write(shape);
    }
  }

}
