package com.idb_backend.mvp.domain.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTsunamiRunupView is a Querydsl query type for TsunamiRunupView
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTsunamiRunupView extends EntityPathBase<TsunamiRunupView> {

    private static final long serialVersionUID = 1782337807L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTsunamiRunupView tsunamiRunupView = new QTsunamiRunupView("tsunamiRunupView");

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

    public final NumberPath<Integer> distFromSource = createNumber("distFromSource", Integer.class);

    public final StringPath doubtful = createString("doubtful");

    public final NumberPath<Integer> eventRegionCode = createNumber("eventRegionCode", Integer.class);

    public final StringPath firstMotion = createString("firstMotion");

    public final StringPath hasEvent = createString("hasEvent");

    public final StringPath hasRef = createString("hasRef");

    public final NumberPath<Integer> housesAmountOrder = createNumber("housesAmountOrder", Integer.class);

    public final NumberPath<Integer> housesDamaged = createNumber("housesDamaged", Integer.class);

    public final NumberPath<Integer> housesDamagedAmountOrder = createNumber("housesDamagedAmountOrder", Integer.class);

    public final NumberPath<Integer> housesDestroyed = createNumber("housesDestroyed", Integer.class);

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final NumberPath<Integer> idRef = createNumber("idRef", Integer.class);

    public final NumberPath<Integer> injuries = createNumber("injuries", Integer.class);

    public final NumberPath<Integer> injuriesAmountOrder = createNumber("injuriesAmountOrder", Integer.class);

    public final NumberPath<Float> latitude = createNumber("latitude", Float.class);

    public final StringPath locationName = createString("locationName");

    public final NumberPath<Float> longitude = createNumber("longitude", Float.class);

    public final NumberPath<Integer> month = createNumber("month", Integer.class);

    public final DateTimePath<java.util.Date> ngdcDate = createDateTime("ngdcDate", java.util.Date.class);

    public final NumberPath<Long> objectId = createNumber("objectId", Long.class);

    public final NumberPath<Float> period = createNumber("period", Float.class);

    public final NumberPath<Integer> predTravHours = createNumber("predTravHours", Integer.class);

    public final NumberPath<Integer> predTravMins = createNumber("predTravMins", Integer.class);

    public final NumberPath<Integer> regionCode = createNumber("regionCode", Integer.class);

    public final NumberPath<Float> runupHoriz = createNumber("runupHoriz", Float.class);

    public final NumberPath<Float> runupHt = createNumber("runupHt", Float.class);

    public final ComparablePath<com.vividsolutions.jts.geom.Geometry> shape = createComparable("shape", com.vividsolutions.jts.geom.Geometry.class);

    public final NumberPath<Integer> temporalAccuracy = createNumber("temporalAccuracy", Integer.class);

    public final NumberPath<Integer> travHours = createNumber("travHours", Integer.class);

    public final NumberPath<Integer> travMins = createNumber("travMins", Integer.class);

    public final StringPath tsDate = createString("tsDate");

    public final QTsunamiEventView tsunamiEventView;

    public final NumberPath<Integer> typeOfMeasurementId = createNumber("typeOfMeasurementId", Integer.class);

    public final NumberPath<Integer> year = createNumber("year", Integer.class);

    public QTsunamiRunupView(String variable) {
        this(TsunamiRunupView.class, forVariable(variable), INITS);
    }

    public QTsunamiRunupView(Path<? extends TsunamiRunupView> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTsunamiRunupView(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTsunamiRunupView(PathMetadata metadata, PathInits inits) {
        this(TsunamiRunupView.class, metadata, inits);
    }

    public QTsunamiRunupView(Class<? extends TsunamiRunupView> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.tsunamiEventView = inits.isInitialized("tsunamiEventView") ? new QTsunamiEventView(forProperty("tsunamiEventView")) : null;
    }

}

