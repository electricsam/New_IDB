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
  public List<RunupProjection> getRunups(Map<String, String> params, Predicate predicate){
    if(params.get("tsunamiid") != null && !params.get("tsunamiid").equals("")){
      return runupViewRepository.findRelatedRunupByTsunami(Integer.parseInt(params.get("tsunamiid")));
    }if(params.get("refid") != null && !params.get("refid").equals("")){
      return runupViewRepository.findRelatedRunupByRef(Integer.parseInt(params.get("refid")));
    }else{
      return runupViewRepository.findRunupsByQuery(combineBools(predicate, generateCriteria(params)));
    }
  }

}
