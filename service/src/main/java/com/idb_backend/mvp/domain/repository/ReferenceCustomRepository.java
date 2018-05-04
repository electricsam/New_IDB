package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.Reference;

public interface ReferenceCustomRepository {

 Iterable<Reference> findRelatedReferencesFromTsunami(Integer tsunamiId);

 Iterable<Reference> findRelatedReferencesFromVolcano(Integer volcanoId);

 Iterable<Reference> findRelatedReferencesFromEarthquake(Integer earthquakeId);

 Iterable<Reference> findRelatedReferencesFromRunup(Integer runupId);

}
