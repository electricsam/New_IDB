package com.idb_backend.mvp.service;

import com.idb_backend.mvp.domain.model.RunupProjection;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.StringPath;

import java.util.List;
import java.util.Map;

public interface  RunupService {
  List<RunupProjection> getRunups(Map<String, String> params, Predicate predicate);
}
