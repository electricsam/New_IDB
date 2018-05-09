package com.idb_backend.mvp.service;

import com.idb_backend.mvp.domain.model.VolLocTsqpProjection;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;

import java.util.Map;

public interface VolLocService {

  Iterable<VolLocTsqpProjection> getVolLocs(Map<String, String> params, Predicate predicate);

}
