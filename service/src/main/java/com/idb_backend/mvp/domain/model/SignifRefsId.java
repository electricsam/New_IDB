package com.idb_backend.mvp.domain.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class SignifRefsId implements Serializable{

  @Column(name = "SIGNIF_ID")
  private Integer signifId;

  @Column(name = "REF_ID")
  private Integer refId;

  public SignifRefsId(){}

  public SignifRefsId(Integer signifId, Integer refId){
    this.signifId = signifId;
    this.refId = refId;
  }

  public boolean equals(Object o) {
    if(o != null && o instanceof SignifRefsId){
      SignifRefsId that = (SignifRefsId) o;
      return this.signifId.equals(that.signifId) && this.refId.equals(that.refId);
    }
    return false;
  }

  public int hashCode() {
    return signifId.hashCode() + refId.hashCode();
  }


}
