package com.idb_backend.mvp.domain.repository.impl;

import com.idb_backend.mvp.domain.model.User;
import com.idb_backend.mvp.domain.repository.UserRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
@Transactional
public class UserRepositoryImpl implements UserRepository {

    @PersistenceContext
    private EntityManager em;

    @Override
    public List<User> getAllUsers(){
        List<User> result = em.createQuery("From USERS").getResultList();
        //TODO: add error handling for .createQuery() in case it doesnt work
        return result;
    }

    @Override
    public void addUser(User user){
        //TODO: possibly add logic to check user here?
        //TODO: add error handling for .persist() method in case it doesn't work
        em.persist(user);
    }
}
