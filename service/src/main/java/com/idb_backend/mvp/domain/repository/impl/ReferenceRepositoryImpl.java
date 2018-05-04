package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.ReferenceCustomRepository;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class ReferenceRepositoryImpl extends QuerydslRepositorySupport implements ReferenceCustomRepository{

  public ReferenceRepositoryImpl() { super(Reference.class); }

  @PersistenceContext
  EntityManager entityManager;

  @Override
  public Iterable<Reference> findRelatedReferencesFromTsunami(Integer tsunamiId){
    JPAQuery<Reference> query = new JPAQuery<>(entityManager);
    QReference ref = QReference.reference;
    QTsunamiRefs tr = QTsunamiRefs.tsunamiRefs;

    return query
        .select(ref)
        .from(tr)
        .innerJoin(ref)
        .on(ref.id.eq(tr.reference.id))
        .where(tr.tsunamiEvent.id.eq(tsunamiId))
        .fetch();
  }

  @Override
  public Iterable<Reference> findRelatedReferencesFromVolcano(Integer volcanoId){
    JPAQuery<Reference> query = new JPAQuery<>(entityManager);
    QReference ref = QReference.reference;
    QVolcanoRefs vr = QVolcanoRefs.volcanoRefs;

    return query
        .select(ref)
        .from(vr)
        .innerJoin(ref)
        .on(ref.id.eq(vr.reference.id))
        .where(vr.volcanoEvent.hazEventId.eq(volcanoId))
        .fetch();
  }

  @Override
  public Iterable<Reference> findRelatedReferencesFromEarthquake(Integer earthquakeId){
    JPAQuery<Reference> query = new JPAQuery<>(entityManager);
    QReference ref = QReference.reference;
    QSignifRefs sr = QSignifRefs.signifRefs;

    return query
        .select(ref)
        .from(sr)
        .innerJoin(ref)
        .on(ref.id.eq(sr.reference.id))
        .where(sr.signifTsqp.id.eq(earthquakeId))
        .fetch();
  }

  @Override
  public Iterable<Reference> findRelatedReferencesFromRunup(Integer runupId){
    JPAQuery<Reference> query = new JPAQuery<>(entityManager);
    QReference ref = QReference.reference;
    QTsrunupRefs tr = QTsrunupRefs.tsrunupRefs;

    return query
        .select(ref)
        .from(tr)
        .innerJoin(ref)
        .on(ref.id.eq(tr.reference.id))
        .where(tr.tsunamiRunup.id.eq(runupId))
        .fetch();
  }


}
