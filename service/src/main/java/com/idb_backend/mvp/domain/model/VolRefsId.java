package com.idb_backend.mvp.domain.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class VolRefsId {

  @Column(name = "VOL_ID")
  private Integer volId;

  @Column(name = "REF_ID")
  private Integer refId;

  public VolRefsId(){}

  public VolRefsId(Integer volId, Integer refId){
    this.volId = volId;
    this.refId = refId;
  }

  public boolean equals(Object o) {
    if(o != null && o instanceof VolRefsId){
      VolRefsId that = (VolRefsId) o;
      return this.refId.equals(that.refId) && this.volId.equals(that.volId);
    }
    return false;
  }

  public int hashCode() {
    return refId.hashCode() + volId.hashCode();
  }
}
