package com.idb_backend.mvp.domain.model;

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

  private String refNo;
  private Integer oldId;
  private String author;
  private String year;
  private String citation;
  private String ok;
  private Integer have;
  private String publish;

  @Getter(value = AccessLevel.PRIVATE)
  private String previousState;
  @Getter(value = AccessLevel.PRIVATE)
  private Date lastUpdated;

  private String comments;

  @OneToMany(mappedBy = "reference", fetch = FetchType.LAZY)
  private Set<TsunamiRefs> tsunamiRefs = new HashSet<>();

  @OneToMany(mappedBy = "reference", fetch = FetchType.LAZY)
  private Set<SignifRefs> signifRefs = new HashSet<>();

  @OneToMany(mappedBy = "reference", fetch = FetchType.LAZY)
  private Set<VolcanoRefs> volcanoRefs = new HashSet<>();

  @OneToMany(mappedBy = "reference", fetch = FetchType.LAZY)
  private Set<TsrunupRefs> tsrunupRefs = new HashSet<>();

}
