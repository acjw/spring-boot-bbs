package org.saoft.bbs.dao;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.Entity;
import javax.persistence.EntityManager;

/**
 * Created by saoft on 15/8/4.
 */
public class ReplyRepositoryImpl implements ReplyRepositoryCustom {

    @Autowired
    EntityManager entityManager;

//    @Override
//    @SuppressWarnings("uncheck")
//    public int countTopicReply(Long topicId) {
//        String jpql = "select count(id) from Reply reply where reply.topic.id = :id";
//        return entityManager.createQuery(jpql)
//                .setParameter("id", topicId)
//                .getFirstResult();
//    }
}
