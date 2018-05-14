package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.RunupViewRepository;
import com.idb_backend.mvp.service.RunupService;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class RunupServiceImpl implements RunupService {

  @Autowired
  RunupViewRepository runupViewRepository;

  @Override
  public BooleanExpression generateCriteria(Map<String,String> map){
    QTsunamiEventView event = QTsunamiEventView.tsunamiEventView;
    BooleanExpression master = event.day.goe(1);

    List<BooleanExpression> boolList = new ArrayList<>();
    boolList.add(genIntMinMax(map, "tsMinYear", "tsMaxYear", event.year));
    boolList.add(genEqRestriction(map, "tsRegionCode", event.regionCode));
    boolList.add(genEqRestriction(map, "tsCountry", event.country));

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
    BooleanExpression expression;
    if(min != null && max != null){
      expression = root.between(min, max);
      return expression;
    }else if(min != null){
      expression = root.goe(min);
      return expression;
    }else if(max != null){
      expression = root.loe(max);
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
                                           NumberPath<Double> root) throws NumberFormatException{
    Double min = generateDouble(map, minKey);
    Double max = generateDouble(map, maxKey);

    return checkMinMax(min, max, root);
  }

  @Override
  public List<RunupProjection> getRunups(Map<String, String> params, Predicate predicate){
    if(params.get("tsunamiid") != null && params.get("tsunamiid") != ""){
      return runupViewRepository.findRelatedRunupByTsunami(Integer.parseInt(params.get("tsunamiid")));
    }if(params.get("refid") != null && params.get("refid") != ""){
      return runupViewRepository.findRelatedRunupByRef(Integer.parseInt(params.get("refid")));
    }else{
      return runupViewRepository.findRunupsByQuery(combineBools(predicate, generateCriteria(params)));
    }
  }

}
