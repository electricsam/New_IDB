package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.RunupViewRepository;
import com.idb_backend.mvp.service.BaseService;
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
public class RunupServiceImpl extends BaseService implements RunupService {

  @Autowired
  RunupViewRepository runupViewRepository;

  public BooleanExpression generateCriteria(Map<String,String> map){
    QTsunamiEventView event = QTsunamiEventView.tsunamiEventView;
    List<BooleanExpression> boolList = new ArrayList<>();
    BooleanExpression master = null;
    Boolean masterExists = false;

    boolList.add(genIntMinMax(map, "tsMinYear", "tsMaxYear", event.year));
    boolList.add(genEqRestriction(map, "tsRegionCode", event.regionCode));
    boolList.add(genEqRestriction(map, "tsCountry", event.country));
    boolList.add(genEqRestriction(map, "tsArea", event.area));
    boolList.add(genIntMinMax(map, "tsMinValidity", "tsMaxValidity", event.eventValidity));
    boolList.add(genIntMinMax(map, "tsMinCause", "tsMaxCause", event.causeCode));
    boolList.add(genDoubleMinMax(map, "tsMinEqMag", "tsMaxEqMag", event.eqMagnitude));

    for(int i = 0; i < boolList.size(); i++){
      if(!masterExists){
        if(boolList.get(i) != null){
          master = boolList.get(i);
        }
      }else{
        if(boolList.get(i) != null){
          master = master.and(boolList.get(i));
        }
      }
    }

    return master;

  }

  @Override
  public List<RunupProjection> getRunups(Map<String, String> params, Predicate predicate){

    BooleanExpression exp = generateCriteria(params);

    if(params.get("eventid") != null && !params.get("eventid").equals("")){
      return runupViewRepository.findRelatedRunupByTsunami(Integer.parseInt(params.get("eventid")));
    }else if(params.get("refid") != null && !params.get("refid").equals("")){
      return runupViewRepository.findRelatedRunupByRef(Integer.parseInt(params.get("refid")));
    }else if(exp == null){
      return runupViewRepository.findRunupsByQuery(predicate);
    }else{
      return runupViewRepository.findRunupsByQuery(combineBools(predicate, generateCriteria(params)));
    }
  }


  @Override
  public SignifTsqp sanitizeObject(SignifTsqp eq){

//    impl here






    return eq;
  }

}
