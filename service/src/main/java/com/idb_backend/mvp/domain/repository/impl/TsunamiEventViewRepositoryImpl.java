package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.TsunamiEventViewCustomRepository;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

public class TsunamiEventViewRepositoryImpl extends QuerydslRepositorySupport implements
    TsunamiEventViewCustomRepository{

  public TsunamiEventViewRepositoryImpl() {super(TsunamiEventView.class);}

  @PersistenceContext
  EntityManager entityManager;

  public Iterable<TsunamiEventView> findEventsByQuery(Predicate predicate){
    JPAQuery<TsunamiEventView> query = new JPAQuery<>(entityManager);
    QTsunamiEventView ts = QTsunamiEventView.tsunamiEventView;
    QTsunamiRunupView rnp = QTsunamiRunupView.tsunamiRunupView;

    /*
    * This section will be moved into a service and then pushed into the repo that you have here
    */

    return query
        .select(ts).distinct()
        .from(rnp)
        .innerJoin(ts)
        .on(ts.id.eq(rnp.tsunamiEventView.id))
        .where(predicate)
        .fetch();
  }

  public Iterable<TsunamiEventView> findEventsNoRunupParams(Predicate predicate){
    JPAQuery<TsunamiEventView> query = new JPAQuery<>(entityManager);
    QTsunamiEventView ts = QTsunamiEventView.tsunamiEventView;

    return query
        .select(ts)
        .distinct()
        .from(ts)
        .where(predicate)
        .fetch();
  }

  public Iterable<TsunamiEventMoreInfoProjection> findMoreInfo(Integer eventId){
    JPAQuery<TsunamiEventView> query = new JPAQuery<>(entityManager);
    QTsunamiEventView e = QTsunamiEventView.tsunamiEventView;

    Iterable<TsunamiEventMoreInfoProjection> result = query
        .select(Projections.bean(TsunamiEventMoreInfoProjection.class,
            e.id,
            e.year,
            e.month,
            e.day,
            e.hour,
            e.minute,
            e.second,
            e.eventValidity,
            e.causeCode,
            e.country,
            e.locationName,
            e.latitude,
            e.longitude,
            e.maxEventRunup,
            e.numRunup,
            e.tsMtAbe,
            e.tsMtIi,
            e.tsIntensity,
            e.deaths,
            e.deathsAmountOrder,
            e.injuries,
            e.injuriesAmountOrder,
            e.missing,
            e.missingAmountOrder,
            e.damageMillionsDollars,
            e.damageAmountOrder,
            e.housesDestroyed,
            e.housesAmountOrder,
            e.housesDamaged,
            e.housesDamagedAmountOrder,
            e.deathsTotal,
            e.deathsAmountOrderTotal,
            e.injuriesTotal,
            e.injuriesAmountOrderTotal,
            e.missingTotal,
            e.missingAmountOrderTotal,
            e.damageMillionsDollarsTotal,
            e.damageAmountOrderTotal,
            e.housesDestroyedTotal,
            e.housesAmountOrderTotal,
            e.housesDamagedTotal,
            e.housesDamAmountOrderTotal,
            e.comments
        ))
        .distinct()
        .from(e)
        .where(e.id.eq(eventId))
        .fetch();


    return result;
  }
}
