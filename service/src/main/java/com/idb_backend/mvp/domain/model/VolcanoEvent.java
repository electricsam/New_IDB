package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryEntity;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;

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

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minYear;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxYear;

  private Integer mo;
  private Integer day;
  private java.sql.Date eventDate;
  private java.sql.Date startDate;
  private java.sql.Date endDate;

  private Integer vei;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minVei;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxVei;

  private Integer fatalities;
  private String agent;
  private String assocEq;
  private String assocTsu;
  private String comments;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String comIncludes;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String comStart;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String comMatch;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String comNot;

  private String reference;

  private Double damageMillionsDollars;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double minDamageMillionsDollars;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Double maxDamageMillionsDollars;

  private Integer damageAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minDamageAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxDamageAmountOrder;

  private Integer deathsAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minDeathsAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxDeathsAmountOrder;

  private Integer injuries;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minInjuries;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxInjuries;

  private Integer injuriesAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minInjuriesAmountOrder;
  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxInjuriesAmountOrder;

  private Integer housesDestroyed;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minHousesDestroyed;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxHousesDestroyed;

  private Integer housesAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minHousesAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxHousesAmountOrder;

  private Integer missing;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minMissing;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxMissing;

  private Integer missingAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minMissingAmountOrder;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxMissingAmountOrder;

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

  @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  @JoinColumn(name = "VOL_ID")
  @JsonIgnore
  private VolLocTsqp volLocTsqp;
//  private Integer volId;

  @OneToMany(mappedBy = "volcanoEvent", fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<SignifAndVolEvent> signifAndVolEvents = new HashSet<>();

  @OneToMany(mappedBy = "volcanoEvent", fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<TseventAndVolEvent> tseventAndVolEvents = new HashSet<>();

  @OneToMany(mappedBy = "volcanoEvent", fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<VolcanoRefs> volcanoRefs = new HashSet<>();

}
