package org.saoft.bbs.service;

import org.saoft.bbs.dao.ReplyRepository;
import org.saoft.bbs.dao.TopicRepository;
import org.saoft.bbs.entities.Reply;
import org.saoft.bbs.entities.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
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
    public Long unReadMessageCount(Long userId) {
        return repository.countByStatusIsAndReceiverIdIs(false,userId);
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
    public Page<Reply> unKnownMessage(final Long userId,Pageable pageable) {
        return repository.findAll(new Specification<Reply>() {
            @Override
            public Predicate toPredicate(Root<Reply> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
                List<Predicate> predicates = new ArrayList<>();
                predicates.add(builder.equal(root.get("status"), false));
                predicates.add(builder.equal(root.get("receiver").get("id"), userId));
                Predicate[] pre = new Predicate[predicates.size()];
                return query.where(predicates.toArray(pre)).getRestriction();
            }
        }, pageable);
    }

    @Override
    public Page<Reply> knownMessage(final Long userId,Pageable pageable) {
        return repository.findAll(new Specification<Reply>() {
            @Override
            public Predicate toPredicate(Root<Reply> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
                List<Predicate> predicates = new ArrayList<Predicate>();
                predicates.add(builder.equal(root.get("status"), true));
                predicates.add(builder.equal(root.get("receiver").get("id"), userId));
                Predicate[] pre = new Predicate[predicates.size()];
                return query.where(predicates.toArray(pre)).getRestriction();
            }
        },pageable);
    }

    @Override
    public Iterable<Reply> saveBatch(Iterable<Reply> iterator) {
        return repository.save(iterator);
    }

    @Override
    public List<Reply> findByTopicId(Long topicId) {
        return repository.findByTopicId(topicId);
    }
}
