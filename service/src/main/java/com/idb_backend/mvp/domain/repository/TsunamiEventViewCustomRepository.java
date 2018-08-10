package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.TsunamiEventMoreInfoProjection;
import com.idb_backend.mvp.domain.model.TsunamiEventMoreInfoRunupProjection;
import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.querydsl.core.types.Predicate;

import java.util.Map;

public interface TsunamiEventViewCustomRepository {

  Iterable<TsunamiEventView> findEventsByQuery(Predicate predicate);

  Iterable<TsunamiEventView> findEventsNoRunupParams(Predicate predicate);

  Iterable<TsunamiEventMoreInfoProjection> findMoreInfo(Integer eventId);

  Iterable<TsunamiEventMoreInfoRunupProjection> findMoreInfoRunup(Integer eventId);

}
