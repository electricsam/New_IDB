package com.idb_backend.mvp.domain.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class SigVolId implements Serializable{

  @Column(name = "SIG_ID")
  private Integer sigId;

  @Column(name = "VOL_ID")
  private Integer volId;

  public SigVolId(){}

  public SigVolId(Integer sigId, Integer volId){
    this.sigId = sigId;
    this.volId = volId;
  }

  public boolean equals(Object o) {
    if(o != null && o instanceof SigVolId){
      SigVolId that = (SigVolId) o;
      return this.sigId.equals(that.sigId) && this.volId.equals(that.volId);
    }
    return false;
  }

  public int hashCode() {
    return sigId.hashCode() + volId.hashCode();
  }
}
