package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QTsunamiEventView;
import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface TsunamiEventViewRepository extends
    JpaRepository<TsunamiEventView, Integer>, QuerydslPredicateExecutor<TsunamiEventView>,
    QuerydslBinderCustomizer<QTsunamiEventView>{

  @Override
  default void customize(QuerydslBindings bindings, QTsunamiEventView root) {

    bindings.bind(String.class).first((StringPath path, String value) -> path.containsIgnoreCase(value));

    bindings.bind(root.minYear).first((path, value) -> root.year.goe(value));

    bindings.bind(root.maxYear).first((path, value) -> root.year.loe(value));

    bindings.bind(root.minLatitude).first((path, value) -> root.latitude.goe(value));

    bindings.bind(root.maxLatitude).first((path, value) -> root.latitude.loe(value));

    bindings.bind(root.minLongitude).first((path, value) -> root.longitude.goe(value));

    bindings.bind(root.maxLongitude).first((path, value) -> root.longitude.loe(value));

    bindings.bind(root.minCauseCode).first((path, value) -> root.causeCode.goe(value));

    bindings.bind(root.maxCauseCode).first((path, value) -> root.causeCode.loe(value));

    bindings.bind(root.minEqMagnitude).first((path, value) -> root.eqMagnitude.goe(value));

    bindings.bind(root.maxEqMagnitude).first((path, value) -> root.eqMagnitude.loe(value));

    bindings.bind(root.minEventValidity).first((path, value) -> root.eventValidity.goe(value));

    bindings.bind(root.maxEventValidity).first((path, value) -> root.eventValidity.loe(value));

    bindings.bind(root.minNumRunup).first((path, value) -> root.numRunup.goe(value));

    bindings.bind(root.maxNumRunup).first((path, value) -> root.numRunup.loe(value));

    bindings.bind(root.minMaxEventRunup).first((path, value) -> root.maxEventRunup.goe(value));

    bindings.bind(root.maxMaxEventRunup).first((path, value) -> root.maxEventRunup.loe(value));

    bindings.bind(root.minDeaths).first((path, value) -> root.deaths.goe(value));

    bindings.bind(root.maxDeaths).first((path, value) -> root.deaths.loe(value));

    bindings.bind(root.minInjuries).first((path, value) -> root.injuries.goe(value));

    bindings.bind(root.maxInjuries).first((path, value) -> root.injuries.loe(value));

    bindings.bind(root.minHousesDestroyed).first((path, value) -> root.housesDestroyed.goe(value));

    bindings.bind(root.maxHousesDestroyed).first((path, value) -> root.housesDestroyed.loe(value));

    bindings.bind(root.minDeathsAmountOrder).first((path, value) -> root.deathsAmountOrder.goe(value));

    bindings.bind(root.maxDeathsAmountOrder).first((path, value) -> root.deathsAmountOrder.loe(value));

    bindings.bind(root.minInjuriesAmountOrder).first((path, value) -> root.injuriesAmountOrder.goe(value));

    bindings.bind(root.maxInjuriesAmountOrder).first((path, value) -> root.injuriesAmountOrder.loe(value));

    bindings.bind(root.minHousesAmountOrder).first((path, value) -> root.housesAmountOrder.goe(value));

    bindings.bind(root.maxHousesAmountOrder).first((path, value) -> root.housesAmountOrder.loe(value));

    bindings.bind(root.minDeathsTotal).first((path, value) -> root.deathsTotal.goe(value));

    bindings.bind(root.maxDeathsTotal).first((path, value) -> root.deathsTotal.loe(value));

    bindings.bind(root.minDeathsAmountOrderTotal).first((path, value) -> root.deathsAmountOrderTotal.goe(value));

    bindings.bind(root.maxDeathsAmountOrderTotal).first((path, value) -> root.deathsAmountOrderTotal.loe(value));

    bindings.bind(root.minDeathsAmountOrder).first((path, value) -> root.deathsAmountOrder.goe(value));

    bindings.bind(root.maxDeathsAmountOrder).first((path, value) -> root.deathsAmountOrder.loe(value));

    bindings.bind(root.minDamageMillionsDollars).first((path, value) -> root.damageMillionsDollars.goe(value));

    bindings.bind(root.maxDamageMillionsDollars).first((path, value) -> root.damageMillionsDollars.loe(value));

    bindings.bind(root.minDamageMillionsDollarsTotal).first((path, value) -> root.damageMillionsDollarsTotal.goe(value));

    bindings.bind(root.maxDamageMillionsDollarsTotal).first((path, value) -> root.damageMillionsDollarsTotal.loe(value));

    bindings.bind(root.minDamageAmountOrder).first((path, value) -> root.damageAmountOrder.goe(value));

    bindings.bind(root.maxDamageAmountOrder).first((path, value) -> root.damageAmountOrder.loe(value));

    bindings.bind(root.minDamageAmountOrderTotal).first((path, value) -> root.damageAmountOrderTotal.goe(value));

    bindings.bind(root.maxDamageAmountOrderTotal).first((path, value) -> root.damageAmountOrderTotal.loe(value));
  }
}
