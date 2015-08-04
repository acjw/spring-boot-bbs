package org.saoft.bbs.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.saoft.SaoftApplication;
import org.saoft.bbs.entities.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.util.Assert;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;


/**
 * Created by saoft on 15/8/4.
 */
@RunWith(SpringJUnit4ClassRunner.class)   // 1
@SpringApplicationConfiguration(classes = SaoftApplication.class)   // 2
@WebAppConfiguration   // 3
public class MessageRepositoryTest {

    @Autowired
    private MessageRepository repository;

    @Test
    public void findAll() {
        Pageable pageable = new PageRequest(0,20);
        Page<Message> page = repository.findAll(new Specification<Message>() {
            @Override
            public Predicate toPredicate(Root<Message> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
                return query.where(builder.equal(root.get("status").as(Boolean.class), true)).getRestriction();
            }
        }, pageable);
        Assert.notNull(page);
    }
}
