package org.saoft.bbs.dao;

import org.saoft.bbs.entities.Topic;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

/**
 * Created by saoft on 15/8/4.
 */
public class TopicRepositoryImpl implements TopicRepositoryCustom {

    @Autowired
    private EntityManager em;

    @Override
    @SuppressWarnings("unchecked")
    public List<Topic> findByAuthorIdIsAndIdNotOrderByModifyDateTimeDesc(Long authorId, Long id,int limit) {
        String jpql = "select topic from Topic topic where topic.author.id = :authorId and topic.id <> :id order by topic.modifyDateTime";
        return em.createQuery(jpql)
                .setParameter("authorId", authorId)
                .setParameter("id", id)
                .setMaxResults(limit).getResultList();
    }
}
