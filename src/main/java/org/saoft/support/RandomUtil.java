package org.saoft.support;

import java.util.Random;

/**
 * Created by saoft on 15/7/31.
 */
public class RandomUtil {

//    public char[] generateCaptcha(int length) {
//        Random random = new Random();
//        if (captcha.length != length) {
//            captcha = new char[length];
//        }
//        for (int i = 0; i < length; i++) {
//            captcha[i] = (char) random.nextInt(0x53E3, 0x559D);
//        }
//        return captcha;
//    }

    public static String getRandomString(int length) { //length表示生成字符串的长度
        String base = "abcdefghijklmnopqrstuvwxyz0123456789";
        Random random = new Random();
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < length; i++) {
            int number = random.nextInt(base.length());
            sb.append(base.charAt(number));
        }
        return sb.toString();
    }
}
