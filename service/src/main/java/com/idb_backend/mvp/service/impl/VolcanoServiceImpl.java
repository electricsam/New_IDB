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
import org.omg.PortableInterceptor.PolicyFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class VolcanoServiceImpl extends BaseService implements VolcanoService{

  @Autowired
  VolcanoEventRepository volcanoEventRepository;

  /**
   * Returns a BooleanExpression, generated based on the existance of additional search terms not captured by the entity
   * or the @QuerydslPredicate Predicate generation on ingest at the controller level.  These are additional search
   * terms that may be associted with a related dataset or simply not captured elsewhere. Each of these terms will be
   * chained together via AND logic.
   *
   * @param params
   * @return BooleanExpression composed of chained BooleanExpressions, linked via AND logic || null
   */
  @Override
  public List<VolcanoEventProjection> getVolcanoes (Map<String, String> params, Predicate predicate ){

    BooleanExpression exp = generateCriteria(params);

    if(params.get("earthquakeid") != null && !params.get("earthquakeid").equals("")){
      return volcanoEventRepository.findRelatedVolcanoesFromEarthquake(Integer.parseInt(params.get("earthquakeid")));
    }else if(params.get("refid") != null && !params.get("refid").equals("")){
      return volcanoEventRepository.findRelatedVolcanoesFromRef(Integer.parseInt(params.get("refid")));
    }else if(params.get("tsunamiid") != null && !params.get("tsunamiid").equals("")){
      return volcanoEventRepository.findRelatedVolcanoesFromTsunami(Integer.parseInt(params.get("tsunamiid")));
    }else if(exp == null){
      return volcanoEventRepository.findByQuery(predicate);
    }else{
      return volcanoEventRepository.findByQuery(combineBools(predicate, generateCriteria(params)));
    }
  }

  /**
   * Returns a BooleanExpression, generated based on the existance of additional search terms not captured by the entity
   * or the @QuerydslPredicate Predicate generation on ingest at the controller level.  These are additional search
   * terms that may be associted with a related dataset or simply not captured elsewhere. Each of these terms will be
   * chained together via AND logic.
   *
   * @param map
   * @return BooleanExpression composed of chained BooleanExpressions, linked via AND logic || null
   */
  public BooleanExpression generateCriteria (Map<String, String> map){
    QVolLocTsqp root = QVolLocTsqp.volLocTsqp;
    List<BooleanExpression> boolList = new ArrayList<>();
    BooleanExpression master = null;
    Boolean masterExists = false;

    boolList.add(checkLikeParams(map, "nameStart", "nameEnd", "nameIncludes", "nameMatch", "nameNot", root.name));
    boolList.add(checkLikeParams(map, "locStart", "locEnd", "locIncludes", "locMatch", "locNot", root.location));
    boolList.add(genEqRestriction(map, "country", root.country));
    boolList.add(genDoubleMinMax(map, "minLatitude", "maxLatitude", root.latitude));
    boolList.add(genDoubleMinMax(map, "minLongitude", "maxLongitude", root.longitude));
    boolList.add(genEqRestriction(map, "morphology", root.morphology));

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

  /**
   * Returns VolcanoEvent that has been sanatized of unacceptable HTML
   *
   * @param ve
   * @return VolcanoEvent
   */
  @Override
  public VolcanoEvent sanitizeObject(VolcanoEvent ve){

    String comments = ve.getComments();
    comments = POLICY_DEFINITION.sanitize(comments);
    ve.setComments(comments);

    String reference = ve.getReference();
    reference = NO_HTML_POLICY_DEFINITION.sanitize(reference);
    ve.setReference(reference);

    return ve;
  }
}
