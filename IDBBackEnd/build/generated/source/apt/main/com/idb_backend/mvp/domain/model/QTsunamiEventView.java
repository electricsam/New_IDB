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
public class QTsunamiEventView extends EntityPathBase<TsunamiEventView> {

    private static final long serialVersionUID = 1657943875L;

    public static final QTsunamiEventView tsunamiEventView = new QTsunamiEventView("tsunamiEventView");

    public final StringPath area = createString("area");

    public final NumberPath<Integer> causeCode = createNumber("causeCode", Integer.class);

    public final StringPath comments = createString("comments");

    public final StringPath country = createString("country");

    public final NumberPath<Integer> damageAmountOrder = createNumber("damageAmountOrder", Integer.class);

    public final NumberPath<Integer> damageAmountOrderTotal = createNumber("damageAmountOrderTotal", Integer.class);

    public final NumberPath<Float> damageMillionsDollars = createNumber("damageMillionsDollars", Float.class);

    public final NumberPath<Float> damageMillionsDollarsTotal = createNumber("damageMillionsDollarsTotal", Float.class);

    public final NumberPath<Integer> day = createNumber("day", Integer.class);

    public final NumberPath<Integer> deaths = createNumber("deaths", Integer.class);

    public final NumberPath<Integer> deathsAmountOrder = createNumber("deathsAmountOrder", Integer.class);

    public final NumberPath<Integer> deathsAmountOrderTotal = createNumber("deathsAmountOrderTotal", Integer.class);

    public final NumberPath<Integer> deathsTotal = createNumber("deathsTotal", Integer.class);

    public final NumberPath<Integer> eqDepth = createNumber("eqDepth", Integer.class);

    public final NumberPath<Float> eqMagMb = createNumber("eqMagMb", Float.class);

    public final NumberPath<Float> eqMagMfa = createNumber("eqMagMfa", Float.class);

    public final NumberPath<Float> eqMagMl = createNumber("eqMagMl", Float.class);

    public final NumberPath<Float> eqMagMs = createNumber("eqMagMs", Float.class);

    public final NumberPath<Float> eqMagMw = createNumber("eqMagMw", Float.class);

    public final NumberPath<Float> eqMagnitude = createNumber("eqMagnitude", Float.class);

    public final NumberPath<Float> eqMagUnk = createNumber("eqMagUnk", Float.class);

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

    public final NumberPath<Float> latitude = createNumber("latitude", Float.class);

    public final StringPath locationName = createString("locationName");

    public final NumberPath<Float> longitude = createNumber("longitude", Float.class);

    public final NumberPath<Integer> mapEqId = createNumber("mapEqId", Integer.class);

    public final NumberPath<Integer> mapSlideId = createNumber("mapSlideId", Integer.class);

    public final NumberPath<Integer> mapVolId = createNumber("mapVolId", Integer.class);

    public final NumberPath<Float> maxEventRunup = createNumber("maxEventRunup", Float.class);

    public final NumberPath<Integer> minute = createNumber("minute", Integer.class);

    public final NumberPath<Integer> missing = createNumber("missing", Integer.class);

    public final NumberPath<Integer> missingAmountOrder = createNumber("missingAmountOrder", Integer.class);

    public final NumberPath<Integer> missingAmountOrderTotal = createNumber("missingAmountOrderTotal", Integer.class);

    public final NumberPath<Integer> missingTotal = createNumber("missingTotal", Integer.class);

    public final NumberPath<Integer> month = createNumber("month", Integer.class);

    public final DateTimePath<java.util.Date> ngdcDate = createDateTime("ngdcDate", java.util.Date.class);

    public final NumberPath<Integer> numDeposits = createNumber("numDeposits", Integer.class);

    public final NumberPath<Integer> numRunup = createNumber("numRunup", Integer.class);

    public final NumberPath<Integer> numSlides = createNumber("numSlides", Integer.class);

    public final NumberPath<Long> objectId = createNumber("objectId", Long.class);

    public final NumberPath<Integer> regionCode = createNumber("regionCode", Integer.class);

    public final NumberPath<Float> second = createNumber("second", Float.class);

    public final ComparablePath<com.vividsolutions.jts.geom.Geometry> shape = createComparable("shape", com.vividsolutions.jts.geom.Geometry.class);

    public final StringPath slidesUrl = createString("slidesUrl");

    public final NumberPath<Integer> temporalAccuracy = createNumber("temporalAccuracy", Integer.class);

    public final StringPath tsDate = createString("tsDate");

    public final NumberPath<Float> tsIntensity = createNumber("tsIntensity", Float.class);

    public final NumberPath<Float> tsMtAbe = createNumber("tsMtAbe", Float.class);

    public final NumberPath<Float> tsMtIi = createNumber("tsMtIi", Float.class);

    public final ListPath<TsunamiRunupView, QTsunamiRunupView> tsunamiRunupViews = this.<TsunamiRunupView, QTsunamiRunupView>createList("tsunamiRunupViews", TsunamiRunupView.class, QTsunamiRunupView.class, PathInits.DIRECT2);

    public final NumberPath<Integer> warningStatusId = createNumber("warningStatusId", Integer.class);

    public final NumberPath<Integer> year = createNumber("year", Integer.class);

    public QTsunamiEventView(String variable) {
        super(TsunamiEventView.class, forVariable(variable));
    }

    public QTsunamiEventView(Path<? extends TsunamiEventView> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTsunamiEventView(PathMetadata metadata) {
        super(TsunamiEventView.class, metadata);
    }

}

