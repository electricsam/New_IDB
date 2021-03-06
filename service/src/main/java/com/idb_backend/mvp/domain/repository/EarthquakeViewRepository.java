package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.QSignifVsqp;
import com.idb_backend.mvp.domain.model.SignifVsqp;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;


/**
 * Interface designed to generate Querydsl Predicates for SignifVsqp objects that are passed in at the controller level.
 * Each binding is performed through a lambda expression that declares a specific part of the overall Predicate in a
 * pre-defined way.  Each of the arguments passed in to bindings.bind() is a ref to a field in the SignifVsqp table.
 *
 */
public interface EarthquakeViewRepository extends
    JpaRepository<SignifVsqp, Integer>, QuerydslPredicateExecutor<SignifVsqp>, QuerydslBinderCustomizer<QSignifVsqp> {
  @Override
  default void customize(QuerydslBindings bindings, QSignifVsqp root) {

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

    bindings.bind(root.locStart).first((path, value) -> root.locationName.startsWithIgnoreCase(value));

    bindings.bind(root.locEnd).first((path, value) -> root.locationName.endsWithIgnoreCase(value));

    bindings.bind(root.locMatch).first((path, value) -> root.locationName.equalsIgnoreCase(value));

    bindings.bind(root.locIncludes).first((path, value) -> root.locationName.containsIgnoreCase(value));

    bindings.bind(root.locNot).first((path, value) -> root.locationName.notEqualsIgnoreCase(value));

    bindings.bind(root.commentsStart).first((path, value) -> root.comments.startsWithIgnoreCase(value));

    bindings.bind(root.commentsEnd).first((path, value) -> root.comments.endsWithIgnoreCase(value));

    bindings.bind(root.commentsMatch).first((path, value) -> root.comments.equalsIgnoreCase(value));

    bindings.bind(root.commentsInclude).first((path, value) -> root.comments.containsIgnoreCase(value));

    bindings.bind(root.commentsNot).first((path, value) -> root.comments.notEqualsIgnoreCase(value));

    bindings.bind(String.class).first((StringPath path, String value) -> path.equalsIgnoreCase(value));
  }
}
