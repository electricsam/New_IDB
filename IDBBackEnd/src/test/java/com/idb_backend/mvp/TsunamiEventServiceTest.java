package com.idb_backend.mvp;


import com.idb_backend.mvp.domain.model.*;
import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.service.TsunamiEventService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.persistence.criteria.*;
import java.util.HashMap;
import java.util.Map;

import static org.mockito.Mockito.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TsunamiEventServiceTest {

  @Autowired
  TsunamiEventService tsunamiEventService;

  @Before
  public void setupMocks(){
    MockitoAnnotations.initMocks(this);
  }

  @Test
  public void generateIntegerTest(){
    Map<String, String> map = new HashMap<>();
    map.put("min", "20");
    String key = "min";
    Integer actual = tsunamiEventService.generateInteger(map, key);
    Integer expected = 20;
    Assert.assertEquals(expected, actual);
  }

  @Test
  public void generateFloatTest(){
    Map<String, String> map = new HashMap<>();
    map.put("min", "20.25");
    String key = "min";
    Float actual = tsunamiEventService.generateFloat(map, key);
    Float expected = 20.25f;
    Assert.assertEquals(expected, actual);
  }
}
