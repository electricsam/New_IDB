package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.TsunamiEvent;

import java.util.List;

public interface TsunamiEventRepository {

    List<TsunamiEvent> getAllTsunamiEvents();

}
