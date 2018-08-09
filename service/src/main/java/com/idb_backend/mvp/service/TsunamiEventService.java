package com.idb_backend.mvp.service;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.StringPath;

import java.util.Map;

public interface TsunamiEventService {
  Iterable<TsunamiEventView> getTsunamis(Map<String, String> params, Predicate predicate);

  TsunamiEvent sanitize(TsunamiEvent te);
}
