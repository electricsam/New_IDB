package com.idb_backend.mvp.domain.model;

import com.querydsl.core.annotations.QueryEntity;

import javax.persistence.*;

@QueryEntity
@Table(name = "SIGNIF_AND_VOL_EVENT")
@Entity(name = "SIGNIF_AND_VOL_EVENT")
public class SignifAndVolEvent {

  @EmbeddedId
  SigVolId id = new SigVolId();

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "SIG_ID", insertable = false, updatable = false)
  private SignifTsqp signifTsqp;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "VOL_ID", insertable = false, updatable = false)
  private VolcanoEvent volcanoEvent;

  private java.sql.Date lastUpdate;
  private String publish;
  private String previousState;

  public void setId(Integer sigId, Integer volId){
    this.id = new SigVolId(sigId, volId);
  }

  public SignifTsqp getSignifTsqp() {
    return signifTsqp;
  }

  public void setSignifTsqp(SignifTsqp signifTsqp) {
    this.signifTsqp = signifTsqp;
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
