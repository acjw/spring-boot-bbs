<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="ocpsoft" uri="http://ocpsoft.org/prettytime/tags" %>
<%@ taglib prefix="markdown4j" uri="http://saoft.org/markdown4j/tags" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <!-- meta -->
  <meta charset="utf-8"/>
  <meta name='description' content='理财范社区－真诚透明的理财交流社区'>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="keywords" content="理财范，理财，P2P，互联网金融"/>

  <jsp:include page="public/header.jsp"></jsp:include>

  <title>${topic.title}</title>

  <meta content="_csrf" name="csrf-param">
  <meta content="K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc" name="csrf-token">
  <!-- 创建微博 App 的验证信息 -->
  <meta property="wb:webmaster" content="27df391315f023b0" />
</head>
<body>
<!-- navbar -->
<jsp:include page="public/navbar.jsp"></jsp:include>
<div id='main'>
  <div id='sidebar'>
      <jsp:include page="public/author.jsp"/>
      <jsp:include page="public/author_other_topic.jsp"/>
      <jsp:include page="public/col_fade.jsp"/>
  </div>

  <div id='content'>
    <div class='panel'>
      <div class='header topic_header'>
      <span class="topic_full_title">
        ${topic.title}
      </span>
        <div class="action">
          <span class='span-common span-success' id='collect_btn' action='collect'>加入收藏</span>
        </div>
        <div class="changes">
        <span><ocpsoft:prettytime date="${topic.modifyDateTime}" locale="zh_CN" /></span>
        <span class="topic_">
          作者 <a href="/user/${topic.author.id}">${topic.author.nickname}</a>
        </span>
        <span>
          ${topic.visits} 次浏览
        </span>
          <span> 来自 <c:if test="${topic.type==1}">讨论</c:if><c:if test="${topic.type==2}">问答</c:if></span>
        </div>

        <div id="manage_topic">
        </div>

      </div>
      <div class='inner topic'>

        <div class='topic_content'>
          <div class="markdown-text">
              <markdown4j:markdown4j input="${topic.content}"/>
          </div>
        </div>
        <div class="share" style="display: none">
          <!-- JiaThis Button BEGIN -->
          <div class="jiathis_style_24x24">
            <a class="jiathis_button_qzone"></a>
            <a class="jiathis_button_tsina"></a>
            <a class="jiathis_button_tqq"></a>
            <a class="jiathis_button_weixin"></a>
            <a class="jiathis_button_renren"></a>
            <a class="jiathis_counter_style"></a>
          </div>
          <script type="text/javascript" src="http://v3.jiathis.com/code/jia.js" charset="utf-8"></script>
          <!-- JiaThis Button END -->
        </div>
      </div>
    </div>
    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>${fn:length(replyList)} 回复</span>
      </div>
        <c:forEach var="reply" items="${replyList}" varStatus="status">
            <div class='cell reply_area reply_item user_${reply.sponsor.userLevel}' id="reply${status.index+1}" reply_id="${reply.reply.id}" reply_to_id="">
                <a class="anchor" id="${reply.reply.id}"></a>
                <div class='author_content'>
                  <a href="/user/${reply.sponsor.id}" class="user_avatar">
                      <div class="avatar">${reply.sponsor.email}</div></a>
                  <div class='user_info'>
                    <a class='dark reply_author' href="/user/${reply.sponsor.id}">
                        ${reply.sponsor.nickname}
                    </a>
                    <a class="reply_time" href="#${reply.reply.id}">${status.index+1}楼•<ocpsoft:prettytime date="${reply.replyDateTime}" locale="zh_CN" /></a>
                  </div>
                  <div class='user_action'>
                  <span>
                    <i class="fa up_btn
                      fa-thumbs-o-up
                      invisible" title="喜欢"></i>
                    <span class="up-count"></span>
                  </span>
                  <span>
                      <i class="fa fa-reply reply2_btn" title="回复"></i>
                  </span>
                  </div>
                </div>
                <div class='reply_content from-338223'>
                  <div class="markdown-text">
                      <markdown4j:markdown4j input="${reply.content}"/>
                  </div>
                </div>
                <div class='clearfix'>
          <div class='reply2_area'>
            <form class='reply2_form reply_form' action='/${topic.id}/reply' method='post'>
              <input type='hidden' name='_csrf' value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
              <input type='hidden' name='reply_id' value='${reply.reply.id}'/>

              <div class='markdown_editor in_editor'>
                <div class='markdown_in_editor'>
            <textarea class='span8 editor reply_editor'
                      id="reply2_editor_55b87c80b992cd0878558511" name='r_content' rows='4'></textarea>
                  <div class='editor_buttons'>
                    <input class='span-primary reply2_submit_btn submit_btn'
                           type="submit" data-id='55b87c80b992cd0878558511' data-loading-text="回复中.." value="回复">
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
            </div>
        </c:forEach>
    </div>


    <div class='panel'>
      <div class='header'>
        <span class='col_fade'>添加回复</span>
      </div>
      <div class='inner reply'>
        <form class="reply_form" id='reply_form' action='/${topic.id}/reply' method='post'>
          <div class='markdown_editor in_editor'>
            <div class='markdown_in_editor'>
              <textarea class='editor' name='r_content' rows='8'></textarea>
              <div class='editor_buttons'>
                <input class='span-primary submit_btn' type="submit" data-loading-text="回复中.." value="回复">
              </div>
            </div>
          </div>
          <input type='hidden' name='_csrf' id="_csrf" value='K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'/>
        </form>
      </div>
    </div>
  </div>

  <div id="tpppp"></div>
  <div class="replies_history">
    <div class="inner_content"></div>
    <div class="anchor"></div>
  </div>

  <!-- markdown editor -->
  <script src="/static/js/editor.min.js"></script>
    <script src="/static/plugins/jquery.form.min.js"></script>

  <script>
    $(document).ready(function () {

      // 获取所有回复者name
      var allNames = $('.reply_author').map(function (idx, ele) {
        return $(ele).text().trim();
      }).toArray();
      allNames = _.uniq(allNames);
      // END 获取所有回复者name

      // 编辑器相关
      $('textarea.editor').each(function(){
        var editor = new Editor({
          status: []
        });
        var $el = $(this);

        editor.render(this);
        //绑定editor
        $(this).data('editor', editor);

        var $input = $(editor.codemirror.display.input);
        $input.keydown(function(event){
          if (event.keyCode === 13 && (event.ctrlKey || event.metaKey)) {
            event.preventDefault();
            $el.closest('form').submit();
          }
        });

        // at.js 配置
        var codeMirrorGoLineUp = CodeMirror.commands.goLineUp;
        var codeMirrorGoLineDown = CodeMirror.commands.goLineDown;
        var codeMirrorNewlineAndIndent = CodeMirror.commands.newlineAndIndent;
        $input.atwho({
          at: '@',
          data: allNames
        })
                .on('shown.atwho', function () {
                  CodeMirror.commands.goLineUp = _.noop;
                  CodeMirror.commands.goLineDown = _.noop;
                  CodeMirror.commands.newlineAndIndent = _.noop;
                })
                .on('hidden.atwho', function () {
                  CodeMirror.commands.goLineUp = codeMirrorGoLineUp;
                  CodeMirror.commands.goLineDown = codeMirrorGoLineDown;
                  CodeMirror.commands.newlineAndIndent = codeMirrorNewlineAndIndent;
                });
        // END at.js 配置

      });
      // END 编辑器相关

      // 评论回复
      $('#content').on('click', '.reply2_btn', function (event) {
        var $btn = $(event.currentTarget);
        var parent = $btn.closest('.reply_area');
        var editorWrap = parent.find('.reply2_form');
        parent.find('.reply2_area').prepend(editorWrap);
        var textarea = editorWrap.find('textarea.editor');
        var user = $btn.closest('.author_content').find('.reply_author').text().trim();
        var editor = textarea.data('editor');
        editorWrap.show('fast', function () {
          var cm = editor.codemirror;
          cm.focus();
          if(cm.getValue().indexOf('@' + user) < 0){
            editor.push('@' + user + ' ');
          }
        });
      });

      $('#content').on('click', '.reply2_at_btn', function (event) {
        var $btn = $(event.currentTarget);
        var editorWrap = $btn.closest('.reply2_area').find('.reply2_form');
        $btn.closest('.reply2_item').after(editorWrap);
        var textarea = editorWrap.find('textarea.editor');
        var user = $btn.closest('.reply2_item').find('.reply_author').text().trim();
        var editor = textarea.data('editor');
        editorWrap.show('fast', function () {
          var cm = editor.codemirror;
          cm.focus();
          if(cm.getValue().indexOf('@' + user) < 0){
            editor.push('@' + user + ' ');
          }
        });
      });
      // END 评论回复

      // 加入收藏
      $('#collect_btn').click(function () {
        var $me = $(this);
        var action = $me.attr('action');
        var data = {
          topic_id: '55b87beeb992cd0878558510',
          _csrf: 'K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc'
        };
        var $countSpan = $('.collect-topic-count');
        $.post('/topic/' + action, data, function (data) {
          if (data.status === 'success') {
            if (action == 'collect') {
              $me.text('取消收藏');
              $me.attr('action', 'de_collect');
            } else {
              $me.text('加入收藏');
              $me.attr('action', 'collect');
            }
            $me.toggleClass('span-success');
          }
        }, 'json');
      });
      // END 加入收藏

      // 删除回复
      $('#content').on('click', '.delete_reply_btn, .delete_reply2_btn', function (event) {
        var $me = $(event.currentTarget);
        if (confirm('确定要删除此回复吗？')) {
          var reply_id = null;
          if ($me.hasClass('delete_reply_btn')) {
            reply_id = $me.closest('.reply_item').attr('reply_id');
          }
          if ($me.hasClass('delete_reply2_btn')) {
            reply_id = $me.closest('.reply2_item').attr('reply_id');
          }
          var data = {
            reply_id: reply_id,
            _csrf: "K0D3Q979-jiQpBaoVa2iw11GDG6sl8wfBVhc"
          };
          $.post('/reply/' + reply_id + '/delete', data, function (data) {
            if (data.status === 'success') {
              if ($me.hasClass('delete_reply_btn')) {
                $me.closest('.reply_item').remove();
              }
              if ($me.hasClass('delete_reply2_btn')) {
                $me.closest('.reply2_item').remove();
              }
            }
          }, 'json');
        }
        return false;
      });
      // END 删除回复

      // 删除话题
      $('.delete_topic_btn').click(function () {
        var topicId = $(this).data('id');
        if (topicId && confirm('确定要删除此话题吗？')) {
          $.post('/topic/' + topicId + '/delete', { _csrf: $('#_csrf').val() }, function (result) {
            if (!result.success) {
              alert(result.message);
            } else {
              location.href = '/';
            }
          });
        }
        return false;
      });
      // END 删除话题

      // 用户 hover 在回复框时才显示点赞按钮
      $('.reply_area').hover(
              function () {
                $(this).find('.up_btn').removeClass('invisible');
              },
              function () {
                var $this = $(this);
                if ($this.find('.up-count').text().trim() === '') {
                  $this.find('.up_btn').addClass('invisible');
                }
              });
      // END 用户 hover 在回复框时才显示点赞按钮

      $('.reply_form ').ajaxForm(function (data) {
        if (data.code==200) {
          location.href = "/topic/${topic.id}";
        }else{
          alert(data.msssage+data.msgErr);
        }
      });
    });

  </script>


  <script type="text/javascript">
    (function(){
      var timer = null; //对话框延时定时器
      // 初始化 $('.replies_history')
      var $repliesHistory = $('.replies_history');
      var $repliesHistoryContent = $repliesHistory.find('.inner_content');
      $repliesHistory.hide();
      // END
      // 鼠标移入对话框清除隐藏定时器；移出时隐藏对话框
      $repliesHistory.on('mouseenter', function(){
        clearTimeout(timer);
      }).on('mouseleave', function(){
        $repliesHistory.fadeOut('fast');
      });
      // 显示被 at 用户的本页评论
      if ($('.reply2_item').length === 0) {
        // 只在流式评论布局中使用

        $('#content').on('mouseenter', '.reply_content a', function (e) {
          clearTimeout(timer);
          var $this = $(this);
          if ($this.text()[0] === '@') {
            var thisText = $this.text().trim();
            var loginname = thisText.slice(1);
            var offset = $this.offset();
            var width = $this.width();
            var mainOffset = $('#main').offset();
            $repliesHistory.css('left', offset.left-mainOffset.left+width+10); // magic number
            $repliesHistory.css('top', offset.top-mainOffset.top-10); // magic number
            $repliesHistory.css({
              'z-index': 1
            });
            $repliesHistoryContent.empty();
            var chats = [];
            var replyToId = $this.closest('.reply_item').attr('reply_to_id');
            while (replyToId) {
              var $replyItem = $('.reply_item[reply_id=' + replyToId + ']');
              var replyContent = $replyItem.find('.reply_content').text().trim();
              if (replyContent.length > 0) {
                chats.push([
                  $replyItem.find('.user_avatar').html(), // avatar
                  (replyContent.length>300?replyContent.substr(0,300)+'...':replyContent), // reply content
                  '<a href="#'+replyToId+'" class="scroll_to_original" title="查看原文">↑</a>'
                ]);
              }
              replyToId = $replyItem.attr('reply_to_id');
            }
            if(chats.length > 0) {
              chats.reverse();

              $repliesHistoryContent.append('<div class="title">查看对话</div>');
              chats.forEach(function (pair, idx) {
                var $chat = $repliesHistoryContent.append('<div class="item"></div>');
                $chat.append(pair[0]); // 头像
                $chat.append($('<span>').text(pair[1])); // 内容
                $chat.append(pair[2]); // 查看原文 anchor
              });
              $repliesHistory.fadeIn('fast');
            }else{
              $repliesHistory.hide();
            }
          }
        }).on('mouseleave', '.reply_content a', function (e) {
          timer = setTimeout(function(){
            $repliesHistory.fadeOut('fast');
          }, 500);
        });
      }
      // END 显示被 at 用户的本页评论
    })();

    // 点赞
    $('.up_btn').click(function (e) {
      var $this = $(this);
      var replyId = $this.closest('.reply_area').attr('reply_id');
      $.ajax({
        url: '/reply/' + replyId + '/up',
        method: 'POST'
      }).done(function (data) {
        if (data.success) {
          $this.removeClass('invisible');
          var currentCount = Number($this.next('.up-count').text().trim()) || 0;
          if (data.action === 'up') {
            $this.next('.up-count').text(currentCount + 1);
            $this.addClass('uped');
          } else {
            if (data.action === 'down') {
              $this.next('.up-count').text(currentCount - 1);
              $this.removeClass('uped');
            }
          }
        } else {
          alert(data.message);
        }
      }).fail(function (xhr) {
        if (xhr.status === 403) {
          alert('请先登录，登陆后即可点赞。');
        }
      });
    });
    // END 点赞
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

  ga('create', 'UA-4175adsxxxx-x', 'auto');
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

