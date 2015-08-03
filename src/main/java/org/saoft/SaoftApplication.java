package org.saoft;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by saoft on 15/7/27.
 */
@Configuration
@EnableAutoConfiguration
@EnableJpaRepositories("org.saoft.bbs.dao")
@ComponentScan("org.saoft")
@EntityScan("org.saoft.bbs.entities")
public class SaoftApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(SaoftApplication.class, args);
    }

    @Override
    protected final SpringApplicationBuilder configure(
            final SpringApplicationBuilder application) {
        return application.sources(SaoftApplication.class);
    }

}
