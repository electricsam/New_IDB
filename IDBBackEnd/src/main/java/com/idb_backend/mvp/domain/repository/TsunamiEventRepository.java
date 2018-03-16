package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.idb_backend.mvp.domain.model.TsunamiEventViewNonPersist;

import javax.persistence.Query;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;

public interface TsunamiEventRepository {

    List<TsunamiEventView> getAllTsunamiEvents();

    List<TsunamiEventViewNonPersist> getEventsByQuery(CriteriaQuery<TsunamiEventViewNonPersist> criteria);

    void addEvent(TsunamiEvent tsunamiEvent);

    List<TsunamiEvent> checkMaxTsEventId();
}