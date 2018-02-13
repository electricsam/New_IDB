package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.VolcanoId;
import com.idb_backend.mvp.domain.repository.VolcanoIdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VolcanoIdController {
  @Autowired
  VolcanoIdRepository volcanoIdRepository;

  @CrossOrigin(origins = {"http://localhost:8181", "http://localhost:9000"})
  @RequestMapping(value = "/volcanoids", method = RequestMethod.GET)
  public @ResponseBody List<VolcanoId> list(){
    System.out.println("you got to the list method of VolcanoIdController");
    return volcanoIdRepository.getAllVolcanoId();
  }

}
