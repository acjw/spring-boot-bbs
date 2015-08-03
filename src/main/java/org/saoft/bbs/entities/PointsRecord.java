package org.saoft.bbs.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by saoft on 15/7/31.
 */
@Getter
@Setter
@Entity
@Table(name = "pointRecord")
public class PointsRecord extends GlobalEntity{

    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="userId")
    private User user;/**用户*/
    private Integer point;/**积分*/
    private String mark;/**获得积分原因 以及id*/
    private Date birth;/**生成时间*/
}
