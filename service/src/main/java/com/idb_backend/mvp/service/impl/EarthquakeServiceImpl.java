package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.SignifVsqp;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.idb_backend.mvp.domain.repository.EarthquakeViewRepository;
import com.idb_backend.mvp.service.EarthquakeService;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class EarthquakeServiceImpl implements EarthquakeService{

  @Autowired
  EarthquakeRepository earthquakeRepository;

  @Autowired
  EarthquakeViewRepository earthquakeViewRepository;

  @Override
  public Iterable<SignifVsqp> getAllEarthquakes(Map<String, String> params, Predicate predicate) {
    if(params.get("tsunamiid") != "" && params.get("tsunamiid") != null){
      Integer tsunamiId = Integer.parseInt(params.get("tsunamiid"));
      return earthquakeRepository.findRelatedEarthquake(tsunamiId);
    }else{
      return earthquakeViewRepository.findAll(predicate);
    }
  }
}
