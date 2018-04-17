package com.idb_backend.mvp.domain.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTsunamiRunup is a Querydsl query type for TsunamiRunup
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTsunamiRunup extends EntityPathBase<TsunamiRunup> {

    private static final long serialVersionUID = 1040471882L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTsunamiRunup tsunamiRunup = new QTsunamiRunup("tsunamiRunup");

    public final StringPath area = createString("area");

    public final NumberPath<Integer> arrDay = createNumber("arrDay", Integer.class);

    public final NumberPath<Integer> arrHour = createNumber("arrHour", Integer.class);

    public final NumberPath<Integer> arrMin = createNumber("arrMin", Integer.class);

    public final StringPath comments = createString("comments");

    public final StringPath country = createString("country");

    public final NumberPath<Integer> damageAmountOrder = createNumber("damageAmountOrder", Integer.class);

    public final NumberPath<Float> damageMillionsDollars = createNumber("damageMillionsDollars", Float.class);

    public final NumberPath<Integer> day = createNumber("day", Integer.class);

    public final NumberPath<Integer> deaths = createNumber("deaths", Integer.class);

    public final NumberPath<Integer> deathsAmountOrder = createNumber("deathsAmountOrder", Integer.class);

    public final StringPath doubtful = createString("doubtful");

    public final StringPath firstMotion = createString("firstMotion");

    public final ComparablePath<Character> flagArrvTravTimeChk = createComparable("flagArrvTravTimeChk", Character.class);

    public final StringPath flagEditNatwc = createString("flagEditNatwc");

    public final ComparablePath<Character> flagEffectsChk = createComparable("flagEffectsChk", Character.class);

    public final ComparablePath<Character> flagLocChk = createComparable("flagLocChk", Character.class);

    public final ComparablePath<Character> flagRunupChk = createComparable("flagRunupChk", Character.class);

    public final NumberPath<Integer> getMaxWaveArrMin = createNumber("getMaxWaveArrMin", Integer.class);

    public final NumberPath<Integer> housesAmountOrder = createNumber("housesAmountOrder", Integer.class);

    public final NumberPath<Integer> housesDamaged = createNumber("housesDamaged", Integer.class);

    public final NumberPath<Integer> housesDamagedAmountOrder = createNumber("housesDamagedAmountOrder", Integer.class);

    public final NumberPath<Integer> housesDestroyed = createNumber("housesDestroyed", Integer.class);

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final NumberPath<Integer> injuries = createNumber("injuries", Integer.class);

    public final NumberPath<Integer> injuriesAmountOrder = createNumber("injuriesAmountOrder", Integer.class);

    public final DateTimePath<java.util.Date> lastUpdate = createDateTime("lastUpdate", java.util.Date.class);

    public final NumberPath<Float> latitude = createNumber("latitude", Float.class);

    public final StringPath locationName = createString("locationName");

    public final NumberPath<Float> longitude = createNumber("longitude", Float.class);

    public final NumberPath<Integer> maxWaveArrDay = createNumber("maxWaveArrDay", Integer.class);

    public final NumberPath<Integer> maxWaveArrHour = createNumber("maxWaveArrHour", Integer.class);

    public final NumberPath<Integer> maxWaveNum = createNumber("maxWaveNum", Integer.class);

    public final NumberPath<Integer> missing = createNumber("missing", Integer.class);

    public final NumberPath<Integer> missingAmountOrder = createNumber("missingAmountOrder", Integer.class);

    public final NumberPath<Integer> month = createNumber("month", Integer.class);

    public final DateTimePath<java.util.Date> ngdcDate = createDateTime("ngdcDate", java.util.Date.class);

    public final NumberPath<Long> objectId = createNumber("objectId", Long.class);

    public final NumberPath<Float> period = createNumber("period", Float.class);

    public final NumberPath<Float> predTravHours = createNumber("predTravHours", Float.class);

    public final NumberPath<Integer> predTravMins = createNumber("predTravMins", Integer.class);

    public final StringPath previousState = createString("previousState");

    public final StringPath publish = createString("publish");

    public final NumberPath<Integer> regionCode = createNumber("regionCode", Integer.class);

    public final NumberPath<Float> runupHoriz = createNumber("runupHoriz", Float.class);

    public final NumberPath<Float> runupHt = createNumber("runupHt", Float.class);

    public final ComparablePath<com.vividsolutions.jts.geom.Geometry> shape = createComparable("shape", com.vividsolutions.jts.geom.Geometry.class);

    public final NumberPath<Integer> temporalAccuracy = createNumber("temporalAccuracy", Integer.class);

    public final StringPath tideNetwork = createString("tideNetwork");

    public final NumberPath<Integer> travHours = createNumber("travHours", Integer.class);

    public final NumberPath<Integer> travMins = createNumber("travMins", Integer.class);

    public final QTsunamiEvent tsunamiEvent;

    public final NumberPath<Integer> typeOfMeasurementId = createNumber("typeOfMeasurementId", Integer.class);

    public final NumberPath<Integer> waveArrHt = createNumber("waveArrHt", Integer.class);

    public final NumberPath<Integer> waveArrTravHoursCalc = createNumber("waveArrTravHoursCalc", Integer.class);

    public final NumberPath<Integer> waveArrTravMinsCalc = createNumber("waveArrTravMinsCalc", Integer.class);

    public final NumberPath<Integer> year = createNumber("year", Integer.class);

    public QTsunamiRunup(String variable) {
        this(TsunamiRunup.class, forVariable(variable), INITS);
    }

    public QTsunamiRunup(Path<? extends TsunamiRunup> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTsunamiRunup(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTsunamiRunup(PathMetadata metadata, PathInits inits) {
        this(TsunamiRunup.class, metadata, inits);
    }

    public QTsunamiRunup(Class<? extends TsunamiRunup> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.tsunamiEvent = inits.isInitialized("tsunamiEvent") ? new QTsunamiEvent(forProperty("tsunamiEvent")) : null;
    }

}

