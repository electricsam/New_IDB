package com.idb_backend.mvp.domain.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTsunamiRefs is a Querydsl query type for TsunamiRefs
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTsunamiRefs extends EntityPathBase<TsunamiRefs> {

    private static final long serialVersionUID = 587737308L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTsunamiRefs tsunamiRefs = new QTsunamiRefs("tsunamiRefs");

    public final DateTimePath<java.util.Date> lastUpdate = createDateTime("lastUpdate", java.util.Date.class);

    public final StringPath previousState = createString("previousState");

    public final StringPath publish = createString("publish");

    public final QTsunamiEvent tsEventId;

    public final QReference tsRefId;

    public QTsunamiRefs(String variable) {
        this(TsunamiRefs.class, forVariable(variable), INITS);
    }

    public QTsunamiRefs(Path<? extends TsunamiRefs> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTsunamiRefs(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTsunamiRefs(PathMetadata metadata, PathInits inits) {
        this(TsunamiRefs.class, metadata, inits);
    }

    public QTsunamiRefs(Class<? extends TsunamiRefs> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.tsEventId = inits.isInitialized("tsEventId") ? new QTsunamiEvent(forProperty("tsEventId")) : null;
        this.tsRefId = inits.isInitialized("tsRefId") ? new QReference(forProperty("tsRefId")) : null;
    }

}

