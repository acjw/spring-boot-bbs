package org.saoft.bbs.utils;

import com.timgroup.jgravatar.Gravatar;
import com.timgroup.jgravatar.GravatarDefaultImage;
import com.timgroup.jgravatar.GravatarRating;
import com.timgroup.jgravatar.internal.com.google.common.base.Joiner;
import com.timgroup.jgravatar.internal.com.google.common.base.Preconditions;
import com.timgroup.jgravatar.internal.com.google.common.hash.Hashing;
import org.saoft.bbs.config.BBSGlobalConfig;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Map;

/**
 * Created by saoft on 15/7/30.
 */
public class Email2AvatarUtil {

    private int size = 80;
    private final GravatarRating rating = Gravatar.DEFAULT_RATING;
    private final GravatarDefaultImage defaultImage = Gravatar.DEFAULT_DEFAULT_IMAGE;
    private String url;

    public String getUrl() {
        return url;
    }

    public Email2AvatarUtil(String email,String path) {
        Gravatar gravatar = new Gravatar();
//        gravatar.setSize(50);
//        gravatar.setRating(GravatarRating.GENERAL_AUDIENCES);
//        gravatar.setDefaultImage(GravatarDefaultImage.IDENTICON);
        this.url = gravatar.getUrl(email);



    }


    public static void main(String[] args) {
        Email2AvatarUtil email2Avatar = new Email2AvatarUtil("saoft@foxmail.com","Users/saoft/header2.jpg");
        System.out.println(email2Avatar.getUrl());
    }
}
