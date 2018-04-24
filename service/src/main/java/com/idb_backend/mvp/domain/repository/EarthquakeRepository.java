package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QSignifVsqp;
import com.idb_backend.mvp.domain.model.SignifVsqp;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;

public interface EarthquakeRepository extends
    JpaRepository<SignifVsqp, Integer>, QuerydslPredicateExecutor<SignifVsqp>, QuerydslBinderCustomizer<QSignifVsqp> {
  @Override
  default public void customize(QuerydslBindings bindings, QSignifVsqp root) {

    bindings.bind(String.class).first((StringPath path, String value) -> path.containsIgnoreCase(value));

    bindings.bind(root.minYear).first((path, value) -> root.year.goe(value));

    bindings.bind(root.maxYear).first((path, value) -> root.year.loe(value));

    bindings.bind(root.minLatitude).first((path, value) -> root.latitude.goe(value));

    bindings.bind(root.maxLatitude).first((path, value) -> root.latitude.loe(value));

    bindings.bind(root.minLongitude).first((path, value) -> root.longitude.goe(value));

    bindings.bind(root.maxLongitude).first((path, value) -> root.longitude.loe(value));

    bindings.bind(root.minEqDepth).first((path, value) -> root.eqDepth.goe(value));

    bindings.bind(root.maxEqDepth).first((path, value) -> root.eqDepth.loe(value));

    bindings.bind(root.minEqMagnitude).first((path, value) -> root.eqMagnitude.goe(value));

    bindings.bind(root.maxEqMagnitude).first((path, value) -> root.eqMagnitude.loe(value));

    bindings.bind(root.minIntensity).first((path, value) -> root.intensity.goe(value));

    bindings.bind(root.maxIntensity).first((path, value) -> root.intensity.loe(value));

    bindings.bind(root.minDamageMillionsDollars).first((path, value) -> root.damageMillionsDollars.goe(value));

    bindings.bind(root.maxDamageMillionsDollars).first((path, value) -> root.damageMillionsDollars.loe(value));

    bindings.bind(root.minDamageAmountOrder).first((path, value) -> root.damageAmountOrder.goe(value));

    bindings.bind(root.maxDamageAmountOrder).first((path, value) -> root.damageAmountOrder.loe(value));

    bindings.bind(root.minDeaths).first((path, value) -> root.deaths.goe(value));

    bindings.bind(root.maxDeaths).first((path, value) -> root.deaths.loe(value));

    bindings.bind(root.minDeathsAmountOrder).first((path, value) -> root.deathsAmountOrder.goe(value));

    bindings.bind(root.maxDeathsAmountOrder).first((path, value) -> root.deathsAmountOrder.loe(value));

    bindings.bind(root.minDeathsTotal).first((path, value) -> root.deathsTotal.goe(value));

    bindings.bind(root.maxDeathsTotal).first((path, value) -> root.deathsTotal.loe(value));

    bindings.bind(root.minDeathsAmountOrderTotal).first((path, value) -> root.deathsAmountOrderTotal.goe(value));

    bindings.bind(root.maxDeathsAmountOrderTotal).first((path, value) -> root.deathsAmountOrderTotal.loe(value));
  }
}
