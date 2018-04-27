package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.EarthquakeCustomRepository;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class EarthquakeRepositoryImpl extends QuerydslRepositorySupport implements EarthquakeCustomRepository{

  public EarthquakeRepositoryImpl(){
    super(SignifTsqp.class);
  }

  @PersistenceContext
  EntityManager entityManager;

  @Override
  public Iterable<SignifVsqp> findRelatedEarthquake(Integer tsunamiId){
    JPAQuery<SignifVsqp> query = new JPAQuery<>(entityManager);
    QSignifVsqp eq = QSignifVsqp.signifVsqp;
    QSignifToTsEvent ste = QSignifToTsEvent.signifToTsEvent;
    QTsunamiEvent tse = QTsunamiEvent.tsunamiEvent;
    return query.select(eq)
        .from(ste)
        .innerJoin(eq)
        .on(eq.id.eq(ste.signifTsqp.id))
        .innerJoin(tse)
        .on(tse.id.eq(ste.tsunamiEvent.id))
        .where(tse.id.eq(tsunamiId))
        .fetch();
  }
}
