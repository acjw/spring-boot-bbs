package org.saoft.bbs.service;

import org.saoft.bbs.dao.PointsRecordRepository;
import org.saoft.bbs.dao.UserRepository;
import org.saoft.bbs.entities.PointsRecord;
import org.saoft.bbs.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * Created by saoft on 15/8/4.
 */
@Service
public class PointsRecordServiceImpl implements PointsRecordService {

    @Autowired
    private PointsRecordRepository repository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public PointsRecord create(Long userId, Integer points, String mark) {
        PointsRecord record = new PointsRecord();
        record.setBirth(new Date());
        record.setMark(mark);
        record.setPoint(points);
        record.setUser(new User(userId));
        repository.saveAndFlush(record);
        //统计积分
        countByUserPoint(userId);
        return record;
    }
    @Override
    public void countByUserPoints(Long userId) {
        User user = userRepository.getOne(userId);
        Long points = repository.cntPointByUserId(userId);
        points = points == null ? 0l : points;
        user.setPoints(points.intValue());
        userRepository.saveAndFlush(user);
    }

    private void countByUserPoint(Long userId) {
        User user = userRepository.getOne(userId);
        Long points = repository.cntPointByUserId(userId);
        points = points == null ? 0l : points;
        user.setPoints(points.intValue());
        userRepository.saveAndFlush(user);
    }
}
