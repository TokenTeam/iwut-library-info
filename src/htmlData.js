export const htmlData = `













<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>

    <script type="text/javascript">
var $$opac_bookcover = "http://book-resource.dataesb.com/websearch/metares";
</script>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">


<link rel="stylesheet" type="text/css" href="/opac/media/style/default/main.css"></link>

















  <script src="/opac/media/js/jquery/js-one.six.two.min.js" type="text/javascript" ></script>
  <script>
/*加载失败切换本地js库方法*/
if (!window.jQuery) {
  console.log("加载js失败，切换路径");
  document.write('<script src=\"/opac/media/js/jquery/js-one.six.two.min.js\" type=\"text/javascript\"><\/script>');
}
</script>


<script type="text/javascript" src="/opac/media/js/jquery/jquery.cookie.js"></script>
  <script type="text/javascript" src="/opac/media/js/highcharts-2.1.6/highcharts.js"></script>
  <script type="text/javascript" src="/opac/media/js/highcharts-2.1.6/themes/grid.js"></script>
  <script type="text/javascript" src="/opac/media/js/common/common.js"></script>
  <script type="text/javascript" src="/opac/media/js/common/bookcover.js"></script>
  <script type="text/javascript" src="/opac/media/js/common/banned.js"></script>
  <script type="text/javascript" src="/opac/media/js/common/colldata-1.1215.full.js" charset="utf-8"></script>
		<!--[if IE 6]>
<script type="text/javascript" src="/opac/media/js/jquery/DD_belatedPNG.js"></script>
  <script>
  DD_belatedPNG.fix('li');
DD_belatedPNG.fix('#searchDiv .inputs .left');
DD_belatedPNG.fix('.logoimg');
</script>
<![endif]-->
<script>
// 初始化 SDK
var sensors = window['TcDataCollectWebSDK'];
var initAppid = 'U1HBE027001';





sensors.init({
  app_id: initAppid,
  show_log: true,   // 是否打印日志信息
  heatmap: {
    /**
     * 1. 默认 $WebClick 只采集 a，button，input ，textarea 四个 dom 元素的点击事件。
     * 2. default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭。
     */
    clickmap:'default',

    // 配置不采集元素点击事件 true:采集   false:不采集
    collect_element: function(element_target){
      return !$(element_target).is("INPUT");
    },

    // default 表示开启，自动采集 $WebStay 事件，滚屏是触发，但页面停留必须过4秒后（可自定义）；可以设置 'not_collect' 表示关闭。
    scroll_notice_map:'not_collect',
    // 设置有效停留时长， 毫秒，默认是4000毫秒
    scroll_delay_time: 6000
  },
  preset_properties: {
    //是否采集 $url 页面地址作为公共属性，默认值 false
    url: true,
    //是否采集 $title 页面标题作为公共属性，默认值 false
    title: true,
  }
});

// 设置之后，SDK 就会自动收集页面浏览事件($pageview), 默认是关闭的
sensors.quick('autoTrack')

// 手动调用, 用户自定义埋点
function trackSearch(word) {
  sensors.track('OpacSearch', {
    KeyWord: word
  });
}

function trackLogin(rdid) {
  sensors.login(rdid, function () {

  });
}

function trackLogout() {
  sensors.logout(false);

}

</script>




<script type="text/javascript">
  $.cookie("org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE", "zh", {path:"/"});

</script>



<script type="text/javascript" src="/opac/media/js/i18n/message_zh.js"></script>

  <script type="text/javascript" src="/opac/media/js/common/charts.js"></script>
  <!-- 国际化支持 -->
  <script type="text/javascript" src="/opac/media/js/common/i18nUtil.js"></script>
  <script type="text/javascript" src="/opac/media/js/common/space.js"></script>


  <link rel="stylesheet" type="text/css" href="/opac/media/style/default/space.css" />

<link rel="shortcut icon" href="/opac/media/images/favicon.ico" type="image/vnd.microsoft.icon" />
<link rel="icon" href="/opac/media/images/favicon.ico" type="image/vnd.microsoft.icon" />
  <title></title>
  <!-- 使用jqueryui引用的js和css -->













  <link rel="stylesheet" type="text/css" href="/opac/media/js/jquery-ui-1.8.16/css/smoothness/js-ui-one.eight.onesix.custom.css"></link>
  <script type="text/javascript" src="/opac/media/js/jquery-ui-1.8.16/js/js-ui-one.eight.onesix.custom.min.js"></script>
  <!-- 书目浏览用到的tree的js和css -->

  <!-- meta keywords, etc -->
  <meta name="referrer" content="same-origin" />












<meta name="referrer" content="same-origin" />



<meta name="keywords" content="opac, 图创, interlib, 图书检索, 借书, , 武汉理工大学图书馆" />



  </head>
  <body>


  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">












<script type="text/javascript" src="/opac/media/js/common/md5util.js"></script>

  <style>
  <!--
.selected {
  font-weight: bold;
}
-->
.n-model-wrapper{
  width:100%;
  height:100%;
  background-color: black;
  filter: alpha(Opacity=40);
  -moz-opacity: 0.4;
  opacity: 0.4;
  position: fixed;
  left:0;
  top:0;
  z-index: 999;
  display: none;
}
.n-model-content{
  width:800px;
  height:600px;
  background-color: white;
  position: fixed;
  left:40%;
  top:150px;
  margin-left:-250px;
  z-index: 1000;
  border-radius:10px;
  font-size: 14px;
  display: none;
}
.n-model-prompt{
  height:560px;
  box-sizing: border-box;
  overflow-y: auto;
}
.n-model-prompt li{
  line-height: 35px;
  padding:0 30px;
}
.n-model-prompt h3 {
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #EEEEEE;
  margin: 0;
  border-radius:10px;
}
.n-model-close{
  height:40px;
  text-align: center;
}




</style>
<script>
(function () {
  var script = document.createElement("script")
  script.type = "text/javascript";
  script.src = "/opac/media/js/common/aiSupport.js";


  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(script, s);
})();
</script>

<script type="text/javascript">
  function logout(){
    trackLogout();
    location.href="/opac/reader/logout";
  }

$(document).ready(function(){

  $(".navbar_menu_items ul li").hover(function(){
    $(this).children("ul").slideDown(200);
  },function(){
    $(this).children("ul").slideUp(50);
  });

  var lang = $.cookie("org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE", {path:"/"});
  if(lang == 'en' || lang == 'ko' || lang == 'ja') {
    $(".navbar_info_en").show();
    $(".navbar_info_zh").css("display","none");
    var maxLength = document.body.clientWidth;
    var menuStr = 0;


    menuStr += "navigator.search.simpleSearch".length*4+24;



    menuStr += "navigator.browse".length*4+24;



    menuStr += "navigator.journal".length*4+24;



    menuStr += "navigator.space".length*4+24;





    menuStr += "navigator.newpub".length*4+24;



















    menuStr += "navigator.bookSpecial".length*4+24;



    menuStr += "navigator.recommend".length*4+24;




    if(menuStr+320>maxLength){
      $("#navbar").css("height","60px");
      $("#navar_ul").css("float","none");
    }
  }


  //发布转借

  //发布转借

  $("a#releaseUL").attr("href","javascript:void(0)").click(function(){

    var readerHomeUrl="";
    var url="/opac/interface/readerHome/ReaderHomeLogin";
    $.ajax({
      url:url,
      async:false,
      success:function(data){
// 					alert(data);
        if(data=="0"){
          alert("请先登录");
          window.location.href="/opac/reader/login";
          return ;
        }
        if(data=="500"){
          alert("err500");
          return;
        }
        readerHomeUrl=data;
      }
    });
    if(readerHomeUrl!=""){
      console.log("readerHomeUrl:"+readerHomeUrl);
      $.ajax({
        type : "GET",
        url : readerHomeUrl,
        dataType : 'jsonp',
        jsonp : 'callback',
        dataType : 'jsonp',
        success : function(data) {
          window.location.href=data;
        }
      });
// 				window.open(readerHomeUrl,"_blank");
    }
  });
});


</script>
<!-- 云南司法警官职业学院 -->





<div id="navbar"





>
<div class="navbar_bd" >
<div class="navbar_menu_items">
<div id="navar_ul" style="float: left;">
<ul>


  <li class="f">






<a href="/opac/index">





检索


</a>

<ul >


<li>




  <a href="/opac/index/advance">
  <!-- 这里处理下，当没有key时使用name（方便动态加载） -->

高级检索


</a>


</li>



<li>




<a href="/opac/index/integration">
  <!-- 这里处理下，当没有key时使用name（方便动态加载） -->

集群检索


</a>


</li>


</ul>




</li>





<li class="f">






<a href="/opac/browse/cls">





书目浏览


</a>

<ul >


<li>




  <a href="/opac/browse/cls">
  <!-- 这里处理下，当没有key时使用name（方便动态加载） -->

中图分类浏览


</a>


</li>



<li>




<a href="/opac/browse/sci">
  <!-- 这里处理下，当没有key时使用name（方便动态加载） -->

科图分类浏览


</a>


</li>






</ul>




</li>





<li class="f">






<a href="/opac/journal/e">





期刊导航


</a>

<ul >


<li>




  <a href="/opac/journal/e">
  <!-- 这里处理下，当没有key时使用name（方便动态加载） -->

西文期刊字母导航


</a>


</li>



<li>




<a href="/opac/browse/xueke/all">
  <!-- 这里处理下，当没有key时使用name（方便动态加载） -->

学科导航


</a>


</li>



<li>




<a href="/opac/browse/seriesXueke">
  <!-- 这里处理下，当没有key时使用name（方便动态加载） -->

期刊学科导航


</a>


</li>


</ul>




</li>





<li class="f">






<a href="/opac/reader/space">





  我的图书馆


  </a>




  </li>









  <li class="f">






<a href="/opac/newpub/cls">





新书通报


</a>

<ul >


<li>




  <a href="/opac/newpub/cls">
  <!-- 这里处理下，当没有key时使用name（方便动态加载） -->

中图分类查看


</a>


</li>



<li>




<a href="/opac/newpub/sci">
  <!-- 这里处理下，当没有key时使用name（方便动态加载） -->

科图分类查看


</a>


</li>


</ul>




</li>





































<li class="f">






<a href="/opac/bookSpecial">





  图书专题


  </a>




  </li>





  <li class="f">






<a href="/opac/recommend/recommendBookTree">





图书荐购


</a>

<ul >


<li>




  <a href="/opac/recommend/getAllHistoryRecommendList">
  <!-- 这里处理下，当没有key时使用name（方便动态加载） -->

历史荐购


</a>


</li>



<li>




<a href="/opac/recommend/custom">
  <!-- 这里处理下，当没有key时使用name（方便动态加载） -->

读者荐购


</a>


</li>




</ul>




</li>








<!-- 湖南大学图书馆需显示个人首页的菜单链接 -->





<!-- 广州少儿图书馆增加一个图书预约链接跳转到云书馆并自动登入 -->


<!-- 开始是给广少图用的东西 -->




<!-- 广少图玩具 -->

</ul>
</div>
<div class="navbar_info_en" style="display: none;">
<!--
  <img src="/opac/media/images/lang.png" class="lang"/>
  -->

  语言:

<select name="lang" id="enlang" onchange="enchangeLang()">


<option value="zh">中文</option>






  </select>



欢迎您：李晨鑫&nbsp;
<a href="javascript:logout();">退出</a>


			<!--a href="">帮助</a-->
  </div>
  </div>
  <!-- zh -->
  <div class="navbar_info_zh">
<!--
  <img src="/opac/media/images/lang.png" class="lang"/>
  -->

  语言:

<select name="lang" id="zhlang" onchange="zhchangeLang()">

<option value="zh">中文</option>







  </select>



欢迎您：



*晨鑫&nbsp;


<a href="





/opac/reader/logout?returnUrl=http://zhlgd.whut.edu.cn/tpass/logout?service=http://202.114.89.11/opac/




  ">退出</a>


  <!--a href="">帮助</a-->
  </div>
  </div>

  </div>


  <div class="n-model-wrapper" onClick="toggleSearchHelp()"></div>
  <div class="n-model-content">
<div class="n-model-prompt">






  </div>
  <div class="n-model-close">
<input class="ensubmit fbootstrap-button" type="button" value="知道了" onClick="toggleSearchHelp()"/>
  </div>
  </div>

		<!--
		<div class="navbar_info">




      欢迎您：李晨鑫&nbsp;
<a href="/opac/reader/logout">退出</a>


  <a href="">帮助</a>
  </div>
  </div>
-->
<script type="text/javascript">
  $(function() {
    var lang = $.cookie(
      "org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE",
      {path:"/"});
    if(lang == null || lang == undefined || lang == '') {
      lang = "zh";
    }
    $("#enlang").val(lang);
    $("#zhlang").val(lang);


  });
function enchangeLang() {
  var lang = $("#enlang").val();
  /**
   var currentURL = document.location.href;
   var langParam = "&lang=" + lang;
   if(currentURL.indexOf("?") < 0) {
   langParam = "?lang=" + lang;
   }
   document.location.href = currentURL + langParam;
   */
  $.cookie("org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE", lang, {path:"/"});
  document.location.reload();
}

function zhchangeLang() {
  var lang = $("#zhlang").val();
  /**
   var currentURL = document.location.href;
   var langParam = "&lang=" + lang;
   if(currentURL.indexOf("?") < 0) {
   langParam = "?lang=" + lang;
   }
   document.location.href = currentURL + langParam;
   */
  $.cookie("org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE", lang, {path:"/"});
  document.location.reload();
}


function toggleSearchHelp(){
  $(".n-model-wrapper").toggle();
  $(".n-model-content").slideToggle();
}
</script>
<div id="wrapper">














<link type="text/css" href="/opac/media/style/default/space.css" rel="stylesheet" />
<style type="text/css">
  #showVisitedCountDiv{
  text-align:right;
  padding-right:20px;
  margin-top:26px;
}
</style>
<script type="text/javascript">
  <!--
    $(function() {
      var $navPageBaseURL = $("#navPageBaseURL").text();
      if($navPageBaseURL != "") {
        $("#reSearchButton").show();
      }

      if("1" == "1")
      {
        if("false" == "true")
        {
          $("#baseSearchForm select[name='searchWay']").val("");
          return;
        }
        if("false"=="true")
        {
          $("#baseSearchForm select[name='searchWay']").val("");
          return;
        }
        $("#baseSearchForm select[name='searchWay']").val("selected");
      }
    });
function reSearch() {
  var qword = $("#q").val();

  if(qword!=""&&bannedHashSet.contains(qword)){
    alert("您的检索词中包含不当词汇，请更换或删除敏感词");
    return;
  }

  var $navPageBaseURL = $("#navPageBaseURL").text();
  var q = encodeURIComponent($("#q").val());
  if(q == "") {
    alert("请输入检索词.");
    return;
  }
  q = "marc:" + q;
  var baseURL = "/opac/search?";
  var targetURL = baseURL + $navPageBaseURL + "&research.q=" + q;
  document.location.href = targetURL;
}
//显示计数
$(function() {

});
function showVisitedCount(count){
  var countStr = new String(count);
  while(countStr.length < 8) {
    countStr = "0" + countStr;
  }
  var len = countStr.length;
  var result = "访问量：<span style='letter-spacing:3px;color:#00BB00;height:10px;' >"+countStr+"</span>";
  $("#showVisitedCountDiv").html(result);
  $("#showVisitedCountDiv").fadeIn(1000);
}
$(function() {
  /*
  $("#baseSearchForm").submit(function() {
    var searchWay = $("#baseSearchForm select[name='searchWay']").val();
    if(searchWay == "callno") {
      $(this).append(
        $("<input/>").attr("name", "sortWay").attr("type", "hidden").val("callno_sort"))
        .append(
        $("<input/>").attr("name", "sortOrder").attr("type", "hidden").val("asc"));
    }
  });
  */
});

function baseSearch() {
  var qword = $("#q").val();

  if(qword!=""&&bannedHashSet.contains(qword)){
    alert("您的检索词中包含不当词汇，请更换或删除敏感词");
    return;
  }

  var q = encodeURIComponent($("#q").val());
  if(q == "") {
    alert("请输入检索词.");
    return;
  }
  //q = "marc:" + q;
  trackSearch(q);
  var baseURL = "/opac/search?";
  var targetURL = baseURL + "&q=" + q;


  var $searchWay = $("#baseSearchForm select[name='searchWay']");
  if ($searchWay != null){
    var searchWay = $searchWay.val();
    targetURL = targetURL+"&searchWay="+searchWay;
    if(searchWay == "callno") {
      targetURL += "&sortWay=callno_sort";
      targetURL += "&sortOrder=asc";
    }
  }

  if(targetURL.indexOf("sortWay") < 0){
    var sortWay = "";
    var sortOrder = "";
    if(sortWay != ""){
      targetURL = targetURL + "&sortWay=" + sortWay;
    }
    if(sortOrder != ""){
      targetURL = targetURL + "&sortOrder=" + sortOrder;
    }
  }
  var $scWay = $("#baseSearchForm select[name='scWay']");
  targetURL += "&scWay="+$scWay.val();

  targetURL += "&hasholding=1";



  var cirlibs = $.cookie("searcher_libcode");
  if(cirlibs){
    var libArray = cirlibs.split("[]");
    for (var i in libArray){
      targetURL += "&curlibcode="+libArray[i];
    }
  }

  targetURL += "&searchSource=reader";
  if($("#navPageBaseURL").text().indexOf("view=express")!=-1){
    targetURL += "&view=express";
    var locals = "";
    var codeArrays = locals.split(",");
    for (index in codeArrays) {
      if(codeArrays[index]!=""){
        targetURL += "&curlocal="+codeArrays[index];
      }
    }
  }else if ($("#navPageBaseURL").text().indexOf("view=reserveloan")!=-1) {
    targetURL += "&view=reserveloan";	//如果是网上预借页面则加上view=reserveloan标识
  }

  var curlocalconfig = $.cookie("localConfig");
  var ipLimit = "";//没有根据ip限定馆藏地的时候才用这个cookie，不然有可能会导致拼接的地址过长
  if(curlocalconfig != null && curlocalconfig != "" && ipLimit != "1"){
    var values = curlocalconfig.split(",");
    for(var i = 0; i<values.length; i++){
      targetURL += "&curlocal=" + values[i];
    }
  }
  document.location.href = targetURL;
}
$(document).ready(function(){
  $("#baseSearchForm").submit(function(){
    return false;
  });




});
//-->
</script>

<div id="page_header">
<div id="page_nav">

<form id="baseSearchForm" action="/opac/search" method="get">

<input type="hidden" name="hasholding" id="hasholding" value="1"/>



<div class="logo"><a href="/opac/index"><img src="/opac/media/images/logo.png"




/></a></div>

<div class="page_nav_search">
<input type="hidden" name="rows" value="" />




<div style="display: none;" >
<select name="scWay"  class="search_select">
<option value="prefixMatch">前方一致</option>
  <option value="dim" selected="selected">模糊检索</option>
  <option value="full">精确检索</option>
</select>
</div>


<div>
<select name="searchWay" class="search_select"

>
<option value="" selected="selected">任意词</option>
  <option value="title">题名</option>
  <option value="title200a">正题名</option>


  <option value="isbn">ISBN/ISSN</option>
  <option value="author">著者</option>
  <option value="subject">主题词</option>
  <option value="class">分类号</option>


  <option value="ctrlno">控制号</option>
  <option value="orderno">订购号</option>

  <option value="publisher">出版社</option>

  <option value="callno">索书号</option>

  </select>
  </div>




  <div class="search_input"

>


<input type="text" id="q" name="q" value="" onkeydown="if(event.keyCode==13) baseSearch();" size="50" placeholder=""/>

  </div>


  <input type="button" class="search_button"

value="检索"  onclick="baseSearch()"/>
<input type="button" class="search_result_button"
style="display:none;" id="reSearchButton" value="在结果中检索" onclick="reSearch()" />

<input type="button" name="advance_search" id="advanceSearchButton" class="advance_search_button"

value="高级检索" onclick="window.location='/opac/index/advance'"/>


  </div>
  </form>

  <div id="showVisitedCountDiv"></div>
  </div>
  </div>
  <div id="page_content">















<script type="text/javascript" src="/opac/media/progressbar/progressbar.js"></script>

  <link rel="stylesheet" type="text/css" href="/opac/media/progressbar/progressbar.css"></link>

  <style type="text/css">
.overduLoan {
  color: red;
}
.pick {
  color: black!important;
}
.non-pick {
  color: blue;
}
.space_font{
  color: red;
  font-weight: bold;
}
.space_tr_td{
  background:10px 16px #EFEFEF;
  font-size: 13px;
  height: 35px;
  /*     line-height: 35px; */
  margin-left: 5px;
  margin-top: 5px;
  padding-left: 5px;
  width: 230px;
}
.space_tr_td_title{
  font-size: 14px;
  font-weight: bold;
  color: #009999;
  width:85px;
}
.space_tr_td:hover{
  background-color:rgb(223, 244, 255);
  cursor:pointer;
}
</style>

<script type="text/javascript">
var flag = 0;
window.moveTo(0,0);
window.resizeTo(screen.availWidth,screen.availHeight);
function goSSOResource(sid){
  if(flag>0){
    window.open("/goto/"+sid);
  }else{
    flag++;
    var rdid = '0000339667';
    var loginidParam = "loginid";
    var passwdParam = "rdpasswd";
    var glc = "U1HBE027001";
    if(glc=='P2GD020003'){
      loginidParam = "l";
      passwdParam = "r";
      rdid = "";
    }
    window.open("/main/ReaderLogin?orgId=opac&cmdACT=login&furl=%2FinterlibSSO%2Fgoto%2F"+sid+'&'+loginidParam+'='+rdid+'&'+passwdParam+'=131eaeaf66ceaa4e2253e10fad63ba54');
  }
}

function changeCode(){
  if(confirm("更换新二维码成功后，旧的二维码将作废，请确认")){
    $.ajax({
      type:"post",
      url:"/opac/reader/updateQrCode",
      dataType: "json",
      data:{"return_fmt":"json"},
      success:function(data){
        if(data.flag==1){
          $("#qrCode").attr("src","/opac/reader/qrCodeImage?qrcode="+encodeURIComponent(data.qrCode)+"");
        }
      }
    });
  }
}
$(function () {





  var ssoServer = "";
  if(ssoServer){
    $.ajax({
      type: "GET",
      url: '/opac/ebook/SSOResources',
      data: {
        "return_fmt": "json"
      },
      dataType: "json",
      success: function (data) {
        if(data&&data.ssoResourceMap&&data.ssoResourceMap.length>0){
          var table = '<table style="font-family: 微软雅黑">';
          for(var group in data.ssoResourceMap){
            table += '<tr>';
            var groupname = data.ssoResourceMap[group].groupname;
            var resouces = data.ssoResourceMap[group].greltionses;
            for(var resouce in resouces){
              var resourceName = resouces[resouce].linkName;
              if((resouce+1)%3 ==1){
                table += '</tr><tr><td class="space_tr_td_title">';
                if(resouce==0){
                  table += groupname;
                }
                table += '</td>';
              }
              table += '<td class="space_tr_td" onclick="javascript:goSSOResource(\''+resouces[resouce].recno
                +'\');" title="'+resouces[resouce].linkName+'">'+resouces[resouce].linkName+'</td>';
            }
            table += '</tr>';
          }
          table += '</table>';
          jQuery("#resourceList").prepend('<div>'+table+'</div>');
        }
      }
    });
  }
});
</script>

<div id="contentDiv">
<div id="left_div">













  <script>
    $(document).ready(function(){
      /**
       $(".inner_div ul li").hover(function(){
       var img = $(this).find("img:first");
       var src = img.attr("src");
       img.attr("src",src.substring(0,src.length-5)+"2.png");
       $(this).find("a").css("color","#333333");
       },function(){
       var img = $(this).find("img:first");
       var src = img.attr("src");
       img.attr("src",src.substring(0,src.length-5)+"1.png");
       $(this).find("a").css("color","#999999");
       });
       **/
      $(".inner_div ul li").each(function(){
        var img = $(this).find("img:first");
        var src = img.attr("src");
        img.attr("src",src.substring(0,src.length-5)+"2.png");
        $(this).find("a").css("color","#333333");
      });
      $(".haschild").hover(function(){
        $(this).children("ul").slideDown(200);
        $(this).children("em").show();
      },function(){
        $(this).children("ul").slideUp(100);
        $(this).children("em").hide();
      });


      $("#treeShow_id").show();
      $("#listShow_id").hide();




    });
</script>








































<div class="inner_div">
<ul>
  <li><a href="/opac/reader/getReaderInfo"><img src="/opac/media/images/getReaderInfo_1.png" style="width:32px;"/><br />个人资料</a></li>


<li><a href="/opac/loan/currentLoanList"><img src="/opac/media/images/currentLoanList_first_1.png" /><br />借阅查询</a></li>



<li><a href="/opac/loan/currentSpecLoanList"><img src="/opac/media/images/currentSpecLoanList_first_1.png" /><br />专项借阅查询</a></li>


<li><a href="/opac/loan/renewList"><img src="/opac/media/images/renewList_first_1.png" /><br />图书续借</a></li>











<!-- 是否显示读者权限查看菜单 -->
<li><a href="/opac/reader/readerPrivilegeList"><img src="/opac/media/images/readerPrivilegeList_first_1.png" /><br />读者权限查看</a></li>



<li><a href="/opac/finance/financeList"><img src="/opac/media/images/financeList_first_1.png" /><br />缴（交）费记录</a></li>





<li><a href="/opac/privateCollection/privateCollectionList"><img src="/opac/media/images/privateCollectionList_first_1.png" /><br />我的书架</a></li>



<li>
  <a href="/opac/reader/space/book/recommend4me">
<img src="/opac/media/images/recommend4me2.png" /><br />图书推荐
  </a>
  </li>






  <!-- 是否显示积分查看菜单 -->


  <li class="haschild"><em></em>
  <a href="/opac/finance/financeList"><img src="/opac/media/images/more_1.png" /><br />更多>></a>
<ul>


<li id="treeShow_id">


<a href="/opac/recommend/recommendBookTree">
<img src="/opac/media/images/recommendBookTree_1.png" /><br />
  图书荐购
  </a>

  </li>


  <li id="listShow_id">


<a href="/opac/recommend/batchBookList?orderBy=createDate&rows=15">
<img src="/opac/media/images/recommendBookTree_1.png" /><br />
图书荐购</a>

</li>



<li><a href="/opac/tag/privateTagList" ><img src="/opac/media/images/rprivateTagList_first_1.png" /><br />私人标签</a></li>







<li><a href="/opac/searchResultList/list"><img src="/opac/media/images/searchResultList_list_1.png" /><br />检索结果列表</a></li>
<li><a href="/opac/booklist/list"><img src="/opac/media/images/booklist_list_1.png" /><br />书单列表</a>

  <li id="reportLoss_li"><a href="/opac/reader/reportLoss "><img src="/opac/media/images/reportLoss_1.png" /><br />读者证挂失</a></li>



<li><a href="/opac/rss/goPage "><img src="/opac/media/images/goPage_1.png" /><br />RSS订阅</a></li>



<li><a href="/opac/reader/logout"><img src="/opac/media/images/logout_1.png" /><br />退出系统</a></li>
</ul>
</li>

</ul>
</div>

</div>

<div id="right_div">


  <!-- 人生厚度功能  修改参数data-progress为统计的时间  即可实现进度条加载  -->
<div  style="display: none;">
<div style="margin:10px 0px -12px 20px;">
<span style="font-size: 22px;color:#2F4056">李晨鑫</span>
  <span style="font-size: 12px;color:#2F4056">
  男

  </span>
  </div>
  <div class="mature-progress" style="margin-left:-10px;">
<div class="mature-progress-bottom" style="width:764px;">
<div class="mature-progress-box v0" id="mamture_progress">
  <dl>
    <dt></dt>
  <dd style="color:#9B9B9B;"><span class="member-ico v0"></span>童生</dd>
  </dl>
  <dl>
  <dt></dt>
  <dd style="color:#9B9B9B;"><span class="member-ico v1"></span>秀才</dd>
  </dl>
  <dl>
  <dt></dt>
  <dd style="color:#9B9B9B;"><span class="member-ico v2"></span>举人</dd>
  </dl>
  <dl>
  <dt></dt>
  <dd style="color:#9B9B9B;"><span class="member-ico v3"></span>进士</dd>
  </dl>
  <dl>
  <dt></dt>
  <dd style="color:#9B9B9B;"><span class="member-ico v4"></span>探花</dd>
  </dl>
  <div class="progress-box" id="progress_content" data-progress="">
<i class="progress-box-1"></i>
  <i class="progress-box-2"></i>
  <i class="progress-box-3"></i>
  <i class="progress-box-4"></i>
  <i class="progress-box-5"></i>
  </div>
  </div>
  <div class="mature-progress-box bgtwos">
  <dl> <dt></dt> </dl>
<dl> <dt></dt> </dl>
<dl> <dt></dt> </dl>
<dl> <dt></dt> </dl>
<dl> <dt></dt> </dl>
</div>
<div style="margin:83px 0px">
<span style="color:#666;">总借书时长：</span>
<strong style="font-family: Tahoma;color:#666;">0天</strong>
&nbsp;&nbsp;&nbsp;
<span style="color:#666;">当前称号：</span><strong id="reader_title" style="font-family: Tahoma;color:#666;"></strong>
</div>
</div>
</div>
</div>
<!-- 人生厚度功能 end -->


<div class="right_text">


  读者空间提示 (<a href="javascript:void(0)" id="display" onclick="display('info')">显示说明</a>)<br/>
<span id="info" style="display:none">1、用户可以在读者空间完成网上续借、图书预约、图书荐购等操作。<br/>
2、如果用户的登录密码少于6位，请在“个人资料”修改密码。 <br/>
3、用户使用完后要记得点击“退出系统”按钮。 <br/></span>




		<!-- div id="prepay">您的预付款是:0</div -->

<!-- 链接到其他资源-->
<div id="resourceList">


  <!-- 湖南省图书馆  全局ID P1HNX0731004 -->





<a href="http://www.duxiu.com/searchdsr.jsp?sw=&channel=search&userform=whlibdd&account=0000339667&type=lib&enc=2108AEE310225F47E09B6EDABC459BBB" target="_blank">
<img src="/opac/media/images/duxiu-logo.gif" border="0" height="80px" width="70"/>
</a>








</div>
<!-- 借阅的图书  -->
<div>
<table cellspacing="0" class="space_table" style="margin:10px;width: 680px;">
  <tr>
    <td>【读者证号】&nbsp;<font class="space_font">






  0********7




  </font></td>
<td>【读者姓名】&nbsp;<font class="space_font">


  *晨鑫&nbsp;

</font></td>
</tr>
<tr>
<td>【证状态】&nbsp;


<font class="space_font">有效</font>







  </td>
  <td>【开户馆】&nbsp;<font class="space_font">武汉理工大学图书馆</font></td>
</tr>
<tr>
<td>【有效期】&nbsp; <font class="space_font">
  2022.09.19-2026.06.30
</font></td>
<td>【欠款】&nbsp;<font class="space_font">0.0</font>&nbsp;【预付款】&nbsp;<font class="space_font">0.0</font></td>
</tr>
<tr>
<td>【是否是馆际读者】&nbsp;


<font class="space_font">是</font>



  </td>
  <td>【读者类型】&nbsp;<font class="space_font">本科生</font></td>
</tr>
<tr>
<td>【本馆已借/可借】&nbsp;<font class="space_font">2/18</font></td>
<td>

						【馆际已借/可借】&nbsp;<font class="space_font">0/12</font>

</td>
</tr>



<tr>
<td colspan="2">【积分】&nbsp;<font class="space_font">0</font></td>
</tr>

</table>
</div>
<div id="loanList">
<span class="title black">
<a class="pick non-pick" href="/opac/reader/space?loanType=1&reservationType=1" >
  借阅的图书</a>|
  <a class=" non-pick" href="/opac/reader/space?loanType=2&reservationType=1" >
  过期的图书</a>|
  <a class=" non-pick" href="/opac/reader/space?loanType=3&reservationType=1" >
  7天内过期的图书</a>|


</span>
<span style="float:right;">
<a href="/opac/loan/historyLoanList" >
  查看更多</a></span>

<table id="contentTable" class="space_table" cellpadding="0" cellspacing="0">
<tr id="contentHeader">
<th class="first_th">条码号</th>
<th>题名</th>
<th>著者</th>

<th>索书号</th>
<th>馆藏地点</th>
<th>文献类型</th>

<th>借出时间</th>
<th>应还时间</th>
</tr>



<tr><td width="80">000004501500</td>
<td><a href="/opac/book/3001391150" target="_blank">CLR via C#</a></td>
<td width="140">(美) Jeffrey Richter著</td>

<td width="60">TP312C/2506</td>
  <td width="140">



  南湖图书借阅区


  </td>
  <td width="100">



  中文图书


  </td>

  <td width="90">2025-03-25</td>
  <td width="90"  >2025-04-24
  <label id="lbl000004501500"></label>
</td>
</tr>


<tr><td width="80">000004650812</td>
<td><a href="/opac/book/3001766559" target="_blank">TCP/IP详解．卷1，协议．Volume 1，The Protocals</a></td>
<td width="140">(美) 凯文 R. 福尔, W. 理查德·史蒂文斯著</td>

<td width="60">TN915.04/207</td>
<td width="140">



  南湖图书借阅区


  </td>
  <td width="100">



  中文图书


  </td>

  <td width="90">2025-03-25</td>
  <td width="90"  >2025-04-24
  <label id="lbl000004650812"></label>
  </td>
  </tr>

  </table>


  <!-- 循环获取欠款 -->




  </div>

  <div id="overdueLoanListInAWeek">


  </div>

  <!-- 您有预约到馆的图书 -->
  <div id="reservationInLibList">
<span class="title">
<a class="pick non-pick" href="/opac/reader/space?loanType=1&reservationType=1" >预约的图书</a><!-- |
  <a class=" non-pick" href="/opac/reader/space?loanType=1&reservationType=2" >您有预约到馆的图书</a>-->
  </span>
  <span style="float:right"><a href="/opac/reservation/historyReservationList" >
  查看更多</a></span>


<span class="message">对不起，找不到符合的记录!</span>

</div>
<div>
<span class="title">未交付的财经信息</span>
  <span style="float:right"><a href="/opac/finance/financeList" >
  查看更多</a></span>


<span class="message">对不起，找不到符合的记录!</span>

</div>






</div>

</div>
</div>
</div>
</div>
</div>





















<script>

$(document).ready(function(){


});
</script>
<div id="page_footer" >




<div class="page_footer_bd" >


  <span>© 2005－<script>document.write(new Date().getFullYear());</script> www.interlib.com.cn, all rights reserved</span>


<span class="fcenter"></span>
  <span class="fright">




  <!--a href="#">隐私声明</a-->


  </span>
  </div>



  </div>
  <div style="display:none;">
<script type="text/javascript">
  /**
   var _gaq = _gaq || [];
   _gaq.push(['_setAccount', 'UA-22724688-1']);
   _gaq.push(['_trackPageview']);

   (function() {
   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
   })();
   */
  </script>
  </div>





  </body>
  </html>
`
