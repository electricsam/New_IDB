package com.idb_backend.mvp.domain.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class TsEventVolId implements Serializable{

  @Column(name = "TSU_ID")
  private Integer tsuId;

  @Column(name = "VOL_ID")
  private Integer volId;

  public TsEventVolId(){}

  public TsEventVolId(Integer tsuId, Integer volId){
    this.tsuId = tsuId;
    this.volId = volId;
  }

  public boolean equals(Object o) {
    if(o != null && o instanceof TsEventVolId){
      TsEventVolId that = (TsEventVolId) o;
      return this.tsuId.equals(that.tsuId) && this.volId.equals(that.volId);
    }
    return false;
  }

  public int hashCode() {return tsuId.hashCode() + volId.hashCode();}

}
