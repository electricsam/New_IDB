package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.QSignifTsqp;
import com.idb_backend.mvp.domain.model.SignifTsqp;
import com.idb_backend.mvp.domain.repository.ExtendedRepository;
import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.data.jpa.repository.support.JpaEntityInformation;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.io.Serializable;
import java.util.List;

public class ExtendedRepositoryImpl<T, ID extends Serializable> extends SimpleJpaRepository<T,ID> implements
    ExtendedRepository<T, ID> {

  private EntityManager entityManager;

  public ExtendedRepositoryImpl(JpaEntityInformation<T, ?> entityInformation, EntityManager entityManager) {
    super(entityInformation, entityManager);
    this.entityManager = entityManager;
  }

  @Transactional
  public List<SignifTsqp> findByAttributeContainsText(String str){
    JPAQuery<SignifTsqp> query = new JPAQuery<>(entityManager);
    QSignifTsqp eq = QSignifTsqp.signifTsqp;
    System.out.println("you are inside of the findByAttributeContainsText Function impl");
     return query.select(eq).where(eq.id.eq(22)).from(eq).fetch();
  }

}
