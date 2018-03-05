package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import org.hibernate.criterion.DetachedCriteria;

import java.util.HashMap;
import java.util.List;

public interface TsunamiEventRepository {

    List<TsunamiEvent> getAllTsunamiEvents();


//    List<TsunamiEvent> getEventsByQuery(Integer year, Integer month);

//    List<TsunamiEvent> getEventsByQuery(String whereConditions);

    List<TsunamiEvent> getEventsByQuery(DetachedCriteria query);
}