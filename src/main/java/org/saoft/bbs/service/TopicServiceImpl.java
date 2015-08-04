package org.saoft.bbs.service;

import org.saoft.bbs.dao.TopicRepository;
import org.saoft.bbs.entities.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import java.util.List;


/**
 * Created by saoft on 15/7/31.
 */
@Service
public class TopicServiceImpl implements TopicService {

    @Autowired
    TopicRepository repository;

    @Override
    public Topic findOne(Long id) {
        Assert.notNull(id);
        return repository.findOne(id);
    }

    @Override
    public Topic save(Topic topic) {
        return repository.saveAndFlush(topic);
    }

    @Override
    public Topic update(Topic topic) {
        return repository.saveAndFlush(topic);
    }

    @Override
    public Page<Topic> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public List<Topic> findByAuthorIdIsAndIdNot(Long authorId, Long id,int limit) {
        return repository.findByAuthorIdIsAndIdNotOrderByModifyDateTimeDesc(authorId, id, limit);
    }

    @Override
    public List<Topic> findByReplyIsZero() {
        return repository.findByReplyIs(0);
    }


}
