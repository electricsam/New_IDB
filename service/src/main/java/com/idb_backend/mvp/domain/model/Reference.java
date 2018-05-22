package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryEntity;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Getter;

import javax.persistence.*;
import java.util.*;

@Data
@QueryEntity
@Table(name = "REFERENCE")
@Entity(name = "REFERENCE")
public class Reference {

  @Id
  @Column(name = "ID")
  private Integer id;



  @JsonIgnore
  private String refNo;
  @JsonIgnore
  private Integer oldId;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String authorIncludes;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String authorStart;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String authorMatches;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String authorNot;

  private String author;


  private String year;


  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String citIncludes;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String citStart;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String citMatches;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String citNot;

  private String citation;

  @JsonIgnore
  private String ok;

  private Integer have;

  @JsonIgnore
  private String publish;

  @Getter(value = AccessLevel.PRIVATE)
  private String previousState;
  @Getter(value = AccessLevel.PRIVATE)
  private Date lastUpdate;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String commentsIncludes;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String commentsStart;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String commentsMatches;

  @Transient
  @Getter(AccessLevel.PRIVATE)
  private String commentsNot;


  private String comments;

  @OneToMany(mappedBy = "reference", fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<TsunamiRefs> tsunamiRefs = new HashSet<>();

  @OneToMany(mappedBy = "reference", fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<SignifRefs> signifRefs = new HashSet<>();

  @OneToMany(mappedBy = "reference", fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<VolcanoRefs> volcanoRefs = new HashSet<>();

  @OneToMany(mappedBy = "reference", fetch = FetchType.LAZY)
  @JsonIgnore
  private Set<TsrunupRefs> tsrunupRefs = new HashSet<>();

}
