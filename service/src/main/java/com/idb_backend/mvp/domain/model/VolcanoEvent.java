package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryEntity;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@QueryEntity
@Table(name = "VOLCANO_EVENT")
@Entity(name = "VOLCANO_EVENT")
public class VolcanoEvent {

  @Id
  private Integer hazEventId;

  private Integer year;
  private Integer mo;
  private Integer day;
  private java.sql.Date eventDate;
  private java.sql.Date startDate;
  private java.sql.Date endDate;
  private Integer vei;
  private Integer fatalities;
  private String agent;
  private String assocEq;
  private String assocTsu;
  private String comments;
  private String reference;
  private Double damageMillionsDollars;
  private Integer damageAmountOrder;
  private Integer deathsAmountOrder;
  private Integer injuries;
  private Integer injuriesAmountOrder;
  private Integer housesDestroyed;
  private Integer housesAmountOrder;
  private Integer missing;
  private Integer missingAmountOrder;
  private Integer deathsTotal;
  private Integer deathsAmountOrderTotal;
  private Integer injuriesTotal;
  private Integer injuriesAmountOrderTotal;
  private Integer missingTotal;
  private Integer missingAmountOrderTotal;
  private Double damageMillionsDollarsTotal;
  private Integer damageAmountOrderTotal;
  private Integer housesDestroyedTotal;
  private Integer housesAmountOrderTotal;
  private Integer validity;
  private Integer signif;
  private String publish;
  private String previousState;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "VOL_ID")
  @JsonIgnore
  private VolcanoEvent volcanoEvent;
//  private Integer volId;

  @OneToMany(mappedBy = "volcanoEvent", fetch = FetchType.LAZY)
  private Set<SignifAndVolEvent> signifAndVolEvents = new HashSet<>();

  @OneToMany(mappedBy = "volcanoEvent", fetch = FetchType.EAGER)
  private Set<TseventAndVolEvent> tseventAndVolEvents = new HashSet<>();

  @OneToMany(mappedBy = "volcanoEvent", fetch = FetchType.LAZY)
  private Set<VolcanoRefs> volcanoRefs = new HashSet<>();

}
