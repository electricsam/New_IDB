package com.idb_backend.mvp.domain.model;


import com.querydsl.core.annotations.QueryEntity;
import com.vividsolutions.jts.geom.Geometry;
import com.vividsolutions.jts.io.WKTWriter;
import lombok.Data;

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
  private String location;
  private Double latitude;
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

  @OneToMany(mappedBy = "volcanoEvent", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
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
