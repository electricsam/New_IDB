package com.idb_backend.mvp.domain.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.querydsl.core.annotations.QueryEntity;

import javax.persistence.*;

@QueryEntity
@Table(name = "SIGNIF_TO_TSEVENT")
@Entity(name = "SIGNIF_TO_TSEVENT")
public class SignifToTsEvent {

  @EmbeddedId
  SignifToTsEventId id = new SignifToTsEventId();

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "SIG_ID", insertable = false, updatable = false)
  public SignifTsqp signifTsqp;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "TSU_ID", insertable = false, updatable = false)
  public TsunamiEvent tsunamiEvent;

  public void setId(Integer sigId, Integer tsuId){
    this.id = new SignifToTsEventId(sigId, tsuId);
  }

  @JsonIgnore
  public SignifTsqp getSignifTsqp() {
    return signifTsqp;
  }

  public void setSignifTsqp(SignifTsqp signifTsqp) {
    this.signifTsqp = signifTsqp;
  }

  @JsonIgnore
  public TsunamiEvent getTsunamiEvent() {
    return tsunamiEvent;
  }

  public void setTsunamiEvent(TsunamiEvent tsunamiEvent) {
    this.tsunamiEvent = tsunamiEvent;
  }

  private java.sql.Date lastUpdate;
  private String publish;
  private String previousState;

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
