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
  public Iterable<SignifVsqp> findRelatedEarthquakeFromTsunami(Integer tsunamiId){
    JPAQuery<SignifVsqp> query = new JPAQuery<>(entityManager);
    QSignifVsqp eq = QSignifVsqp.signifVsqp;
    QSignifToTsEvent ste = QSignifToTsEvent.signifToTsEvent;
    return query
        .select(eq)
        .from(ste)
        .innerJoin(eq)
        .on(eq.id.eq(ste.signifTsqp.id))
        .where(ste.tsunamiEvent.id.eq(tsunamiId))
        .fetch();
  }

  @Override
  public Iterable<SignifVsqp> findRelatedEarthquakeFromRef(Integer refId){
    JPAQuery<SignifVsqp> query = new JPAQuery<>(entityManager);
    QSignifVsqp eq = QSignifVsqp.signifVsqp;
    QSignifRefs sr = QSignifRefs.signifRefs;

    return query
        .select(eq)
        .from(sr)
        .innerJoin(eq)
        .on(eq.id.eq(sr.signifTsqp.id))
        .where(sr.reference.id.eq(refId))
        .fetch();
  }

  @Override
  public Iterable<SignifVsqp> findRelatedEarthquakeFromVolcano(Integer volId){
    JPAQuery<SignifVsqp> query = new JPAQuery<>(entityManager);
    QSignifVsqp eq = QSignifVsqp.signifVsqp;
    QSignifAndVolEvent sv = QSignifAndVolEvent.signifAndVolEvent;

    return query
        .select(eq)
        .from(sv)
        .innerJoin(eq)
        .on(eq.id.eq(sv.signifTsqp.id))
        .where(sv.volcanoEvent.hazEventId.eq(volId))
        .fetch();
  }

}
