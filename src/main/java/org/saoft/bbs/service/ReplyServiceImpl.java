package org.saoft.bbs.service;

import org.saoft.bbs.dao.ReplyRepository;
import org.saoft.bbs.dao.TopicRepository;
import org.saoft.bbs.entities.Reply;
import org.saoft.bbs.entities.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Created by saoft on 15/8/3.
 */
@Service
public class ReplyServiceImpl implements ReplyService {

    @Autowired
    private ReplyRepository repository;
    @Autowired
    private TopicRepository topicRepository;

    @Override
    public Reply findOne(Long id) {
        return repository.findOne(id);
    }

    @Override
    public boolean exists(Long id) {
        return repository.exists(id);
    }

    @Override
    public Reply create(Reply reply) {
        //需要统计回复数量
        repository.saveAndFlush(reply);
        Long count = repository.countByTopicIdIs(reply.getTopic().getId());
        Topic topic = topicRepository.findOne(reply.getTopic().getId());
        topic.setReply(count.intValue());
        topic.setModifyDateTime(new Date());
        topicRepository.saveAndFlush(topic);
        return reply;
    }

    @Override
    public List<Reply> findByTopicId(Long topicId) {
        return repository.findByTopicId(topicId);
    }
}
