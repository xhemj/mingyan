/*! ERSS Mingyan $ (c) 2020 Xhemj $ github.com/icerss/mingyan */  
my={},function(t){t.version="2021/01/25",t.config={___DEBUG__:___DEBUG__=!1,___date_version___:___date_version___=202101231822},"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("./sw.js?t=202011810")})),window.onload=function(){db("Page load time is "+(window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart)+"ms")};const hashname={"#/search":!0,"#/more":!0,"#/about":!0};var ua=new Browser,footer=$("footer").html().replace("999+",mingyan.length);$("#md").hide(),$("#showall").hide(),$("footer").html(footer),$("h1").fontFlex(30,50,70),$("h3").fontFlex(30,50,70);var _hmt=_hmt||[];function loadJs(e){var t=document.createElement("script");t.src=e;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)}function gtag(){dataLayer.push(arguments)}!function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?0673dbbe4e6ea51a92a74e3ba2bc051b";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-RE30WVG95Q");var dn=1;function db(e){t.config.___DEBUG__&&(console.log("#"+dn+" -> %c[DB]%c"+e,"color:red","color:black"),dn++)}function isSupportWebp(){try{return 0===document.createElement("canvas").toDataURL("image/webp",.5).indexOf("data:image/webp")}catch(e){return!1}}function qs(e){var t=location.href;t=t.replace("?","?&").split("&");var a="";for(i=1;i<t.length;i++)0==t[i].indexOf(e+"=")&&(a=t[i].replace(e+"=",""));return a}function rdNum(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}t.lazypic="./src/loading.svg",t.pic=function(e){var a=e.split("：")[0];if(2==e.split("：").length)db(n=e.split("：")[1]);else if(3==e.split("：").length){var n;db(n=e.split("：")[1]+"："+e.split("：")[2])}var i='onclick="my.my_click()"';if("解"==n||null!=pic_list[n]){if("解"==n)var o=solvePicUrl[a];else if(null!=pic_list[n])o=pic_list[n];if(isSupportWebp())o=o+"/webp";return t.PicMobie(),lazyload(),`<div id="my_text" ${i}>${n}</div><div id="my_pic">\n                            <img src="${t.lazypic}" data-src="https://s-sh-1943-pic1.oss.dogecdn.com${o}" data-pic-id=${n} class="mypic lazyload mdui-hoverable mdui-img-rounded fancybox" data-fancybox-group="ERSS_mingyan_pic"></img>\n                        </div>`}return lazyload(),`<div id="my_text" ${i}>${n}</div>`};var reload_time=0;if(localStorage.getItem("reload-time")&&(localStorage.setItem("___mingyan_reload_time__",localStorage.getItem("reload-time")),localStorage.removeItem("reload-time")),localStorage.getItem("___mingyan_reload_time__"))var reload_time=localStorage.getItem("___mingyan_reload_time__");t.reload_time_add=function(){reload_time++,localStorage.setItem("___mingyan_reload_time__",reload_time),db(reload_time);var e;switch(reload_time){case 10:e="点击 100 次有惊喜";break;case 100:e="点击 500 次有惊喜";break;case 500:e="点击 1000 次有惊喜，\n很大的惊喜哦！";break;case 1e3:e="点击 10000 次有惊喜，\n你都到这一步了，干嘛不看看后面的惊喜呢？";break;case 1e4:e="你好无聊啊……";break;default:e=""}e&&swal({title:"获得成就",text:e,icon:"success",button:"关闭",closeOnClickOutside:!1})};var my_face_click_time="";if(t.my_face_click=function(e){"xhemj"==e&&(my_face_click_time+="1"),"BlackToy"==e&&(my_face_click_time+="2"),"Oranjezelv"==e&&(my_face_click_time+="3"),db(my_face_click_time),-1!=my_face_click_time.indexOf("1")&&-1!=my_face_click_time.indexOf("2")&&-1!=my_face_click_time.indexOf("3")&&(swal({title:"获得成就",text:"彩蛋还没做好~~",icon:"info",button:"关闭",closeOnClickOutside:!1}),my_face_click_time="")},t.my_click=function(){if(-1!=$("#mingyan").text().indexOf("绿帽子")&&swal({title:"Fuck ♂ You ♂",text:"骚骚恪曾经说过：Fuck ♂ You ♂",icon:"",button:"关闭",closeOnClickOutside:!1}),-1!=$("#mingyan").text().indexOf("垃圾真好吃")&&swal({title:"获得成就",text:"最美垃圾人",icon:"success",button:"关闭",closeOnClickOutside:!1}),-1!=$("#mingyan").text().indexOf("来一起唱啊！！")){swal({title:"获得成就",text:"Shape OF You！",icon:"success",button:"关闭",closeOnClickOutside:!1});const e=new APlayer({container:document.getElementById("player"),fixed:!0,lrcType:3,audio:[{name:"Shape of You",artist:"Ed Sheeran",url:"https://s-sh-1943-pic1.oss.dogecdn.com/static%2Fmingyan-js-org%2FEd%20Sheeran%20-%20Shape%20of%20You.mp3",cover:"https://i.loli.net/2020/12/19/L1NY8U7nhRjyQMa.jpg",lrc:"https://s-sh-1943-pic1.oss.dogecdn.com/static%2Fmingyan-js-org%2FShape%20of%20You.lrc"}]});$(".aplayer .aplayer-lrc").css("transform","translateY(-55px)"),e.play()}},t.text=function(e){e.split("：")[0],e=e.split("：")[1];return null!=text_list[e]?text_list[e]:"曾经说过"},t.print=function(){t.all();var e=$("body").html();$("#searchbar").hide();var a=document.getElementById("showall").innerHTML.replace(/<a /g,"<span ").replace(/<\/a>/g,"</span>"),n=window.open("","","toolbar=no,scrollbars=yes,menubar=no");n.document.body.innerHTML="<title>名言 | ERSS</title>"+document.head.innerHTML+a+"</body></html>",n.print(),$("#searchbar").show(),n.close(),window.document.body.innerHTML=e,location.reload()},t.my_encode=function(e,t){return db(e),db(t),md5("1"+md5(encodeURI(e+"||"+t+"ERSS MINGYAN (c) xhemj")))},t.my_decode=function(e){for(i=0;i<mingyan.length;i++){var a=mingyan[i].split("：")[0];db(a);var n=mingyan[i].split("：")[1];if(db(n),e==t.my_encode(a,n))return db("encode:"+e),db(i),i;db("no")}},t.share=function(){var e=$("#name").text(),a=$("#mingyan").text().replace(/\s*/g,"");swal({title:"分享当前名言",text:"请手动复制下面的链接，把他发给别人吧",icon:"info",content:{element:"input",attributes:{placeholder:"加载出错了？刷新试试吧",value:location.protocol+"//"+location.host+"/"+t.my_encode(e,a),type:"text"}}}),$(".swal-content__input").attr("value",location.protocol+"//"+location.host+"/"+t.my_encode(e,a)),$(".swal-content__input").attr("onclick","this.select()"),$(".swal-content__input").select()},t.download=function(){var e=new Blob([mingyan.join("\n")],{type:"text/plain;charset=utf-8"});saveAs(e,"名言列表（"+my.version+"）")},t.show=function(e){initfancybox();try{if($("#md").hide(),$("#main").hide(),0!=mingyan.length){if(db("加载名言列表成功"),e)a=e;else if(""!=qs("id"))var a=qs("id");else if(""!=location.hash&&1!=hashname[location.hash]){db("n="+(a=location.hash.replace("#","")))}else var a=rdNum(0,mingyan.length-1);if(1==hashname[location.hash])return;var n=mingyan[a].split("：")[0];if(db(n),2==mingyan[a].split("：").length)db(i=mingyan[a].split("：")[1]);else if(3==mingyan[a].split("：").length){var i;db(i=mingyan[a].split("：")[1]+"："+mingyan[a].split("：")[2])}db("已选取第"+a+"条名言："+i),_hmt.push(["_trackEvent","名言","查看","自动",n+"："+i]),$("p#info").html(`<div class="info-text">\n                    <a href="#${a}" class="label label-rounded label-warning">#${a}</a>&nbsp;\n                    \x3c!-- <a href="javascript:;" onclick="my.share()" class="label label-rounded label-warning">\n                    <i class="mdui-icon material-icons" style="font-size: 15px;">share</i>分享</a> --\x3e\n                    </br><a style="color:#9B4DC9" id="reload" href="#${rdNum(0,mingyan.length-1)}" onclick="my.reload_time_add();_hmt.push(['_trackEvent', '名言', '刷新', '手动' , '点击查看更多名言']);" >点击</a>查看更多名言</div>`),$("span#mingyan").html(t.pic(n+"："+i));var o=t.text(n+"："+i);$("span#name").text(n),$("span#verb").html(o),$("#main").fadeIn(),-1!=$("#mingyan").text().indexOf("来一起唱啊！！")&&loadJs("https://cdn.jsdelivr.net/npm/aplayer@1.10.0/dist/APlayer.min.js");var l="名言 | "+i;document.title=l;var c=n+o+"："+i;$('meta[name="description"]').attr("content",c),$('meta[property="og:description"]').attr("content",c),$('meta[name="og:description"]').attr("content",c),$('meta[property="og:title"]').attr("content",l),$('meta[name="og:title"]').attr("content",l),lazyload()}}catch(e){console.error(e),console.error("名言加载失败"),$("#mingyan").text("名言加载失败"),$("#info").html("错误信息：</br>"+e+'</br>建议：<a href="javascript:my.reload()">点我刷新页面</a>'),$("#main").fadeIn(),$("#info").fadeIn()}},"Mobile"!=ua.device){var inputbar_width="60%";$("#main").css("transform","translateY(15%)")}else{var inputbar_width="auto";$("#main").css("transform","translateY(30%)"),$("#md").css("transform","translateY(50px)")}t.PicMobie=function(){"Mobile"==ua.device?$("#main").css("transform","translateY(15%)"):$("#main").css("transform","translateY(10%)"),lazyload()},t.reload=function(){history.pushState({},"名言 | ERSS","/"),""!=location.hash||""!=qs("id")||""!=qs("mail")?location.href="//"+location.hostname+":"+location.port+location.pathname:(t.show(),db("show：L479")),lazyload()},t.hide_showall=function(){$("#md").hide(),$("#showall").hide(),$("#main").fadeIn(),$("footer").html(footer),"#search"==location.hash&&(location.href="#")},t.all=function(){$("#md").hide(),$("#main").hide(),$("input#searchbar").val("");var e='<input style="'+inputbar_width+'" onclick="this.select()" type="search" id="searchbar" placeholder="搜索……" results="5"></input></br></br><span class="e"></span>';for(i=0;i<mingyan.length;i++)e+='<div><a style="color:black" id="showall_item" class="'+i+'" href="./#'+i+'" onclick="my.hide_showall()">'+mingyan[i]+"</a></div>";e+="</br></br></br>",$("#showall").html(e),$("#showall").fadeIn(),$("footer").html("当前名言数量："+mingyan.length+'</br><a class="aline" href="./" onclick="my.hide_showall()">返回</a>'),$("#searchbar").focus()},t.md=function(e,t){$("#md").hide(),$("#main").hide(),$("#showall").hide(),$(e).html('<strong><div style="text-align: center" class="mdui-ripple"><style>h1{font-size:30px}</style><h1>加载中……</h1></div></strong></br></br></br></br>'),$.get(t,(function(t){marked.setOptions({breaks:!0});var a=marked(t);a=a.replace(/<a /g,'<a target="_blank" '),$(e).html("<strong>"+a+"</strong></br></br></br></br>"),$(e).fadeIn()})),$("footer").html("当前名言数量："+mingyan.length+'</br><a class="aline" href=javascript:; onclick="my.hide_showall()">返回</a>'),$("#md").fadeIn()},t.more=function(){t.md("#md","./src/md/more.md?t="+t.config.___date_version___)},t.about=function(){t.md("#md","./src/md/about.md?t="+t.config.___date_version___)},t.md_all=function(){$("#md").hide(),$("#main").hide(),$("#showall").hide();var e="";for(i=0;i<mingyan.length;i++)e+=mingyan[i]+"</br>";e+="</br></br></br></br>",$("#md").html(marked(e)),$("#md").fadeIn()},t.tongji=function(){$("#md").hide(),$("#main").hide(),$("#showall").hide();var e="";for(i=0;i<mingyan.length;i++){try{var t=mingyan[i].split("：")[0],a=mingyan[i+1].split("：")[0]}catch(e){}db(t+"-"+a),e+=t==a?t:a}var n="";n+=["数学老王："+e.match(/老王/g).length,"英语老俞："+e.match(/老俞/g).length,"数学潘哥："+e.match(/潘哥/g).length,"语文老朱："+e.match(/老朱/g).length,"物理刘老师："+e.match(/物理刘老师/g).length,"物理王老师："+e.match(/物理王老师/g).length,"地理吴老师："+e.match(/地理吴老师/g).length,"地理朱老师："+e.match(/地理朱老师/g).length,"政治王老师："+e.match(/政治王老师/g).length,"化学吴老师："+e.match(/化学吴老师/g).length,"历史李老师："+e.match(/历史李老师/g).length,"美术林老师："+e.match(/美术林老师/g).length,"体育吴老师："+e.match(/体育吴老师/g).length,"体育俞老师："+e.match(/体育俞老师/g).length,"生物吴老师："+e.match(/生物吴老师/g).length].join(" 句</br>")+" 句</br></br></br></br>",$("#md").html(marked(n)),$("#md").fadeIn()},t.search=function(){if($("#searchbar").is(":focus")||""!=qs("q"))if($("input#searchbar").val())switch($("input#searchbar").val()){case"::auto_reload":location.href="./?force_action=auto_reload";break;default:var now1=$("input#searchbar").val(),now2=$("input#searchbar").val();now1==now2&&($("a#showall_item").each((function(){if(-1!=$(this).text().indexOf($("input#searchbar").val())){var reg="/"+$("input#searchbar").val()+"/g";$(this).html($(this).text().replace(eval(reg),'<span class="label label-secondary">'+$("input#searchbar").val()+"</span>")),$(this).show()}else $(this).hide()})),$(".e").hide())}else $("a#showall_item").show(),$("a#showall_item").each((function(){$(this).html($(this).html().replace('<span class="label label-secondary">',"")),$(this).html($(this).html().replace("</span>",""))}));null!=$("#showall")[0].innerText.match(/^\s*$/)?($(".e").text("无结果"),$(".e").show()):$("#searchbar").is(":focus")&&$(".e").hide()};var search=setInterval(t.search,100);qs("mail")&&(window.open("mailto:"+qs("mail").replace("---","@")),t.reload());var title="名言 | ERSS",titleTime;document.addEventListener("visibilitychange",(function(){document.hidden?(document.title="名言 | 来看名言呀！",clearTimeout(titleTime)):document.title=title})),t.ranking_api={add:add=function(e,t){return new Promise((function(a,n){app.callFunction({name:"mingyan",data:{event:"add",name:e,ip:t,ua:navigator.userAgent.toString()||""}}).then((e=>{db("添加成功"),console.log(e),a(e)})).catch((function(e){n(e)}))}))},update:update=function(e,t){return new Promise((function(a,n){app.callFunction({name:"mingyan",data:{event:"update",id:e,data:{name:t}}}).then((e=>{db("获取成功"),console.log(e),a(e)})).catch((function(e){n(e)}))}))},getIp:getIp=function(){return new Promise((function(e,t){$.getJSON("https://ip.xhemj.now.sh/api/ip?t=___"+(new Date).getTime()+rdNum(0,(new Date).getTime())+"__",(function(t){db("获取成功");var a={ip:t.ip};e(a)})).catch((function(e){t(e)}))}))}};const app=cloudbase.init({env:"xhemj-0gjckebwf7276129"}),auth=app.auth();async function login(){await auth.anonymousAuthProvider().signIn();const e=await auth.getLoginState();db("登陆成功"),console.log(e)}function hashchange(){if(initfancybox(),1==hashname[location.hash])switch(location.hash){case"#/about":location.pathname="/",my.hide_showall(),my.about();break;case"#/search":location.pathname="/",my.hide_showall(),my.all();break;case"#/more":location.pathname="/",my.hide_showall(),my.more()}else location.hash.split("#").length>1&&my.show(location.hash.split("#")[1])}switch(login(),t.ranking=function(){(new Date).getTime()>=16094304e5&&my.ranking_api.getIp().then((function(e){console.log(e.ip);var a=e.ip;localStorage.getItem("___mingyan_2021_ranking_data__")||(db("新用户"),localStorage.setItem("___mingyan_2021_ranking_data__",`__${a}__`),t.ranking_api.add("一位不知道名字的访客",a).then((function(e){localStorage.setItem("___mingyan_2021_ranking_data__",`__${a}__`);var t=e.result.res.id;swal({title:"第N个人！！",text:"恭喜你成为2021年第N个查看名言的人！！（因技术原因，暂时无法公开名次）",icon:"success",content:{element:"input",attributes:{placeholder:"写个名字记录一下你是谁吧！",type:"text"}},closeOnClickOutside:!1}).then((e=>{e&&(my.ranking_api.update(t,e).then((function(e){console.log(e)})).catch((function(e){console.error(e)})),location.href="./")}))})).catch((function(e){console.error(e)})))})).catch((function(e){console.error(e)}))},window.addEventListener("hashchange",hashchange),hashchange(),location.pathname){case"/about":location.hash="#/about";break;case"/search":location.hash="#/search";break;case"/more":location.hash="#/more";break;case"/":switch($(document).ready((function(){t.show(),db("show：L960")})),"2020"!=qs("force_action")&&localStorage.getItem("___mingyan_2021_ranking_data__")||t.ranking(),qs("force_action")){case"clear_save":localStorage.removeItem("___mingyan_2021_ranking_data__");break;case"auto_reload":setInterval((function(){my.show()}),3e3)}break;case"/index.html":$(document).ready((function(){t.show(),db("show：L979")}));break;default:if(32==location.pathname.split("/")[1].length){var id=t.my_decode(location.pathname.split("/")[1]),myid=new Number(id);$(document).ready((function(){t.show(myid.toString()),db("show：L988")}))}else clearInterval(search),$(".app").load("./src/_404.html")}if(Headroom.cutsTheMustard){var myElement=document.getElementById("header"),headroom=new Headroom(myElement,{offset:300,tolerance:5});headroom.init()}function initfancybox(){setTimeout((()=>{$(".fancybox").fancybox({buttons:["zoom","share","slideShow","fullScreen","download","close"],lang:"zh-cn",i18n:{"zh-cn":{CLOSE:"关闭",NEXT:"下一张",PREV:"前一张",ERROR:"图片加载失败， <br/> 请稍后再试。",FULL_SCREEN:"全屏",THUMBS:"略缩图",DOWNLOAD:"下载",SHARE:"分享",ZOOM:"缩放"}}})}),500)}lazyload(),setInterval(lazyload,1e3)}(my);
