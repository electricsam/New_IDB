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
}
