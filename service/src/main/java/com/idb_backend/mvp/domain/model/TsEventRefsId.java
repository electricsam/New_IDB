package com.idb_backend.mvp.domain.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class TsEventRefsId implements Serializable {

  @Column(name = "TSEVENT_ID")
  private Integer tseventId;

  @Column(name = "TSREF_ID")
  private Integer tsrefId;

  public TsEventRefsId(){
  }

  public TsEventRefsId(Integer tseventId, Integer tsrefId){
    this.tseventId = tseventId;
    this.tsrefId = tsrefId;
  }

  public boolean equals(Object o) {
    if(o != null && o instanceof TsEventRefsId){
      TsEventRefsId that = (TsEventRefsId) o;
      return this.tseventId.equals(that.tseventId) && this.tsrefId.equals(that.tsrefId);
    }
    return false;
  }

  public int hashCode() {
    return tseventId.hashCode() + tsrefId.hashCode();
  }


}
