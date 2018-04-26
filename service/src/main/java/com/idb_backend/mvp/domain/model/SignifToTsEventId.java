package com.idb_backend.mvp.domain.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class SignifToTsEventId implements Serializable{
  @Column(name = "SIG_ID")
  private Integer sigId;


  @Column(name = "TSU_ID")
  private Integer tsuId;

  public SignifToTsEventId(){
  }

  public SignifToTsEventId(Integer sigId, Integer tsuId){
    this.tsuId = tsuId;
    this.sigId = sigId;
  }

  public boolean equals(Object o) {
    if(o != null && o instanceof SignifToTsEventId){
      SignifToTsEventId that = (SignifToTsEventId) o;
      return this.sigId.equals(that.sigId) && this.tsuId.equals(that.tsuId);
    }
    return false;
  }

  public int hashCode() {
    return sigId.hashCode() + tsuId.hashCode();
  }
}
