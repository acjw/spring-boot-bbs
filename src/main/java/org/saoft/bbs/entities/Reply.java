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
@Table(name = "reply")
public class Reply extends GlobalEntity {

    private String content;/**内容*/
    private Date replyDateTime;/**回复时间*/
    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="userId")
    private User sponsor;/**回复的人*/
    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="topicId")
    private Topic topic;/**回复的文章*/
}
