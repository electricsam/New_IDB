package com.idb_backend.mvp.service.impl;

import com.idb_backend.mvp.domain.model.User;
import com.idb_backend.mvp.domain.repository.UserRepository;
import com.idb_backend.mvp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public void addUser(User user){
        //TODO: add logic to check user for issues
        userRepository.addUser(user);
    }

}
