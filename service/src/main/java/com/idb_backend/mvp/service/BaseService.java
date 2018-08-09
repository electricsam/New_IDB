package com.idb_backend.mvp.service;

import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.StringPath;
import org.owasp.html.HtmlPolicyBuilder;
import org.owasp.html.PolicyFactory;
import org.owasp.html.Sanitizers;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class BaseService{

  public static final PolicyFactory POLICY_DEFINITION = Sanitizers.BLOCKS
      .and(Sanitizers.FORMATTING)
      .and(Sanitizers.TABLES);

  public static final PolicyFactory NO_HTML_POLICY_DEFINITION = new HtmlPolicyBuilder()
      .allowElements()
      .toFactory();

  public BooleanExpression combineBools(Predicate predicate, BooleanExpression runupBool){
    BooleanExpression result = runupBool.and(predicate);
    return result;
  }

  public BooleanExpression checkMinMax(Integer min, Integer max, NumberPath<Integer> root){
    if(min != null && max != null){
      BooleanExpression expression = root.between(min, max);
      return expression;
    }else if(min != null){
      BooleanExpression expression = root.goe(min);
      return expression;
    }else if(max != null){
      BooleanExpression expression = root.loe(max);
      return expression;
    }else{
      return null;
    }
  }

  public Integer generateInteger(Map<String, String> map, String key){
    return map.get(key) != null? new Integer(Integer.parseInt(map.get(key))): null;
  }

  public BooleanExpression genIntMinMax(Map<String, String> map, String minKey, String maxKey, NumberPath<Integer> root)
      throws NumberFormatException{
    Integer min = generateInteger(map, minKey);
    Integer max = generateInteger(map, maxKey);

    return checkMinMax(min, max, root);
  }

  public BooleanExpression genEqRestriction(Map<String, String> map, String key, StringPath root){
    String condition = map.get(key);
    if(condition != null){
      return root.equalsIgnoreCase(condition);
    }else{
      return null;
    }
  }

  public BooleanExpression genEqRestriction(Map<String, String> map, String key, NumberPath root){
    Integer condition = generateInteger(map, key);
    if(condition != null){
      return root.eq(condition);
    }else{
      return null;
    }
  }

  public BooleanExpression checkMinMax(Double min, Double max, NumberPath<Double> root){
    if(min != null && max != null){
      return root.between(min, max);
    }else if(min != null){
      return root.goe(min);
    }else if(max != null){
      return root.loe(max);
    }else{
      return null;
    }
  }

  public Double generateDouble(Map<String, String> map, String key) {
    return map.get(key) != null? new Double(Double.parseDouble(map.get(key))) : null;
  }

  public BooleanExpression genDoubleMinMax(Map<String, String> map, String minKey, String maxKey,
                                           NumberPath<Double> root)
      throws NumberFormatException{
    Double min = generateDouble(map, minKey);
    Double max = generateDouble(map, maxKey);

    return checkMinMax(min, max, root);
  }

  public BooleanExpression checkLocParams(Map<String, String> map, String start, String end, String includes,
                                          String match, String not, StringPath root){
    if(map.get(start) != null){
      return root.startsWithIgnoreCase(map.get(start));
    }else if(map.get(end) != null){
      return root.endsWithIgnoreCase(map.get(end));
    }else if(map.get(includes) != null){
      return root.containsIgnoreCase(map.get(includes));
    }else if(map.get(match) != null){
      return root.equalsIgnoreCase(map.get(match));
    }else if(map.get(not) != null){
      return root.notEqualsIgnoreCase(map.get(not));
    }else{
      return null;
    }
  }

  public BooleanExpression checkLikeParams(Map<String, String> map, String start, String end, String includes,
                                           String match, String not, StringPath root){
    if(map.get(start) != null){
      return root.startsWithIgnoreCase(map.get(start));
    }else if(map.get(end) != null){
      return root.endsWithIgnoreCase(map.get(end));
    }else if(map.get(includes) != null){
      return root.containsIgnoreCase(map.get(includes));
    }else if(map.get(match) != null){
      return root.equalsIgnoreCase(map.get(match));
    }else if(map.get(not) != null){
      return root.notEqualsIgnoreCase(map.get(not));
    }else{
      return null;
    }
  }

  public List<ValidationError> generateValiationErrorMessages(Errors errors){
    List<ObjectError> errorList = errors.getAllErrors();
    String errStr = "";
    FieldError fieldError;
    List<ValidationError> validationErrors = new ArrayList();
    for(ObjectError error : errorList){
      fieldError = (FieldError) error;
      errStr += fieldError.getField() + " " + fieldError.getDefaultMessage() ;
      validationErrors.add(new ValidationError(errStr));
    }
    return validationErrors;
  }
}
