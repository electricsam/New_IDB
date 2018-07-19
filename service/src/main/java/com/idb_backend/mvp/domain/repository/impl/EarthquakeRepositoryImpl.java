package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.EarthquakeCustomRepository;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

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

  @Override
  public  List<EarthquakeMoreInfoProjection> findMoreInfo(Integer id){
    JPAQuery<SignifTsqp> query = new JPAQuery<>(entityManager);
    QSignifTsqp eq = QSignifTsqp.signifTsqp;

    List<EarthquakeMoreInfoProjection> result = query
        .select(Projections.bean(EarthquakeMoreInfoProjection.class,
            eq.id,
            eq.year,
            eq.month,
            eq.day,
            eq.hour,
            eq.minute,
            eq.second,
            eq.locationName,
            eq.latitude,
            eq.longitude,
            eq.eqDepth,
            eq.eqMagMw,
            eq.eqMagMs,
            eq.eqMagMb,
            eq.eqMagMl,
            eq.eqMagMfa,
            eq.eqMagUnk,
            eq.intensity,
            eq.deaths,
            eq.deathsAmountOrder,
            eq.missing,
            eq.missingAmountOrder,
            eq.injuries,
            eq.injuriesAmountOrder,
            eq.damageMillionsDollars,
            eq.damageAmountOrder,
            eq.housesDestroyed,
            eq.housesAmountOrder,
            eq.housesDamaged,
            eq.housesDamagedTotal,
            eq.deathsTotal,
            eq.deathsAmountOrderTotal,
            eq.injuriesTotal,
            eq.injuriesAmountOrderTotal,
            eq.missingTotal,
            eq.missingAmountOrderTotal,
            eq.damageMillionsDollarsTotal,
            eq.damageAmountOrderTotal,
            eq.housesDestroyedTotal,
            eq.housesAmountOrderTotal,
            eq.housesDamagedAmountOrder,
            eq.housesDamAmountOrderTotal)
        ).distinct().from(eq)
        .where(eq.id.eq(id))
        .fetch();

    return result;
  }

}
