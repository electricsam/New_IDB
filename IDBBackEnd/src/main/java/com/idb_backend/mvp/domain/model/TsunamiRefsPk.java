package com.idb_backend.mvp.domain.model;

import java.io.Serializable;

public class TsunamiRefsPk implements Serializable{
  private TsunamiEvent tsEventId;
  private Reference tsRefId;


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
}
