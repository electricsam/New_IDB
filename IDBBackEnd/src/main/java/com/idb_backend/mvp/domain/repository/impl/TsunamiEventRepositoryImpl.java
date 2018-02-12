package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class TsunamiEventRepositoryImpl implements TsunamiEventRepository {

    @PersistenceContext
    EntityManager em;

    @Override
    public List<TsunamiEvent> getAllTsunamiEvents(){
        List<TsunamiEvent> result = em.createQuery("FROM TSEVENT_TSQP").getResultList();
        System.out.println("You have reached the getAllTsunamiEvents method");
        return result;
    }
}
