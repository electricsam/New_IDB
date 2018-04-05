package com.idb_backend.mvp.domain.model;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class InStringValidator implements ConstraintValidator<InString, String> {
  private String[] strs;


  @Override
  public void initialize(InString constraintAnnotation) {
    this.strs = constraintAnnotation.strs();
  }

  @Override
  public boolean isValid(String str, ConstraintValidatorContext cxt) {
    boolean valid = false;
    if(str == null){
      return true;
    }else{
    for(int i = 0; i < strs.length; i++){
      if(strs[i].equals(str)){
        valid = true;
      }
    }
    return valid;
    }
  }

}