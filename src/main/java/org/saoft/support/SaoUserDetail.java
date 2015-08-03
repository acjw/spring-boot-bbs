package org.saoft.support;

import lombok.Getter;
import lombok.Setter;
import org.saoft.bbs.entities.User;
import org.springframework.beans.BeanUtils;

import java.io.Serializable;

/**
 * Created by saoft on 15/5/25.
 */
@Getter
@Setter
public class SaoUserDetail implements Serializable {

    public final static String SESSION_USER = "session_user";

    private Long id;
    /** 用户名*/
    private String username;
    private String userLevel;
    /** 昵称*/
    private String nickname;
    private String signature;
    private Integer points;/**积分*/
    private String email;/**电子邮件*/

    public SaoUserDetail(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.nickname = user.getNickname();
        this.signature = user.getSignature();
        this.points = user.getPoints();
        this.email = user.getEmail();
        this.userLevel = user.getUserLevel();
    }

}
