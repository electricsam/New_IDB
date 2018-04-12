package com.idb_backend.mvp;


import com.idb_backend.mvp.domain.repository.TsunamiEventRepository;
import com.idb_backend.mvp.service.TsunamiEventService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;


import static org.mockito.BDDMockito.given;

@RunWith(SpringRunner.class)
public class TsunamiEventServiceTest {

  @Autowired
  TsunamiEventService tsunamiEventService;

  @MockBean
  TsunamiEventRepository tsunamiEventRepository;

  @Test
  public void generateCritera() throws Exception{

//    given(tsunamiEventService.generateCriteria);



  }




}
