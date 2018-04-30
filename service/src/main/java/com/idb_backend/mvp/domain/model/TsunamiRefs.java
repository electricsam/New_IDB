package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryEntity;

import javax.persistence.*;
import java.util.Date;

@QueryEntity
@Table(name = "TSEVENT_REFS")
@Entity(name = "TSEVENT_REFS")
public class TsunamiRefs {

  @EmbeddedId
  TsEventRefsId id = new TsEventRefsId();

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "TSEVENT_ID", insertable = false, updatable = false)
  private TsunamiEvent tsunamiEvent;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "TSREF_ID", insertable = false, updatable = false)
  private Reference reference;

  @Column(name = "LAST_UPDATE")
  private Date lastUpdate;

  @Column(name = "PUBLISH")
  private String publish;

  @Column(name = "PREVIOUS_STATE")
  private String previousState;

  @JsonIgnore
  public TsunamiEvent getTsunamiEvent() {
    return tsunamiEvent;
  }

  public void setTsunamiEvent(TsunamiEvent tsunamiEvent) {
    this.tsunamiEvent = tsunamiEvent;
  }

  @JsonIgnore
  public Reference getReference() {
    return reference;
  }

  public void setReference(Reference reference) {
    this.reference = reference;
  }

  public Date getLastUpdate() {
    return lastUpdate;
  }

  public void setLastUpdate(Date lastUpdate) {
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