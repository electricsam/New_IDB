package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceContext;
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

  @Override
  public List<TsunamiRunup> checkMaxRunupId(){
    return em.createQuery("FROM TSRUNUP_TSQP ORDER BY ID DESC").getResultList();
  }

  @Override
  public void addRunup(TsunamiRunup tsunamiRunup) {
    em.persist(tsunamiRunup);
  }

  @Override
  public List<TsunamiRunupViewNonPersist> getRunupsByQuery(CriteriaQuery<TsunamiRunupViewNonPersist> criteria){
    return em.createQuery(criteria).getResultList();
  }

  @Override
  public void updateEvent(TsunamiEvent tsunamiEvent) {
    System.out.println(tsunamiEvent.getId());
    TsunamiEvent tsunamiEvent1 = new TsunamiEvent();
    tsunamiEvent1.setId(5672);
    tsunamiEvent.setLongitude(new Float(30.22));
    em.merge(tsunamiEvent1);
//    TsunamiEvent te = em.find(TsunamiEvent.class, tsunamiEvent.getId());
//    te.setLocationName("SEANIEVILLEASELYISELISELIU");
//    em.merge(tsunamiEvent);
//      TsunamiEvent mergedEvent = (TsunamiEvent) em.merge(tsunamiEvent);
  }
}
