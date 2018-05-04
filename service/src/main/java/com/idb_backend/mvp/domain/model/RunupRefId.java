package com.idb_backend.mvp.domain.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class RunupRefId implements Serializable{

  @Column(name = "TSRUNUP_ID")
  private Integer tsrunupId;

  @Column(name = "TSREF_ID")
  private Integer tsrefId;

  public RunupRefId(){}

  public RunupRefId(Integer tsrunupId, Integer tsrefId){
    this.tsrefId = tsrefId;
    this.tsrunupId = tsrunupId;
  }

  public boolean equals(Object o) {
    if(o != null && o instanceof RunupRefId){
      RunupRefId that = (RunupRefId) o;
      return this.tsrunupId.equals(that.tsrunupId) && this.tsrefId.equals(that.tsrefId);
    }
    return false;
  }

  public int hashCode() {return tsrunupId.hashCode() + tsrefId.hashCode();}

}
