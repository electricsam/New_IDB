package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.TsunamiEvent;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TsunamiEventController {
    @Autowired
    TsunamiEventRepository tsunamiEventRepository;

    @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
    @RequestMapping(value = "/tsunamieventsatwc", method= RequestMethod.GET)
    public @ResponseBody List<TsunamiEvent> list(){
        System.out.println("you have reached the list method of the tsunamieventcontroller");
        return tsunamiEventRepository.getAllTsunamiEvents();
    }
}
