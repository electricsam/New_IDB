package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.QTsunamiEventView;
import com.idb_backend.mvp.domain.model.QTsunamiRunupView;
import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.idb_backend.mvp.domain.repository.TsunamiEventViewCustomRepository;
import com.querydsl.core.types.Predicate;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Map;

public class TsunamiEventViewRepositoryImpl extends QuerydslRepositorySupport implements
    TsunamiEventViewCustomRepository{

  public TsunamiEventViewRepositoryImpl() {super(TsunamiEventView.class);}

  @PersistenceContext
  EntityManager entityManager;

  public Iterable<TsunamiEventView> findEventsByQuery(Map<String, String> params, Predicate predicate){
    JPAQuery<TsunamiEventView> query = new JPAQuery<>(entityManager);
    QTsunamiEventView ts = QTsunamiEventView.tsunamiEventView;
    QTsunamiRunupView rnp = QTsunamiRunupView.tsunamiRunupView;

    return query.select(ts)
        .from(rnp)
        .innerJoin(ts)
        .on(ts.id.eq(rnp.tsunamiEventView.id))
        .where(predicate).fetch();
//        before you move on to here it would be helpful to have additional predicates for the rnp join logic
// worked up in a service and then passed in rather than make them on the fly here - let the service be ugly
//        .where()

  }
}
