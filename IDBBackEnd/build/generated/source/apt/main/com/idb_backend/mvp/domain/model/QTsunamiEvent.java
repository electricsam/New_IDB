package com.idb_backend.mvp.domain.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTsunamiEvent is a Querydsl query type for TsunamiEvent
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTsunamiEvent extends EntityPathBase<TsunamiEvent> {

    private static final long serialVersionUID = 1028487038L;

    public static final QTsunamiEvent tsunamiEvent = new QTsunamiEvent("tsunamiEvent");

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

    public final NumberPath<Float> eqMagUnk = createNumber("eqMagUnk", Float.class);

    public final NumberPath<Integer> eventValidity = createNumber("eventValidity", Integer.class);

    public final StringPath flagEditNatwc = createString("flagEditNatwc");

    public final ComparablePath<Character> flagEffectsChk = createComparable("flagEffectsChk", Character.class);

    public final ComparablePath<Character> flagLocTimeChk = createComparable("flagLocTimeChk", Character.class);

    public final ComparablePath<Character> flagMaxRunupChk = createComparable("flagMaxRunupChk", Character.class);

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

    public final NumberPath<Integer> injuries = createNumber("injuries", Integer.class);

    public final NumberPath<Integer> injuriesAmountOrder = createNumber("injuriesAmountOrder", Integer.class);

    public final NumberPath<Integer> injuriesAmountOrderTotal = createNumber("injuriesAmountOrderTotal", Integer.class);

    public final NumberPath<Integer> injuriesTotal = createNumber("injuriesTotal", Integer.class);

    public final DateTimePath<java.util.Date> lastUpdate = createDateTime("lastUpdate", java.util.Date.class);

    public final NumberPath<Float> latitude = createNumber("latitude", Float.class);

    public final StringPath locationName = createString("locationName");

    public final NumberPath<Float> longitude = createNumber("longitude", Float.class);

    public final NumberPath<Float> maxEventRunup = createNumber("maxEventRunup", Float.class);

    public final NumberPath<Integer> minute = createNumber("minute", Integer.class);

    public final NumberPath<Integer> missing = createNumber("missing", Integer.class);

    public final NumberPath<Integer> missingAmountOrder = createNumber("missingAmountOrder", Integer.class);

    public final NumberPath<Integer> missingAmountOrderTotal = createNumber("missingAmountOrderTotal", Integer.class);

    public final NumberPath<Integer> missingTotal = createNumber("missingTotal", Integer.class);

    public final NumberPath<Integer> month = createNumber("month", Integer.class);

    public final DateTimePath<java.util.Date> ngdcDate = createDateTime("ngdcDate", java.util.Date.class);

    public final NumberPath<Long> objectId = createNumber("objectId", Long.class);

    public final StringPath previousState = createString("previousState");

    public final StringPath publish = createString("publish");

    public final SetPath<Reference, QReference> references = this.<Reference, QReference>createSet("references", Reference.class, QReference.class, PathInits.DIRECT2);

    public final NumberPath<Integer> regionCode = createNumber("regionCode", Integer.class);

    public final NumberPath<Float> second = createNumber("second", Float.class);

    public final ComparablePath<com.vividsolutions.jts.geom.Geometry> shape = createComparable("shape", com.vividsolutions.jts.geom.Geometry.class);

    public final NumberPath<Integer> temporalAccuracy = createNumber("temporalAccuracy", Integer.class);

    public final NumberPath<Float> tsIntensity = createNumber("tsIntensity", Float.class);

    public final NumberPath<Float> tsMtAbe = createNumber("tsMtAbe", Float.class);

    public final NumberPath<Float> tsMtIi = createNumber("tsMtIi", Float.class);

    public final ListPath<TsunamiRunup, QTsunamiRunup> tsunamiRunups = this.<TsunamiRunup, QTsunamiRunup>createList("tsunamiRunups", TsunamiRunup.class, QTsunamiRunup.class, PathInits.DIRECT2);

    public final NumberPath<Integer> warningStatusId = createNumber("warningStatusId", Integer.class);

    public final NumberPath<Integer> year = createNumber("year", Integer.class);

    public QTsunamiEvent(String variable) {
        super(TsunamiEvent.class, forVariable(variable));
    }

    public QTsunamiEvent(Path<? extends TsunamiEvent> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTsunamiEvent(PathMetadata metadata) {
        super(TsunamiEvent.class, metadata);
    }

}

