package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public class TsunamiEventRepositoryImpl implements TsunamiEventRepository {

  @PersistenceContext
  EntityManager em;

  @Override
  public List<TsunamiEvent> getAllTsunamiEvents(){
    try{
      List<TsunamiEvent> result = em.createQuery("FROM TSEVENT_TSQP").getResultList();
      return result;
    }catch (Exception e){
      throw e;
    }
  }

  @Override
  public List<TsunamiEvent> getEventsByYear(int year) {
    try{
      List<TsunamiEvent> result = em.createQuery("FROM TSEVENT_TSQP WHERE YEAR=" + year).getResultList();
      return result;
    }catch (Exception e){
      throw e;
    }
  }
}
