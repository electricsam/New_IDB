package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.idb_backend.mvp.domain.model.TsunamiEventViewNonPersist;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;

@Repository
@Transactional
public class TsunamiEventRepositoryImpl implements TsunamiEventRepository {

  @PersistenceContext
  EntityManager em;

  @Override
  public List<TsunamiEventView> getAllTsunamiEvents(){
    try{
      List<TsunamiEventView> result = em.createQuery("FROM TSEVENT_VSQP").getResultList();
      return result;
    }catch (Exception e){
      throw e;
    }
  }

  @Override
  public List<TsunamiEventViewNonPersist> getEventsByQuery(CriteriaQuery<TsunamiEventViewNonPersist> criteria) {
    return em.createQuery(criteria).getResultList();
  }


  @Override
  public void addEvent(TsunamiEvent tsunamiEvent) {
    em.persist(tsunamiEvent);
  }

  @Override
  public List<TsunamiEvent> checkMaxTsEventId(){
    return em.createQuery("FROM TSEVENT_TSQP ORDER BY ID DESC").getResultList();
  }
}
