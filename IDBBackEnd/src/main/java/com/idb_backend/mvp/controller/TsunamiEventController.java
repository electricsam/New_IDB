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

  //TODO: insert error handling for each of these endpoints

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/tsunamievents", method= RequestMethod.GET)
  public @ResponseBody List<TsunamiEvent> getAllEvents(){
    return tsunamiEventRepository.getAllTsunamiEvents();
  }

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(
      value = "/tsunamievents/select",
      params = { "year", "month"},
      method= RequestMethod.GET
  )
  public List<TsunamiEvent> getEventsByYear(
      @RequestParam(value = "year", required = false) int year,
      @RequestParam(value = "month", required = false) int month
  ){
    System.out.println("Month " + month);
    return tsunamiEventRepository.getEventsByYear(year);
  }

}
