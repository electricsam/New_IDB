package com.idb_backend.mvp.domain.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

//TODO: check to see if HAZ. on the entity name is throwing it off;

@Entity(name = "VOL_ID")
public class VolcanoId implements Serializable {
  private static final long serialVersionUID = 3678107792576131001L;

  @Id
  @Column(name="ID")
  private String id;

  @Column(name="NUM")
  private String num;

  @Column(name="NAME")
  private String name;

  @Column(name="PUBLISH")
  private String publish;

  @Column(name="PREVIOUS_STATE")
  private String previousState;

  public String getId() {
      return id;
  }

  public void setId(String id) {
      this.id = id;
  }

  public String getNum() {
      return num;
  }

  public void setNum(String num) {
      this.num = num;
  }

  public String getName() {
      return name;
  }

  public void setName(String name) {
      this.name = name;
  }

  public String getPublish() {
      return publish;
  }

  public void setPublish(String publish) {
      this.publish = publish;
  }

  public String getPreviousState() {
      return previousState;
  }

  public void setPreviousState(String previousState) {
      this.previousState = previousState;
  }

}
