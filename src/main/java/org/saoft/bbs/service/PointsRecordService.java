package org.saoft.bbs.service;

import org.saoft.bbs.entities.PointsRecord;

/**
 * Created by saoft on 15/8/4.
 */
public interface PointsRecordService {
    PointsRecord create(Long userId, Integer points, String mark);
    void countByUserPoints(Long userId);
}
