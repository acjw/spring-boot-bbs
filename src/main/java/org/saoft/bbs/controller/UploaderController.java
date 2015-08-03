package org.saoft.bbs.controller;

import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import org.saoft.support.GlobalController;
import org.saoft.support.SaoUserDetail;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * Created by saoft on 15/7/30.
 */
@Controller
@Api("uploader controller")
public class UploaderController extends GlobalController{

    private final static String upImagesPath = "/io/upImages";

    @ApiOperation("upload")
    @ResponseBody
    @RequestMapping(value = "upload",method = RequestMethod.POST)
    Map upload(MultipartFile file) throws IOException {
        Map result = new HashMap();

        HttpSession httpSession = session.get();
        //获取登录人的username
        SaoUserDetail info = getUserDetail();
        if(info!=null){
            String username = info.getUsername();

            String realPath = httpSession.getServletContext().getRealPath(upImagesPath+"/"+username) + File.separator;
            File tempFile = new File(realPath);
            if(!tempFile.exists()) {
                tempFile.mkdirs();
            }
            //存入指定路径
            String fileName = UUID.randomUUID().toString().replaceAll("-","");
            String uploadFileName = file.getOriginalFilename();
            String partRightType = uploadFileName.substring(uploadFileName.lastIndexOf("."));
            String transferTo = realPath + fileName + partRightType;
            file.transferTo(new File(transferTo));

            String temp = upImagesPath+"/"+username+"/" + fileName + partRightType;

            String localhost = request.get().getLocalName();
            int port = request.get().getLocalPort();
            if (port != 80) {
                localhost += ":" + port;
            }
            String resultPath = localhost+temp;

            result.put("url", resultPath);
            result.put("success", true);
        }
        return result;
    }
}
