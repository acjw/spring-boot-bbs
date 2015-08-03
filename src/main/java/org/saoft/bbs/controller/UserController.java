package org.saoft.bbs.controller;

import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;
import org.saoft.bbs.entities.User;
import org.saoft.bbs.service.UserService;
import org.saoft.bbs.support.AjaxResultMap;
import org.saoft.support.GlobalController;
import org.saoft.support.SaoUserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * Created by saoft on 15/7/31.
 */
@Controller
@Api("user controller")
@RequestMapping("user")
public class UserController extends GlobalController {

    @Autowired
    private UserService userService;

    @ApiOperation(value = "login",response = AjaxResultMap.class)
    @ResponseBody
    @RequestMapping(value = "login",method = RequestMethod.POST)
    AjaxResultMap login(@ApiParam(name = "username",value = "greeting username",required = true)
                        @RequestParam(value = "username") String username,
                        @ApiParam(name = "password",value = "greeting password",required = true)
                        @RequestParam(value = "password") String password) {
        AjaxResultMap resultMap = new AjaxResultMap();
        if (username!=null && password!=null || password.length() !=40) {
            User user = userService.findOne(username.trim());
            if (user!=null && password.equals(user.getPassword())) {
                session.get().setAttribute(SaoUserDetail.SESSION_USER,new SaoUserDetail(user));
                user.setLastLoginDateTime(new Date());
                userService.update(user);
                return resultMap;
            }
        }
        resultMap.setCode(AjaxResultMap.HTTPStatus.ServiceUnavailable);
        resultMap.setErrMsg("用户名或密码不正确");
        resultMap.setMessage("登录失败");
        return resultMap;
    }

    @RequestMapping(value = "{id}",method = RequestMethod.GET)
    @ApiOperation(value = "查看用户星系")
    String topicDetail(@PathVariable Long id,Model model) {
        User user = userService.findOne(id);
        model.addAttribute("user", user);
        return "user";
    }
}
