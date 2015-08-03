<%--
  Created by IntelliJ IDEA.
  User: saoft
  Date: 15/7/31
  Time: 下午4:49
  To change this template use File | Settings | File Templates.
--%>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <!-- meta -->
  <meta charset="utf-8"/>
  <meta name='description' content='理财范社区－真诚透明的理财交流社区'>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="keywords" content="理财范，理财，P2P，互联网金融"/>


  <meta name="author" content="yangwt@licaifan.com" />


  <link title="RSS" type="application/rss+xml" rel="alternate" href="/rss"/>


  <link rel="icon" href="/public/images/icon.ico" type="image/x-icon"/>


  <!-- style -->
  <link rel="stylesheet" href="/public/stylesheets/index.min.3f3868fb.min.css" media="all" />

  <script src="/public/index.min.c7cfae1e.min.js"></script>


  <title>理财范社区－真诚透明的理财交流社区</title>

  <meta content="_csrf" name="csrf-param">
  <meta content="GJ82JtPQ-_Ldd8zPxAEDzHSKMfh936N9KCLY" name="csrf-token">
  <!-- 创建微博 App 的验证信息 -->
  <meta property="wb:webmaster" content="27df391315f023b0" />
</head>
<body>
<!-- navbar -->
<div class='navbar'>
  <div class='navbar-inner'>
    <div class='container'>
      <a class='brand' href='/'>

        <img src="/public/images/logo.png" />

      </a>

      <form id='search_form' class='navbar-search' action="/search">
        <input type='text' id='q' name='q' class='search-query span3' value=''/>
      </form>
      <ul class='nav pull-right'>
        <li><a href='/'>首页</a></li>

        <li>
          <a href='/my/messages'>

            <span class='big messages_count'>1</span>

            未读消息
          </a>
        </li>




        <li><a href='/setting'>设置</a></li>
        <li>
          <a href='/signout' data-method="post" rel="nofollow">退出</a>
        </li>

      </ul>
      <a class="btn btn-navbar" id="responsive-sidebar-trigger">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
    </div>
  </div>
</div>
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
                <span class='big'>10</span> 积分
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
                _csrf: 'GJ82JtPQ-_Ldd8zPxAEDzHSKMfh936N9KCLY'
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




    <!--
    <div class='panel'>
      <div class='inner ads'>



          <a href="http://www.licaifan.com/activity/page?view=fanlive_entrance" target="_blank" class="banner sponsor_outlink"
        data-label="Fan Live">
            <img src="/public/images/fanlive.jpg">
          </a>

      </div>
    </div>
    -->







    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>友情社区</span>
      </div>
      <div class='inner'>
        <ol class="friendship-community">
          <li>
            <a href="https://www.licaifan.com/" target="_blank">
              理财范 - 真诚透明的互联网理财平台
            </a>
          </li>
          <div class="sep10"></div>
          <!--<li>
            <a href="http://golangtc.com/" target="_blank">
              <img src="/public/images/golangtc-logo.png">
            </a>
          </li>
          <div class="sep10"></div>
          <li>
            <a href="http://phphub.org/" target="_blank">
              <img src="/public/images/phphub-logo.png">
            </a>
          </li>-->
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


      <div class='cell message' message_id='55bb2e57b992cd0878558739'>


		<span>
			<a href="/user/288011" target='_blank'>子然的小愚</a>
			回复了你的话题
			<a href="/topic/55bb2cfcb992cd0878558731#55bb2e57b992cd0878558738" target='_blank'>出来匝道 这个东西要怎么玩呀 求带</a>
		</span>






	<span class="marked_icon mark_read_btn">
		<img class='unread'
             src='/public/images/checkmark_icon&16.png'
             title='消息已读'
                />
	</span>

      </div>


    </div>
    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>过往信息</span>
      </div>

      <div class='inner'>
        <p>无消息</p>
      </div>

    </div>
  </div>

</div>
<div id='backtotop'>回到顶部</div>
<div id='footer'>
  <div id='footer_main'>
    <div class="links">
      © 2015 理财范 All rights reserved
      <!--<a class='dark' href='/rss'>RSS</a>
      |
      <a class='dark' href='https://github.com/cnodejs/nodeclub/'>源码地址</a>
      -->
    </div>

    <!--<div class='col_fade'>
  <p>服务器搭建在
    <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank"
      class="sponsor_outlink" data-label="digitalocean">
      <img src="/public/images/digitalocean.png" title="digitalocean"
      alt="UCloud云主机" width="92px"/>
    </a>
  ，存储赞助商为
    <a href="http://www.qiniu.com/?ref=cnode" target="_blank"
      class="sponsor_outlink" data-label="qiniu_bottom">
      <img src="/public/images/qiniu.png" title="七牛云存储"
      alt="七牛云存储" width="115px"/>
    </a>
  </p>
</div>
-->

  </div>
</div>
<div id="sidebar-mask"></div>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-4175xxxsadfx-x', 'auto');
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

