package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.VolcanoEventMoreInfoProjection;
import com.idb_backend.mvp.domain.model.VolcanoEventProjection;
import com.querydsl.core.types.Predicate;

import java.util.List;

public interface VolcanoEventCustomRepository {

  List<VolcanoEventMoreInfoProjection> findMoreInfo(Integer eventId);

  List<VolcanoEventProjection> findByQuery(Predicate predicate);

  List<VolcanoEventProjection> findRelatedVolcanoesFromEarthquake(Integer earthquakeId);

  List<VolcanoEventProjection> findRelatedVolcanoesFromRef(Integer refId);

  List<VolcanoEventProjection> findRelatedVolcanoesFromTsunami(Integer tsunamiId);
}
