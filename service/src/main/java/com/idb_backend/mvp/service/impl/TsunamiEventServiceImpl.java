package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.QTsunamiRunupView;
import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.domain.repository.TsunamiEventViewRepository;
import com.idb_backend.mvp.domain.repository.impl.TsunamiEventViewRepositoryImpl;
import com.idb_backend.mvp.service.TsunamiEventService;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class TsunamiEventServiceImpl implements TsunamiEventService {

  @Autowired
  TsunamiEventViewRepository tsunamiEventViewRepository;

  @Autowired
  TsunamiEventRepository tsunamiEventRepository;

  public BooleanExpression generateCriteria (Map<String, String> map){
    QTsunamiRunupView root = QTsunamiRunupView.tsunamiRunupView;
    BooleanExpression master = QTsunamiRunupView.tsunamiRunupView.day.goe(1);

    List<BooleanExpression> boolList = new ArrayList<>();

    boolList.add(genEqRestriction(map, "runupRegion", root.regionCode));
    boolList.add(genEqRestriction(map, "runupCountry", root.country));
    boolList.add(genEqRestriction(map, "runupArea", root.area));
    boolList.add(genIntMinMax(map, "runupMinDistance", "runupMaxDistance", root.distFromSource));
    boolList.add(genIntMinMax(map, "runupMinTravelTime", "runupMaxTravelTime", root.travHours));
    boolList.add(checkLocParams(map, "runupLocStart", "runupLocEnd", "runupLocIncludes", "runupLocMatch", "runupLocNot",
        root.locationName));
    boolList.add(genEqRestriction(map, "runupMeasureType", root.typeMeasurementId));
    boolList.add(genDoubleMinMax(map, "runupMinHeight", "runupMaxHeight", root.runupHt));
    boolList.add(genIntMinMax(map, "runupMinDeaths", "runupMaxDeaths", root.deaths));
    boolList.add(genIntMinMax(map, "runupMinDeathsAmountOrder", "runupMaxDeathsAmountOrder", root.deathsAmountOrder));
    boolList.add(genIntMinMax(map, "runupMinInjuries", "runupMaxInjuries", root.injuries));
    boolList.add(genIntMinMax(map, "runupMinInjuriesAmountOrder", "runupMinInjuriesAmountOrder",
        root.injuriesAmountOrder));
    boolList.add(genDoubleMinMax(map, "runupMinDamageInMillions", "runupMaxDamageInMillions",
        root.damageMillionsDollars));
    boolList.add(genIntMinMax(map, "runupMinDamageAmountOrder", "runupMaxDamageAmountOrder", root.damageAmountOrder));
    boolList.add(genIntMinMax(map, "runupMinHousesDestroyed", "runupMaxHousesDestroyed", root.housesDestroyed));
    boolList.add(genIntMinMax(map, "runupMinHousesAmountOrder", "runupMaxHousesAmountOrder", root.housesAmountOrder));

    for(int i = 0; i < boolList.size(); i++){
      if(boolList.get(i) != null){
        master = master.and(boolList.get(i));
      }
    }

    return master;

  }

  @Override
  public BooleanExpression combineBools(Predicate predicate, BooleanExpression runupBool){
    BooleanExpression result = runupBool.and(predicate);
    return result;
  }

  @Override
  public BooleanExpression checkMinMax(Integer min, Integer max, NumberPath<Integer> root){
    if(min != null && max != null){
      BooleanExpression expression = root.between(min, max);
      return expression;
    }else if(min != null){
     BooleanExpression expression = root.goe(min);
     return expression;
    }else if(max != null){
      BooleanExpression expression = root.loe(max);
      return expression;
    }else{
      return null;
    }
  }

  @Override
  public Integer generateInteger(Map<String, String> map, String key){
    return map.get(key) != null? new Integer(Integer.parseInt(map.get(key))): null;
  }

  @Override
  public BooleanExpression genIntMinMax(Map<String, String> map, String minKey, String maxKey, NumberPath<Integer> root)
      throws NumberFormatException{
    Integer min = generateInteger(map, minKey);
    Integer max = generateInteger(map, maxKey);

    return checkMinMax(min, max, root);
  }

  @Override
  public BooleanExpression genEqRestriction(Map<String, String> map, String key, StringPath root){
    String condition = map.get(key);
    if(condition != null){
      return root.equalsIgnoreCase(condition);
    }else{
      return null;
    }
  }

  @Override
  public BooleanExpression genEqRestriction(Map<String, String> map, String key, NumberPath root){
    Integer condition = generateInteger(map, key);
    if(condition != null){
      return root.eq(condition);
    }else{
      return null;
    }
  }

  @Override
  public BooleanExpression checkMinMax(Double min, Double max, NumberPath<Double> root){
    if(min != null && max != null){
      return root.between(min, max);
    }else if(min != null){
      return root.goe(min);
    }else if(max != null){
      return root.loe(max);
    }else{
      return null;
    }
  }

  @Override
  public Double generateDouble(Map<String, String> map, String key) {
    return map.get(key) != null? new Double(Double.parseDouble(map.get(key))) : null;
  }

  @Override
  public BooleanExpression genDoubleMinMax(Map<String, String> map, String minKey, String maxKey,
                                           NumberPath<Double> root)
      throws NumberFormatException{
    Double min = generateDouble(map, minKey);
    Double max = generateDouble(map, maxKey);

    return checkMinMax(min, max, root);
  }

  @Override
  public BooleanExpression checkLocParams(Map<String, String> map, String start, String end, String includes,
                                          String match, String not, StringPath root){
    if(map.get(start) != null){
      return root.startsWithIgnoreCase(start);
    }else if(map.get(end) != null){
      return root.endsWithIgnoreCase(end);
    }else if(map.get(includes) != null){
      return root.containsIgnoreCase(includes);
    }else if(map.get(match) != null){
      return root.equalsIgnoreCase(match);
    }else if(map.get(not) != null){
      return root.notLike(Expressions.asString("%").concat(not.toUpperCase().concat("%")));
    }else{
      return null;
    }
  }

  @Override
  public Iterable<TsunamiEventView> getTsunamis(Map<String, String> params, Predicate predicate){
    if(params.get("earthquakeid") != null && params.get("earthquakeid") != ""){
      return tsunamiEventRepository.findRelatedTsunamiFromEarthquake(Integer.parseInt(params.get("earthquakeid")));
    }else if(params.get("refid") != null && params.get("refid") != ""){
      return tsunamiEventRepository.findRelatedTsunamiFromRef(Integer.parseInt(params.get("refid")));
    }else if(params.get("volcanoid") != null && params.get("volcanoid") != ""){
      return tsunamiEventRepository.findRelatedTsunamiFromVolcano(Integer.parseInt(params.get("volcanoid")));
    }else if(params.get("runupid") != null && params.get("runupid") != ""){
      return tsunamiEventRepository.findRelatedTsunamiFromRunup(Integer.parseInt(params.get("runupid")));
    } else{
      return tsunamiEventViewRepository.findEventsByQuery(combineBools(predicate, generateCriteria(params)));
    }
  }

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
}
