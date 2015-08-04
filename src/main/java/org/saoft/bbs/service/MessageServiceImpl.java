package org.saoft.bbs.service;

import org.saoft.bbs.dao.MessageRepository;
import org.saoft.bbs.entities.Message;
import org.saoft.bbs.entities.Reply;
import org.saoft.bbs.entities.User;
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
import java.util.Iterator;
import java.util.List;

/**
 * Created by saoft on 15/8/4.
 */
@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private MessageRepository repository;


    @Override
    public Page<Message> unKnownMessage(final Long userId,Pageable pageable) {
        return repository.findAll(new Specification<Message>() {
            @Override
            public Predicate toPredicate(Root<Message> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
                List<Predicate> predicates = new ArrayList<>();
                predicates.add(builder.equal(root.get("status"), false));
                predicates.add(builder.equal(root.get("receiver").get("id"), userId));
                Predicate[] pre = new Predicate[predicates.size()];
                return query.where(predicates.toArray(pre)).getRestriction();
            }
        }, pageable);
    }

    @Override
    public Page<Message> knownMessage(final Long userId,Pageable pageable) {
        return repository.findAll(new Specification<Message>() {
            @Override
            public Predicate toPredicate(Root<Message> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
                List<Predicate> predicates = new ArrayList<Predicate>();
                predicates.add(builder.equal(root.get("status"), true));
                predicates.add(builder.equal(root.get("receiver").get("id"), userId));
                Predicate[] pre = new Predicate[predicates.size()];
                return query.where(predicates.toArray(pre)).getRestriction();
            }
        },pageable);
    }

    @Override
    public Iterator<Message> saveBatch(Iterator<Message> iterator) {
        return null;
    }

    @Override
    public Message create(Long receiverId, Long replyId) {
        Message message = new Message();
        message.setStatus(false);
        message.setBirth(new Date());
        message.setReceiver(new User(receiverId));
        message.setReply(new Reply(replyId));
        return repository.save(message);
    }


}
