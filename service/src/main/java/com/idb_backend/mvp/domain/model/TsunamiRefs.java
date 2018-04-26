package com.idb_backend.mvp.domain.model;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "TSEVENT_REFS")
@IdClass(TsunamiRefsPk.class)
public class TsunamiRefs {

  @Id
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "TSEVENT_ID")
  private TsunamiEvent tsEventId;

  @Id
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "TSREF_ID")
  private Reference tsRefId;

  @Column(name = "LAST_UPDATE")
  private Date lastUpdate;

  @Column(name = "PUBLISH")
  private String publish;

  @Column(name = "PREVIOUS_STATE")
  private String previousState;

  public TsunamiEvent getTsEventId() {
    return tsEventId;
  }

  public void setTsEventId(TsunamiEvent tsEventId) {
    this.tsEventId = tsEventId;
  }

  public Reference getTsRefId() {
    return tsRefId;
  }

  public void setTsRefId(Reference tsRefId) {
    this.tsRefId = tsRefId;
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