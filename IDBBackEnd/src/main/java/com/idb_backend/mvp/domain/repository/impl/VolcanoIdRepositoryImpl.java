package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.VolcanoId;
import com.idb_backend.mvp.domain.repository.VolcanoIdRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public class VolcanoIdRepositoryImpl implements VolcanoIdRepository {

    @PersistenceContext
    private EntityManager em;

    @Override
    public List<VolcanoId> getAllVolcanoId(){
        List<VolcanoId> result = em.createQuery("FROM VOL_ID").getResultList();
        System.out.println(result);
        return result;
    }

}
