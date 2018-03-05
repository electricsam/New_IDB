package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
@Transactional
public class TsunamiEventRepositoryImpl implements TsunamiEventRepository {


  //  @Autowired
//  EntityManagerFactory entityManagerFactory;

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
  public List<TsunamiEvent> getEventsByQuery(DetachedCriteria query) {


      Session session = em.unwrap(Session.class);

        List<TsunamiEvent> result = query
          .getExecutableCriteria(session)
          .list();
      return result;

    //works to return all - super slow though
//    CriteriaBuilder builder = em.getCriteriaBuilder();
//    CriteriaQuery<TsunamiEvent> criteria = builder.createQuery(TsunamiEvent.class);
//    criteria.select(criteria.from(TsunamiEvent.class));
//
//    List<TsunamiEvent> results = em.createQuery(criteria).getResultList();
//    return results;



//    try{
//      List<TsunamiEvent> result = em.createQuery("FROM TSEVENT_TSQP WHERE" + whereConditions).getResultList();
//      return result;
//    }catch (Exception e){
//      throw e;
//    }

  }

}
