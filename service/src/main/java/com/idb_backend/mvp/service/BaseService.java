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

/**
 * A parent class to all dataset services in the application aimed at extracting reusable business logic.
 *
 * @author speichs
 */

@Service
public class BaseService{

  //Policy definition for fields that will allow some safe HTML
  public static final PolicyFactory POLICY_DEFINITION = Sanitizers.BLOCKS
      .and(Sanitizers.FORMATTING)
      .and(Sanitizers.TABLES);

  //Policy definition for fields that will not allow any HTML
  public static final PolicyFactory NO_HTML_POLICY_DEFINITION = new HtmlPolicyBuilder()
      .allowElements()
      .toFactory();

  /**
   * Returns a BooleanExpression that is the result of combining the Predicate generated via queryDSL and the
   * BooleanExpression generated in the data set's service
   *
   * @param predicate
   * @param runupBool
   * @return the combined BooleanExpression
   */
  public BooleanExpression combineBools(Predicate predicate, BooleanExpression runupBool){
    BooleanExpression result = runupBool.and(predicate);
    return result;
  }

  /**
   * Returns BooleanExpression describing search restrictions for given Integer field in a dataset
   *
   * @param min
   * @param max
   * @param root
   * @return BooleanExpression
   */
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

  /**
   * Returns Integer from parsed String located on a Map object, accessed by provided key
   *
   * @param map
   * @param key
   * @return Integer
   */
  public Integer generateInteger(Map<String, String> map, String key){
    return map.get(key) != null? new Integer(Integer.parseInt(map.get(key))): null;
  }

  /**
   * Returns BooleanExpression describing search restrictions for given specific Integer field in a dataset.  Calls out
   * to generateInteger in order to parse String values to Integers and then passes those Integers to checkMinMax to
   * generate the Boolean expression based upon the min and max Integers provided.
   *
   * @param map
   * @param minKey
   * @param maxKey
   * @param root
   * @return BooleanExpression
   * @throws NumberFormatException
   */
  public BooleanExpression genIntMinMax(Map<String, String> map, String minKey, String maxKey, NumberPath<Integer> root)
      throws NumberFormatException{
    Integer min = generateInteger(map, minKey);
    Integer max = generateInteger(map, maxKey);

    return checkMinMax(min, max, root);
  }

  /**
   * Returns BooleanExpression, which specifies that a given String field (root) must be equal to the corresponding
   * value at the given key in the given Map object
   *
   * @param map
   * @param key
   * @param root
   * @return BooleanExpression
   */
  public BooleanExpression genEqRestriction(Map<String, String> map, String key, StringPath root){
    String condition = map.get(key);
    if(condition != null){
      return root.equalsIgnoreCase(condition);
    }else{
      return null;
    }
  }

  /**
   * Returns BooleanExpression, which specifies that a given number (Integer or Decimal) field (root) must be equal to
   * the corresponding value at the given key in the given Map object
   *
   * @param map
   * @param key
   * @param root
   * @return BooleanExpression
   */
  public BooleanExpression genEqRestriction(Map<String, String> map, String key, NumberPath root){
    Integer condition = generateInteger(map, key);
    if(condition != null){
      return root.eq(condition);
    }else{
      return null;
    }
  }

  /**
   * Returns BooleanExpression describing search restrictions for given Double field in a dataset
   *
   * @param min
   * @param max
   * @param root
   * @return BooleanExpression
   */
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

  /**
   * Returns Double from parsed String located on a Map object, accessed by provided key
   *
   * @param map
   * @param key
   * @return Integer
   */
  public Double generateDouble(Map<String, String> map, String key) {
    return map.get(key) != null? new Double(Double.parseDouble(map.get(key))) : null;
  }

  /**
   * Returns BooleanExpression describing search restrictions for given specific Double field in a dataset.  Calls out
   * to generateDouble in order to parse String values to Doubles and then passes those Doubles to checkMinMax to
   * generate the Boolean expression based upon the min and max Doubles provided.
   *
   * @param map
   * @param minKey
   * @param maxKey
   * @param root
   * @return BooleanExpression
   * @throws NumberFormatException
   */
  public BooleanExpression genDoubleMinMax(Map<String, String> map, String minKey, String maxKey,
                                           NumberPath<Double> root)
      throws NumberFormatException{
    Double min = generateDouble(map, minKey);
    Double max = generateDouble(map, maxKey);

    return checkMinMax(min, max, root);
  }

  /**
   * Returns BooleanExpression for search on a String value.  Flow control will determine how to search the String field
   * ex. beginning of String, end of String etc.
   *
   * @param map
   * @param start
   * @param end
   * @param includes
   * @param match
   * @param not
   * @param root
   * @return BooleanExpression
   */
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

  /**
   * Returns BooleanExpression for search on a String value.  Flow control will determine how to search the String field
   * ex. beginning of String, end of String etc.
   *
   * @param map
   * @param start
   * @param end
   * @param includes
   * @param match
   * @param not
   * @param root
   * @return BooleanExpression
   */
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

  /**
   * Returns a List of ValidationError objects by reading the errors param and pulling out neccessary strings to
   * instantiate a new ValidationError object with.
   *
   * @param errors
   * @return
   */
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
