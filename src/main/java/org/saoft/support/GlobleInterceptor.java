package org.saoft.support;

import lombok.extern.log4j.Log4j;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.Date;

@Log4j
public class GlobleInterceptor extends HandlerInterceptorAdapter {

	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		//http://chenzhou123520.iteye.com/blog/1702563
		if(handler instanceof HandlerMethod){
			HandlerMethod method = (HandlerMethod)handler;
			GlobalController controller = (GlobalController) method.getBean();
			controller.request.set(request);
			controller.response.set(response);
			controller.session.set(request.getSession());
		}
		return super.preHandle(request, response, handler);
	}
	
	@Override
	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		//如果给ThreadLocal赋null会引起内存泄露
		//http://www.cnblogs.com/onlywujun/p/3524675.html
		if(handler instanceof HandlerMethod) {
			HandlerMethod method = (HandlerMethod) handler;
			GlobalController controller = (GlobalController) method.getBean();
			controller.request.remove();
			controller.response.remove();
			controller.session.remove();
		}
		super.postHandle(request, response, handler, modelAndView);
	}
	
	@Override
	public void afterCompletion(HttpServletRequest request,
			HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		if(null!=ex){
			log.info(ex.getLocalizedMessage());
		}
		super.afterCompletion(request, response, handler, ex);
	}
	@InitBinder
	protected void initBinder(WebDataBinder binder) {
		binder.registerCustomEditor(Date.class, new CustomDateEditor(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"), true));
	}
}
