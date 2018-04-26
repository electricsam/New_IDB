//package com.idb_backend.mvp.domain.repository.impl;
//
//import com.idb_backend.mvp.domain.model.SignifTsqp;
//import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.support.JpaEntityInformation;
//import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
//
//import javax.persistence.EntityManager;
//
//public class EarthquakeRepositoryImpl extends SimpleJpaRepository<SignifTsqp, Integer>
//    implements EarthquakeRepository<SignifTsqp, Integer> {
//
//  public EarthquakeRepositoryImpl(JpaEntityInformation<SignifTsqp, Integer> entityInformation,
//                                  EntityManager entityManager) {
//        super(entityInformation, entityManager);
//        this.entityManager = entityManager;
//    }
//}
