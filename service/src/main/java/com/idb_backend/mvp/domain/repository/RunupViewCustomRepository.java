package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.RunupMoreInfoProjection;
import com.idb_backend.mvp.domain.model.RunupProjection;
import com.querydsl.core.types.Predicate;

import java.util.List;

public interface RunupViewCustomRepository {

  List<RunupProjection> findRunupsByQuery(Predicate predicate);

  List<RunupProjection> findRelatedRunupByTsunami(Integer tsunamiId);

  List<RunupProjection> findRelatedRunupByRef(Integer refId);

  List<RunupMoreInfoProjection> findMoreInfo(Integer runupId);
}
