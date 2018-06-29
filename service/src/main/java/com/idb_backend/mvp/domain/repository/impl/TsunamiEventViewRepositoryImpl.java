package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.QTsunamiEventView;
import com.idb_backend.mvp.domain.model.QTsunamiRunupView;
import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.idb_backend.mvp.domain.repository.TsunamiEventViewCustomRepository;
import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

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

}
