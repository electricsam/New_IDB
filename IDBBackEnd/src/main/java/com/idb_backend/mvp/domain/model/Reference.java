package com.idb_backend.mvp.domain.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity(name = "REFERENCE")
public class Reference {

  @Id
  @Column(name = "ID")
  private Integer id;

  @Column(name = "REF_NO")
  private String refNo;

  @Column(name = "OLD_ID")
  private Integer oldId;

  @Column(name = "AUTHOR")
  private String author;

  @Column(name = "YEAR")
  private String year;

  @Column(name = "CITATION")
  private String citation;

  @Column(name = "OK")
  private String ok;

  @Column(name = "LAST_UPDATED")
  private Date lastUpdated;

  @Column(name = "HAVE")
  private Integer have;

  @Column(name = "PUBLISH")
  private String publish;

  @Column(name = "PREVIOUS_STATE")
  private String previousState;

  @Column(name = "COMMENTS")
  private String Comments;

  @OneToMany( mappedBy = "tsRefId", cascade = CascadeType.ALL)
  private List<TsunamiRefs> tsunamiRefs = new ArrayList<>();

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getRefNo() {
    return refNo;
  }

  public void setRefNo(String refNo) {
    this.refNo = refNo;
  }

  public Integer getOldId() {
    return oldId;
  }

  public void setOldId(Integer oldId) {
    this.oldId = oldId;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public String getYear() {
    return year;
  }

  public void setYear(String year) {
    this.year = year;
  }

  public String getCitation() {
    return citation;
  }

  public void setCitation(String citation) {
    this.citation = citation;
  }

  public String getOk() {
    return ok;
  }

  public void setOk(String ok) {
    this.ok = ok;
  }

  public Date getLastUpdated() {
    return lastUpdated;
  }

  public void setLastUpdated(Date lastUpdated) {
    this.lastUpdated = lastUpdated;
  }

  public Integer getHave() {
    return have;
  }

  public void setHave(Integer have) {
    this.have = have;
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

  public String getComments() {
    return Comments;
  }

  public void setComments(String comments) {
    Comments = comments;
  }
}
