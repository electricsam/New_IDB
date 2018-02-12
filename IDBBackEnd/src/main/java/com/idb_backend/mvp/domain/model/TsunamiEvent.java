package com.idb_backend.mvp.domain.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "TSEVENT_ATWC")
public class TsunamiEvent {
    @Id
    @Column(name = "ID", nullable = false)
    private int id;

    @Column(name = "TELETSUNAMI")
    private String teletsunami;

    @Column(name = "DESTRUCTION")
    private String destruction;

    @Column(name = "YEAR")
    private Integer year;

    @Column(name = "MONTH")
    private Integer month;

    @Column(name = "DAY")
    private Integer day;

    @Column(name = "DATE_UNSURE")
    private String dateUnsure;

    @Column(name = "LATITUDE")
    private Float latitude;

    @Column(name = "LONGITUDE")
    private Float longitude;

    @Column(name = "EQ_MAG_MS")
    private Float eqMagMs;

    @Column(name = "EQ_DEPTH")
    private Integer eqDepth;

    @Column(name = "MAX_EVENT_RUNUP")
    private Float maxEventRunup;

    @Column(name = "WATER_LEVEL_RECORD")
    private String waterLevelRecord;

    @Column(name = "TS_MT_II")
    private Float tsMtIi;

    @Column(name = "TS_INTENSITY", nullable = true)
    private Float tsIntensity;

    @Column(name = "LOCATION_NAME")
    private String locationName;

    @Column(name = "EVENT_VALIDITY")
    private Integer eventValidity;

    @Column(name = "T_ZONE")
    private Integer tZone;

    @Column(name = "CAUSE")
    private String cause;

    @Column(name = "REFERENCES")
    private String references;

    @Column(name = "CAUSE_CODE")
    private Integer causeCode;

    @Column(name = "FLAG_EDIT_NATWC")
    private String flagEditNatwc;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTeletsunami() {
        return teletsunami;
    }

    public void setTeletsunami(String teletsunami) {
        this.teletsunami = teletsunami;
    }

    public String getDestruction() {
        return destruction;
    }

    public void setDestruction(String destruction) {
        this.destruction = destruction;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Integer getDay() {
        return day;
    }

    public void setDay(Integer day) {
        this.day = day;
    }

    public String getDateUnsure() {
        return dateUnsure;
    }

    public void setDateUnsure(String dateUnsure) {
        this.dateUnsure = dateUnsure;
    }

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }

    public Float getEqMagMs() {
        return eqMagMs;
    }

    public void setEqMagMs(Float eqMagMs) {
        this.eqMagMs = eqMagMs;
    }

    public Integer getEqDepth() {
        return eqDepth;
    }

    public void setEqDepth(Integer eqDepth) {
        this.eqDepth = eqDepth;
    }

    public Float getMaxEventRunup() {
        return maxEventRunup;
    }

    public void setMaxEventRunup(Float maxEventRunup) {
        this.maxEventRunup = maxEventRunup;
    }

    public String getWaterLevelRecord() {
        return waterLevelRecord;
    }

    public void setWaterLevelRecord(String waterLevelRecord) {
        this.waterLevelRecord = waterLevelRecord;
    }

    public Float getTsMtIi() {
        return tsMtIi;
    }

    public void setTsMtIi(Float tsMtIi) {
        this.tsMtIi = tsMtIi;
    }

    public Float getTsIntensity() {
        return tsIntensity;
    }

    public void setTsIntensity(Float tsIntensity) {
        this.tsIntensity = tsIntensity;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public Integer getEventValidity() {
        return eventValidity;
    }

    public void setEventValidity(Integer eventValidity) {
        this.eventValidity = eventValidity;
    }

    public Integer gettZone() {
        return tZone;
    }

    public void settZone(Integer tZone) {
        this.tZone = tZone;
    }

    public String getCause() {
        return cause;
    }

    public void setCause(String cause) {
        this.cause = cause;
    }

    public String getReferences() {
        return references;
    }

    public void setReferences(String references) {
        this.references = references;
    }

    public Integer getCauseCode() {
        return causeCode;
    }

    public void setCauseCode(Integer causeCode) {
        this.causeCode = causeCode;
    }

    public String getFlagEditNatwc() {
        return flagEditNatwc;
    }

    public void setFlagEditNatwc(String flagEditNatwc) {
        this.flagEditNatwc = flagEditNatwc;
    }
}

