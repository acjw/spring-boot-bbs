<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<div class='navbar'>
    <div class='navbar-inner'>
        <div class='container'>
            <a class='brand' href='/'>
                <img src="/public/images/logo.png"/>
            </a>

            <form id='search_form' class='navbar-search' action="/search">
                <input type='text' id='q' name='q' class='search-query span3' value=''/>
            </form>
            <ul class='nav pull-right'>
                <li><a href='/'>首页</a></li>
                <c:if test="${not empty session_user}">
                    <li>
                        <a href='/my/messages'>
                            <c:if test="${not empty session_user.unReadMessageNumber && session_user.unReadMessageNumber > 0}">
                                <span class='big messages_count'>${session_user.unReadMessageNumber}</span>
                            </c:if>
                            未读消息
                        </a>
                    </li>
                    <li><a href='/setting'>设置</a></li>
                    <li>
                        <a href='/signout' data-method="post" rel="nofollow">退出</a>
                    </li>
                </c:if>
                <c:if test="${empty session_user}">
                    <li>
                        <a href='/signin' data-method="get" rel="nofollow">登录</a>
                    </li>
                </c:if>

            </ul>
            <a class="btn btn-navbar" id="responsive-sidebar-trigger">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
        </div>
    </div>
</div>
