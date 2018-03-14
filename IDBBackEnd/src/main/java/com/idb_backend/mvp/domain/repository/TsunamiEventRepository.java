package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.idb_backend.mvp.domain.model.TsunamiEventViewNonPersist;

import javax.persistence.criteria.CriteriaQuery;
import java.util.List;

public interface TsunamiEventRepository {

    List<TsunamiEventView> getAllTsunamiEvents();

    List<TsunamiEventViewNonPersist> getEventsByQuery(CriteriaQuery<TsunamiEventViewNonPersist> criteria);
}