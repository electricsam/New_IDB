package com.idb_backend.mvp.service;

import lombok.Data;

import java.io.Serializable;

@Data
public class ValidationError implements Serializable {

  private String inputError;

  public ValidationError(String errorMessage){
    this.inputError = errorMessage;
  }

}
