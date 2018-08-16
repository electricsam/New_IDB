package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.EarthquakeMoreInfoProjection;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.model.SignifVsqp;
import com.querydsl.core.Tuple;

import java.util.List;

public interface EarthquakeCustomRepository {

  Iterable<SignifVsqp> findRelatedEarthquakeFromTsunami(Integer tsunamiId);

  Iterable<SignifVsqp> findRelatedEarthquakeFromRef(Integer refId);

  Iterable<SignifVsqp> findRelatedEarthquakeFromVolcano(Integer volId);

  List<EarthquakeMoreInfoProjection> findMoreInfo(Integer id);

}
