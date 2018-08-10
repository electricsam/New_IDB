package com.idb_backend.mvp.controller;

import com.idb_backend.mvp.domain.model.QReference;
import com.idb_backend.mvp.domain.model.Reference;
import com.idb_backend.mvp.domain.repository.ReferenceRepository;
import com.idb_backend.mvp.service.ReferenceService;
import com.idb_backend.mvp.service.ValidationError;
import com.idb_backend.mvp.service.impl.ReferenceServiceImpl;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.querydsl.binding.QuerydslPredicate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class ReferenceController {

  @Autowired
  ReferenceServiceImpl referenceService = new ReferenceServiceImpl();

  @Autowired
  ReferenceRepository referenceRepository;

  @RequestMapping(value = "/references", method = RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getReferences(@RequestParam Map<String, String> params,
                                      @QuerydslPredicate(root=Reference.class) Predicate predicate){
    try{
      Iterable<Reference> references = referenceService.getReferences(params, predicate);
      return ResponseEntity.status(HttpStatus.OK).body(references);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/references/{id}", method = RequestMethod.GET)
  @ResponseBody
  public ResponseEntity getReferenceById(@PathVariable("id") Integer id){
    try{
      Optional<Reference> reference = referenceRepository.findById(id);
      return ResponseEntity.status(HttpStatus.OK).body(reference);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }


  @RequestMapping(value = "/references/{id}", method = RequestMethod.PATCH)
  @ResponseBody
  public ResponseEntity patchReference(@PathVariable("id") Integer id,
                                       @Valid @RequestBody Reference reference, Errors errors){
    try{
      if(errors.hasErrors()){
        List<ValidationError> validationErrors = referenceService.generateValiationErrorMessages(errors);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(validationErrors);
      }else{
        reference = referenceService.sanitizeObject(reference);

        reference.setId(id);
        referenceRepository.save(reference);

        Optional<Reference> patched = referenceRepository.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(patched);
      }
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/references", method = RequestMethod.POST)
  @ResponseBody
  public ResponseEntity postReference(@Valid @RequestBody Reference reference, Errors errors){
    try{
      if(errors.hasErrors()){
        List<ValidationError> validationErrors = referenceService.generateValiationErrorMessages(errors);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(validationErrors);
      }else{

        reference = referenceService.sanitizeObject(reference);

        OrderSpecifier orderSpecifier = QReference.reference.id.desc();
        Iterable<Reference> result = referenceRepository.findAll(orderSpecifier);
        Integer id = result.iterator().next().getId() + 1;
        reference.setId(id);
        referenceRepository.save(reference);

        Optional<Reference> posted = referenceRepository.findById(id);
        return ResponseEntity.status(HttpStatus.OK).body(posted);
      }
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

  @RequestMapping(value = "/references/{id}", method = RequestMethod.DELETE)
  @ResponseBody
  public ResponseEntity deleteReference(@PathVariable("id") Integer id){
    try{
      referenceRepository.deleteById(id);
      return ResponseEntity.status(HttpStatus.OK).body(null);
    }catch (Exception e){
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
  }

}
