package org.saoft.config;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.stereotype.Controller;

/**
 * Created by saoft on 15/7/31.
 */
@Controller
public class CustomerErrorController implements ErrorController {
    @Override
    public String getErrorPath() {
        return "/error2";
    }
}
