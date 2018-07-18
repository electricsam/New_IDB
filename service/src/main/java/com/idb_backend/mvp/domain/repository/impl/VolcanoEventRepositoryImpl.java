package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.VolcanoEventCustomRepository;
import com.idb_backend.mvp.domain.repository.VolcanoEventRepository;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;

public class VolcanoEventRepositoryImpl extends QuerydslRepositorySupport implements VolcanoEventCustomRepository{

  public VolcanoEventRepositoryImpl(){ super(VolcanoEvent.class);}

  @PersistenceContext
  EntityManager entityManager;

  @Override
  public List<VolcanoEventMoreInfoProjection> findMoreInfo(Integer eventId){
    JPAQuery<VolcanoEvent> query = new JPAQuery<>(entityManager);
    QVolcanoEvent e = QVolcanoEvent.volcanoEvent;
    QVolLocTsqp l = QVolLocTsqp.volLocTsqp;

    List<VolcanoEventMoreInfoProjection> result = query
        .select(Projections.bean(
            VolcanoEventMoreInfoProjection.class,
            e.hazEventId,
            e.eventDate,
            e.startDate,
            e.endDate,
            e.vei,
            l.id,
            l.num,
            l.name,
            l.location,
            l.latitude,
            l.longitude,
            l.elevation,
            l.morphology,
            l.status,
            l.timeErupt,
            e.damageMillionsDollars,
            e.damageAmountOrder,
            e.deathsAmountOrder,
            e.injuries,
            e.injuriesAmountOrder,
            e.housesDestroyed,
            e.housesAmountOrder,
            e.missing,
            e.missingAmountOrder,
            e.deathsTotal,
            e.deathsAmountOrderTotal,
            e.injuriesTotal,
            e.injuriesAmountOrderTotal,
            e.damageMillionsDollarsTotal,
            e.damageAmountOrderTotal,
            e.housesDestroyedTotal,
            e.housesAmountOrderTotal,
            e.missingTotal,
            e.missingAmountOrderTotal
        ))
        .distinct()
        .from(e)
        .innerJoin(l)
        .on(l.id.eq(e.volLocTsqp.id))
        .where(e.hazEventId.eq(eventId))
        .fetch();

    return result;
  }

  @Override
  public List<VolcanoEventProjection> findByQuery(Predicate predicate){
    JPAQuery<VolcanoEvent> query = new JPAQuery<>(entityManager);
    QVolcanoEvent e = QVolcanoEvent.volcanoEvent;
    QVolLocTsqp l = QVolLocTsqp.volLocTsqp;

    List<VolcanoEventProjection> result = query
        .select(Projections.bean(
            VolcanoEventProjection.class,
            e.hazEventId,
            e.volLocTsqp.id.as("volId"),
            e.year,
            e.mo,
            e.day,
            e.assocTsu,
            e.assocEq,
            l.name,
            l.location,
            l.country,
            l.latitude,
            l.longitude,
            l.elevation,
            l.morphology,
            e.vei,
            e.agent,
            e.damageMillionsDollars,
            e.damageAmountOrder,
            e.deathsAmountOrder,
            e.injuries,
            e.injuriesAmountOrder,
            e.housesDestroyed,
            e.housesAmountOrder))
        .from(e)
        .innerJoin(l)
        .on(l.id.eq(e.volLocTsqp.id))
        .where(predicate)
        .fetch();

    return result;
  }

  @Override
  public List<VolcanoEventProjection> findRelatedVolcanoesFromEarthquake(Integer earthquakeid){
    JPAQuery<VolcanoEvent> query = new JPAQuery<>(entityManager);
    QVolcanoEvent e = QVolcanoEvent.volcanoEvent;
    QVolLocTsqp l = QVolLocTsqp.volLocTsqp;
    QSignifAndVolEvent  sv = QSignifAndVolEvent.signifAndVolEvent;

    return query.select(Projections.bean(VolcanoEventProjection.class, e.hazEventId, e.year, e.mo, e.day, e.assocTsu, e.assocEq,
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
    JPAQuery<VolcanoEvent> query = new JPAQuery<>(entityManager);
    QVolcanoEvent e = QVolcanoEvent.volcanoEvent;
    QVolLocTsqp l = QVolLocTsqp.volLocTsqp;
    QVolcanoRefs vr = QVolcanoRefs.volcanoRefs;

    return query.select(Projections.bean(VolcanoEventProjection.class, e.hazEventId, e.year, e.mo, e.day, e.assocTsu, e.assocEq,
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
    JPAQuery<VolcanoEvent> query = new JPAQuery<>(entityManager);
    QVolcanoEvent e = QVolcanoEvent.volcanoEvent;
    QVolLocTsqp l = QVolLocTsqp.volLocTsqp;
    QTseventAndVolEvent tv = QTseventAndVolEvent.tseventAndVolEvent;

    return query.select(Projections.bean(VolcanoEventProjection.class, e.hazEventId, e.year, e.mo, e.day, e.assocTsu, e.assocEq,
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
