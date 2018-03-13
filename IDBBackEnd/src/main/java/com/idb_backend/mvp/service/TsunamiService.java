package com.idb_backend.mvp.service;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.sun.tools.corba.se.idl.StringGen;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.DetachedCriteria;

import java.util.List;
import java.util.Map;

public interface TsunamiService {

  Criterion checkMinMax(Integer min, Integer max, String colName);

  Criterion checkMinMax(Float min, Float max, String colName);

  Criterion genIntMinMax(Map<String, String> map, String minKey, String maxKey, String colName);

  Criterion genFloatMinMax(Map<String, String> map, String minKey, String maxKey, String colName);

  List<TsunamiEvent> getEventsByQuery(DetachedCriteria query);

  List<TsunamiEvent> generateCriteria(Map<String, String> map, DetachedCriteria query);

  Criterion checkEQMagParam(Map<String,String> map);

  Integer generateInteger(Map<String, String> map, String key);

  Float generateFloat(Map<String, String> map, String key);

  Criterion genEqRestriction(Map<String, String> map, String key, String colName);

  Criterion checkRegionParams(Map<String, String> map, String key, String colName);

  Criterion checkLocParams(Map<String, String> map, String start, String end, String includes, String match,
                           String not, String colName);

}
