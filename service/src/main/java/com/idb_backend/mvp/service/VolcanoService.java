package com.idb_backend.mvp.service;

import com.idb_backend.mvp.domain.model.VolcanoEventProjection;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.StringPath;

import java.util.List;
import java.util.Map;

public interface VolcanoService {

  List<VolcanoEventProjection> getVolcanoes(Map<String, String> params, Predicate predicate);

  BooleanExpression combineBools(Predicate predicate, BooleanExpression runupBool);

  BooleanExpression checkMinMax(Integer min, Integer max, NumberPath<Integer> root);

  BooleanExpression genIntMinMax(Map<String, String> map, String minKey, String maxKey,
                                 NumberPath<Integer> root) throws NumberFormatException;

  Integer generateInteger(Map<String, String> map, String key);

  BooleanExpression generateCriteria(Map<String, String> map);

  BooleanExpression genEqRestriction(Map<String, String> map, String key, StringPath root);

  BooleanExpression genEqRestriction(Map<String, String> map, String key, NumberPath root);

  BooleanExpression checkMinMax(Double min, Double max, NumberPath<Double> root);

  Double generateDouble(Map<String, String> map, String key);

  BooleanExpression genDoubleMinMax(Map<String, String> map, String minKey, String maxKey,
                                    NumberPath<Double> root);

  BooleanExpression checkLikeParams(Map<String, String> map, String locStart, String locEnd,
                                   String locIncludes, String locMatch, String locNot,
                                   StringPath root);

}
