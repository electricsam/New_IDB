package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.idb_backend.mvp.domain.model.TsunamiEventViewNonPersist;
import com.idb_backend.mvp.domain.model.TsunamiRunupView;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.service.TsunamiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class TsunamiServiceImpl implements TsunamiService{

  @PersistenceContext
  EntityManager em;

  @Autowired
  TsunamiEventRepository tsunamiEventRepository;

  public List<TsunamiEventViewNonPersist> generateCriteria (Map<String, String> map){

    CriteriaBuilder builder = em.getCriteriaBuilder();
    CriteriaQuery<TsunamiEventViewNonPersist> criteria = builder.createQuery( TsunamiEventViewNonPersist.class );
    Root<TsunamiEventView> root = criteria.from( TsunamiEventView.class );
    Join<TsunamiEventView, TsunamiRunupView> join = root.join("tsunamiRunupViews");
    List criteriaList = new ArrayList();

    criteria.multiselect(
        root.get("id"), root.get("year"), root.get("month"), root.get("day"), root.get("hour"), root.get("minute"),
        root.get("second"), root.get("country"), root.get("eventValidity"), root.get("causeCode"),
        root.get("eqMagnitude"), root.get("locationName"), root.get("latitude"), root.get("longitude"),
        root.get("maxEventRunup"), root.get("numRunup"), root.get("tsMtAbe"), root.get("tsMtIi"),
        root.get("tsIntensity"), root.get("deaths"), root.get("deathsAmountOrder"), root.get("missing"),
        root.get("missingAmountOrder"), root.get("injuries"), root.get("injuriesAmountOrder"),
        root.get("damageMillionsDollars"), root.get("damageAmountOrder"), root.get("housesDestroyed"),
        root.get("housesAmountOrder"), root.get("housesDamaged"), root.get("housesDamagedAmountOrder"),
        root.get("deathsTotal"), root.get("deathsAmountOrderTotal"), root.get("missingTotal"),
        root.get("missingAmountOrderTotal"), root.get("injuriesTotal"), root.get("injuriesAmountOrderTotal"),
        root.get("damageMillionsDollarsTotal"), root.get("damageAmountOrderTotal"), root.get("housesDestroyedTotal"),
        root.get("housesAmountOrderTotal"), root.get("housesDamagedTotal"), root.get("housesDamAmountOrderTotal")
    ).distinct(true);

    Predicate year = genIntMinMax(map, "minyear", "maxyear", "year", builder, root);
    Predicate validity = genIntMinMax(map, "minvalidity", "maxvalidity", "eventValidity", builder, root);
    Predicate country = genEqRestriction(map, "country", "country", builder, root);
    Predicate causeCode = genIntMinMax(map,  "mincause", "maxcause", "causeCode", builder, root);
    Predicate regionCode = checkRegionParams(map, "regioncode", "regionCode", builder, root);
    Predicate area = genEqRestriction(map, "area", "area", builder, root);
    Predicate latitude = genFloatMinMax(map, "latnorth", "latsouth", "latitude", builder, root);
    Predicate longitude = genFloatMinMax(map, "longwest", "longeast", "longitude", builder, root);
    Predicate eqMag = genFloatMinMax(map, "eqmagmin", "eqmagmax", "eqMagnitude", builder, root);
    Predicate runupLocation = checkLocParams(map, "runuplocstart", "runuplocend", "runuplocincludes", "runuplocmatch", "runuplocnot", "locationName", builder, join);
    Predicate runupRegion = checkRegionParams(map, "runupregion", "tsRunups.regionCode", builder, join);
    Predicate runupCountry = genEqRestriction(map, "runupcountry", "country", builder, join);
    Predicate runupArea = genEqRestriction(map, "runuparea", "area", builder, join);
    Predicate runupTravTime = genIntMinMax(map, "runuptraveltimemin", "runuptraveltimemax", "travHours", builder, join);
    Predicate loc = checkLocParams(map, "locstart", "locend", "locincludes", "locmatch", "locnot", "locationName", builder, root );
    Predicate runupDistance = genIntMinMax(map, "runupdistancemin", "runupdistancemax", "distFromSource", builder, root);
    Predicate numofRunups = genIntMinMax(map, "numberofrunupsmin", "numberofrunupsmax", "numRunup", builder, root);
    Predicate waterHeight = genFloatMinMax(map, "waterheightmin", "waterheightmax", "maxEventRunup", builder, root);
    Predicate numOfDeaths = genIntMinMax(map, "numberofdeathsmin", "numberofdeathsmax", "deaths", builder, root);
    Predicate numOfInjuries = genIntMinMax(map, "numberofinjuriesmin", "numberofinjuriesmax", "injuries", builder, root);
    Predicate damageInMill = genFloatMinMax(map, "damageinmillionsmin", "damageinmillionsmax", "damageMillionsDollars", builder, root);
    Predicate numHousesDest = genIntMinMax(map, "numhousesdestroyedmin", "numhousesdestroyedmax", "housesDestroyed", builder, root);
    Predicate deathDescription = genIntMinMax(map, "deathdescriptionmin", "deathdescriptionmax", "deathsAmountOrder", builder, root);
    Predicate injuryDescription = genIntMinMax(map, "injurydescriptmin", "injurydescriptmax", "injuryAmountOrder", builder, root);
    Predicate damageDescription = genIntMinMax(map, "damagedescriptmin", "damagedescriptmax", "damageAmountOrder", builder, root);
    Predicate housesDescription = genIntMinMax(map, "housesdescriptmin", "housesdescriptmax", "housesAmountOrder", builder, root);

    if(year != null){
      criteriaList.add(year);
    }if(validity != null){
      criteriaList.add(validity);
    }if(country != null){
      criteriaList.add(country);
    }if(causeCode != null){
      criteriaList.add(causeCode);
    }if(regionCode != null){
      criteriaList.add(regionCode);
    }if(area != null){
      criteriaList.add(area);
    }if(latitude != null){
      criteriaList.add(latitude);
    }if(longitude != null){
      criteriaList.add(longitude);
    }if(eqMag != null){
      criteriaList.add(eqMag);
    }if(loc != null){
      criteriaList.add(loc);
    }if(runupRegion != null){
      criteriaList.add(runupRegion);
    }if(runupCountry != null){
      criteriaList.add(runupCountry);
    }if(runupArea != null){
      criteriaList.add(runupArea);
    }if(runupTravTime != null) {
      criteriaList.add(runupTravTime);
    }if(runupLocation != null){
      criteriaList.add(runupLocation);
    }if(numofRunups != null){
      criteriaList.add(numofRunups);
    }if(waterHeight != null){
      criteriaList.add(waterHeight);
    }if(numOfDeaths != null){
      criteriaList.add(numOfDeaths);
    }if(numOfInjuries != null){
      criteriaList.add(numOfInjuries);
    }if(damageInMill != null){
      criteriaList.add(damageInMill);
    }if(numHousesDest != null){
      criteriaList.add(numHousesDest);
    }if(runupDistance != null){
      criteriaList.add(runupDistance);
    }if(deathDescription != null){
      criteriaList.add(deathDescription);
    }if(injuryDescription != null){
      criteriaList.add(injuryDescription);
    }if(damageDescription != null){
      criteriaList.add(damageDescription);
    }if(housesDescription != null){
      criteriaList.add(housesDescription);
    }

    Predicate [] predArray = new Predicate[criteriaList.size()];
    criteriaList.toArray(predArray);
    criteria.where(predArray);

    return getEventsByQuery(criteria);
  }

  public List<TsunamiEventViewNonPersist> getEventsByQuery(CriteriaQuery<TsunamiEventViewNonPersist> criteria){
    return tsunamiEventRepository.getEventsByQuery(criteria);
  }

  @Override
  public Predicate checkMinMax(Integer min, Integer max, String colName, CriteriaBuilder builder, Root<TsunamiEventView> root){
    if(min != null && max != null){
      return builder.between(root.get(colName), min, max);
    }else if(min != null){
      return builder.ge(root.get(colName), min);
    }else if(max != null){
      return builder.le(root.get(colName), max);
    }else{
      return null;
    }
  }

  @Override
  public Predicate checkMinMax(Integer min, Integer max, String colName, CriteriaBuilder builder, Join<TsunamiEventView, TsunamiRunupView> join){
    if(min != null && max != null){
      return builder.between(join.get(colName), min, max);
    }else if(min != null){
      return builder.ge(join.get(colName), min);
    }else if(max != null){
      return builder.le(join.get(colName), max);
    }else{
      return null;
    }
  }


  @Override
  public Predicate checkMinMax(Float min, Float max, String colName, CriteriaBuilder builder, Root<TsunamiEventView> root){
    if(min != null && max != null){
      return builder.between(root.get(colName), min, max);
    }else if(min != null){
      return builder.ge(root.get(colName), min);
    }else if(max != null){
      return builder.le(root.get(colName), max);
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
  public Predicate genIntMinMax(Map<String, String> map, String minKey, String maxKey, String colName, CriteriaBuilder builder, Root<TsunamiEventView> root) {
    //TODO: need to figure out validation
    Integer min = generateInteger(map, minKey);
    Integer max = generateInteger(map, maxKey);

    return checkMinMax(min, max, colName, builder, root);
  }

  @Override
  public Predicate genIntMinMax(Map<String, String> map, String minKey, String maxKey, String colName,
                                CriteriaBuilder builder, Join<TsunamiEventView, TsunamiRunupView> join){
    Integer min = generateInteger(map, minKey);
    Integer max = generateInteger(map, maxKey);

    return checkMinMax(min, max, colName, builder, join);
  }

  @Override
  public Predicate genFloatMinMax(Map<String, String> map, String minKey, String maxKey, String colName, CriteriaBuilder builder, Root<TsunamiEventView> root) {
    Float min = generateFloat(map, minKey);
    Float max = generateFloat(map, maxKey);

    return checkMinMax(min, max, colName, builder, root);
  }

  @Override
  public Predicate genEqRestriction(Map<String, String> map, String key, String colName, CriteriaBuilder builder,
                                    Root<TsunamiEventView> root){
    String condition = map.get(key);
    if(condition != null){
      return builder.equal(root.get(colName), condition);
    }else{
      return null;
    }
  }

  @Override
  public Predicate genEqRestriction(Map<String, String> map, String key, String colName, CriteriaBuilder builder,
                                    Join<TsunamiEventView, TsunamiRunupView> join){
    String condition = map.get(key);
    if(condition != null){
      return builder.equal(join.get(colName), condition);
    }else{
      return null;
    }
  }

  @Override
  public Predicate checkRegionParams(Map<String, String> map, String key, String colName, CriteriaBuilder builder, Root<TsunamiEventView> root){
    Integer condition = generateInteger(map, key);
    if(condition != null){
      return builder.equal(root.get(colName), condition);
    }else{
      return null;
    }
  }

  @Override
  public Predicate checkRegionParams(Map<String, String> map, String key, String colName, CriteriaBuilder builder,
                              Join<TsunamiEventView, TsunamiRunupView> join ){
    Integer condition = generateInteger(map, key);
    if(condition != null){
      return builder.equal(join.get(colName), condition);
    }else{
      return null;
    }
  }


  @Override
  public Predicate checkLocParams(Map<String, String> map, String start, String end, String includes, String match,
                           String not, String colName, CriteriaBuilder builder, Root<TsunamiEventView> root){

    if(map.get(start) != null){
      return builder.like(root.get(colName), map.get(start) + "%");
    }else if(map.get(end) != null){
      return builder.like(root.get(colName), "%" + map.get(end));
    }else if(map.get(includes) != null){
      return builder.like(root.get(colName), "%" + map.get(includes) + "%");
    }else if(map.get(match) != null){
      return builder.equal(root.get(colName), map.get(match));
    }else if(map.get(not) != null){
      return builder.notLike(root.get(colName), "%" + map.get(not) + "%");
    }else{
      return null;
    }
  }

  @Override
  public Predicate checkLocParams(Map<String, String> map, String start, String end, String includes, String match,
                                  String not, String colName, CriteriaBuilder builder, Join<TsunamiEventView, TsunamiRunupView> join){
    if(map.get(start) != null){
      return builder.like(join.get(colName), map.get(start) + "%");
    }else if(map.get(end) != null){
      return builder.like(join.get(colName), "%" + map.get(end));
    }else if(map.get(includes) != null){
      return builder.like(join.get(colName), "%" + map.get(includes) + "%");
    }else if(map.get(match) != null){
      return builder.equal(join.get(colName), map.get(match));
    }else if(map.get(not) != null){
      return builder.notLike(join.get(colName), "%" + map.get(not) + "%");
    }else{
      return null;
    }
  }

}
