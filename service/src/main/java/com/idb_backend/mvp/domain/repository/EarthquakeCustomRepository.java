package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.SignifVsqp;

public interface EarthquakeCustomRepository {

  Iterable<SignifVsqp> findRelatedEarthquakeFromTsunami(Integer tsunamiId);

  Iterable<SignifVsqp> findRelatedEarthquakeFromRef(Integer refId);

  Iterable<SignifVsqp> findRelatedEarthquakeFromVolcano(Integer volId);
}
