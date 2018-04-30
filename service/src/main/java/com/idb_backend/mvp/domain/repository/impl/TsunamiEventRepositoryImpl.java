package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.TsunamiEventCustomRepository;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import org.hibernate.Session;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaQuery;
import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public class TsunamiEventRepositoryImpl extends QuerydslRepositorySupport implements TsunamiEventCustomRepository{

  public TsunamiEventRepositoryImpl() {super(TsunamiEvent.class);}

  @PersistenceContext
  EntityManager entityManager;

}
