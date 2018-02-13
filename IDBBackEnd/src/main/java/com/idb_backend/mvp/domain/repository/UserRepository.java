package com.idb_backend.mvp.domain.repository;

import com.idb_backend.mvp.domain.model.User;

import java.util.List;

public interface UserRepository {
  List<User> getAllUsers();

  void addUser(User user);
}
