package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.ReferenceRepository;
import com.idb_backend.mvp.domain.repository.RunupRepository;
import com.idb_backend.mvp.domain.repository.TsrunupRefsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class RunupAndRefController {

  @Autowired
  ReferenceRepository referenceRepository;

  @Autowired
  RunupRepository runupRepository;

  @Autowired
  TsrunupRefsRepository tsrunupRefsRepository;

  @RequestMapping(value = "/runuprefjunction/{runupid}/{refid}", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postRunupRefRelation(@PathVariable("runupid") Integer runupId,
                                             @PathVariable("refid") Integer refId){
    try{

      Reference reference = referenceRepository.findById(refId).get();
      TsunamiRunup tsunamiRunup = runupRepository.findById(runupId).get();

      TsrunupRefs tsrunupRefs = new TsrunupRefs();
      tsrunupRefs.setReference(reference);
      tsrunupRefs.setTsunamiRunup(tsunamiRunup);
      tsrunupRefs.setId(runupId, refId);

      tsrunupRefsRepository.save(tsrunupRefs);

      return ResponseEntity.status(HttpStatus.OK).body("success");
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

}
