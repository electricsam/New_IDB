package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.service.TsunamiService;
import org.hibernate.criterion.*;
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
    Criterion area = checkAreaParam(map);
    Criterion latitude = checkLatParams(map);
    Criterion longitude = checkLongParams(map);
    Criterion eqMag = checkEQMagParam(map);
    Criterion loc = checkLocationParam(map);

    Conjunction conjunction = Restrictions.conjunction();


    if(year != null){
      conjunction.add(year);
    }
    if(validity != null){
      conjunction.add(validity);
    }
    if(country != null){
      conjunction.add(country);
    }
    if(causeCode != null){
      conjunction.add(causeCode);
    }
    if(regionCode != null){
      conjunction.add(regionCode);
    }
    if(area != null){
      conjunction.add(area);
    }
    if(latitude != null){
      conjunction.add(latitude);
    }
    if(longitude != null){
      conjunction.add(longitude);
    }
    if(eqMag != null){
      conjunction.add(eqMag);
    }
    if(loc != null){
      conjunction.add(loc);
    }

    query.add(conjunction);

    return getEventsByQuery(query);
  }

  public List<TsunamiEvent> getEventsByQuery(DetachedCriteria query){
    System.out.println("you have reached the getEvents by Query");
    System.out.println(query.toString());
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

  public Criterion checkMinMax(Float min, Float max, String colName){
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
    //TODO: Must validate input min(-2000) max(present year)
    Integer minYear = map.get("minyear") != null? new Integer(Integer.parseInt(map.get("minyear"))): null;
    Integer maxYear = map.get("maxyear") != null? new Integer(Integer.parseInt(map.get("maxyear"))): null;
    String colName = "year";

    return checkMinMax(minYear, maxYear, colName);
  }

  @Override
  public Criterion checkValidityParams(Map<String, String> map){
    //TODO: Must validate input min(-1) max(4)
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
    //TODO: must validate input min(0) max(11)
    Integer minCause = map.get("mincause") != null? new Integer(Integer.parseInt(map.get("mincause"))): null;
    Integer maxCause = map.get("maxcause") != null? new Integer(Integer.parseInt(map.get("maxcause"))): null;
    String colName = "causeCode";

    return checkMinMax(minCause, maxCause, colName);
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

  @Override
  public Criterion checkAreaParam(Map<String, String> map) {
    //TODO must validate input
    String area = map.get("area");
    if(area != null){
      return Restrictions.eq("area", area);
    }else{
      return null;
    }
  }

  @Override
  public Criterion checkLatParams(Map<String, String> map) {
    Float latNorth = map.get("latnorth") != null? new Float(Float.parseFloat(map.get("latnorth"))): null;
    Float latSouth = map.get("latsouth") != null? new Float(Float.parseFloat(map.get("latsouth"))): null;
    String colName = "latitude";

    return checkMinMax( latSouth, latNorth, colName);
  }

  @Override
  public Criterion checkLongParams(Map<String, String> map) {
    Float longWest = map.get("longwest") != null? new Float(Float.parseFloat(map.get("longwest"))): null;
    Float longEast = map.get("longeast") != null? new Float(Float.parseFloat(map.get("longeast"))): null;
    String colName = "longitude";

    return checkMinMax( longWest, longEast, colName);
  }

  @Override
  public Criterion checkEQMagParam(Map<String, String> map) {
    Float eqMag = map.get("eqmag") != null? new Float(Float.parseFloat(map.get("eqmag"))): null;

    if(eqMag == null){
      return null;
    }
    Disjunction objDisjuction = Restrictions.disjunction();
    objDisjuction.add(Restrictions.eq("eqMagUnk", eqMag));
    objDisjuction.add(Restrictions.eq("eqMagMb", eqMag));
    objDisjuction.add(Restrictions.eq("eqMagMs", eqMag));
    objDisjuction.add(Restrictions.eq("eqMagMw", eqMag));

    return objDisjuction;

  }

  @Override
  public Criterion checkLocationParam(Map<String, String> map) {
    String locStart = map.get("locstart");
    String locEnd = map.get("locend");
    String locIncludes = map.get("locincludes");
    String locMatch = map.get("locmatch");
    String locNot = map.get("locnot");

    if(locStart != null){
      Criterion rest =  Restrictions.ilike("locationName", locStart, MatchMode.START);
      System.out.println(rest.toString());
      return rest;
    }else if(locEnd != null){
      return Restrictions.ilike("locationName", locEnd, MatchMode.END);
    }else if(locIncludes != null){
      return Restrictions.ilike("locationName", locIncludes, MatchMode.ANYWHERE);
    }else if(locMatch != null){
      return Restrictions.ilike("locationName", locMatch, MatchMode.EXACT);
    }else if(locNot != null){
      return Restrictions.not(Restrictions.ilike("locationName", locNot, MatchMode.EXACT));
    }else{
      return null;
    }
  }

}
