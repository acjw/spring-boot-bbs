<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
  <meta content="O5ODwq8m-gtVsHqXiloLIykdxTz7Kt84nGI8" name="csrf-token">
  <!-- 创建微博 App 的验证信息 -->
  <meta property="wb:webmaster" content="27df391315f023b0" />
</head>
<body>
<!-- navbar -->
<jsp:include page="public/navbar.jsp"></jsp:include>
<div id='main'>
  <div id='sidebar'>

    <div class='panel'>

      <div class='header'>
        <span class='col_fade'>个人信息</span>
      </div>
      <div class='inner'>
        <div class='user_card'>
          <div>

            <a class='user_avatar' href="/user/373049">
              <img src="/public/avatar/b7a4f57af0198a33256c43ae67186ef7" title="182******89"/>
            </a>
            <span class='user_name'><a class='dark' href="/user/373049">182******89</a></span>

            <div class='board clearfix'>
              <div class='floor'>
                <span class='big'>0</span> 积分
              </div>
            </div>

            <div class="space clearfix"></div>
    <span class="signature">
        “

            这家伙很懒，什么个性签名都没有留下。

        ”
    </span>
          </div>
        </div>


        <script>
          $(document).ready(function () {
            $('.follow_btn').click(function () {
              var $me = $(this);
              var action = $me.attr('action');
              var params = {
                follow_id: '55b869dcb992cd08785584f6',
                _csrf: 'O5ODwq8m-gtVsHqXiloLIykdxTz7Kt84nGI8'
              };
              $.post('/user/' + action, params, function (data) {
                if (data.status === 'success') {
                  var $btns = $('.follow_btn');
                  if (action === 'follow') {
                    $btns.html('取消关注');
                    $btns.attr('action', 'un_follow');
                  } else {
                    $btns.html('加入关注');
                    $btns.attr('action', 'follow');
                  }
                  $btns.toggleClass('btn-success');
                }
              }, 'json');
            });
          });
        </script>


      </div>

    </div>


    <div class="panel">
      <div class='inner'>
        <a href='/topic/create' id='create_topic_btn'>
          <span class='span-success'>发布话题</span>
        </a>
      </div>
    </div>


    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>友情社区</span>
      </div>
      <div class='inner'>
        <ol class="friendship-community">
          <li>
            <a href="https://www.saoft.com/" target="_blank">
              英雄计划 - 真诚透明的互联网约束自己平台
            </a>
          </li>
          <div class="sep10"></div>
        </ol>
      </div>
    </div>

  </div>


  <div id='content'>
    <div class='panel'>
      <div class='header'>
        <ul class='breadcrumb'>
          <li><a href='/'>主页</a><span class='divider'>/</span></li>
          <li class='active'>新消息</li>
        </ul>
      </div>
      <c:forEach var="unknown" items="${unReadMessage}">
          <div class='cell message' message_id='${unknown.id}'>
            <span>
                <a href="/user/${unknown.sponsor.id}" target='_blank'>${unknown.sponsor.nickname}</a>
                回复了你的话题
                <a href="/topic/${unknown.topic.id}#${unknown.id}message" target='_blank'>${unknown.topic.title}</a>
            </span>
            <span class="marked_icon mark_read_btn">
                <img class='unread' src='/public/images/checkmark_icon&16.png' title='新消息'/>
            </span>
          </div>
        </c:forEach>


    </div>
    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>过往信息</span>
      </div>
      <c:forEach var="known" items="${readMessage}">
        <div class='cell' message_id='${known.id}'>
		<span>
			<a href="/user/${known.sponsor.id}" target='_blank'>${known.sponsor.nickname}</a>
			回复了你的话题
			<a href="/topic/${known.topic.id}#${known.id}message" target='_blank'>${known.topic.title}</a>
		</span>
          <span class="marked_icon"><img src='/public/images/checkmark_icon&16.png' title='消息已读'/></span>
        </div>
      </c:forEach>
    </div>
  </div>

</div>
<div id='backtotop'>回到顶部</div>
<jsp:include page="public/footer.jsp"></jsp:include>
<div id="sidebar-mask"></div>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-4175xsdxxx-x', 'auto');
  ga('send', 'pageview');
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

