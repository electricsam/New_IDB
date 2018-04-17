package com.idb_backend.mvp.domain.model;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QReference is a Querydsl query type for Reference
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QReference extends EntityPathBase<Reference> {

    private static final long serialVersionUID = 946302114L;

    public static final QReference reference = new QReference("reference");

    public final StringPath author = createString("author");

    public final StringPath citation = createString("citation");

    public final StringPath Comments = createString("Comments");

    public final NumberPath<Integer> have = createNumber("have", Integer.class);

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final DateTimePath<java.util.Date> lastUpdated = createDateTime("lastUpdated", java.util.Date.class);

    public final StringPath ok = createString("ok");

    public final NumberPath<Integer> oldId = createNumber("oldId", Integer.class);

    public final StringPath previousState = createString("previousState");

    public final StringPath publish = createString("publish");

    public final StringPath refNo = createString("refNo");

    public final SetPath<TsunamiEvent, QTsunamiEvent> tsunamiEvents = this.<TsunamiEvent, QTsunamiEvent>createSet("tsunamiEvents", TsunamiEvent.class, QTsunamiEvent.class, PathInits.DIRECT2);

    public final StringPath year = createString("year");

    public QReference(String variable) {
        super(Reference.class, forVariable(variable));
    }

    public QReference(Path<? extends Reference> path) {
        super(path.getType(), path.getMetadata());
    }

    public QReference(PathMetadata metadata) {
        super(Reference.class, metadata);
    }

}

