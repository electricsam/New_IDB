package com.idb_backend.mvp.service;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.DetachedCriteria;

import java.util.List;
import java.util.Map;

public interface TsunamiService {

  Criterion checkMinMax(Integer min, Integer max, String colName);

  Criterion checkMinMax(Float min, Float max, String colName);

  List<TsunamiEvent> getEventsByQuery(DetachedCriteria query);

  List<TsunamiEvent> generateCriteria(Map<String, String> map, DetachedCriteria query);

  Criterion checkYearParams(Map<String, String> map);

  Criterion checkValidityParams(Map<String, String> map);

  Criterion checkCountryParam(Map<String, String> map);

  Criterion checkTsunamiCause(Map<String,String> map);

  Criterion checkRegionCode (Map<String,String> map);

  Criterion checkAreaParam(Map<String, String> map);

  Criterion checkLatParams(Map<String,String> map);

  Criterion checkLongParams(Map<String,String> map);

  Criterion checkEQMagParam(Map<String,String> map);

  Criterion checkLocationParam(Map<String, String> map);

  //Criterion checkRunupLocationParam(Map<String, String> map);
}
