package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.TsunamiEventCustomRepository;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.querydsl.jpa.impl.JPAQuery;
import org.hibernate.Session;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaQuery;
import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public class TsunamiEventRepositoryImpl extends QuerydslRepositorySupport implements TsunamiEventCustomRepository{

  public TsunamiEventRepositoryImpl() {super(TsunamiEvent.class);}

  @PersistenceContext
  EntityManager entityManager;

  @Override
  public Iterable<TsunamiEventView> findRelatedTsunamiFromEarthquake(Integer earthquakeId){
    JPAQuery<TsunamiEventView> query = new JPAQuery<>(entityManager);
    QTsunamiEventView tse = QTsunamiEventView.tsunamiEventView;
    QSignifToTsEvent ste = QSignifToTsEvent.signifToTsEvent;

    return query
        .select(tse)
        .from(ste)
        .innerJoin(tse)
        .on(tse.id.eq(ste.tsunamiEvent.id))
        .where(ste.signifTsqp.id.eq(earthquakeId))
        .fetch();
  }

  @Override
  public Iterable<TsunamiEventView> findRelatedTsunamiFromRef(Integer refId){
    JPAQuery<TsunamiEventView> query = new JPAQuery<>(entityManager);
    QTsunamiEventView tse = QTsunamiEventView.tsunamiEventView;
    QTsunamiRefs tr = QTsunamiRefs.tsunamiRefs;

    return query
        .select(tse)
        .from(tr)
        .innerJoin(tse)
        .on(tse.id.eq(tr.tsunamiEvent.id))
        .where(tr.reference.id.eq(refId))
        .fetch();
  }


  @Override
  public Iterable<TsunamiEventView> findRelatedTsunamiFromVolcano(Integer volId){
    JPAQuery<TsunamiEventView> query = new JPAQuery<>(entityManager);
    QTsunamiEventView tse = QTsunamiEventView.tsunamiEventView;
    QTseventAndVolEvent tv = QTseventAndVolEvent.tseventAndVolEvent;

    return query
        .select(tse)
        .from(tv)
        .innerJoin(tse)
        .on(tse.id.eq(tv.tsunamiEvent.id))
        .where(tv.volcanoEvent.hazEventId.eq(volId))
        .fetch();
  }

  @Override
  public Iterable<TsunamiEventView> findRelatedTsunamiFromRunup(Integer runupId){
    JPAQuery<TsunamiEventView> query = new JPAQuery<>(entityManager);
    QTsunamiEventView tse = QTsunamiEventView.tsunamiEventView;
    QTsunamiRunupView rv = QTsunamiRunupView.tsunamiRunupView;

    return query
        .select(tse)
        .from(rv)
        .innerJoin(tse)
        .on(tse.id.eq(rv.tsunamiEventView.id))
        .where(rv.id.eq(runupId))
        .fetch();
  }

}
