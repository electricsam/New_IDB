package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.SignifTsqp;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

public interface EarthquakeRepository extends JpaRepository<SignifTsqp, String> {

}
