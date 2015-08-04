package org.saoft.bbs.dao;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import java.util.Locale;

/**
 * Created by saoft on 15/8/4.
 */
public class PointsRecordRepositoryImpl implements PointsRecordRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Override
    public Long cntPointByUserId(Long userId) {
        String jpql = "select sum(record.point) from PointsRecord record where record.user.id = :id";
        Object points = entityManager.createQuery(jpql)
        .setParameter("id",userId).getSingleResult();
        return (Long)points;
    }
}
