package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.SignifTsqp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EarthquakeRepository extends JpaRepository<SignifTsqp, String> {

}
