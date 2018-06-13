package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.ReferenceRepository;
import com.idb_backend.mvp.domain.repository.VolcanoEventRepository;
import com.idb_backend.mvp.domain.repository.VolcanoRefsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class VolAndRefController {

  @Autowired
  ReferenceRepository referenceRepository;

  @Autowired
  VolcanoEventRepository volcanoEventRepository;

  @Autowired
  VolcanoRefsRepository volcanoRefsRepository;

  @RequestMapping(value = "/volrefjunction/{volid}/{refid}", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postVolRefRelation(@PathVariable("volid") Integer volId, @PathVariable("refid") Integer refId){
    try{

      Reference reference = referenceRepository.findById(refId).get();
      VolcanoEvent volcanoEvent = volcanoEventRepository.findById(volId).get();

      VolcanoRefs volcanoRefs = new VolcanoRefs();
      volcanoRefs.setVolcanoEvent(volcanoEvent);
      volcanoRefs.setReference(reference);

      volcanoRefsRepository.save(volcanoRefs);

      return ResponseEntity.status(HttpStatus.OK).body("success");
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }
}
