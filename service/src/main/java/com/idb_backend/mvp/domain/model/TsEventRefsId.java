package com.idb_backend.mvp.domain.model;

import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import java.io.Serializable;


@Embeddable
public class TsEventRefsId implements Serializable {

  private TsunamiEvent tsunamiEvent;
  private Reference reference;


  @ManyToOne
  public TsunamiEvent getTsunamiEvent(){
    return tsunamiEvent;
  }

  public void setTsunamiEvent(TsunamiEvent tsunamiEvent){
    this.tsunamiEvent = tsunamiEvent;
  }


  @ManyToOne
  public Reference getReference(){
    return reference;
  }

  public void setReference(Reference reference){
    this.reference = reference;
  }

  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;

    TsEventRefsId that = (TsEventRefsId) o;

    if (tsunamiEvent != null ? !tsunamiEvent.equals(that.tsunamiEvent) : that.tsunamiEvent != null) return false;
    if (reference != null ? !reference.equals(that.reference) : that.reference != null)
      return false;

    return true;
  }

  public int hashCode() {
    int result;
    result = (tsunamiEvent != null ? tsunamiEvent.hashCode() : 0);
    result = 31 * result + (reference != null ? reference.hashCode() : 0);
    return result;
  }
}
