package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.QTsunamiEventView;
import com.idb_backend.mvp.domain.model.RunupProjection;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.model.TsunamiRunup;
import com.idb_backend.mvp.domain.repository.RunupViewRepository;
import com.idb_backend.mvp.service.BaseService;
import com.idb_backend.mvp.service.RunupService;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
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
  public TsunamiRunup sanitizeObject(TsunamiRunup rnp){

    String locationName = rnp.getLocationName();
    locationName = NO_HTML_POLICY_DEFINITION.sanitize(locationName);
    rnp.setLocationName(locationName);

    String area = rnp.getArea();
    area = NO_HTML_POLICY_DEFINITION.sanitize(area);
    rnp.setArea(area);

    String country = rnp.getCountry();
    country = NO_HTML_POLICY_DEFINITION.sanitize(country);
    rnp.setCountry(country);

    String comments = rnp.getComments();
    comments = POLICY_DEFINITION.sanitize(comments);
    rnp.setComments(comments);

    String doubtful = rnp.getDoubtful();
    doubtful = NO_HTML_POLICY_DEFINITION.sanitize(doubtful);
    rnp.setDoubtful(doubtful);

    String tideNetwork = rnp.getTideNetwork();
    tideNetwork = NO_HTML_POLICY_DEFINITION.sanitize(tideNetwork);
    rnp.setTideNetwork(tideNetwork);

    String flagEditNatwc = rnp.getFlagEditNatwc();
    flagEditNatwc = NO_HTML_POLICY_DEFINITION.sanitize(flagEditNatwc);
    rnp.setFlagEditNatwc(flagEditNatwc);

    return rnp;
  }

}
