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
    /** 昵称*/
    private String nickname;

    public SaoUserDetail(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.nickname = user.getNickname();
    }

}
