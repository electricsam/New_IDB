//package com.idb_backend.mvp.service.impl;
//
//import com.idb_backend.mvp.domain.model.QSignifTsqp;
//import com.querydsl.core.types.Predicate;
//import org.springframework.stereotype.Service;
//import org.springframework.util.MultiValueMap;
//
//@Service
//public class EarthquakeService {
//
//
//  public Predicate genPreds(MultiValueMap<String, String> map){
//    QSignifTsqp eq = QSignifTsqp.signifTsqp;
//    String year = map.getFirst("minyear");
//    Predicate predicate = eq.year.goe(year);
//    return predicate;
//  }
//
//}
