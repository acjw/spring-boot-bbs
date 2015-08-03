package org.saoft.bbs.config;

import org.springframework.beans.factory.annotation.Value;

/**
 * Created by saoft on 15/7/30.
 */
public interface BBSGlobalConfig {

    @Value("${bbs.global.domain}")
    public static String DOMAIN = "";
}
