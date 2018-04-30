package com.idb_backend.mvp.domain.model;

import com.querydsl.core.annotations.QueryEntity;
import lombok.Data;

import javax.persistence.*;
import java.util.*;

@Data
@QueryEntity
@Table(name = "REFERENCE")
@Entity(name = "REFERENCE")
public class Reference {

  @Id
  @Column(name = "ID", nullable = false)
  private Integer id;
  private String refNo;
  private Integer oldId;
  private String author;
  private String year;
  private String citation;
  private String ok;
  private Date lastUpdated;
  private Integer have;
  private String publish;
  private String previousState;
  private String Comments;

  @OneToMany(mappedBy = "reference", fetch = FetchType.LAZY)
  private Set<TsunamiRefs> tsunamiRefs = new HashSet<>();

}
