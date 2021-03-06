package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryEntity;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;
import java.util.TimeZone;

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

  @JsonFormat(pattern = "yyyy-MM-dd", timezone = "UTC")
  @PastOrPresent
  private java.util.Date eventDate;

  @JsonFormat(pattern = "yyyy-MM-dd ", timezone = "UTC")
  @PastOrPresent
  private java.util.Date startDate;

  @JsonFormat(pattern = "yyyy-MM-dd", timezone = "UTC")
  @PastOrPresent
  private java.util.Date endDate;

  private Integer vei;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer minVei;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private Integer maxVei;

  private Integer fatalities;

  @Size(max = 1)
  private String agent;

  @Size(max = 1)
  private String assocEq;

  @Size(max = 1)
  private String assocTsu;

  private String comments;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String commentsStart;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String commentsEnd;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String commentsInclude;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String commentsMatch;

  @Transient
  @Getter(value = AccessLevel.PRIVATE)
  private String commentsNot;

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

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
  private String publish;

  @Getter(value = AccessLevel.PRIVATE)
  @Setter(value = AccessLevel.PRIVATE)
  private String previousState;

  @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  @JoinColumn(name = "VOL_ID")
  @JsonIgnore
  private VolLocTsqp volLocTsqp;

  @OneToMany(mappedBy = "volcanoEvent", fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<SignifAndVolEvent> signifAndVolEvents = new HashSet<>();

  @OneToMany(mappedBy = "volcanoEvent", fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<TseventAndVolEvent> tseventAndVolEvents = new HashSet<>();

  @OneToMany(mappedBy = "volcanoEvent", fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<VolcanoRefs> volcanoRefs = new HashSet<>();

  public void setVolLocTsqp(VolLocTsqp volLocTsqp){
    this.volLocTsqp = volLocTsqp;
  }

  public VolLocTsqp getVolLocTsqp(){
    return this.volLocTsqp;
  }

}
