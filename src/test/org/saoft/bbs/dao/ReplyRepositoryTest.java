package org.saoft.bbs.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.saoft.SaoftApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.util.Assert;

import java.util.List;

/**
 * Created by saoft on 15/8/3.
 */
@RunWith(SpringJUnit4ClassRunner.class)   // 1
@SpringApplicationConfiguration(classes = SaoftApplication.class)   // 2
@WebAppConfiguration   // 3
public class ReplyRepositoryTest {

    @Autowired
    ReplyRepository repository;

    @Test
    public void findByTopicId() {
        List list = repository.findByTopicId(1l);
        Assert.notNull(list);
    }
    @Test
    public void count() {
        Long count = repository.countByTopicIdIs(1l);
        Assert.notNull(count);
    }
}
