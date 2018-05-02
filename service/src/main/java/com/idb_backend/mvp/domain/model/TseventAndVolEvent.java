package com.idb_backend.mvp.domain.model;


import com.querydsl.core.annotations.QueryEntity;

import javax.persistence.*;

@QueryEntity
@Table(name = "TSEVENT_AND_VOL_EVENT")
@Entity(name = "TSEVENT_AND_VOL_EVENT")
public class TseventAndVolEvent {

  @EmbeddedId
  TsEventVolId id = new TsEventVolId();

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "TSU_ID", insertable = false, updatable = false)
  private TsunamiEvent tsunamiEvent;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "VOL_ID", insertable = false, updatable = false)
  private VolcanoEvent volcanoEvent;


  private java.sql.Date lastUpdate;
  private String publish;
  private String previousState;


  public TsunamiEvent getTsunamiEvent() {
    return tsunamiEvent;
  }

  public void setTsunamiEvent(TsunamiEvent tsunamiEvent) {
    this.tsunamiEvent = tsunamiEvent;
  }

  public VolcanoEvent getVolcanoEvent() {
    return volcanoEvent;
  }

  public void setVolcanoEvent(VolcanoEvent volcanoEvent) {
    this.volcanoEvent = volcanoEvent;
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
