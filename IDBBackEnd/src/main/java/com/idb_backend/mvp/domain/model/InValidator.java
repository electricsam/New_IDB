package com.idb_backend.mvp.domain.model;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class InValidator implements ConstraintValidator<In, Integer> {
  private int[] nums;


  @Override
  public void initialize(In constraintAnnotation) {
    this.nums = constraintAnnotation.nums();
  }

  @Override
  public boolean isValid(Integer num, ConstraintValidatorContext cxt) {
    boolean valid = false;
    if(num == null){
      valid = true;
      return valid;
    }

    for(int i = 0; i < nums.length; i++){
      if(nums[i] == num){
        valid = true;
      }
    }
    return valid;

  }

}