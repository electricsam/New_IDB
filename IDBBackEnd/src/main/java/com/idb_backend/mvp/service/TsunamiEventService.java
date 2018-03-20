package com.idb_backend.mvp.service;

import com.idb_backend.mvp.domain.model.*;

import javax.persistence.criteria.*;
import java.util.List;
import java.util.Map;

public interface TsunamiEventService {

  Predicate checkMinMax(Integer min, Integer max, String colName, CriteriaBuilder builder, Root root);

  Predicate checkMinMax(Integer min, Integer max, String colName, CriteriaBuilder builder, Join join);

  Predicate checkMinMax(Float min, Float max, String colName, CriteriaBuilder builder, Root root);

  Predicate checkMinMax(Float min, Float max, String colName, CriteriaBuilder builder, Join join);

  Predicate genIntMinMax(
      Map<String, String> map, String minKey, String maxKey, String colName, CriteriaBuilder builder, Root root);

  Predicate genIntMinMax(
      Map<String, String> map, String minKey, String maxKey, String colName, CriteriaBuilder builder, Join join);


  Predicate genFloatMinMax(
      Map<String, String> map, String minKey, String maxKey, String colName, CriteriaBuilder builder, Root root);

  Predicate genFloatMinMax(
      Map<String, String> map, String minKey, String maxKey, String colName, CriteriaBuilder builder, Join join);

  List<TsunamiEventViewNonPersist> getEventsByQuery(CriteriaQuery<TsunamiEventViewNonPersist> criteria);

  List<TsunamiEventViewNonPersist> generateCriteria(Map<String, String> map);

  Integer generateInteger(Map<String, String> map, String key);

  Float generateFloat(Map<String, String> map, String key);

  Predicate genEqRestriction(Map<String, String> map, String key, String colName, CriteriaBuilder builder, Root root);

  Predicate checkRegionParams(Map<String, String> map, String key, String colName, CriteriaBuilder builder, Root root);

  Predicate checkRegionParams(Map<String, String> map, String key, String colName, CriteriaBuilder builder, Join join );

  Predicate checkLocParams(Map<String, String> map, String start, String end, String includes, String match,
                           String not, String colName, CriteriaBuilder builder, Root root);

  Predicate checkLocParams(Map<String, String> map, String start, String end, String includes, String match,
                           String not, String colName, CriteriaBuilder builder, Join join);

  Predicate genEqRestriction(Map<String, String> map, String key, String colName, CriteriaBuilder builder, Join join);

  void addEvent(TsunamiEvent tsunamiEvent);

  List<TsunamiEvent> checkMaxTsEventId();

  List<TsunamiRunup> checkMaxRunupId();

  void addRunup(TsunamiRunup tsunamiRunup);

  List<TsunamiRunupViewNonPersist> generateRunupCriteria(Map<String, String> map);



}
