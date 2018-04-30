//package com.idb_backend.mvp.service.impl;
//
//import com.idb_backend.mvp.domain.model.*;
//import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
//import com.idb_backend.mvp.service.Constants;
//import com.idb_backend.mvp.service.TsunamiEventService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import javax.persistence.EntityManager;
//import javax.persistence.PersistenceContext;
//import javax.persistence.criteria.*;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Map;
//
//@Service
//public class TsunamiEventServiceImpl implements TsunamiEventService {
//
//  @PersistenceContext
//  EntityManager em;
//
//  @Autowired
//  TsunamiEventRepository tsunamiEventRepository;
//
//  public List<TsunamiEventViewNonPersist> generateCriteria (Map<String, String> map){
//
//    CriteriaBuilder builder = em.getCriteriaBuilder();
//    CriteriaQuery<TsunamiEventViewNonPersist> criteria = builder.createQuery( TsunamiEventViewNonPersist.class );
//    Root<TsunamiEventView> root = criteria.from( TsunamiEventView.class );
//    Join<TsunamiEventView, TsunamiRunupView> join = root.join("tsunamiRunupViews");
//    List criteriaList = new ArrayList();
//
//    List<Predicate> predList = new ArrayList<>();
//
//    criteria.multiselect(
//        root.get("id"), root.get("year"), root.get("month"), root.get("day"), root.get("hour"), root.get("minute"),
//        root.get("second"), root.get("country"), root.get("eventValidity"), root.get("causeCode"),
//        root.get("eqMagnitude"), root.get("locationName"), root.get("latitude"), root.get("longitude"),
//        root.get("maxEventRunup"), root.get("numRunup"), root.get("tsMtAbe"), root.get("tsMtIi"),
//        root.get("tsIntensity"), root.get("deaths"), root.get("deathsAmountOrder"), root.get("missing"),
//        root.get("missingAmountOrder"), root.get("injuries"), root.get("injuriesAmountOrder"),
//        root.get("damageMillionsDollars"), root.get("damageAmountOrder"), root.get("housesDestroyed"),
//        root.get("housesAmountOrder"), root.get("housesDamaged"), root.get("housesDamagedAmountOrder"),
//        root.get("deathsTotal"), root.get("deathsAmountOrderTotal"), root.get("missingTotal"),
//        root.get("missingAmountOrderTotal"), root.get("injuriesTotal"), root.get("injuriesAmountOrderTotal"),
//        root.get("damageMillionsDollarsTotal"), root.get("damageAmountOrderTotal"), root.get("housesDestroyedTotal"),
//        root.get("housesAmountOrderTotal"), root.get("housesDamagedTotal"), root.get("housesDamAmountOrderTotal")
//    ).distinct(true);
//
//    predList.add(genIntMinMax(map, "minyear", "maxyear", "year", builder, root));
//    predList.add(genIntMinMax(map, "minvalidity", "maxvalidity", "eventValidity", builder, root));
//    predList.add(genEqRestriction(map, "country", "country", builder, root));
//    predList.add(genIntMinMax(map,  "mincause", "maxcause", "causeCode", builder, root));
//    predList.add(checkRegionParams(map, "region", "regionCode", builder, root));
//    predList.add(genEqRestriction(map, "area", "area", builder, root));
//    predList.add(genFloatMinMax(map, "latnorth", "latsouth", "latitude", builder, root));
//    predList.add(genFloatMinMax(map, "longwest", "longeast", "longitude", builder, root));
//    predList.add(genFloatMinMax(map, "eqmagmin", "eqmagmax", "eqMagnitude", builder, root));
//    predList.add(checkRegionParams(map, "runupregion", "tsRunups.regionCode", builder, join));
//    predList.add(genEqRestriction(map, "runupcountry", "country", builder, join));
//    predList.add(genEqRestriction(map, "runuparea", "area", builder, join));
//    predList.add(genIntMinMax(map, "runuptraveltimemin", "runuptraveltimemax", "travHours", builder, join));
//    predList.add(genIntMinMax(map, "runupdistancemin", "runupdistancemax", "distFromSource", builder, root));
//    predList.add(genIntMinMax(map, "numberofrunupsmin", "numberofrunupsmax", "numRunup", builder, root));
//    predList.add(genFloatMinMax(map, "waterheightmin", "waterheightmax", "maxEventRunup", builder, root));
//    predList.add(genIntMinMax(map, "numberofdeathsmin", "numberofdeathsmax", "deaths", builder, root));
//    predList.add(genIntMinMax(map, "numberofinjuriesmin", "numberofinjuriesmax", "injuries", builder, root));
//    predList.add(genIntMinMax(map, "numhousesdestroyedmin", "numhousesdestroyedmax", "housesDestroyed", builder, root));
//    predList.add(genIntMinMax(map, "deathdescriptionmin", "deathdescriptionmax", "deathsAmountOrder", builder, root));
//    predList.add(genIntMinMax(map, "injurydescriptmin", "injurydescriptmax", "injuryAmountOrder", builder, root));
//    predList.add(genIntMinMax(map, "damagedescriptmin", "damagedescriptmax", "damageAmountOrder", builder, root));
//    predList.add(genIntMinMax(map, "housesdescriptmin", "housesdescriptmax", "housesAmountOrder", builder, root));
//    predList.add(genIntMinMax(map, "totaldeathsmin", "totaldeathsmax", "deathsTotal", builder, root));
//    predList.add(genEqRestriction(map, "rnpmeasuretype", "typeOfMeasurementId", builder, join));
//    predList.add(genFloatMinMax(map, "rnphtmin", "rnphtmax", "runuoHt", builder, join));
//    predList.add(genIntMinMax(map, "rnpdeathmin", "rnpdeathmax", "deaths", builder, join));
//    predList.add(genIntMinMax(map, "rnpdeathdescripmin", "rnpdeathdescripmax", "deathsAmountOrder", builder, join));
//    predList.add(genIntMinMax(map, "rnpinjurymin", "rnpinjurymax", "injuries", builder, join));
//    predList.add(genIntMinMax(map, "rnpinjurydescripmin", "rnpinjurydescripmax", "injuriesAmountOrder", builder, join));
//    predList.add(genFloatMinMax(map, "rnpdamagemin", "rnpdamagemax", "damageMillionsDollars", builder, join));
//    predList.add(genIntMinMax(map, "rnpdamagedescripmin", "rnpdamagedescripmax", "damageAmountOrder", builder, join));
//    predList.add(genIntMinMax(map, "rnphousesmin", "rnphousesmax", "housesDestroyed", builder, join));
//    predList.add(genIntMinMax(map, "rnphousesdescripmin", "rnphousesdescripmax", "housesAmountOrder", builder, join));
//    predList.add(checkLocParams(map, "runuplocstart", "runuplocend", "runuplocincludes", "runuplocmatch", "runuplocnot",
//        "locationName", builder, join
//    ));
//    predList.add(checkLocParams(map, "locstart", "locend", "locincludes", "locmatch", "locnot", "locationName", builder,
//        root
//    ));
//    predList.add(genIntMinMax(map, "totaldeathdescripmin", "totaldeathdescripmax", "deathsAmountOrderTotal", builder,
//        root));
//    predList.add(genFloatMinMax(map, "damageinmillionsmin", "damageinmillionsmax", "damageMillionsDollars", builder,
//        root
//    ));
//
//    for(int i = 0; i < predList.size(); i++){
//      if(predList.get(i) != null){
//        criteriaList.add(predList.get(i));
//      }
//    }
//
//    Predicate [] predArray = new Predicate[criteriaList.size()];
//    criteriaList.toArray(predArray);
//    criteria.where(predArray);
//
//    System.out.println("This is the criteria: " + criteria.toString());
//
//    return getEventsByQuery(criteria);
//  }
//
//  public List<TsunamiEventViewNonPersist> getEventsByQuery(CriteriaQuery<TsunamiEventViewNonPersist> criteria){
//    return tsunamiEventRepository.getEventsByQuery(criteria);
//  }
//
//  @Override
//  public Predicate checkMinMax(Integer min, Integer max, String colName, CriteriaBuilder builder, Root root){
//    if(min != null && max != null){
//      return builder.between(root.get(colName), min, max);
//    }else if(min != null){
//      return builder.ge(root.get(colName), min);
//    }else if(max != null){
//      return builder.le(root.get(colName), max);
//    }else{
//      return null;
//    }
//  }
//
//  @Override
//  public Predicate checkMinMax(Integer min, Integer max, String colName, CriteriaBuilder builder, Join join){
//    if(min != null && max != null){
//      return builder.between(join.get(colName), min, max);
//    }else if(min != null){
//      return builder.ge(join.get(colName), min);
//    }else if(max != null){
//      return builder.le(join.get(colName), max);
//    }else{
//      return null;
//    }
//  }
//
//  @Override
//  public Predicate checkMinMax(Float min, Float max, String colName, CriteriaBuilder builder, Root root){
//    if(min != null && max != null){
//      return builder.between(root.get(colName), min, max);
//    }else if(min != null){
//      return builder.ge(root.get(colName), min);
//    }else if(max != null){
//      return builder.le(root.get(colName), max);
//    }else{
//      return null;
//    }
//  }
//
//  public Predicate checkMinMax(Float min, Float max, String colName, CriteriaBuilder builder, Join join){
//    if(min != null && max != null){
//      return builder.between(join.get(colName), min, max);
//    }else if(min != null){
//      return builder.ge(join.get(colName), min);
//    }else if(max != null){
//      return builder.le(join.get(colName), max);
//    }else{
//      return null;
//    }
//  }
//
//  @Override
//  public Integer generateInteger(Map<String, String> map, String key){
//    return map.get(key) != null? new Integer(Integer.parseInt(map.get(key))): null;
//  }
//
//  @Override
//  public Float generateFloat(Map<String, String> map, String key) {
//    return map.get(key) != null? new Float(Float.parseFloat(map.get(key))) : null;
//  }
//
//  @Override
//  public Predicate genIntMinMax(Map<String, String> map, String minKey, String maxKey, String colName,
//                                CriteriaBuilder builder, Root root) throws NumberFormatException{
//    //TODO: need to figure out validation
//    Integer min = generateInteger(map, minKey);
//    Integer max = generateInteger(map, maxKey);
//
//    return checkMinMax(min, max, colName, builder, root);
//  }
//
//  @Override
//  public Predicate genIntMinMax(Map<String, String> map, String minKey, String maxKey, String colName,
//                                CriteriaBuilder builder, Join join) throws NumberFormatException{
//    Integer min = generateInteger(map, minKey);
//    Integer max = generateInteger(map, maxKey);
//
//    return checkMinMax(min, max, colName, builder, join);
//  }
//
//  @Override
//  public Predicate genFloatMinMax(Map<String, String> map, String minKey, String maxKey, String colName,
//                                  CriteriaBuilder builder, Root root) throws NumberFormatException{
//    Float min = generateFloat(map, minKey);
//    Float max = generateFloat(map, maxKey);
//
//    return checkMinMax(min, max, colName, builder, root);
//  }
//
//  @Override
//  public Predicate genFloatMinMax(Map<String, String> map, String minKey, String maxKey, String colName,
//                                  CriteriaBuilder builder, Join join) throws NumberFormatException{
//    Float min = generateFloat(map, minKey);
//    Float max = generateFloat(map, maxKey);
//
//    return checkMinMax(min, max, colName, builder, join);
//  }
//
//  @Override
//  public Predicate genEqRestriction(Map<String, String> map, String key, String colName, CriteriaBuilder builder,
//                                    Root root){
//    String condition = map.get(key);
//    if(condition != null){
//      condition = condition.toUpperCase();
//      return builder.equal(root.get(colName), condition);
//    }else{
//      return null;
//    }
//  }
//
//  @Override
//  public Predicate genEqRestriction(Map<String, String> map, String key, String colName, CriteriaBuilder builder,
//                                    Join join){
//    String condition = map.get(key);
//    if(condition != null){
//      condition = condition.toUpperCase();
//      return builder.equal(join.get(colName), condition);
//    }else{
//      return null;
//    }
//  }
//
//  @Override
//  public Predicate genNumEqRestriction(Map<String, String> map, String key, String colName, CriteriaBuilder builder,
//                                    Join join){
//    Integer condition = generateInteger(map, key);
//    if(condition != null){
//      return builder.equal(join.get(colName), condition);
//    }else{
//      return null;
//    }
//  }
//
//  @Override
//  public Predicate checkRegionParams(Map<String, String> map, String key, String colName,
//                                     CriteriaBuilder builder, Root root){
//    Integer condition = generateInteger(map, key);
//    if(condition != null){
//      System.out.println("you are checking the region param: "+ condition);
//      return builder.equal(root.get(colName), condition);
//    }else{
//      return null;
//    }
//  }
//
//  @Override
//  public Predicate checkRegionParams(Map<String, String> map, String key, String colName, CriteriaBuilder builder,
//                                     Join join ){
//    Integer condition = generateInteger(map, key);
//    if(condition != null){
//      return builder.equal(join.get(colName), condition);
//    }else{
//      return null;
//    }
//  }
//
//  @Override
//  public Predicate checkLocParams(Map<String, String> map, String start, String end, String includes, String match,
//                                  String not, String colName, CriteriaBuilder builder, Root root){
//
//    if(map.get(start) != null){
//      return builder.like(root.get(colName), map.get(start).toUpperCase() + "%");
//    }else if(map.get(end) != null){
//      return builder.like(root.get(colName), "%" + map.get(end).toUpperCase());
//    }else if(map.get(includes) != null){
//      return builder.like(root.get(colName), "%" + map.get(includes).toUpperCase() + "%");
//    }else if(map.get(match) != null){
//      return builder.equal(root.get(colName), map.get(match).toUpperCase());
//    }else if(map.get(not) != null){
//      return builder.notLike(root.get(colName), "%" + map.get(not).toUpperCase() + "%");
//    }else{
//      return null;
//    }
//  }
//
//  @Override
//  public Predicate checkLocParams(Map<String, String> map, String start, String end, String includes, String match,
//                                  String not, String colName, CriteriaBuilder builder,
//                                  Join join){
//    if(map.get(start) != null){
//      return builder.like(join.get(colName), map.get(start).toUpperCase() + "%");
//    }else if(map.get(end) != null){
//      return builder.like(join.get(colName), "%" + map.get(end).toUpperCase());
//    }else if(map.get(includes) != null){
//      return builder.like(join.get(colName), "%" + map.get(includes).toUpperCase() + "%");
//    }else if(map.get(match) != null){
//      return builder.equal(join.get(colName), map.get(match).toUpperCase());
//    }else if(map.get(not) != null){
//      return builder.notLike(join.get(colName), "%" + map.get(not).toUpperCase() + "%");
//    }else{
//      return null;
//    }
//  }
//
//  @Override
//  public void addEvent(TsunamiEvent tsunamiEvent){
//    tsunamiEventRepository.addEvent(tsunamiEvent);
//  }
//
//  @Override
//  public void addRunup(TsunamiRunup tsunamiRunup){
//    tsunamiEventRepository.addRunup(tsunamiRunup);
//  }
//
//  @Override
//  public List<TsunamiEvent> checkMaxTsEventId() {
//    return tsunamiEventRepository.checkMaxTsEventId();
//  }
//
//  @Override
//  public List<TsunamiRunup> checkMaxRunupId(){
//    return tsunamiEventRepository.checkMaxRunupId();
//  }
//
//  @Override
//  public void updateEvent(TsunamiEvent tsunamiEvent) {
//    tsunamiEventRepository.updateEvent(tsunamiEvent);
//  }
//
//
//  @Override
//  public List<TsunamiRunupViewNonPersist> generateRunupCriteria(Map<String, String> map) {
//    CriteriaBuilder builder = em.getCriteriaBuilder();
//    CriteriaQuery<TsunamiRunupViewNonPersist> criteria = builder.createQuery( TsunamiRunupViewNonPersist.class );
//    Root<TsunamiRunupView> root = criteria.from( TsunamiRunupView.class );
//    Join<TsunamiRunupView, TsunamiEventView> join = root.join("tsunamiEventView");
//    List criteriaList = new ArrayList();
//
//    List<Predicate> predList = new ArrayList<>();
//
//    criteria.multiselect(
//        root.get("id"), join.get("year"), join.get("month"), join.get("day"), join.get("hour"), join.get("second"),
//        join.get("eventValidity"), join.get("causeCode"), join.get("eqMagnitude"), root.get("country"),
//        root.get("area"), root.get("locationName"), root.get("latitude"), root.get("longitude"),
//        root.get("distFromSource"), root.get("arrDay"), root.get("arrHour"), root.get("arrMin"), root.get("travHours"),
//        root.get("travMins"), root.get("runupHt"), root.get("runupHoriz"), root.get("typeOfMeasurementId"),
//        root.get("period"), root.get("firstMotion"), root.get("deaths"), root.get("deathsAmountOrder"),
//        root.get("injuries"), root.get("injuriesAmountOrder"), root.get("damageMillionsDollars"),
//        root.get("damageAmountOrder"), root.get("housesDestroyed"), root.get("housesAmountOrder"),
//        root.get("housesDamaged"), root.get("housesDamagedAmountOrder"), join.get("id").alias("eventId")
//    ).distinct(true);
//
//    predList.add(genNumEqRestriction(map, "eventid", "id", builder, join));
//    predList.add(genIntMinMax(map, "tsminyear", "tsmaxyear", "year", builder, join));
//    predList.add(genEqRestriction(map, "tsregion", "regionCode", builder, join));
//    predList.add(genEqRestriction(map, "tscountry", "regionCode", builder, join));
//    predList.add(genEqRestriction(map, "region", "regionCode", builder, root));
//    predList.add(genEqRestriction(map, "country", "country", builder, root));
//    predList.add(genIntMinMax(map, "distancemin", "distancemax", "distFromSource", builder, root));
//    predList.add(genFloatMinMax(map, "latnorth", "latsouth", "latitude", builder, root));
//    predList.add(genFloatMinMax(map, "longwest", "longeast", "longitude", builder, root));
//    predList.add(genFloatMinMax(map, "minwaterht", "maxwaterht", "runupHt", builder, root));
//    predList.add(genEqRestriction(map, "typeofmeasure", "typeOfMeasurementId", builder, root));
//    predList.add(genIntMinMax(map, "deathsmin", "deathsmax", "deaths", builder, root));
//    predList.add(genIntMinMax(map, "damagemillioinsmin", "damagemillioinsmax", "damageMillionsDollars", builder, root));
//    predList.add(checkLocParams(map, "locstart", "locend", "locincludes", "locmatch", "locnot", "locationName", builder,
//        root
//    ));
//
//    for(int i = 0; i < predList.size(); i++){
//      if(predList.get(i) != null){
//        criteriaList.add(predList.get(i));
//      }
//    }
//
//    Predicate [] predArray = new Predicate[criteriaList.size()];
//    criteriaList.toArray(predArray);
//    criteria.where(predArray);
//
//      return getRunupsByQuery(criteria);
//
//  }
//
//  List<TsunamiRunupViewNonPersist> getRunupsByQuery(CriteriaQuery<TsunamiRunupViewNonPersist> criteria){
//    return tsunamiEventRepository.getRunupsByQuery(criteria);
//  }
//
//  @Override
//  public void updateRunup(TsunamiRunup tsunamiRunup){
//    tsunamiEventRepository.updateRunup(tsunamiRunup);
//  }
//
//  @Override
//  public void deleteRunup(Integer id){
//    tsunamiEventRepository.deleteRunup(id);
//  }
//
//  @Override
//  public TsunamiEvent getEventProxy(Integer id){
//    return tsunamiEventRepository.getEventProxy(id);
//  }
//
//  @Override
//  public void deleteEvent(Integer id){
//    tsunamiEventRepository.deleteEvent(id);
//  }
//
//  @Override
//  public List<TsunamiRunup> getRunupById(Integer id){
//    return tsunamiEventRepository.getRunupById(id);
//  }
//
//  @Override
//  public List<TsunamiRunupViewNonPersist> getAllRunups(){
//    CriteriaBuilder builder = em.getCriteriaBuilder();
//    CriteriaQuery<TsunamiRunupViewNonPersist> criteria = builder.createQuery( TsunamiRunupViewNonPersist.class );
//    Root<TsunamiRunupView> root = criteria.from( TsunamiRunupView.class );
//    Join<TsunamiRunupView, TsunamiEventView> join = root.join("tsunamiEventView");
//    List criteriaList = new ArrayList();
//
//    List<Predicate> predList = new ArrayList<>();
//
//    criteria.multiselect(
//        root.get("id"), join.get("year"), join.get("month"), join.get("day"), join.get("hour"), join.get("second"),
//        join.get("eventValidity"), join.get("causeCode"), join.get("eqMagnitude"), root.get("country"),
//        root.get("area"), root.get("locationName"), root.get("latitude"), root.get("longitude"),
//        root.get("distFromSource"), root.get("arrDay"), root.get("arrHour"), root.get("arrMin"), root.get("travHours"),
//        root.get("travMins"), root.get("runupHt"), root.get("runupHoriz"), root.get("typeOfMeasurementId"),
//        root.get("period"), root.get("firstMotion"), root.get("deaths"), root.get("deathsAmountOrder"),
//        root.get("injuries"), root.get("injuriesAmountOrder"), root.get("damageMillionsDollars"),
//        root.get("damageAmountOrder"), root.get("housesDestroyed"), root.get("housesAmountOrder"),
//        root.get("housesDamaged"), root.get("housesDamagedAmountOrder"), join.get("id").alias("eventId")
//    ).distinct(true);
//
//    for(int i = 0; i < predList.size(); i++){
//      if(predList.get(i) != null){
//        criteriaList.add(predList.get(i));
//      }
//    }
//
//    Predicate [] predArray = new Predicate[criteriaList.size()];
//    criteriaList.toArray(predArray);
//    criteria.where(predArray);
//
//    return getRunupsByQuery(criteria);
//  }
//
//  @Override
//  public boolean validateParams(Map<String, String> map){
//    boolean isValid = true;
//    for(String key: map.keySet()){
//      String value = map.get(key);
//      switch (key){
//        case "tsminyear":
//          isValid = validateMinMax(Constants.getMinYear(), Constants.getMaxYear(), Integer.parseInt(value));
//          break;
//        case "tsmaxyear":
//          isValid = validateMinMax(Constants.getMinYear(), Constants.getMaxYear(), Integer.parseInt(value));
//          break;
//        case "tsregion":
//         isValid = validateIntList(Constants.getRegions(), Integer.parseInt(value));
//          break;
//        case "tscountry":
//          isValid = validateStringList(Constants.getCountries(), value);
//          break;
//        case "region":
//          isValid = validateIntList(Constants.getRegions(), Integer.parseInt(value));
//          break;
//        case "country":
//          isValid = validateStringList(Constants.getCountries(), value);
//          break;
//        case "distancemin":
//          isValid = validateMinMax(Constants.getRunupDistanceMin(), Constants.getRunupDistanceMax(), Integer.parseInt(value));
//          break;
//        case "distanceMax":
//          isValid = validateMinMax(Constants.getRunupDistanceMin(), Constants.getRunupDistanceMax(), Integer.parseInt(value));
//          break;
//        case "latnorth" :
//          isValid = validateMinMax(Constants.getLatMin(), Constants.getLatMax(), Float.parseFloat(value));
//          break;
//        case "latsouth":
//          isValid = validateMinMax(Constants.getLatMin(), Constants.getLatMax(), Float.parseFloat(value));
//          break;
//        case "longwest":
//          isValid = validateMinMax(Constants.getLongMin(), Constants.getLongMax(), Float.parseFloat(value));
//          break;
//        case "longeast" :
//          isValid = validateMinMax(Constants.getLongMin(), Constants.getLongMax(), Float.parseFloat(value));
//          break;
//        case "minwaterht" :
//          isValid = validateMinMax(Constants.getMinWaterHt(), Constants.getMaxWaterHt(), Float.parseFloat(value));
//          break;
//        case "maxwaterht" :
//          isValid = validateMinMax(Constants.getMinWaterHt(), Constants.getMaxWaterHt(), Float.parseFloat(value));
//          break;
//        case "typeofmeasure":
//          isValid = validateMinMax(Constants.getMeasureTypeMin(), Constants.getMeasureTypeMax(), Integer.parseInt(value));
//          break;
//        case "deathsmin":
//          isValid = validateMinMax(Constants.getDeathsMin(), Constants.getDeathsMax(), Integer.parseInt(value));
//          break;
//        case "deathsmax" :
//          isValid = validateMinMax(Constants.getDeathsMin(), Constants.getDeathsMax(), Integer.parseInt(value));
//          break;
//        case "damagemillioinsmin":
//          isValid = validateMinMax(Constants.getDamageMillionsMin(), Constants.getDamageMillionsMax(), Integer.parseInt(value));
//          break;
//        case "damagemillioinsmax":
//          isValid = validateMinMax(Constants.getDamageMillionsMin(), Constants.getDamageMillionsMax(), Integer.parseInt(value));
//          break;
//        case "minyear":
//          isValid = validateMinMax(Constants.getMinYear(), Constants.getMaxYear(), Integer.parseInt(value));
//          break;
//        case "maxyear":
//          isValid = validateMinMax(Constants.getMinYear(), Constants.getMaxYear(), Integer.parseInt(value));
//          break;
//        case "minvalidity":
//          isValid = validateMinMax(Constants.getMinValidity(), Constants.getMaxValidity(), Integer.parseInt(value));
//          break;
//        case "maxvalidity":
//          isValid = validateMinMax(Constants.getMinValidity(), Constants.getMaxValidity(), Integer.parseInt(value));
//          break;
//        case "mincause":
//          isValid = validateMinMax(Constants.getMinCause(), Constants.getMaxCause(), Integer.parseInt(value));
//          break;
//        case "maxcause":
//          isValid = validateMinMax(Constants.getMinCause(), Constants.getMaxCause(), Integer.parseInt(value));
//          break;
//        case "area":
//          isValid = validateStringList(Constants.getAreas(), value);
//          break;
//        case "eqmagmin":
//          isValid = validateMinMax(Constants.getEqMagMin(), Constants.getEqMagMax(), Double.parseDouble(value));
//          break;
//        case "eqmagmax":
//          isValid = validateMinMax(Constants.getEqMagMin(), Constants.getEqMagMax(), Double.parseDouble(value));
//          break;
//        case "runupregion":
//          isValid = validateIntList(Constants.getRegions(), Integer.parseInt(value));
//          break;
//        case "runupcountry":
//          isValid = validateStringList(Constants.getCountries(), value);
//          break;
//        case "runuparea":
//          isValid = validateStringList(Constants.getAreas(), value);
//          break;
//        case "runuptraveltimemin":
//          isValid = validateMinMax(Constants.getTravelTimeMin(), Constants.getTravelTimeMax(), Integer.parseInt(value));
//          break;
//        case "runuptraveltimemax":
//          isValid = validateMinMax(Constants.getTravelTimeMin(), Constants.getTravelTimeMax(), Integer.parseInt(value));
//          break;
//        case "runuptraveldistancemin":
//          isValid = validateMinMax(Constants.getRunupDistanceMin(), Constants.getRunupDistanceMax(), Integer.parseInt(value));
//          break;
//        case "runuptraveldistancemax":
//          isValid = validateMinMax(Constants.getRunupDistanceMin(), Constants.getRunupDistanceMax(), Integer.parseInt(value));
//          break;
//        case "numberofrunupsmin":
//          isValid = validateMinMax(Constants.getNumRunupsMin(), Constants.getNumRunupsMax(), Integer.parseInt(value));
//          break;
//        case "numberofrunupsmiax":
//          isValid = validateMinMax(Constants.getNumRunupsMin(), Constants.getNumRunupsMax(), Integer.parseInt(value));
//          break;
//        case "waterheightmin":
//          isValid = validateMinMax(Constants.getMinWaterHt(), Constants.getMaxWaterHt(), Float.parseFloat(value));
//          break;
//        case "waterheightmax":
//          isValid = validateMinMax(Constants.getMinWaterHt(), Constants.getMaxWaterHt(), Float.parseFloat(value));
//          break;
//        case "numberofdeathsmin":
//          isValid = validateMinMax(Constants.getDeathsMin(), Constants.getDeathsMax(), Integer.parseInt(value));
//          break;
//        case "numberofdeathsmax":
//          isValid = validateMinMax(Constants.getDeathsMin(), Constants.getDeathsMax(), Integer.parseInt(value));
//          break;
//        case "numberofinjuriesmin":
//          isValid = validateMinMax(Constants.getInjuriesMin(), Constants.getInjuriesMax(), Integer.parseInt(value));
//          break;
//        case "numberofinjuriesmax":
//          isValid = validateMinMax(Constants.getInjuriesMin(), Constants.getInjuriesMax(), Integer.parseInt(value));
//          break;
//        case "numhousesdestroyedmin":
//          isValid = validateMinMax(Constants.getHousesDestroyedMin(), Constants.getHousesDestroyedMax(), Integer.parseInt(value));
//          break;
//        case "numhousesdestroyedmax":
//          isValid = validateMinMax(Constants.getHousesDestroyedMin(), Constants.getHousesDestroyedMax(), Integer.parseInt(value));
//          break;
//        case "deathdescriptionmin":
//          isValid = validateMinMax(Constants.getDescripMin(), Constants.getDescripMax(), Integer.parseInt(value));
//          break;
//        case "deathdescriptionmax":
//          isValid = validateMinMax(Constants.getDescripMin(), Constants.getDescripMax(), Integer.parseInt(value));
//          break;
//        case "injurydescriptmin":
//          isValid = validateMinMax(Constants.getDescripMin(), Constants.getDescripMax(), Integer.parseInt(value));
//          break;
//        case "injurydescriptmax":
//          isValid = validateMinMax(Constants.getDescripMin(), Constants.getDescripMax(), Integer.parseInt(value));
//          break;
//        case "housesdescriptmin":
//          isValid = validateMinMax(Constants.getDescripMin(), Constants.getDescripMax(), Integer.parseInt(value));
//          break;
//        case "housesdescriptmax":
//          isValid = validateMinMax(Constants.getDescripMin(), Constants.getDescripMax(), Integer.parseInt(value));
//          break;
//        case "damagedescriptmin":
//          isValid = validateMinMax(Constants.getDescripMin(), Constants.getDescripMax(), Integer.parseInt(value));
//          break;
//        case "damagedescriptmax":
//          isValid = validateMinMax(Constants.getDescripMin(), Constants.getDescripMax(), Integer.parseInt(value));
//          break;
//        case "rnpmeasuretype":
//          isValid = validateMinMax(Constants.getMeasureTypeMin(), Constants.getMeasureTypeMax(), Integer.parseInt(value));
//          break;
//        case "rnphtmin":
//          isValid = validateMinMax(Constants.getMinWaterHt(), Constants.getMaxWaterHt(), Float.parseFloat(value));
//          break;
//        case "rnphtmax":
//          isValid = validateMinMax(Constants.getMinWaterHt(), Constants.getMaxWaterHt(), Float.parseFloat(value));
//          break;
//        case "rnpdeathmin":
//          isValid = validateMinMax(Constants.getDeathsMin(), Constants.getDeathsMax(), Integer.parseInt(value));
//          break;
//        case "rnpdeathmax":
//          isValid = validateMinMax(Constants.getDeathsMin(), Constants.getDeathsMax(), Integer.parseInt(value));
//          break;
//        case "rnpinjurymin":
//          isValid = validateMinMax(Constants.getRnpInjuryMin(), Constants.getRnpInjuryMax(), Integer.parseInt(value));
//          break;
//        case "rnpinjurymax":
//          isValid = validateMinMax(Constants.getRnpInjuryMin(), Constants.getRnpInjuryMax(), Integer.parseInt(value));
//          break;
//        case "rnpdamagemin":
//          isValid = validateMinMax(Constants.getDamageMillionsMin(), Constants.getDamageMillionsMax(), Float.parseFloat(value));
//          break;
//        case "rnpdamagemax":
//          isValid = validateMinMax(Constants.getDamageMillionsMin(), Constants.getDamageMillionsMax(), Float.parseFloat(value));
//          break;
//        case "rnphousesmin":
//          isValid = validateMinMax(Constants.getRnpHousesMin(), Constants.getRnpHouseMax(), Integer.parseInt(value));
//          break;
//        case "rnphousesmax":
//          isValid = validateMinMax(Constants.getRnpHousesMin(), Constants.getRnpHouseMax(), Integer.parseInt(value));
//          break;
//        case "rnpdeathdescripmin":
//          isValid = validateMinMax(Constants.getDescripMin(), Constants.getDescripMax(), Integer.parseInt(value));
//          break;
//        case "rnpdeathdescripmax":
//          isValid = validateMinMax(Constants.getDescripMin(), Constants.getDescripMax(), Integer.parseInt(value));
//          break;
//        case "rnpinjurydescripmin":
//          isValid = validateMinMax(Constants.getDescripMin(), Constants.getDescripMax(), Integer.parseInt(value));
//          break;
//        case "rnpinjurydescripmax":
//          isValid = validateMinMax(Constants.getDescripMin(), Constants.getDescripMax(), Integer.parseInt(value));
//          break;
//        case "rnpdamagedescripmin":
//          isValid = validateMinMax(Constants.getDescripMin(), Constants.getDescripMax(), Integer.parseInt(value));
//          break;
//        case "rnpdamagedescripmax":
//          isValid = validateMinMax(Constants.getDescripMin(), Constants.getDescripMax(), Integer.parseInt(value));
//          break;
//      }
//      if(isValid == false){
//        return isValid;
//      }
//    }
//
//    return isValid;
//  }
//
//  @Override
//  public boolean validateMinMax(int min, int max, Integer value){
//    if(value < min || value > max){
//      return false;
//    }else{
//      return true;
//    }
//  }
//
//  @Override
//  public boolean validateStringList(String[] list, String value){
//    boolean tmp = false;
//    for(int i = 0; i < list.length; i++){
//      if(list[i].equals(value)){
//        tmp = true;
//      }
//    }
//    return tmp;
//  }
//
//  @Override
//  public boolean validateIntList(int[] list, Integer value){
//    boolean tmp = false;
//    for(int i = 0; i < list.length; i++){
//      if(list[i] == value){
//        tmp = true;
//      }
//    }
//    return tmp;
//  }
//
//  @Override
//  public boolean validateMinMax(int min, int max, Float value){
//    if(value < min || value > max){
//      return false;
//    }else{
//      return true;
//    }
//  }
//
//  @Override
//  public boolean validateMinMax(double min, double max, Double value){
//    if(value < min || value > max){
//      return false;
//    }else{
//      return true;
//    }
//  }
//
//}
