<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <!-- meta -->
  <meta charset="utf-8"/>
  <meta name='description' content='英雄计划社区－真诚透明的理财交流社区'>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="keywords" content="英雄计划，理财，P2P，互联网金融"/>

  <jsp:include page="public/header.jsp"></jsp:include>

  <title>英雄计划社区－真诚透明的理财交流社区</title>

  <meta content="_csrf" name="csrf-param">
  <meta content="o1FrAKKl-q7p3D2XgD9NRSk_QsYhk3z7uhjk" name="csrf-token">
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
        <li><a href='/signin'>登录</a></li>
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
        <span class='col_fade'>关于</span>
      </div>
      <div class='inner'>
        <p>英雄计划社区－真诚透明的理财交流社区</p>

        <p>在这里你可以：</p>
        <ul>
          <li>向别人提出你遇到的问题</li>
          <li>帮助遇到问题的人</li>
          <li>分享自己的知识</li>
          <li>和其它人一起进步</li>
        </ul>
      </div>
    </div>
  </div>

  <div id='content'>
    <div class='panel'>
      <div class='header'>
        <ul class='breadcrumb'>
          <li><a href='/'>主页</a><span class='divider'>/</span></li>
          <li class='active'>登录</li>
        </ul>
      </div>
      <div class='inner'>
        <form id='signin_form' class='form-horizontal' action='/user/login' method='post'>
          <div class='control-group'>
            <label class='control-label' for='prompt'></label>
            <div class='controls'>
              请输入您的英雄计划账号进行登录
            </div>
          </div>
          <div class='control-group'>
            <label class='control-label' for='name'>手机</label>
            <div class='controls'>
              <input class='input-xlarge' id='name' name='username' size='30' type='text'/>
            </div>
          </div>
          <div class='control-group'>
            <label class='control-label' for='pass'>密码</label>
            <div class='controls'>
              <input class='input-xlarge' id='pass' name='password' size='30' type='password'/>
            </div>
          </div>
          <input type='hidden' name='_csrf' value='o1FrAKKl-q7p3D2XgD9NRSk_QsYhk3z7uhjk'/>
          <div class='form-actions'>
            <input type='submit' class='span-primary' value='登录'/>
            <!--<a href="/auth/github">
              <span class="span-info">
                通过 GitHub 登录
              </span>
            </a>
            <a id="forgot_password" href='/search_pass'>忘记密码了?</a>-->
          </div>
        </form>
        <script>
          $(function() {
            /*var url = "https://www.licaifan.com/appapi/servertime";

             function server_time(){
             $.ajax({
             url: url,
             success: function(res){
             console.log(res);
             }
             });
             }

             var xmlHttp = null;

             xmlHttp = new XMLHttpRequest();
             xmlHttp.open( "GET", url, false );
             xmlHttp.send( null );
             console.log(xmlHttp.responseText);*/

            //server_time();
          });

        </script>
      </div>
    </div>
  </div>
</div>
<div id='backtotop'>回到顶部</div>
<jsp:include page="public/footer.jsp"></jsp:include>
<div id="sidebar-mask"></div>

<script src="/static/plugins/jquery.form.min.js"></script>
<script>
  $(document).ready(function(){
    $("#signin_form").ajaxForm(function (data) {
      if(data&&data.code==200) {
        location.href = "/";
      }else{
        alert(data.message + "-" + data.errMsg);
      }
    });
  });
</script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-sdf-x', 'auto');
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
