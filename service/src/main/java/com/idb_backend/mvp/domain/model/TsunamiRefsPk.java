package com.idb_backend.mvp.domain.model;

import java.io.Serializable;
import java.util.Objects;

public class TsunamiRefsPk implements Serializable{
  private TsunamiEvent tsEventId;
  private Reference tsRefId;

  public TsunamiRefsPk() {}

  public TsunamiRefsPk(TsunamiEvent tsunamiEvent, Reference reference) {
    this.tsEventId = tsunamiEvent;
    this.tsRefId = tsRefId;
  }

  public TsunamiEvent getTsEventId() {
    return tsEventId;
  }

  public void setTsEventId(TsunamiEvent tsEventId) {
    this.tsEventId = tsEventId;
  }

  public Reference getTsRefId() {
    return tsRefId;
  }

  public void setTsRefId(Reference tsRefId) {
    this.tsRefId = tsRefId;
  }

  @Override
  public boolean equals(Object o) {
    if ( this == o ) {
      return true;
    }
    if ( o == null || getClass() != o.getClass() ) {
      return false;
    }
    TsunamiRefsPk pk = (TsunamiRefsPk) o;
    return Objects.equals( tsEventId, pk.tsEventId) &&
        Objects.equals( tsRefId, pk.tsRefId );
  }

  @Override
  public int hashCode() {
    return Objects.hash( tsEventId, tsRefId);
  }

}
