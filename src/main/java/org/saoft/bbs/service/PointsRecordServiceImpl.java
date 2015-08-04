package org.saoft.bbs.service;

import org.saoft.bbs.dao.PointsRecordRepository;
import org.saoft.bbs.dao.UserRepository;
import org.saoft.bbs.entities.PointsRecord;
import org.saoft.bbs.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by saoft on 15/8/4.
 */
@Service
public class PointsRecordServiceImpl implements PointsRecordService {

    @Autowired
    private PointsRecordRepository repository;
    @Autowired
    private UserRepository userRepository;

    void countByUserPoints(Long userId) {
        User user = userRepository.getOne(userId);
        repository.cntPointByUserId(userId);
    }
}
