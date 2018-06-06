package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QTsunamiRunupView;
import com.idb_backend.mvp.domain.model.TsunamiRunupView;
import com.querydsl.core.types.dsl.Expressions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface RunupViewRepository extends JpaRepository<TsunamiRunupView, Integer>,
    QuerydslPredicateExecutor<TsunamiRunupView>, QuerydslBinderCustomizer<QTsunamiRunupView>, RunupViewCustomRepository{

  @Override
  default void customize(QuerydslBindings bindings, QTsunamiRunupView root){

    bindings.bind(root.minDistFromSource).first((path, value) -> root.distFromSource.goe(value));

    bindings.bind(root.maxDistFromSource).first((path, value) -> root.distFromSource.loe(value));

    bindings.bind(root.minLatitude).first((path, value) -> root.latitude.goe(value));

    bindings.bind(root.maxLatitude).first((path, value) -> root.latitude.loe(value));

    bindings.bind(root.minLongitude).first((path, value) -> root.longitude.goe(value));

    bindings.bind(root.maxLongitude).first((path, value) -> root.longitude.loe(value));

    bindings.bind(root.minRunupHt).first((path, value) -> root.runupHt.goe(value));

    bindings.bind(root.maxRunupHt).first((path, value) -> root.runupHt.loe(value));

    bindings.bind(root.minDeaths).first((path, value) -> root.deaths.goe(value));

    bindings.bind(root.maxDeaths).first((path, value) -> root.deaths.loe(value));

    bindings.bind(root.minDamageMillionsDollars).first((path, value) -> root.damageMillionsDollars.goe(value));

    bindings.bind(root.maxDamageMillionsDollars).first((path, value) -> root.damageMillionsDollars.loe(value));

    bindings.bind(root.locStart).first((path, value) -> root.locationName.startsWithIgnoreCase(value));

    bindings.bind(root.locEnd).first((path, value) -> root.locationName.endsWithIgnoreCase(value));

    bindings.bind(root.locIncludes).first((path, value) -> root.locationName.containsIgnoreCase(value));

    bindings.bind(root.locMatch).first((path, value) -> root.locationName.equalsIgnoreCase(value));

    bindings.bind(root.locNot).first((path, value) -> {
      return root.locationName.notLike(Expressions.asString("%").concat(value.toUpperCase().concat("%")));
    });
    
  }
}
