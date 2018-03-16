package com.idb_backend.mvp;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MvpApplicationTests {

	@Test
	public void testApp() {
		UserController uc = new UserController();
		String result = uc.home();
		assertEquals(result, "Hello World");

	}

}
