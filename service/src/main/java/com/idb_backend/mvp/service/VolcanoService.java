package com.idb_backend.mvp.service;

import com.idb_backend.mvp.domain.model.VolcanoEvent;
import com.idb_backend.mvp.domain.model.VolcanoEventProjection;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.StringPath;

import java.util.List;
import java.util.Map;

public interface VolcanoService {
  List<VolcanoEventProjection> getVolcanoes(Map<String, String> params, Predicate predicate);
}
