package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.QVolLocTsqp;
import com.idb_backend.mvp.domain.model.QVolcanoEvent;
import com.idb_backend.mvp.domain.model.VolLocTsqp;
import com.idb_backend.mvp.domain.model.VolLocTsqpProjection;
import com.idb_backend.mvp.domain.repository.VolLocTsqpCustomRepository;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

public class VolLocTsqpRepositoryImpl extends QuerydslRepositorySupport implements VolLocTsqpCustomRepository {

  public VolLocTsqpRepositoryImpl() { super(VolLocTsqp.class);}

  @PersistenceContext
  EntityManager entityManager;

  @Override
  public Iterable<VolLocTsqpProjection> findByQuery(Predicate predicate){
    JPAQuery<VolLocTsqp> query = new JPAQuery<>(entityManager);
    QVolLocTsqp vl = QVolLocTsqp.volLocTsqp;

    return query.select(Projections.bean(VolLocTsqpProjection.class,
        vl.id,
        vl.name,
        vl.country,
        vl.latitude,
        vl.longitude,
        vl.elevation,
        vl.morphology,
        vl.status,
        vl.timeErupt)
    )
      .from(vl)
      .where(predicate)
      .fetch();
  }

  @Override
  public List<VolLocTsqpProjection> findRelatedVolcanoLocFromEvent(Integer eventId) {
    JPAQuery<VolLocTsqp> query = new JPAQuery<>(entityManager);
    QVolLocTsqp vl = QVolLocTsqp.volLocTsqp;
    QVolcanoEvent ve = QVolcanoEvent.volcanoEvent;

    List<VolLocTsqpProjection> result = query
        .select(Projections.bean(VolLocTsqpProjection.class,
          vl.id,
          vl.name,
          vl.country,
          vl.latitude,
          vl.longitude,
          vl.elevation,
          vl.morphology,
          vl.status,
          vl.timeErupt))
        .from(ve)
        .innerJoin(vl)
        .on(ve.volLocTsqp.id.eq(vl.id))
        .where(ve.hazEventId.eq(eventId))
        .fetch();

    return result;
  }
}
