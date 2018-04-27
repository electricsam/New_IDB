package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.SignifToTsEvent;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.model.SignifVsqp;
import com.idb_backend.mvp.domain.model.TsunamiEvent;

public interface EarthquakeCustomRepository {

  Iterable<SignifVsqp> findRelatedEarthquake(Integer tsunamiId);
}
