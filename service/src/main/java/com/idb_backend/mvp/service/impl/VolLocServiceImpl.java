package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.VolLocTsqpProjection;
import com.idb_backend.mvp.domain.repository.VolLocTsqpRepository;
import com.idb_backend.mvp.service.VolLocService;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class VolLocServiceImpl implements VolLocService{

  @Autowired
  VolLocTsqpRepository volcanoLocRepository;

  @Override
  public Iterable<VolLocTsqpProjection> getVolLocs(Map<String, String> params, Predicate predicate){
//    if(params.get("eventid") != null && params.get("eventid") != ""){
//      return volcanoLocRepository.toog(Integer.parseInt(params.get("eventid")));
//    }else{
      return volcanoLocRepository.boog(predicate);
//    }
  }


}
