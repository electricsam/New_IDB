package com.idb_backend.mvp.domain.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTsunamiEventView is a Querydsl query type for TsunamiEventView
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class RunupDTO extends EntityPathBase<TsunamiEventView> {

  private static final long serialVersionUID = 1657943875L;

  public static final RunupDTO tsunamiEventView = new RunupDTO("tsunamiEventView");



  public final StringPath area = createString("area");

  public final NumberPath<Integer> causeCode = createNumber("causeCode", Integer.class);

  public final StringPath comments = createString("comments");

  public final StringPath country = createString("country");

  public final NumberPath<Integer> damageAmountOrder = createNumber("damageAmountOrder", Integer.class);

  public final NumberPath<Integer> damageAmountOrderTotal = createNumber("damageAmountOrderTotal", Integer.class);

  public final NumberPath<Double> damageMillionsDollars = createNumber("damageMillionsDollars", Double.class);

  public final NumberPath<Double> damageMillionsDollarsTotal = createNumber("damageMillionsDollarsTotal", Double.class);

  public final NumberPath<Integer> day = createNumber("day", Integer.class);

  public final NumberPath<Integer> deaths = createNumber("deaths", Integer.class);

  public final NumberPath<Integer> deathsAmountOrder = createNumber("deathsAmountOrder", Integer.class);

  public final NumberPath<Integer> deathsAmountOrderTotal = createNumber("deathsAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> deathsTotal = createNumber("deathsTotal", Integer.class);

  public final NumberPath<Integer> eqDepth = createNumber("eqDepth", Integer.class);

  public final NumberPath<Double> eqMagMb = createNumber("eqMagMb", Double.class);

  public final NumberPath<Double> eqMagMfa = createNumber("eqMagMfa", Double.class);

  public final NumberPath<Double> eqMagMl = createNumber("eqMagMl", Double.class);

  public final NumberPath<Double> eqMagMs = createNumber("eqMagMs", Double.class);

  public final NumberPath<Double> eqMagMw = createNumber("eqMagMw", Double.class);

  public final NumberPath<Double> eqMagnitude = createNumber("eqMagnitude", Double.class);

  public final NumberPath<Double> eqMagUnk = createNumber("eqMagUnk", Double.class);

  public final NumberPath<Integer> eventValidity = createNumber("eventValidity", Integer.class);

  public final StringPath hasRef = createString("hasRef");

  public final NumberPath<Integer> hour = createNumber("hour", Integer.class);

  public final NumberPath<Integer> housesAmountOrder = createNumber("housesAmountOrder", Integer.class);

  public final NumberPath<Integer> housesAmountOrderTotal = createNumber("housesAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> housesDamaged = createNumber("housesDamaged", Integer.class);

  public final NumberPath<Integer> housesDamagedAmountOrder = createNumber("housesDamagedAmountOrder", Integer.class);

  public final NumberPath<Integer> housesDamagedTotal = createNumber("housesDamagedTotal", Integer.class);

  public final NumberPath<Integer> housesDamAmountOrderTotal = createNumber("housesDamAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> housesDestroyed = createNumber("housesDestroyed", Integer.class);

  public final NumberPath<Integer> housesDestroyedTotal = createNumber("housesDestroyedTotal", Integer.class);

  public final NumberPath<Integer> id = createNumber("id", Integer.class);

  public final NumberPath<Integer> idRef = createNumber("idRef", Integer.class);

  public final NumberPath<Integer> idRunup = createNumber("idRunup", Integer.class);

  public final NumberPath<Integer> injuries = createNumber("injuries", Integer.class);

  public final NumberPath<Integer> injuriesAmountOrder = createNumber("injuriesAmountOrder", Integer.class);

  public final NumberPath<Integer> injuriesAmountOrderTotal = createNumber("injuriesAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> injuriesTotal = createNumber("injuriesTotal", Integer.class);

  public final NumberPath<Double> latitude = createNumber("latitude", Double.class);

  public final StringPath locationName = createString("locationName");

  public final NumberPath<Double> longitude = createNumber("longitude", Double.class);

  public final NumberPath<Integer> mapEqId = createNumber("mapEqId", Integer.class);

  public final NumberPath<Integer> mapSlideId = createNumber("mapSlideId", Integer.class);

  public final NumberPath<Integer> mapVolId = createNumber("mapVolId", Integer.class);

  public final NumberPath<Integer> maxCauseCode = createNumber("maxCauseCode", Integer.class);

  public final NumberPath<Integer> maxDamageAmountOrder = createNumber("maxDamageAmountOrder", Integer.class);

  public final NumberPath<Integer> maxDamageAmountOrderTotal = createNumber("maxDamageAmountOrderTotal", Integer.class);

  public final NumberPath<Double> maxDamageMillionsDollars = createNumber("maxDamageMillionsDollars", Double.class);

  public final NumberPath<Double> maxDamageMillionsDollarsTotal = createNumber("maxDamageMillionsDollarsTotal", Double.class);

  public final NumberPath<Integer> maxDeaths = createNumber("maxDeaths", Integer.class);

  public final NumberPath<Integer> maxDeathsAmountOrder = createNumber("maxDeathsAmountOrder", Integer.class);

  public final NumberPath<Integer> maxDeathsAmountOrderTotal = createNumber("maxDeathsAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> maxDeathsTotal = createNumber("maxDeathsTotal", Integer.class);

  public final NumberPath<Double> maxEqMagnitude = createNumber("maxEqMagnitude", Double.class);

  public final NumberPath<Double> maxEventRunup = createNumber("maxEventRunup", Double.class);

  public final NumberPath<Integer> maxEventValidity = createNumber("maxEventValidity", Integer.class);

  public final NumberPath<Integer> maxHousesAmountOrder = createNumber("maxHousesAmountOrder", Integer.class);

  public final NumberPath<Integer> maxhousesAmountOrderTotal = createNumber("maxhousesAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> maxHousesDamaged = createNumber("maxHousesDamaged", Integer.class);

  public final NumberPath<Integer> maxHousesDamagedAmountOrder = createNumber("maxHousesDamagedAmountOrder", Integer.class);

  public final NumberPath<Integer> maxHousesDamagedTotal = createNumber("maxHousesDamagedTotal", Integer.class);

  public final NumberPath<Integer> maxHousesDamAmountOrderTotal = createNumber("maxHousesDamAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> maxHousesDestroyed = createNumber("maxHousesDestroyed", Integer.class);

  public final NumberPath<Integer> maxhousesDestroyedTotal = createNumber("maxhousesDestroyedTotal", Integer.class);

  public final NumberPath<Integer> maxInjuries = createNumber("maxInjuries", Integer.class);

  public final NumberPath<Integer> maxInjuriesAmountOrder = createNumber("maxInjuriesAmountOrder", Integer.class);

  public final NumberPath<Integer> maxInjuriesAmountOrderTotal = createNumber("maxInjuriesAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> maxInjuriesTotal = createNumber("maxInjuriesTotal", Integer.class);

  public final NumberPath<Double> maxLatitude = createNumber("maxLatitude", Double.class);

  public final NumberPath<Double> maxLongitude = createNumber("maxLongitude", Double.class);

  public final NumberPath<Double> maxMaxEventRunup = createNumber("maxMaxEventRunup", Double.class);

  public final NumberPath<Integer> maxMissing = createNumber("maxMissing", Integer.class);

  public final NumberPath<Integer> maxMissingAmountOrder = createNumber("maxMissingAmountOrder", Integer.class);

  public final NumberPath<Integer> maxMissingAmountOrderTotal = createNumber("maxMissingAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> maxMissingTotal = createNumber("maxMissingTotal", Integer.class);

  public final NumberPath<Integer> maxNumRunup = createNumber("maxNumRunup", Integer.class);

  public final NumberPath<Integer> maxYear = createNumber("maxYear", Integer.class);

  public final NumberPath<Integer> minCauseCode = createNumber("minCauseCode", Integer.class);

  public final NumberPath<Integer> minDamageAmountOrder = createNumber("minDamageAmountOrder", Integer.class);

  public final NumberPath<Integer> minDamageAmountOrderTotal = createNumber("minDamageAmountOrderTotal", Integer.class);

  public final NumberPath<Double> minDamageMillionsDollars = createNumber("minDamageMillionsDollars", Double.class);

  public final NumberPath<Double> minDamageMillionsDollarsTotal = createNumber("minDamageMillionsDollarsTotal", Double.class);

  public final NumberPath<Integer> minDeaths = createNumber("minDeaths", Integer.class);

  public final NumberPath<Integer> minDeathsAmountOrder = createNumber("minDeathsAmountOrder", Integer.class);

  public final NumberPath<Integer> minDeathsAmountOrderTotal = createNumber("minDeathsAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> minDeathsTotal = createNumber("minDeathsTotal", Integer.class);

  public final NumberPath<Double> minEqMagnitude = createNumber("minEqMagnitude", Double.class);

  public final NumberPath<Integer> minEventValidity = createNumber("minEventValidity", Integer.class);

  public final NumberPath<Integer> minHousesAmountOrder = createNumber("minHousesAmountOrder", Integer.class);

  public final NumberPath<Integer> minhousesAmountOrderTotal = createNumber("minhousesAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> minHousesDamaged = createNumber("minHousesDamaged", Integer.class);

  public final NumberPath<Integer> minHousesDamagedAmountOrder = createNumber("minHousesDamagedAmountOrder", Integer.class);

  public final NumberPath<Integer> minHousesDamagedTotal = createNumber("minHousesDamagedTotal", Integer.class);

  public final NumberPath<Integer> minHousesDamAmountOrderTotal = createNumber("minHousesDamAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> minHousesDestroyed = createNumber("minHousesDestroyed", Integer.class);

  public final NumberPath<Integer> minhousesDestroyedTotal = createNumber("minhousesDestroyedTotal", Integer.class);

  public final NumberPath<Integer> minInjuries = createNumber("minInjuries", Integer.class);

  public final NumberPath<Integer> minInjuriesAmountOrder = createNumber("minInjuriesAmountOrder", Integer.class);

  public final NumberPath<Integer> minInjuriesAmountOrderTotal = createNumber("minInjuriesAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> minInjuriesTotal = createNumber("minInjuriesTotal", Integer.class);

  public final NumberPath<Double> minLatitude = createNumber("minLatitude", Double.class);

  public final NumberPath<Double> minLongitude = createNumber("minLongitude", Double.class);

  public final NumberPath<Double> minMaxEventRunup = createNumber("minMaxEventRunup", Double.class);

  public final NumberPath<Integer> minMissing = createNumber("minMissing", Integer.class);

  public final NumberPath<Integer> minMissingAmountOrder = createNumber("minMissingAmountOrder", Integer.class);

  public final NumberPath<Integer> minMissingAmountOrderTotal = createNumber("minMissingAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> minMissingTotal = createNumber("minMissingTotal", Integer.class);

  public final NumberPath<Integer> minNumRunup = createNumber("minNumRunup", Integer.class);

  public final NumberPath<Integer> minute = createNumber("minute", Integer.class);

  public final NumberPath<Integer> minYear = createNumber("minYear", Integer.class);

  public final NumberPath<Integer> missing = createNumber("missing", Integer.class);

  public final NumberPath<Integer> missingAmountOrder = createNumber("missingAmountOrder", Integer.class);

  public final NumberPath<Integer> missingAmountOrderTotal = createNumber("missingAmountOrderTotal", Integer.class);

  public final NumberPath<Integer> missingTotal = createNumber("missingTotal", Integer.class);

  public final NumberPath<Integer> month = createNumber("month", Integer.class);

  public final DateTimePath<java.util.Date> ngdcDate = createDateTime("ngdcDate", java.util.Date.class);

  public final NumberPath<Integer> numDeposits = createNumber("numDeposits", Integer.class);

  public final NumberPath<Integer> numRunup = createNumber("numRunup", Integer.class);

  public final NumberPath<Integer> numSlides = createNumber("numSlides", Integer.class);

  public final NumberPath<java.math.BigInteger> objectid = createNumber("objectid", java.math.BigInteger.class);

  public final NumberPath<Integer> regionCode = createNumber("regionCode", Integer.class);

  public final NumberPath<Double> second = createNumber("second", Double.class);

  public final StringPath slidesUrl = createString("slidesUrl");

  public final NumberPath<Integer> temporalAccuracy = createNumber("temporalAccuracy", Integer.class);

  public final StringPath tsdate = createString("tsdate");

  public final NumberPath<java.math.BigDecimal> tsIntensity = createNumber("tsIntensity", java.math.BigDecimal.class);

  public final NumberPath<java.math.BigDecimal> tsMtAbe = createNumber("tsMtAbe", java.math.BigDecimal.class);

  public final NumberPath<java.math.BigDecimal> tsMtIi = createNumber("tsMtIi", java.math.BigDecimal.class);

//  public final SetPath<TsunamiRunupView, RunupDTO> tsunamiRunupViews = this.<TsunamiRunupView, RunupDTO>createSet("tsunamiRunupViews", TsunamiRunupView.class, QTsunamiRunupView.class, PathInits.DIRECT2);

  public final NumberPath<Integer> warningStatusId = createNumber("warningStatusId", Integer.class);

  public final NumberPath<Integer> year = createNumber("year", Integer.class);

  public RunupDTO(String variable) {
    super(TsunamiEventView.class, forVariable(variable));
  }

  public RunupDTO(Path<? extends TsunamiEventView> path) {
    super(path.getType(), path.getMetadata());
  }

  public RunupDTO(PathMetadata metadata) {
    super(TsunamiEventView.class, metadata);
  }

}

