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
  public Iterable getAllEarthquakes(Map<String, String> params, Predicate predicate) {
    if(params.get("tsunamiid") != null && !params.get("tsunamiid").equals("")){
      Integer tsunamiId = Integer.parseInt(params.get("tsunamiid"));
      return earthquakeRepository.findRelatedEarthquakeFromTsunami(tsunamiId);
    }else if(params.get("refid") != null && !params.get("refid").equals("")){
      Integer refId = Integer.parseInt(params.get("refid"));
      return earthquakeRepository.findRelatedEarthquakeFromRef(refId);
    }else if(params.get("volcanoid") != null && !params.get("volcanoid").equals("")){
      Integer volId = Integer.parseInt(params.get("volcanoid"));
      return earthquakeRepository.findRelatedEarthquakeFromVolcano(volId);
    }else{
      return earthquakeViewRepository.findAll(predicate);
    }
  }
}
