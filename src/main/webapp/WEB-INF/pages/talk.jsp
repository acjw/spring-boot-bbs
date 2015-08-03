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
  <meta content="7Q8yf85p-Pi69xXRbDslbPmEWQujGFFz1Tik" name="csrf-token">
  <!-- 创建微博 App 的验证信息 -->
  <meta property="wb:webmaster" content="27df391315f023b0" />
</head>
<body>
<!-- navbar -->
<jsp:include page="public/navbar.jsp"></jsp:include>
<div id='main'>
  <div id='sidebar'>
    <!--
    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>Markdown 语法参考</span>
      </div>
      <div class='inner'>
        <ol>
          <li><tt>### 单行的标题</tt></li>
          <li><tt>**粗体**</tt></li>
          <li><tt>`console.log('行内代码')`</tt></li>
          <li><tt>```js\n code \n```</tt> 标记代码块</li>
          <li><tt>[内容](链接)</tt></li>
          <li><tt>![文字说明](图片链接)</tt></li>
        </ol>
        <span><a href='http://www.ituring.com.cn/article/775' target='_blank'>Markdown 文档</a></span>
      </div>
    </div>
    -->
    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>话题发布指南</span>
      </div>
      <div class='inner'>
        <ol>
          <li>尽量把话题要点浓缩到标题里</li>
          <li>请保持客观中立的原则进行发言</li>
          <li>给话题选择合适的标签能增加浏览</li>
          <li>请尊重别人的发言，友善交流</li>
          <li>互帮互助，用知识去帮助别人</li>
          <li>发布广告、谩骂、人身攻击将会被永久封禁</li>
        </ol>
      </div>
    </div>

  </div>


  <div id='content'>
    <div class='panel'>
      <div class='header'>
        <ol class='breadcrumb'>
          <li><a href='/'>主页</a><span class='divider'>/</span></li>

          <li class='active'>发布话题</li>

        </ol>
      </div>
      <div class='inner post'>



        <form id='create_topic_form' action='/topic/save' method='post'>

          <fieldset>
            <span class="tab-selector">选择版块：</span>
            <select name="tab" id="tab-value">
              <option value="">请选择</option>
              <option value="argue" >讨论</option>
              <option value="ask" >问答</option>
            </select>
            <span id="topic_create_warn"></span>
            <textarea autofocus class='span9' id='title' name='title' rows='1'
                      placeholder="标题字数 10 字以上"
                    ></textarea>
            <div class='markdown_editor in_editor'>
              <div class='markdown_in_editor'>
                <textarea class='editor' name='t_content' rows='20'
                          placeholder='文章支持 Markdown 语法, 请注意标记代码'
                        ></textarea>
                <div class='editor_buttons'>
                  <input type="submit" class='span-primary submit_btn' data-loading-text="提交中"
                         value="提交">
                </div>
              </div>
            </div>
            <input type='hidden' id='topic_tags' name='topic_tags' value=''>
            <input type='hidden' name='_csrf' value='7Q8yf85p-Pi69xXRbDslbPmEWQujGFFz1Tik'>
          </fieldset>
        </form>
      </div>

    </div>
  </div>

  <!-- markdown editor -->
  <script src="/static/js/editor.min.js"></script>
  <script src="/static/plugins/jquery.form.min.js"></script>

  <script>
    (function () {
      var editor = new Editor();
      editor.render($('.editor')[0]);

      // 版块选择的检查，必须选择
      $('#create_topic_form').on('submit', function (e) {
        var tabValue = $('#tab-value').val();
        if (!tabValue) {
          alert('必须选择一个版块！');
          $('.submit_btn').button('reset');
          $('.tab-selector').css('color', 'red');
          return false;
        }
      });
      // END 版块选择的检查，必须选择

      $("#create_topic_form").ajaxForm(function (data) {
        if(data&&data.code==200) {
          location.href = "/";
        }else{
          alert(data.message + "-" + data.errMsg);
        }
      });
      // 选择招聘版块时，给出提示
      $('#tab-value').on('change', function () {
        var $this = $(this);
        var value = $this.val();
        var warnMsg = '';
        if (value === 'job') {
          warnMsg = '<strong>为避免被管理员删帖，发帖时请好好阅读<a href="http://cnodejs.org/topic/541ed2d05e28155f24676a12" target="_blank">《招聘帖规范》</a></strong>';
        } else if (value === 'ask') {
          warnMsg = '<strong>提问时，请遵循 <a href="http://www.beiww.com/doc/oss/smart-questions.html" target="_blank">《提问的智慧》</a>中提及的要点，以便您更接收到高质量回复。</strong>'
        }
        $('#topic_create_warn').html(warnMsg);
      });
      // END 选择招聘版块时，给出提示
    })();
  </script>

</div>
<div id='backtotop'>回到顶部</div>
<jsp:include page="public/footer.jsp"></jsp:include>
<div id="sidebar-mask"></div>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-4175xxxx-x', 'auto');
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

