package org.saoft.bbs.dao;

import org.saoft.bbs.entities.PointsRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by saoft on 15/8/4.
 */
interface PointsRecordRepositoryCustom{
    Long cntPointByUserId(Long userId);
}
@Repository
public interface PointsRecordRepository extends JpaRepository<PointsRecord, Long> ,PointsRecordRepositoryCustom{

}

