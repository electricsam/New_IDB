package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.VolLocTsqpProjection;
import com.querydsl.core.types.Predicate;

import java.util.List;
import java.util.Optional;

public interface VolLocTsqpCustomRepository {

  List<VolLocTsqpProjection> toog(Integer eventId);

  Iterable<VolLocTsqpProjection> boog(Predicate predicate);
}
