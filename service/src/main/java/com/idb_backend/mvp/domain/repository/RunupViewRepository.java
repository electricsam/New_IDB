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

    bindings.bind(root.minTravHours).first((path, value) -> root.travHours.goe(value));

    bindings.bind(root.maxTravHours).first((path, value) -> root.travHours.loe(value));

    bindings.bind(root.minLatitude).first((path, value) -> root.latitude.goe(value));

    bindings.bind(root.maxLatitude).first((path, value) -> root.latitude.loe(value));

    bindings.bind(root.minLongitude).first((path, value) -> root.longitude.goe(value));

    bindings.bind(root.maxLongitude).first((path, value) -> root.longitude.loe(value));

    bindings.bind(root.minRunupHt).first((path, value) -> root.runupHt.goe(value));

    bindings.bind(root.maxRunupHt).first((path, value) -> root.runupHt.loe(value));

    bindings.bind(root.minRunupHoriz).first((path, value) -> root.runupHoriz.goe(value));

    bindings.bind(root.maxRunupHoriz).first((path, value) -> root.runupHoriz.loe(value));

    bindings.bind(root.locStart).first((path, value) -> root.locationName.startsWithIgnoreCase(value));

    bindings.bind(root.locEnd).first((path, value) -> root.locationName.endsWithIgnoreCase(value));

    bindings.bind(root.locIncludes).first((path, value) -> root.locationName.containsIgnoreCase(value));

    bindings.bind(root.locMatch).first((path, value) -> root.locationName.equalsIgnoreCase(value));

    bindings.bind(root.locNot).first((path, value) -> root.locationName.notEqualsIgnoreCase(value));

    bindings.bind(root.commentsStart).first((path, value) -> root.comments.startsWithIgnoreCase(value));

    bindings.bind(root.commentsEnd).first((path, value) -> root.comments.endsWithIgnoreCase(value));

    bindings.bind(root.commentsInclude).first((path, value) -> root.comments.containsIgnoreCase(value));

    bindings.bind(root.commentsMatch).first((path, value) -> root.comments.equalsIgnoreCase(value));

    bindings.bind(root.commentsNot).first((path, value) -> root.comments.notEqualsIgnoreCase(value));

    bindings.bind(root.minDeaths).first((path, value) -> root.deaths.goe(value));

    bindings.bind(root.maxDeaths).first((path, value) -> root.deaths.loe(value));

    bindings.bind(root.minDeathsAmountOrder).first((path, value) -> root.deathsAmountOrder.goe(value));

    bindings.bind(root.maxDeathsAmountOrder).first((path, value) -> root.deathsAmountOrder.loe(value));

    bindings.bind(root.minInjuries).first((path, value) -> root.injuries.goe(value));

    bindings.bind(root.maxInjuries).first((path, value) -> root.injuries.loe(value));

    bindings.bind(root.minInjuriesAmountOrder).first((path, value) -> root.injuriesAmountOrder.goe(value));

    bindings.bind(root.maxInjuriesAmountOrder).first((path, value) -> root.injuriesAmountOrder.loe(value));

    bindings.bind(root.minHousesDamaged).first((path, value) -> root.housesDamaged.goe(value));

    bindings.bind(root.maxHousesDamaged).first((path, value) -> root.housesDamaged.loe(value));

    bindings.bind(root.minHousesDamagedAmountOrder).first((path, value) -> root.housesDamagedAmountOrder.goe(value));

    bindings.bind(root.maxHousesDamagedAmountOrder).first((path, value) -> root.housesDamagedAmountOrder.loe(value));

    bindings.bind(root.minHousesDestroyed).first((path, value) -> root.housesDestroyed.goe(value));

    bindings.bind(root.maxHousesDestroyed).first((path, value) -> root.housesDestroyed.loe(value));

    bindings.bind(root.minHousesAmountOrder).first((path, value) -> root.housesAmountOrder.goe(value));

    bindings.bind(root.maxHousesAmountOrder).first((path, value) -> root.housesAmountOrder.loe(value));

    bindings.bind(root.minDamageMillionsDollars).first((path, value) -> root.damageMillionsDollars.goe(value));

    bindings.bind(root.maxDamageMillionsDollars).first((path, value) -> root.damageMillionsDollars.loe(value));

    bindings.bind(root.minDamageAmountOrder).first((path, value) -> root.damageAmountOrder.goe(value));

    bindings.bind(root.maxDamageAmountOrder).first((path, value) -> root.damageAmountOrder.loe(value));

  }
}
