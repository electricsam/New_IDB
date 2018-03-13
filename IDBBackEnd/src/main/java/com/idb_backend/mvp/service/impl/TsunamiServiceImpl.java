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

    Criterion year = genIntMinMax(map, "minyear", "maxyear", "year");
    Criterion validity = genIntMinMax(map, "minvalidity", "maxvalidity", "eventValidity");
    Criterion country = genEqRestriction(map, "country", "country");
    Criterion causeCode = genIntMinMax(map,  "mincause", "maxcause", "causeCode");
    Criterion regionCode = checkRegionParams(map, "regioncode", "regionCode");
    Criterion area = genEqRestriction(map, "area", "area");
    Criterion latitude = genFloatMinMax(map, "latnorth", "latsouth", "latitude");
    Criterion longitude = genFloatMinMax(map, "longwest", "longeast", "longitude");
    Criterion eqMag = checkEQMagParam(map);
    Criterion loc = checkLocParams(map, "runuplocstart", "runuplocend", "runuplocincludes", "runuplocmatch", "runuplocnot", "tsRunup.locationName");
    Criterion runupRegion = checkRegionParams(map, "runupregion", "tsRunups.regionCode");
    Criterion runupCountry = genEqRestriction(map, "runupcountry", "tsRunups.country");
    Criterion runupArea = genEqRestriction(map, "runuparea", "tsRunups.area");
    Criterion runupTravTime = genIntMinMax(map, "runuptraveltimemin", "runuptraveltimemax", "tsRunup.travHours");
    Criterion runupLocation = checkLocParams(map, "locstart", "locend", "locincludes", "locmatch", "locnot", "locationName" );
    Criterion runupDistance = genIntMinMax(map, "runupdistancemin", "runupdistancemax", "tsRunups.distFromSource");
    Criterion numofRunups = genIntMinMax(map, "numberofrunupsmin", "numberofrunupsmax", "numRunup");
    Criterion waterHeight = genFloatMinMax(map, "waterheightmin", "waterheightmax", "maxEventRunup");
    Criterion numOfDeaths = genIntMinMax(map, "numberofdeathsmin", "numberofdeathsmax", "deaths");
    Criterion numOfInjuries = genIntMinMax(map, "numberofinjuriesmin", "numberofinjuriesmax", "injuries");
    Criterion damageInMill = genFloatMinMax(map, "damageinmillionsmin", "damageinmillionsmax", "damageMillionsDollars");
    Criterion numHousesDest = genIntMinMax(map, "numhousesdestroyedmin", "numhousesdestroyedmax", "housesDestroyed");
    Criterion deathDescription = genIntMinMax(map, "deathdescriptionmin", "deathdescriptionmax", "deathsAmountOrder");
    Criterion injuryDescription = genIntMinMax(map, "injurydescriptmin", "injurydescriptmax", "injuryAmountOrder");
    Criterion damageDescription = genIntMinMax(map, "damagedescriptmin", "damagedescriptmax", "damageAmountOrder");
    Criterion housesDescription = genIntMinMax(map, "housesdescriptmin", "housesdescriptmax", "housesAmountOrder");

    Conjunction conjunction = Restrictions.conjunction();

    if(year != null){
      conjunction.add(year);
    }if(validity != null){
      conjunction.add(validity);
    }if(country != null){
      conjunction.add(country);
    }if(causeCode != null){
      conjunction.add(causeCode);
    }if(regionCode != null){
      conjunction.add(regionCode);
    }if(area != null){
      conjunction.add(area);
    }if(latitude != null){
      conjunction.add(latitude);
    }if(longitude != null){
      conjunction.add(longitude);
    }if(eqMag != null){
      conjunction.add(eqMag);
    }if(loc != null){
      conjunction.add(loc);
    }if(runupRegion != null){
      conjunction.add(runupRegion);
    }if(runupCountry != null){
      conjunction.add(runupCountry);
    }if(runupArea != null){
      conjunction.add(runupArea);
    }if(runupTravTime != null){
      conjunction.add(runupTravTime);
    }if(runupLocation != null){
      conjunction.add(runupLocation);
    }if(numofRunups != null){
      conjunction.add(numofRunups);
    }if(waterHeight != null){
      conjunction.add(waterHeight);
    }if(numOfDeaths != null){
      conjunction.add(numOfDeaths);
    }if(numOfInjuries != null){
      conjunction.add(numOfInjuries);
    }if(damageInMill != null){
      conjunction.add(damageInMill);
    }if(numHousesDest != null){
      conjunction.add(numHousesDest);
    }if(runupDistance != null){
      conjunction.add(runupDistance);
    }if(deathDescription != null){
      conjunction.add(deathDescription);
    }if(injuryDescription != null){
      conjunction.add(injuryDescription);
    }if(damageDescription != null){
      conjunction.add(damageDescription);
    }if(housesDescription != null){
      conjunction.add(housesDescription);
    }

    query.add(conjunction);

    System.out.println(query.toString());

    return getEventsByQuery(query);
  }

  public List<TsunamiEvent> getEventsByQuery(DetachedCriteria query){
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

  @Override
  public Integer generateInteger(Map<String, String> map, String key){
    return map.get(key) != null? new Integer(Integer.parseInt(map.get(key))): null;
  }

  @Override
  public Float generateFloat(Map<String, String> map, String key) {
    return map.get(key) != null? new Float(Float.parseFloat(map.get(key))) : null;
  }

  @Override
  public Criterion genIntMinMax(Map<String, String> map, String minKey, String maxKey, String colName) {
    //TODO: need to figure out validation
    Integer min = generateInteger(map, minKey);
    Integer max = generateInteger(map, maxKey);

    return checkMinMax(min, max, colName);
  }

  @Override
  public Criterion genFloatMinMax(Map<String, String> map, String minKey, String maxKey, String colName) {
    Float min = generateFloat(map, minKey);
    Float max = generateFloat(map, maxKey);

    return checkMinMax(min, max, colName);
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
  public Criterion genEqRestriction(Map<String, String> map, String key, String colName){
    String condition = map.get(key);
    if(condition != null){
      return Restrictions.eq(colName, condition);
    }else{
      return null;
    }
  }

  @Override
  public Criterion checkRegionParams(Map<String, String> map, String key, String colName){
    Integer condition = generateInteger(map, key);
    if(condition != null){
      return Restrictions.eq(colName, condition);
    }else{
      return null;
    }
  }


  @Override
  public Criterion checkLocParams(Map<String, String> map, String start, String end, String includes, String match,
                           String not, String colName){

    if(start != null){
      return Restrictions.ilike(colName, start, MatchMode.START);
    }else if(end != null){
      return Restrictions.ilike(colName, end, MatchMode.END);
    }else if(includes != null){
      return Restrictions.ilike(colName, includes, MatchMode.ANYWHERE);
    }else if(match != null){
      return Restrictions.ilike(colName, match, MatchMode.EXACT);
    }else if(not != null){
      return Restrictions.not(Restrictions.ilike(colName, not, MatchMode.EXACT));
    }else{
      return null;
    }
  }

}
