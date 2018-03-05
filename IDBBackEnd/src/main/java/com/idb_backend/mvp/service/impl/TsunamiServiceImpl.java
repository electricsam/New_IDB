package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.service.TsunamiService;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class TsunamiServiceImpl implements TsunamiService{

  @Autowired
  TsunamiEventRepository tsunamiEventRepository;

  public List<TsunamiEvent> generateCriteria (Map<String, String> map, DetachedCriteria query){
    Criterion year = checkYearParams(map);
    Criterion validity = checkValidityParams(map);
    Criterion country = checkCountryParam(map);
    Criterion causeCode = checkTsunamiCause(map);
    Criterion regionCode = checkRegionCode(map);

    if(year != null){
      query.add(year);
    }
    if(validity != null){
      query.add(validity);
    }
    if(country != null){
      query.add(country);
    }
    if(causeCode != null){
      query.add(causeCode);
    }
    if(regionCode != null){
      query.add(regionCode);
    }

    return getEventsByQuery(query);
  }

  public List<TsunamiEvent> getEventsByQuery(DetachedCriteria query){
    return tsunamiEventRepository.getEventsByQuery(query);
  }

  public Criterion checkMinMax(Integer min, Integer max, String colName){
    if(min != null && max != null){
      return Restrictions.between(colName, min, max);
    }else if(min != null){
      return Restrictions.ge(colName, min);
    }else if(max != null){
      return Restrictions.le(colName, max);
    }else{
      return null;
    }
  }

  @Override
  public Criterion checkYearParams(Map<String, String> map){
    //TODO: Must validate input
    Integer minYear = map.get("minyear") != null? new Integer(Integer.parseInt(map.get("minyear"))): null;
    Integer maxYear = map.get("maxyear") != null? new Integer(Integer.parseInt(map.get("maxyear"))): null;
    String colName = "year";

    return checkMinMax(minYear, maxYear, colName);
  }

  @Override
  public Criterion checkValidityParams(Map<String, String> map){
    //TODO: Must validate input
    Integer minValidity = map.get("minvalidity") != null? new Integer(Integer.parseInt(map.get("minvalidity"))): null;
    Integer maxValidity = map.get("maxvalidity") != null? new Integer(Integer.parseInt(map.get("maxvalidity"))): null;
    String colName = "eventValidity";

    return checkMinMax(minValidity, maxValidity, colName);
  }

  @Override
  public Criterion checkCountryParam(Map<String, String> map){
    //TODO: Must validate input
    String country = map.get("country");
    if(country != null){
      return Restrictions.eq("country", country);
    }else{
      return null;
    }

  }

  @Override
  public Criterion checkTsunamiCause(Map<String, String> map) {
    Integer causeCode = map.get("causecode") != null? new Integer(Integer.parseInt(map.get("causecode"))): null;
    if(causeCode != null){
      return Restrictions.eq("causeCode", causeCode);
    }else{
      return null;
    }
  }

  @Override
  public Criterion checkRegionCode(Map<String,String> map){
    Integer regionCode = map.get("regioncode") != null? new Integer(Integer.parseInt(map.get("regioncode"))): null;
    if(regionCode != null){
      return Restrictions.eq("regionCode", regionCode);
    }else{
      return null;
    }
  }

}
