package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.service.TsunamiService;
import org.hibernate.criterion.*;
import org.hibernate.sql.JoinType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TsunamiServiceImpl implements TsunamiService{

  @Autowired
  TsunamiEventRepository tsunamiEventRepository;

  public List<TsunamiEvent> generateCriteria (Map<String, String> map, DetachedCriteria query){

    query.createAlias("tsunamiRunupViews", "tsRunups", JoinType.INNER_JOIN);

    ProjectionList projList = Projections.projectionList();
    projList.add(Projections.distinct(Projections.property("id")));
    projList.add(Projections.property("area"));
    projList.add(Projections.property("country"));
    projList.add(Projections.property("latitude"));
    projList.add(Projections.property("longitude"));
    query.setProjection(projList);

    Criterion year = checkYearParams(map);
    Criterion validity = checkValidityParams(map);
    Criterion country = checkCountryParam(map);
    Criterion causeCode = checkTsunamiCause(map);
    Criterion regionCode = checkRegionCode(map);
    Criterion area = checkAreaParam(map);
    Criterion latitude = checkLatParams(map);
    Criterion longitude = checkLongParams(map);
    Criterion eqMag = checkEQMagParam(map);
    Criterion loc = checkLocationParam(map);
    Criterion runupRegion = checkRunupRegionParam(map);
    Criterion runupCountry = checkRunupCountryParam(map);
    Criterion runupArea = checkRunupAreaParam(map);
    Criterion runupTravTime = checkRunupTravelTimeParams(map);
    Criterion runupLocation = checkRunupLocationParam(map);
    Criterion runupDistance = checkRunupDistanceParams(map);
    Criterion numofRunups = checkNumRunupsParam(map);
    Criterion waterHeight = checkWaterHeightParams(map);
    Criterion numOfDeaths = checkNumberOfDeathsParams(map);
    Criterion numOfInjuries = checkNumberOfInjuriesParams(map);
    Criterion damageInMill = checkDamageMillionsParam(map);
    Criterion numHousesDest = checkNumHousesDestroyedParams(map);
    Criterion deathDescription = checkDeathDescriptionParams(map);
    Criterion injuryDescription = checkInjuryDescriptionParams(map);
    Criterion damageDescription = checkDamageDescriptionParam(map);
    Criterion housesDescription = checkHousesDescriptionParam(map);

    Conjunction conjunction = Restrictions.conjunction();

    if(year != null){
      conjunction.add(year);
    }
    if(validity != null){
      conjunction.add(validity);
    }
    if(country != null){
      conjunction.add(country);
    }
    if(causeCode != null){
      conjunction.add(causeCode);
    }
    if(regionCode != null){
      conjunction.add(regionCode);
    }
    if(area != null){
      conjunction.add(area);
    }
    if(latitude != null){
      conjunction.add(latitude);
    }
    if(longitude != null){
      conjunction.add(longitude);
    }
    if(eqMag != null){
      conjunction.add(eqMag);
    }
    if(loc != null){
      conjunction.add(loc);
    }
    if(runupRegion != null){
      conjunction.add(runupRegion);
    }
    if(runupCountry != null){
      conjunction.add(runupCountry);
    }
    if(runupArea != null){
      conjunction.add(runupArea);
    }
    if(runupTravTime != null){
      conjunction.add(runupTravTime);
    }
    if(runupLocation != null){
      conjunction.add(runupLocation);
    }
    if(numofRunups != null){
      conjunction.add(numofRunups);
    }
    if(waterHeight != null){
      conjunction.add(waterHeight);
    }
    if(numOfDeaths != null){
      conjunction.add(numOfDeaths);
    }
    if(numOfInjuries != null){
      conjunction.add(numOfInjuries);
    }
    if(damageInMill != null){
      conjunction.add(damageInMill);
    }
    if(numHousesDest != null){
      conjunction.add(numHousesDest);
    }
    if(runupDistance != null){
      conjunction.add(runupDistance);
    }
    if(deathDescription != null){
      conjunction.add(deathDescription);
    }
    if(injuryDescription != null){
      conjunction.add(injuryDescription);
    }
    if(damageDescription != null){
      conjunction.add(damageDescription);
    }
    if(housesDescription != null){
      conjunction.add(housesDescription);
    }

    query.add(conjunction);

    System.out.println(query.toString());

    return getEventsByQuery(query);
  }

  public List<TsunamiEvent> getEventsByQuery(DetachedCriteria query){
    System.out.println("you have reached the getEvents by Query");
    System.out.println(query.toString());
    return tsunamiEventRepository.getEventsByQuery(query);
  }

  public Criterion checkMinMax(Integer min, Integer max, String colName){
    if(min != null && max != null){
      return Restrictions.between(colName, min, max);
    }else if(min != null){
      return Restrictions.ge(colName, min);
    }else if(max != null){
      return Restrictions.le(colName, max);
    }else{
      return null;
    }
  }

  public Criterion checkMinMax(Float min, Float max, String colName){
    if(min != null && max != null){
      return Restrictions.between(colName, min, max);
    }else if(min != null){
      return Restrictions.ge(colName, min);
    }else if(max != null){
      return Restrictions.le(colName, max);
    }else{
      return null;
    }
  }
  //TODO: exchange in all places necessary
  public Integer generateInteger(Map<String, String> map, String key){
    return map.get(key) != null? new Integer(Integer.parseInt(map.get(key))): null;
  }

  @Override
  public Criterion checkYearParams(Map<String, String> map){
    //TODO: Must validate input min(-2000) max(present year)
    Integer minYear = generateInteger(map,  "minyear");
    Integer maxYear = generateInteger(map, "maxyear");
    String colName = "year";

    return checkMinMax(minYear, maxYear, colName);
  }

  @Override
  public Criterion checkValidityParams(Map<String, String> map){
    //TODO: Must validate input min(-1) max(4)
    Integer minValidity = generateInteger(map, "minvalidity");
    Integer maxValidity = generateInteger(map, "maxvalidity");
    String colName = "eventValidity";

    return checkMinMax(minValidity, maxValidity, colName);
  }

  @Override
  public Criterion checkCountryParam(Map<String, String> map){
    //TODO: Must validate input
    String country = map.get("country");
    if(country != null){
      return Restrictions.eq("country", country);
    }else{
      return null;
    }

  }

  @Override
  public Criterion checkTsunamiCause(Map<String, String> map) {
    //TODO: must validate input min(0) max(11)
    Integer minCause = generateInteger(map, "mincause");
    Integer maxCause = generateInteger(map, "maxcause");
    String colName = "causeCode";

    return checkMinMax(minCause, maxCause, colName);
  }

  @Override
  public Criterion checkRegionCode(Map<String,String> map){
    Integer regionCode = generateInteger(map, "regioncode");
    if(regionCode != null){
      return Restrictions.eq("regionCode", regionCode);
    }else{
      return null;
    }
  }

  @Override
  public Criterion checkAreaParam(Map<String, String> map) {
    //TODO must validate input
    String area = map.get("area");
    if(area != null){
      return Restrictions.eq("area", area);
    }else{
      return null;
    }
  }

  @Override
  public Criterion checkLatParams(Map<String, String> map) {
    Float latNorth = map.get("latnorth") != null? new Float(Float.parseFloat(map.get("latnorth"))): null;
    Float latSouth = map.get("latsouth") != null? new Float(Float.parseFloat(map.get("latsouth"))): null;
    String colName = "latitude";

    return checkMinMax( latSouth, latNorth, colName);
  }

  @Override
  public Criterion checkLongParams(Map<String, String> map) {
    Float longWest = map.get("longwest") != null? new Float(Float.parseFloat(map.get("longwest"))): null;
    Float longEast = map.get("longeast") != null? new Float(Float.parseFloat(map.get("longeast"))): null;
    String colName = "longitude";

    return checkMinMax( longWest, longEast, colName);
  }

  @Override
  public Criterion checkEQMagParam(Map<String, String> map) {
    Float eqMag = map.get("eqmag") != null? new Float(Float.parseFloat(map.get("eqmag"))): null;

    if(eqMag == null){
      return null;
    }
    Disjunction objDisjuction = Restrictions.disjunction();
    objDisjuction.add(Restrictions.eq("eqMagUnk", eqMag));
    objDisjuction.add(Restrictions.eq("eqMagMb", eqMag));
    objDisjuction.add(Restrictions.eq("eqMagMs", eqMag));
    objDisjuction.add(Restrictions.eq("eqMagMw", eqMag));

    return objDisjuction;

  }

  @Override
  public Criterion checkLocationParam(Map<String, String> map) {
    String locStart = map.get("locstart");
    String locEnd = map.get("locend");
    String locIncludes = map.get("locincludes");
    String locMatch = map.get("locmatch");
    String locNot = map.get("locnot");

    if(locStart != null){
      Criterion rest =  Restrictions.ilike("locationName", locStart, MatchMode.START);
      System.out.println(rest.toString());
      return rest;
    }else if(locEnd != null){
      return Restrictions.ilike("locationName", locEnd, MatchMode.END);
    }else if(locIncludes != null){
      return Restrictions.ilike("locationName", locIncludes, MatchMode.ANYWHERE);
    }else if(locMatch != null){
      return Restrictions.ilike("locationName", locMatch, MatchMode.EXACT);
    }else if(locNot != null){
      return Restrictions.not(Restrictions.ilike("locationName", locNot, MatchMode.EXACT));
    }else{
      return null;
    }
  }

  @Override
  public Criterion checkRunupRegionParam(Map<String, String> map) {
    Integer regionCode = generateInteger(map, "runupregion");
    if(regionCode != null){
      return Restrictions.eq("tsRunups.regionCode", regionCode);
    }else{
      return null;
    }
  }

  @Override
  public Criterion checkRunupCountryParam(Map<String, String> map) {
    String country = map.get("runupcountry");
    if(country != null){
      return Restrictions.eq("tsRunups.country", country);
    }else{
      return null;
    }
  }

  @Override
  public Criterion checkRunupAreaParam(Map<String, String> map) {
    String runupArea = map.get("runuparea");
    if(runupArea != null){
      return Restrictions.eq("tsRunups.area", runupArea);
    }else{
      return null;
    }
  }

  @Override
  public Criterion checkRunupTravelTimeParams(Map<String, String> map) {
    Integer travelTimeMin = generateInteger(map, "runuptraveltimemin");
    Integer travelTimeMax = generateInteger(map, "runuptraveltimemax");
    String colName = "tsRunup.travHours";

    return checkMinMax(travelTimeMin, travelTimeMax, colName);
  }

  @Override
  public Criterion checkRunupLocationParam(Map<String, String> map) {
    String locStart = map.get("runuplocstart");
    String locEnd = map.get("runuplocend");
    String locIncludes = map.get("runuplocincludes");
    String locMatch = map.get("runuplocmatch");
    String locNot = map.get("runuplocnot");

    if(locStart != null){
      Criterion rest =  Restrictions.ilike("tsRunup.locationName", locStart, MatchMode.START);
      System.out.println(rest.toString());
      return rest;
    }else if(locEnd != null){
      return Restrictions.ilike("tsRunup.locationName", locEnd, MatchMode.END);
    }else if(locIncludes != null){
      return Restrictions.ilike("tsRunup.locationName", locIncludes, MatchMode.ANYWHERE);
    }else if(locMatch != null){
      return Restrictions.ilike("tsRunup.locationName", locMatch, MatchMode.EXACT);
    }else if(locNot != null){
      return Restrictions.not(Restrictions.ilike("tsRunup.locationName", locNot, MatchMode.EXACT));
    }else{
      return null;
    }
  }

  @Override
  public Criterion checkNumRunupsParam(Map<String, String> map) {
    Integer min = generateInteger(map, "numberofrunupsmin");
    Integer max = generateInteger(map, "numberofrunupsmax");
    String colName = "numRunup";

    return checkMinMax(min, max, colName);
  }

  @Override
  public Criterion checkWaterHeightParams(Map<String, String> map) {
    Float waterHeightMin = map.get("waterheightmin") != null?
        new Float(Float.parseFloat(map.get("waterheightmin"))): null;
    Float waterHeightMax = map.get("waterheightmax") != null?
        new Float(Float.parseFloat(map.get("waterheightmax"))): null;
    String colName = "maxEventRunup";
    return checkMinMax(waterHeightMin, waterHeightMax, colName);
  }

  @Override
  public Criterion checkNumberOfDeathsParams(Map<String, String> map) {
    Integer numOfDeathsMin = generateInteger(map, "numberofdeathsmin");
    Integer numOfDeathsMax = generateInteger(map, "numberofdeathsmax");
    String colName = "deaths";
    return checkMinMax(numOfDeathsMin, numOfDeathsMax, colName);
  }

  @Override
  public Criterion checkNumberOfInjuriesParams(Map<String, String> map) {
    Integer min = generateInteger(map, "numberofinjuriesmin");
    Integer max = generateInteger(map, "numberofinjuriesmax");
    String colName = "injuries";
    return checkMinMax(min, max, colName);
  }

  @Override
  public Criterion checkDamageMillionsParam(Map<String, String> map) {
    Integer min = generateInteger(map, "damageinmillionsmin");
    Integer max = generateInteger(map, "damageinmillionsmax");
    String colName = "injuries";
    return checkMinMax(min, max, colName);
  }

  @Override
  public Criterion checkNumHousesDestroyedParams(Map<String, String> map) {
    Integer min = generateInteger(map, "numberofhousesdestroyedmin");
    Integer max = generateInteger(map, "numberofhousesdestroyedmax");
    String colName = "injuries";
    return checkMinMax(min, max, colName);
  }

  @Override
  public Criterion checkRunupDistanceParams(Map<String, String> map) {
    Integer min = generateInteger(map, "runupdistancemin");
    Integer max = generateInteger(map, "runupdistancemax");
    String colName = "tsRunups.distFromSource";

    return checkMinMax(min, max, colName);
  }

  @Override
  public Criterion checkDeathDescriptionParams(Map<String, String> map) {
    Integer min = generateInteger(map, "deathdescriptionmin");
    Integer max = generateInteger(map, "deathdescriptionmax");
    String colName = "deathsAmountOrder";

    return checkMinMax(min, max, colName);
  }

  @Override
  public Criterion checkInjuryDescriptionParams(Map<String, String> map) {
    Integer min = generateInteger(map, "injurydescriptionmin");
    Integer max = generateInteger(map, "injurydescriptionmax");
    String colName = "injuriesAmountOrder";

    return checkMinMax(min, max, colName);
  }

  @Override
  public Criterion checkDamageDescriptionParam(Map<String, String> map) {
    Integer min = generateInteger(map, "damagedescriptionmin");
    Integer max = generateInteger(map, "damagedescriptionmax");
    String colName = "damageAmountOrder";

    return checkMinMax(min, max, colName);
  }

  @Override
  public Criterion checkHousesDescriptionParam(Map<String, String> map) {
    Integer min = generateInteger(map, "housesdestroyeddescriptionmin");
    Integer max = generateInteger(map, "housesdestroyeddescriptionmax");
    String colName = "housesAmountOrder";

    return checkMinMax(min, max, colName);
  }
}
