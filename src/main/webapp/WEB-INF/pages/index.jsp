<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="ocpsoft" uri="http://ocpsoft.org/prettytime/tags" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <!-- meta -->
  <meta charset="utf-8"/>
  <meta name='description' content='英雄计划社区－英雄计划 app 问题 心得 交流社区'>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="keywords" content="英雄计划，约束自己，成才，日常计划 总结"/>

  <jsp:include page="public/header.jsp"></jsp:include>

  <title>英雄计划社区－英雄计划 app 问题 心得 交流社区</title>
  <meta content="_csrf" name="csrf-param">
  <meta content="QaG0ibLE-ruyKnHmp751QRHLK7q3Ffw99RWI" name="csrf-token">
  <!-- 创建微博 App 的验证信息 -->
  <meta property="wb:webmaster" content="27df391315f023b0" />
</head>
<body>
<!-- navbar -->
<jsp:include page="public/navbar.jsp"></jsp:include>
<div id='main'>
  <div id='sidebar'>
    <jsp:include page="public/personal.jsp"/>
    <jsp:include page="public/topic_create.jsp"/>
    <jsp:include page="public/col_fade.jsp"/>
    <jsp:include page="public/top_100_10.jsp"/>
  </div>

  <div id="content">
    <div class="panel">
      <div class="header">

        <a href="/?tab=all"
           class="topic-tab current-tab">全部</a>

        <a href="/?tab=good"
           class="topic-tab ">精华</a>

        <a href="/?tab=argue"
           class="topic-tab ">讨论</a>

        <a href="/?tab=ask"
           class="topic-tab ">问答</a>

      </div>
      <div class="inner no-padding">
        <div id="topic_list">
        <c:forEach var="topic" items="${topicList}">
            <div class='cell'>
                <a class="user_avatar pull-left" href="/user/338069">
                    <div class="avatar">${topic.author.email}</div>
                </a>
              <span class="reply_count pull-left">
                <span class="count_of_replies" title="回复数">${topic.reply}</span>
                <span class="count_seperator">/</span>
                <span class="count_of_visits" title='点击数'>${topic.visits}</span>
              </span>
                <a class='last_time pull-right' href="/topic/55b830a3b992cd087855849a#55b8649fb992cd08785584e8">
                    <img class="user_small_avatar" src="/public/avatar/53da80d10ca3ea66e60235e4b636c493">
                    <span class="last_active_time"><ocpsoft:prettytime date="${topic.modifyDateTime}" locale="zh_CN" /></span>
                </a>
                <div class="topic_title_wrapper">
                    <c:choose>
                        <c:when test="${topic.top == true}">
                            <span class="put_top">置顶</span>
                        </c:when>
                        <c:otherwise>
                            <c:choose>
                                <c:when test="${topic.essence == true}">
                                    <span class="put_good">精华</span>
                                </c:when>
                                <c:otherwise>
                                    <c:choose>
                                        <c:when test="${topic.type == 1}">
                                            <span class="topiclist-tab">讨论</span>
                                        </c:when>
                                        <c:otherwise>
                                            <span class="topiclist-tab">问答</span>
                                        </c:otherwise>
                                    </c:choose>
                                </c:otherwise>
                            </c:choose>
                        </c:otherwise>
                    </c:choose>
                    <a class='topic_title' href='/topic/${topic.id}' title='${topic.title}'>
                        ${topic.title}
                    </a>
                </div>
            </div>
        </c:forEach>
        </div>
        <div class='pagination' current_page='1'>
          <ul>
            <li class='disabled'><a>«</a></li>
            <li class='disabled'><a>1</a></li>
            <li><a href='/?page=2'>2</a></li>
            <li><a href='/?page=3'>3</a></li>
            <li><a href='/?page=4'>4</a></li>
            <li><a href='/?page=5'>5</a></li>
            <li><a>...</a></li>
            <li><a href='/?page=32'>»</a></li>

          </ul>
        </div>
        <script>
          $(document).ready(function () {
            var $nav = $('.pagination');
            var current_page = $nav.attr('current_page');
            if (current_page) {
              $nav.find('li').each(function () {
                var $li = $(this);
                var $a = $li.find('a');
                if ($a.html() == current_page) {
                  $li.addClass('active');
                  $a.removeAttr('href');
                }
              });
            }
          });
        </script>
      </div>

    </div>
  </div>

</div>
<div id='backtotop'>回到顶部</div>
<jsp:include page="public/footer.jsp"></jsp:include>
<div id="sidebar-mask"></div>
<script>
//  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//
//  ga('create', 'UA-4175xxxx-x', 'auto');
//  ga('send', 'pageview');
</script>
<script>

  (function(){
    if (!window.addEventListener) return;
    window.addEventListener('load', function(){
      var performance = window.performance;
      if (performance === undefined) return;
      timing = window.performance.timing;
      if (timing === undefined) return;

      if (document.cookie.indexOf('statistics_clientid=') != -1) return;

      var domain_lookup_time = timing.domainLookupEnd - timing.domainLookupStart;
      var connect_time = timing.connectEnd - timing.connectStart;
      var read_content_time = timing.responseEnd - timing.responseStart;

      new Image().src = ('https:' == document.location.protocol ? 'https://' : 'http://')
      + 'stat.dnspod.cn/statistics/'
      + domain_lookup_time + "/"
      + connect_time + "/"
      + read_content_time + ".png";

      var exdate=new Date();
      exdate.setDate(exdate.getDate() + 1);
      document.cookie="statistics_clientid=me"
      + ";expires="+exdate.toGMTString();

    }, false);
  }());
</script>
</body>
</html>

