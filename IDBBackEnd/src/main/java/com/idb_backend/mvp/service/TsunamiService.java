package com.idb_backend.mvp.service;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.idb_backend.mvp.domain.model.TsunamiEventViewNonPersist;
import com.idb_backend.mvp.domain.model.TsunamiRunupView;

import javax.persistence.criteria.*;
import java.util.List;
import java.util.Map;

public interface TsunamiService {

  Predicate checkMinMax(Integer min, Integer max, String colName, CriteriaBuilder builder, Root<TsunamiEventView> root);

  Predicate checkMinMax(Integer min, Integer max, String colName, CriteriaBuilder builder, Join<TsunamiEventView,
      TsunamiRunupView> join);

  Predicate checkMinMax(Float min, Float max, String colName, CriteriaBuilder builder, Root<TsunamiEventView> root);

  Predicate checkMinMax(Float min, Float max, String colName, CriteriaBuilder builder, Join<TsunamiEventView,
      TsunamiRunupView> join);

  Predicate genIntMinMax(
      Map<String, String> map, String minKey, String maxKey, String colName, CriteriaBuilder builder,
      Root<TsunamiEventView> root
  );

  Predicate genIntMinMax(
      Map<String, String> map, String minKey, String maxKey, String colName, CriteriaBuilder builder,
      Join<TsunamiEventView, TsunamiRunupView> join
  );


  Predicate genFloatMinMax(
      Map<String, String> map, String minKey, String maxKey, String colName, CriteriaBuilder builder,
      Root<TsunamiEventView> root
  );

  Predicate genFloatMinMax(
      Map<String, String> map, String minKey, String maxKey, String colName, CriteriaBuilder builder,
      Join<TsunamiEventView, TsunamiRunupView> join
  );

  List<TsunamiEventViewNonPersist> getEventsByQuery(CriteriaQuery<TsunamiEventViewNonPersist> criteria);

  List<TsunamiEventViewNonPersist> generateCriteria(Map<String, String> map);

  Integer generateInteger(Map<String, String> map, String key);

  Float generateFloat(Map<String, String> map, String key);

  Predicate genEqRestriction(Map<String, String> map, String key, String colName, CriteriaBuilder builder, Root<TsunamiEventView> root);

  Predicate checkRegionParams(Map<String, String> map, String key, String colName, CriteriaBuilder builder, Root<TsunamiEventView> root);

  Predicate checkRegionParams(Map<String, String> map, String key, String colName, CriteriaBuilder builder,
                              Join<TsunamiEventView, TsunamiRunupView> join );

  Predicate checkLocParams(Map<String, String> map, String start, String end, String includes, String match,
                           String not, String colName, CriteriaBuilder builder, Root<TsunamiEventView> root);

  Predicate checkLocParams(Map<String, String> map, String start, String end, String includes, String match,
                           String not, String colName, CriteriaBuilder builder, Join<TsunamiEventView, TsunamiRunupView> join);

  Predicate genEqRestriction(Map<String, String> map, String key, String colName, CriteriaBuilder builder,
                             Join<TsunamiEventView, TsunamiRunupView> join);

  void addEvent(TsunamiEvent tsunamiEvent);

  List<TsunamiEvent> checkMaxTsEventId();
}
