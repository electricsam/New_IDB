package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.TsunamiEventMoreInfoProjection;
import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.EntityPathBase;

public interface TsunamiEventCustomRepository {

  Iterable<TsunamiEventView> findRelatedTsunamiFromEarthquake(Integer earthquakeId);

  Iterable<TsunamiEventView> findRelatedTsunamiFromRef(Integer refId);

  Iterable<TsunamiEventView> findRelatedTsunamiFromVolcano(Integer volId);

  Iterable<TsunamiEventView> findRelatedTsunamiFromRunup(Integer runupId);

}
