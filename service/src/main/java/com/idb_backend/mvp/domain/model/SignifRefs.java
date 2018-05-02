package com.idb_backend.mvp.domain.model;


import com.querydsl.core.annotations.QueryEntity;

import javax.persistence.*;

@QueryEntity
@Table(name = "SIGNIF_REFS")
@Entity(name = "SIGNIF_REFS")
public class SignifRefs {

  @EmbeddedId
  SignifRefsId id = new SignifRefsId();

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "SIGNIF_ID", insertable = false, updatable = false)
  private SignifTsqp signifTsqp;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "REF_ID", insertable = false, updatable = false)
  private Reference reference;


  private java.sql.Date lastUpdate;
  private String publish;
  private String previousState;


  public SignifTsqp getSignifTsqp() {
    return signifTsqp;
  }

  public void setSignifTsqp(SignifTsqp signifTsqp) {
    this.signifTsqp = signifTsqp;
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
