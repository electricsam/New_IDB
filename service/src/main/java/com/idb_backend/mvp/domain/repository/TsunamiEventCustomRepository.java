package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.TsunamiEventView;

public interface TsunamiEventCustomRepository {

  Iterable<TsunamiEventView> findRelatedTsunamiFromEarthquake(Integer earthquakeId);

  Iterable<TsunamiEventView> findRelatedTsunamiFromRef(Integer refId);

  Iterable<TsunamiEventView> findRelatedTsunamiFromVolcano(Integer volId);
}
