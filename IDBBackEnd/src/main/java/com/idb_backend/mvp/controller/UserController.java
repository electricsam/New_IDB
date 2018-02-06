package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.User;
import com.idb_backend.mvp.domain.repository.UserRepository;
import com.idb_backend.mvp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public @ResponseBody List<User> list(){
        System.out.println("entered the /users list method");
        return userRepository.getAllUsers();
    }


    @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
    @RequestMapping(value="/user", method = RequestMethod.POST)
    public ResponseEntity<User> addUser(@RequestBody User user){
        System.out.println("you have reached the outer router method");
        userService.addUser(user);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @RequestMapping(value="/home", method = RequestMethod.GET)
    public String home(){
        System.out.println("hello world");
        String str = "Hello World";
        return str;
    }
}
