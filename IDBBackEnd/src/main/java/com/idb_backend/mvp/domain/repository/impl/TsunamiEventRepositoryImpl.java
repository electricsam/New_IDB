package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.idb_backend.mvp.domain.model.TsunamiEventViewNonPersist;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
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
      System.out.println(result);
      return result;
    }catch (Exception e){
      throw e;
    }
  }

  @Override
  public List<TsunamiEventViewNonPersist> getEventsByQuery(CriteriaQuery<TsunamiEventViewNonPersist> criteria) {
    return em.createQuery(criteria).getResultList();
  }

}
