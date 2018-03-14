package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.TsunamiEventView;
import com.idb_backend.mvp.domain.model.TsunamiEventViewNonPersist;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.service.TsunamiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class TsunamiEventController {

  @Autowired
  TsunamiEventRepository tsunamiEventRepository;
  
  @Autowired
  TsunamiService tsunamiService;

  //TODO: insert error handling for each of these endpoints

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamievents", method= RequestMethod.GET)
  public @ResponseBody List<TsunamiEventView> getAllEvents(){
    return tsunamiEventRepository.getAllTsunamiEvents();
  }

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamievents/select", method= RequestMethod.GET)
  public List<TsunamiEventViewNonPersist> getEventsByYear(@RequestParam Map<String, String> allRequestParams){
    return tsunamiService.generateCriteria(allRequestParams);
  }

}
