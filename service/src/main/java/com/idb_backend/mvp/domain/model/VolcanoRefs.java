package com.idb_backend.mvp.domain.model;

import com.querydsl.core.annotations.QueryEntity;

import javax.persistence.*;

@QueryEntity
@Table(name = "VOLCANO_REFS")
@Entity(name = "VOLCANO_REFS")
public class VolcanoRefs {

  @EmbeddedId
  VolRefsId id = new VolRefsId();

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "VOL_ID", insertable = false, updatable = false)
  private VolcanoEvent volcanoEvent;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "REF_ID", updatable = false, insertable = false)
  private Reference reference;

  private java.sql.Date lastUpdate;
  private String publish;
  private String previousState;


  public VolcanoEvent getVolcanoEvent() {
    return volcanoEvent;
  }

  public void setVolcanoEvent(VolcanoEvent volcanoEvent) {
    this.volcanoEvent = volcanoEvent;
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
