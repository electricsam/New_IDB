package com.idb_backend.mvp;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.idb_backend.mvp.controller.EarthquakeController;
import com.idb_backend.mvp.domain.model.QSignifVsqp;
import com.idb_backend.mvp.domain.model.SignifVsqp;
import com.idb_backend.mvp.domain.repository.EarthquakeRepository;
import com.idb_backend.mvp.domain.repository.EarthquakeViewRepository;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.mockito.BDDMockito.given;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest(value = EarthquakeController.class)
@EnableSpringDataWebSupport
public class EarthquakeControllerTest {
  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private EarthquakeRepository earthquakeRepository;

  @MockBean
  private EarthquakeViewRepository earthquakeViewRepository;

  @Autowired
  private ObjectMapper objectMapper;

  @Test
  public void getAllEarthquakesTest() throws Exception {

    SignifVsqp signifVsqp = new SignifVsqp();
    System.out.println("you are working");
    signifVsqp.setId(1);
    signifVsqp.setCountry("RUSSIA");
    signifVsqp.setYear(2016);
    signifVsqp.setMonth(12);

    System.out.println("you are not working likely");

    BooleanExpression expression = QSignifVsqp.signifVsqp.year.eq(2016);

    List<SignifVsqp> list = new ArrayList<>();
    list.add(signifVsqp);
    Iterable<SignifVsqp> allEq = list;

    given(earthquakeViewRepository.findAll(QSignifVsqp.signifVsqp.year.eq(2016))).willReturn(allEq);

    mockMvc.perform(get("/earthquakes?year=2016")
        .contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", hasSize(1)))
        .andExpect(jsonPath("$[0].year", is(2016)));
  }

}
