package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.VolLocTsqp;
import com.idb_backend.mvp.domain.model.VolLocTsqpProjection;
import com.idb_backend.mvp.domain.repository.VolLocTsqpRepository;
import com.idb_backend.mvp.service.BaseService;
import com.idb_backend.mvp.service.VolLocService;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class VolLocServiceImpl extends BaseService implements VolLocService{

  @Autowired
  VolLocTsqpRepository volcanoLocRepository;

  public VolLocServiceImpl(){
    super();
  }

  @Override
  public Iterable<VolLocTsqpProjection> getVolLocs(Map<String, String> params, Predicate predicate){
    if(params.get("eventid") != null && !params.get("eventid").equals("")){
      return volcanoLocRepository.findRelatedVolcanoLocFromEvent(Integer.parseInt(params.get("eventid")));
    }else{
      return volcanoLocRepository.findByQuery(predicate);
    }
  }


  @Override
  public VolLocTsqp sanitizeObject(VolLocTsqp vl){

    String num = vl.getNum();
    num = NO_HTML_POLICY_DEFINITION.sanitize(num);
    vl.setNum(num);

    String name = vl.getName();
    name = NO_HTML_POLICY_DEFINITION.sanitize(name);
    vl.setName(name);

    String location = vl.getLocation();
    location = NO_HTML_POLICY_DEFINITION.sanitize(location);
    vl.setLocation(location);

    String morphology = vl.getMorphology();
    morphology = NO_HTML_POLICY_DEFINITION.sanitize(morphology);
    vl.setMorphology(morphology);

    String status = vl.getStatus();
    status = NO_HTML_POLICY_DEFINITION.sanitize(status);
    vl.setStatus(status);

    String timeErupt = vl.getTimeErupt();
    timeErupt = NO_HTML_POLICY_DEFINITION.sanitize(timeErupt);
    vl.setTimeErupt(timeErupt);

    String country = vl.getCountry();
    country = NO_HTML_POLICY_DEFINITION.sanitize(country);
    vl.setCountry(country);

    return vl;
  }



}
