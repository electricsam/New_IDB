package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaQuery;
import java.util.ArrayList;
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

  public List<TsunamiEvent> getEventById(Integer id){
    TsunamiEvent te = em.find(TsunamiEvent.class, id);
    List<TsunamiEvent> list = new ArrayList<>();
    list.add(te);
    return list;
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
  public void updateEvent(TsunamiEvent te) {
    Session session = em.unwrap(Session.class);
    session.saveOrUpdate(te);
    session.close();
  }

  @Override
  public void updateRunup(TsunamiRunup tsunamiRunup){
    Session session = em.unwrap(Session.class);
    session.saveOrUpdate(tsunamiRunup);
    session.close();
  }

  @Override
  public void deleteRunup(Integer id){
    em.remove(em.getReference(TsunamiRunup.class, id));
  }

  @Override
  public TsunamiEvent getEventProxy(Integer id){
    return em.getReference(TsunamiEvent.class, id);
  }

  @Override
  public void deleteEvent(Integer id){
    List<TsunamiEvent> tsunamiEvents = em.createQuery("FROM TSEVENT_TSQP WHERE ID = "+ id).getResultList();
    em.remove(tsunamiEvents.get(0));
  }

  @Override
  public List<TsunamiRunup> getRunupById(Integer id){
    TsunamiRunup tr = em.find(TsunamiRunup.class, id);
    List<TsunamiRunup> list = new ArrayList<>();
    list.add(tr);
    return list;
  }

  @Override
  public List<TsunamiRunupView> getAllRunups(){
    return em.createQuery("FROM TSRUNUP_VSQP").getResultList();
  }
}
