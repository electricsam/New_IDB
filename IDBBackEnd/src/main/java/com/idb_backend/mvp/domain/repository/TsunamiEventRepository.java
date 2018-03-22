package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.*;

import javax.persistence.Query;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;

public interface TsunamiEventRepository {

    List<TsunamiEventView> getAllTsunamiEvents();

    List<TsunamiEventViewNonPersist> getEventsByQuery(CriteriaQuery<TsunamiEventViewNonPersist> criteria);

    void addEvent(TsunamiEvent tsunamiEvent);

    List<TsunamiEvent> checkMaxTsEventId();

    List<TsunamiRunup> checkMaxRunupId();

    void addRunup(TsunamiRunup tsunamiRunup);

    List<TsunamiRunupViewNonPersist> getRunupsByQuery(CriteriaQuery<TsunamiRunupViewNonPersist> criteria);

    void updateEvent(TsunamiEvent tsunamiEvent);

    TsunamiEvent getEventById(Integer id);
}