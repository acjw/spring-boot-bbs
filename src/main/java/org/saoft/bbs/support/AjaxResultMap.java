package org.saoft.bbs.support;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

/**
 * Created by saoft on 15/7/31.
 */
public class AjaxResultMap extends ResultMap {

    public enum HTTPStatus {
        OK(200),/**服务器成功返回网页。*/
        NotFound(404),/**请求的网页不存在，网页不存在。*/
        InternalServerError(500),/**服务器遇到错误，无法完成请求。*/
        ServiceUnavailable(503),/** 目前无法使用服务器。*/
        NotImplemented(501);/*服务器不具备完成请求的功能*/
        private int value;
        private HTTPStatus() {
            this.value = 200;
        }
        public int getValue() {
            return this.value;
        }
        private HTTPStatus(int value) {
            this.value = value;
        }
    }

    public AjaxResultMap() {
        this(HTTPStatus.OK,"操作成功",new HashMap<String, Object>(),null,null);
    }

    private AjaxResultMap(HTTPStatus code, String message, Map<String, Object> data,String stackTrace,String errMsg) {
        this.put("code", code.getValue());
        this.put("message", message);
        this.put("data", data);
        this.put("stackTrace", stackTrace);
        this.put("errMsg", errMsg);
    }
    public static AjaxResultMap getUnknownError() {
        AjaxResultMap resultMap = new AjaxResultMap(HTTPStatus.NotImplemented, "未知错误", null, null, null);
        return resultMap;
    }
    public void setStackTrace(String stackTrace) {
        this.put("stackTrace", stackTrace);
    }

    public void setErrMsg(String errMsg) {
        this.put("errMsg", errMsg);
    }

    public void setCode(HTTPStatus code) {
        this.put("code", code.value);
    }

    public void setMessage(String message) {
        this.put("message", message);
    }

    public void setData(Map<String, Object> data) {
        this.put("data", data);
    }
}
