package com.idb_backend.mvp.domain.model;


import com.querydsl.core.annotations.QueryEntity;

import javax.persistence.*;

@QueryEntity
@Table(name = "TSRUNUP_REFS")
@Entity(name = "TSRUNUP_REFS")
public class TsrunupRefs {

  @EmbeddedId
  RunupRefId id = new RunupRefId();

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "TSRUNUP_ID", insertable = false, updatable = false)
  private TsunamiRunup tsunamiRunup;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "TSREF_ID", insertable = false, updatable = false)
  private Reference reference;


  private java.sql.Date lastUpdate;
  private String publish;
  private String previousState;


  public TsunamiRunup getTsunamiRunup() {
    return tsunamiRunup;
  }

  public void setTsunamiRunup(TsunamiRunup tsunamiRunup) {
    this.tsunamiRunup = tsunamiRunup;
  }

  public Reference getReference() {
    return reference;
  }

  public void setReference(Reference reference) {
    this.reference = reference;
  }

  public java.sql.Date getLastUpdate() {
    return lastUpdate;
  }

  public void setLastUpdate(java.sql.Date lastUpdate) {
    this.lastUpdate = lastUpdate;
  }


  public String getPublish() {
    return publish;
  }

  public void setPublish(String publish) {
    this.publish = publish;
  }


  public String getPreviousState() {
    return previousState;
  }

  public void setPreviousState(String previousState) {
    this.previousState = previousState;
  }

}
