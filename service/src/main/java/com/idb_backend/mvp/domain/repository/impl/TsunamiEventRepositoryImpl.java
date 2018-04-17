package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaQuery;
import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public class TsunamiEventRepositoryImpl implements TsunamiEventRepository {

  @PersistenceContext
  private EntityManager em;

  @Override
  @SuppressWarnings("unchecked")
  public List<TsunamiEventView> getAllTsunamiEvents(){
    return em.createQuery("FROM TSEVENT_VSQP").getResultList();
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
  @SuppressWarnings("unchecked")
  public List<TsunamiEvent> checkMaxTsEventId(){
    return em.createQuery("FROM TSEVENT_TSQP ORDER BY ID DESC").getResultList();
  }

  @Override
  @SuppressWarnings("unchecked")
  public List<TsunamiRunup> checkMaxRunupId(){
    return em.createQuery("FROM TSRUNUP_TSQP ORDER BY ID DESC").getResultList();
  }

  @Override
  public void addRunup(TsunamiRunup tsunamiRunup) {
    em.persist(tsunamiRunup);
  }

  @Override
  @SuppressWarnings("unchecked")
  public List<TsunamiRunupViewNonPersist> getRunupsByQuery(CriteriaQuery<TsunamiRunupViewNonPersist> criteria){
    return em.createQuery(criteria).getResultList();
  }

  @Override
  public void updateEvent(TsunamiEvent te) {
    Session session = em.unwrap(Session.class);
    session.saveOrUpdate(te);

  }

  @Override
  public void updateRunup(TsunamiRunup tsunamiRunup){
    Session session = em.unwrap(Session.class);
    session.saveOrUpdate(tsunamiRunup);

  }

  @Override
  public void deleteRunup(Integer id){
    em.remove(em.getReference(TsunamiRunup.class, id));
  }

  @Override
  public TsunamiEvent getEventProxy(Integer id){
    try{
      return em.getReference(TsunamiEvent.class, id);
    }catch (Exception e){
      System.out.println("The exception is occurring here and it is: "+ e.toString());
      return new TsunamiEvent();
    }
  }

  @Override
  @SuppressWarnings("unchecked")
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
  @SuppressWarnings("unchecked")
  public List<TsunamiRunupView> getAllRunups(){
    return em.createQuery("FROM TSRUNUP_VSQP").getResultList();
  }
}
