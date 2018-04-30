package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.querydsl.core.types.Predicate;

import java.util.Map;

public interface TsunamiEventViewCustomRepository {

  Iterable<TsunamiEventView> findEventsByQuery(Map<String, String> params, Predicate predicate);

}
