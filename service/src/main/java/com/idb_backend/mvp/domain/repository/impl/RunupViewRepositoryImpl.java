package com.idb_backend.mvp.domain.repository.impl;

//import com.idb_backend.mvp.domain.model.QTsunamiRunupView;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.RunupViewCustomRepository;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

public class RunupViewRepositoryImpl extends QuerydslRepositorySupport implements RunupViewCustomRepository {

  public RunupViewRepositoryImpl() {super(TsunamiRunupView.class);}

  @PersistenceContext
  EntityManager entityManager;

  @Override
  public List<RunupProjection> findRunupsByQuery(Predicate predicate){
    JPAQuery<TsunamiRunupView> query = new JPAQuery<>(entityManager);
    QTsunamiRunupView rv = QTsunamiRunupView.tsunamiRunupView;
    QTsunamiEventView ev = QTsunamiEventView.tsunamiEventView;

    List<RunupProjection> runups =  query
        .select(Projections.bean(
            RunupProjection.class, rv.id, ev.id.as("eventId"), ev.year, ev.month, ev.day, ev.hour, ev.minute, ev.second,
            ev.eventValidity, ev.eqMagnitude, rv.doubtful, rv.country, rv.area, rv.locationName,
            rv.latitude, rv.longitude, rv. distFromSource, rv.arrDay, rv.arrHour, rv.arrMin, rv.travHours, rv.travMins,
            rv.runupHt, rv.runupHoriz, rv.typeMeasurementId, rv.period, rv.firstMotion, rv.deaths, rv.deathsAmountOrder,
            rv.injuries, rv.injuriesAmountOrder, rv.damageMillionsDollars, rv.damageAmountOrder, rv.housesDestroyed,
            rv.housesAmountOrder, rv.housesDamaged, rv.housesDamagedAmountOrder, ev.causeCode)
        )
        .from(rv)
        .innerJoin(ev)
        .on(ev.id.eq(rv.tsunamiEventView.id))
        .where(predicate)
        .fetch();

    return runups;

  }


  @Override
  public List<RunupProjection> findRelatedRunupByTsunami(Integer tsunamiId){
    JPAQuery<TsunamiRunupView> query = new JPAQuery<>(entityManager);
    QTsunamiRunupView rv = QTsunamiRunupView.tsunamiRunupView;
    QTsunamiEventView ev = QTsunamiEventView.tsunamiEventView;

    List<RunupProjection> runups = query
        .select(Projections.bean(
            RunupProjection.class, rv.id, ev.id.as("eventId"), ev.year, ev.month, ev.day, ev.hour, ev.minute, ev.second,
            ev.eventValidity, ev.causeCode, ev.eqMagnitude, rv.doubtful, rv.country, rv.area, rv.locationName,
            rv.latitude, rv.longitude, rv. distFromSource, rv.arrDay, rv.arrHour, rv.arrMin, rv.travHours, rv.travMins,
            rv.runupHt, rv.runupHoriz, rv.typeMeasurementId, rv.period, rv.firstMotion, rv.deaths, rv.deathsAmountOrder,
            rv.injuries, rv.injuriesAmountOrder, rv.damageMillionsDollars, rv.damageAmountOrder, rv.housesDestroyed,
            rv.housesAmountOrder, rv.housesDamaged, rv.housesDamagedAmountOrder)
        )
        .from(rv)
        .innerJoin(ev)
        .on(ev.id.eq(rv.tsunamiEventView.id))
        .where(rv.tsunamiEventView.id.eq(tsunamiId))
        .fetch();

   return runups;

  }

  @Override

  public List<RunupProjection> findRelatedRunupByRef(Integer refId){
    JPAQuery<TsunamiRunupView> query = new JPAQuery<>(entityManager);
    QTsunamiRunupView rv = QTsunamiRunupView.tsunamiRunupView;
    QTsunamiEventView ev = QTsunamiEventView.tsunamiEventView;
    QTsrunupRefs rr = QTsrunupRefs.tsrunupRefs;
    List<RunupProjection> runups = query
        .select(Projections.bean(
            RunupProjection.class, rv.id, ev.id.as("eventId"), ev.year, ev.month, ev.day, ev.hour, ev.minute, ev.second,
            ev.eventValidity, ev.causeCode, ev.eqMagnitude, rv.doubtful, rv.country, rv.area, rv.locationName,
            rv.latitude, rv.longitude, rv. distFromSource, rv.arrDay, rv.arrHour, rv.arrMin, rv.travHours, rv.travMins,
            rv.runupHt, rv.runupHoriz, rv.typeMeasurementId, rv.period, rv.firstMotion, rv.deaths, rv.deathsAmountOrder,
            rv.injuries, rv.injuriesAmountOrder, rv.damageMillionsDollars, rv.damageAmountOrder, rv.housesDestroyed,
            rv.housesAmountOrder, rv.housesDamaged, rv.housesDamagedAmountOrder)
        )
        .from(rv)
        .innerJoin(ev)
        .on(ev.id.eq(rv.tsunamiEventView.id))
        .innerJoin(rr)
        .on(rr.tsunamiRunup.id.eq(rv.id))
        .where(rr.reference.id.eq(refId))
        .fetch();

    return runups;

  }
}
