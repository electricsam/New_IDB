package com.idb_backend.mvp.domain.model;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;


@Documented
@Constraint(validatedBy = InValidator.class)
@Target({ElementType.METHOD, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface In {

  String message() default "invalid, is not in predefined array of values";

  Class<?>[] groups() default {};

  Class<? extends Payload>[] payload() default {};

  int[] nums() default {};

}
