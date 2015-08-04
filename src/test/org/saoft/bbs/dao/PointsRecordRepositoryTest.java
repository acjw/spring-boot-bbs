package org.saoft.bbs.dao;

/**
 * Created by saoft on 15/8/4.
 */

import org.junit.Test;
import org.junit.runner.RunWith;
import org.saoft.SaoftApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.util.Assert;

@RunWith(SpringJUnit4ClassRunner.class)   // 1
@SpringApplicationConfiguration(classes = SaoftApplication.class)   // 2
@WebAppConfiguration   // 3
public class PointsRecordRepositoryTest {

    @Autowired
    PointsRecordRepository repository;

    @Test
    public void count() {
        Long lo = repository.cntPointByUserId(1l);
        Assert.notNull(lo);
    }
}
