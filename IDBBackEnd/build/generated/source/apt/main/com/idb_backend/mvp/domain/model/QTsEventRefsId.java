package com.idb_backend.mvp.domain.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTsEventRefsId is a Querydsl query type for TsEventRefsId
 */
@Generated("com.querydsl.codegen.EmbeddableSerializer")
public class QTsEventRefsId extends BeanPath<TsEventRefsId> {

    private static final long serialVersionUID = 937616525L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QTsEventRefsId tsEventRefsId = new QTsEventRefsId("tsEventRefsId");

    public final QReference reference;

    public final QTsunamiEvent tsunamiEvent;

    public QTsEventRefsId(String variable) {
        this(TsEventRefsId.class, forVariable(variable), INITS);
    }

    public QTsEventRefsId(Path<? extends TsEventRefsId> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QTsEventRefsId(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QTsEventRefsId(PathMetadata metadata, PathInits inits) {
        this(TsEventRefsId.class, metadata, inits);
    }

    public QTsEventRefsId(Class<? extends TsEventRefsId> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.reference = inits.isInitialized("reference") ? new QReference(forProperty("reference")) : null;
        this.tsunamiEvent = inits.isInitialized("tsunamiEvent") ? new QTsunamiEvent(forProperty("tsunamiEvent")) : null;
    }

}

