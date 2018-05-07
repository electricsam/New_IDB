package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.QTsunamiRunupView;
import com.idb_backend.mvp.domain.model.QVolLocTsqp;
import com.idb_backend.mvp.domain.model.QVolcanoEvent;
import com.idb_backend.mvp.domain.model.VolcanoEventProjection;
import com.idb_backend.mvp.domain.repository.VolcanoEventRepository;
import com.idb_backend.mvp.service.VolcanoService;
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
public class VolcanoServiceImpl implements VolcanoService{

  @Autowired
  VolcanoEventRepository volcanoEventRepository;

  @Override
  public List<VolcanoEventProjection> getVolcanoes (Map<String, String> params, Predicate predicate ){
    if(params.get("earthquakeid") != null && params.get("earthquakeid") != ""){
      return volcanoEventRepository.findRelatedVolcanoesFromEarthquake(Integer.parseInt(params.get("earthquakeid")));
    }else if(params.get("refid") != null && params.get("refid") != ""){
      return volcanoEventRepository.findRelatedVolcanoesFromRef(Integer.parseInt(params.get("refid")));
    }else if(params.get("tsunamiid") != null && params.get("tsunamiid") != ""){
      return volcanoEventRepository.findRelatedVolcanoesFromTsunami(Integer.parseInt(params.get("tsunamiid")));
    }else{
      return volcanoEventRepository.findByQuery(combineBools(predicate, generateCriteria(params)));
    }

  }

  public BooleanExpression generateCriteria (Map<String, String> map){
    QVolLocTsqp root = QVolLocTsqp.volLocTsqp;
    Integer minLat = -90;
    BooleanExpression master = root.latitude.goe(minLat);

    List<BooleanExpression> boolList = new ArrayList<>();
    boolList.add(checkLikeParams(map, "nameStart", "nameEnd", "nameIncludes", "nameMatch", "nameNot", root.name));
    boolList.add(checkLikeParams(map, "locStart", "locEnd", "locIncludes", "locMatch", "locNot", root.location));
    boolList.add(genEqRestriction(map, "country", root.country));
    boolList.add(genDoubleMinMax(map, "minLatitude", "maxLatitude", root.latitude));
    boolList.add(genDoubleMinMax(map, "minLongitude", "maxLongitude", root.longitude));
    boolList.add(genEqRestriction(map, "morphology", root.morphology));

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
  public BooleanExpression checkLikeParams(Map<String, String> map, String start, String end, String includes,
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

}
