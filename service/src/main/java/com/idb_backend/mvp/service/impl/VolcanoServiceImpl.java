package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.VolcanoEventRepository;
import com.idb_backend.mvp.service.BaseService;
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
public class VolcanoServiceImpl extends BaseService implements VolcanoService{

  @Autowired
  VolcanoEventRepository volcanoEventRepository;

  @Override
  public List<VolcanoEventProjection> getVolcanoes (Map<String, String> params, Predicate predicate ){
    if(params.get("earthquakeid") != null && !params.get("earthquakeid").equals("")){
      return volcanoEventRepository.findRelatedVolcanoesFromEarthquake(Integer.parseInt(params.get("earthquakeid")));
    }else if(params.get("refid") != null && !params.get("refid").equals("")){
      return volcanoEventRepository.findRelatedVolcanoesFromRef(Integer.parseInt(params.get("refid")));
    }else if(params.get("tsunamiid") != null && !params.get("tsunamiid").equals("")){
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
}
