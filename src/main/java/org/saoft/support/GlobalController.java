package org.saoft.support;

import com.fasterxml.jackson.databind.util.JSONPObject;
import lombok.extern.log4j.Log4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

@Log4j
public class GlobalController extends HandlerInterceptorAdapter {


	protected final static ThreadLocal<HttpServletRequest> request = new ThreadLocal<HttpServletRequest>();
	protected final static ThreadLocal<HttpServletResponse> response = new ThreadLocal<HttpServletResponse>();
	protected final static ThreadLocal<HttpSession> session = new ThreadLocal<HttpSession>();

	public SaoUserDetail getUserDetail(){
		return (SaoUserDetail)session.get().getAttribute(SaoUserDetail.SESSION_USER);
	}


	public Long getUserDetailId(){
		return getUserDetail().getId();
	}

	 /**
     * 异常页面控制 
     *  
     * @param re
     * @return 
     */
    @ExceptionHandler(RuntimeException.class)
    public String runtimeExceptionHandler(HttpServletRequest request1,HttpServletResponse response1,RuntimeException re) {
    	log.error(this.getClass().getName()+":"+re.getLocalizedMessage()+",Date:"+new Date());
		re.printStackTrace();
		//判断是否为ajax请求
		if(request1.getHeader("x-requested-with")!=null){
			PrintWriter writer = null;
			try {
				writer = response1.getWriter();

				writer.write("{\"code\",-1}");
				writer.flush();
			} catch (IOException e) {
				e.printStackTrace();
			}
			return null;
		}
//    	request1.getSession().setAttribute(UserInfo.USER_SESSION,null);
    	return "/error/500";
    }

}
