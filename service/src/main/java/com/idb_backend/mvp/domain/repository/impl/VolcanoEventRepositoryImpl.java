package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.VolcanoEventCustomRepository;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

public class VolcanoEventRepositoryImpl extends QuerydslRepositorySupport implements VolcanoEventCustomRepository{

  public VolcanoEventRepositoryImpl(){ super(VolcanoEvent.class);}

  @PersistenceContext
  EntityManager entityManager;

  @Override
  public List<VolcanoEventProjection> findByQuery(Predicate predicate){
    JPAQuery<VolcanoEvent> query = new JPAQuery<>();
    QVolcanoEvent e = QVolcanoEvent.volcanoEvent;
    QVolLocTsqp l = QVolLocTsqp.volLocTsqp;

    return query.select(Projections.bean(VolcanoEventProjection.class, e.year, e.mo, e.day, e.assocTsu, e.assocEq,
        l.name, l.location, l.country, l.latitude, l.longitude, l.elevation, l.morphology, e.vei, e.agent,
        e.deathsAmountOrder, e.injuries, e.injuriesAmountOrder, e.damageMillionsDollars, e.damageAmountOrder,
        e.housesDestroyed, e.housesAmountOrder))
        .from(e)
        .innerJoin(l)
        .on(l.id.eq(e.volLocTsqp.id))
        .where(predicate)
        .fetch();
  }

  @Override
  public List<VolcanoEventProjection> findRelatedVolcanoesFromEarthquake(Integer earthquakeid){
    JPAQuery<VolcanoEvent> query = new JPAQuery<>();
    QVolcanoEvent e = QVolcanoEvent.volcanoEvent;
    QVolLocTsqp l = QVolLocTsqp.volLocTsqp;
    QSignifAndVolEvent  sv = QSignifAndVolEvent.signifAndVolEvent;

    return query.select(Projections.bean(VolcanoEventProjection.class, e.year, e.mo, e.day, e.assocTsu, e.assocEq,
        l.name, l.location, l.country, l.latitude, l.longitude, l.elevation, l.morphology, e.vei, e.agent,
        e.deathsAmountOrder, e.injuries, e.injuriesAmountOrder, e.damageMillionsDollars, e.damageAmountOrder,
        e.housesDestroyed, e.housesAmountOrder))
        .from(e)
        .innerJoin(l)
        .on(l.id.eq(e.volLocTsqp.id))
        .innerJoin(sv)
        .on(sv.volcanoEvent.hazEventId.eq(e.hazEventId))
        .where(sv.signifTsqp.id.eq(earthquakeid))
        .fetch();
  }


  @Override
  public List<VolcanoEventProjection> findRelatedVolcanoesFromRef(Integer refId){
    JPAQuery<VolcanoEvent> query = new JPAQuery<>();
    QVolcanoEvent e = QVolcanoEvent.volcanoEvent;
    QVolLocTsqp l = QVolLocTsqp.volLocTsqp;
    QVolcanoRefs vr = QVolcanoRefs.volcanoRefs;

    return query.select(Projections.bean(VolcanoEventProjection.class, e.year, e.mo, e.day, e.assocTsu, e.assocEq,
        l.name, l.location, l.country, l.latitude, l.longitude, l.elevation, l.morphology, e.vei, e.agent,
        e.deathsAmountOrder, e.injuries, e.injuriesAmountOrder, e.damageMillionsDollars, e.damageAmountOrder,
        e.housesDestroyed, e.housesAmountOrder))
        .from(e)
        .innerJoin(l)
        .on(l.id.eq(e.volLocTsqp.id))
        .innerJoin(vr)
        .on(vr.volcanoEvent.hazEventId.eq(e.hazEventId))
        .where(vr.reference.id.eq(refId))
        .fetch();
  }


  @Override
  public List<VolcanoEventProjection> findRelatedVolcanoesFromTsunami(Integer tsunamiId){
    JPAQuery<VolcanoEvent> query = new JPAQuery<>();
    QVolcanoEvent e = QVolcanoEvent.volcanoEvent;
    QVolLocTsqp l = QVolLocTsqp.volLocTsqp;
    QTseventAndVolEvent tv = QTseventAndVolEvent.tseventAndVolEvent;

    return query.select(Projections.bean(VolcanoEventProjection.class, e.year, e.mo, e.day, e.assocTsu, e.assocEq,
        l.name, l.location, l.country, l.latitude, l.longitude, l.elevation, l.morphology, e.vei, e.agent,
        e.deathsAmountOrder, e.injuries, e.injuriesAmountOrder, e.damageMillionsDollars, e.damageAmountOrder,
        e.housesDestroyed, e.housesAmountOrder))
        .from(e)
        .innerJoin(l)
        .on(l.id.eq(e.volLocTsqp.id))
        .innerJoin(tv)
        .on(tv.volcanoEvent.hazEventId.eq(e.hazEventId))
        .where(tv.tsunamiEvent.id.eq(tsunamiId))
        .fetch();
  }


}
