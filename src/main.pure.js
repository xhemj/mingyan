/*! ERSS Mingyan $ (c) 2020 Xhemj $ github.com/icerss/mingyan */  
let _mingyan={};(function(_mingyan){_mingyan.version="2021/01/26",_mingyan.config={___DEBUG__:!1,___date_version___:202101281954},"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("./sw.js?t=202101281305")})),window.onload=function(){db("Page load time is "+(window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart)+"ms")};const hashName={"#/search":!0,"#/more":!0,"#/about":!0};let ua=new Browser,footer=$("footer").html().replace("999+",mingyan.length);$("#md").hide(),$("#showall").hide(),$("footer").html(footer),$("h1").fontFlex(30,50,70),$("h3").fontFlex(30,50,70);var _hmt=_hmt||[];function loadJs(n){let e=document.createElement("script");e.src=n;let a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}function gtag(){dataLayer.push(arguments)}!function(){let n=document.createElement("script");n.src="https://hm.baidu.com/hm.js?0673dbbe4e6ea51a92a74e3ba2bc051b";let e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)}(),window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-RE30WVG95Q");let dn=1;function db(n){_mingyan.config.___DEBUG__&&(console.log("#"+dn+" -> %c[DB]%c"+n,"color:red","color:black"),dn++)}function isSupportWebp(){try{return 0===document.createElement("canvas").toDataURL("image/webp",.5).indexOf("data:image/webp")}catch(n){return!1}}function qs(n){let e=location.href;e=e.replace("?","?&").split("&");let a="";for(i=1;i<e.length;i++)0==e[i].indexOf(n+"=")&&(a=e[i].replace(n+"=",""));return a}function randomNumber(n,e){switch(arguments.length){case 1:return parseInt(Math.random()*n+1,10);case 2:return parseInt(Math.random()*(e-n+1)+n,10);default:return 0}}_mingyan.lazypic="./src/loading.svg",_mingyan.checkPic=function(n){let e=n.split("：")[0];if(2==n.split("：").length)db(a=n.split("：")[1]);else if(3==n.split("：").length){var a;db(a=n.split("：")[1]+"："+n.split("：")[2])}let t='onclick="_mingyan.onMingyanClick()"';if("解"==a||null!=mingyanPicUrl[a]){if("解"==a)var i=solvePicUrl[e];else if(null!=mingyanPicUrl[a])i=mingyanPicUrl[a];if(isSupportWebp()){}return _mingyan.checkPicForMobie(),lazyload(),`<div id="my_text" ${t}>${a}</div><div id="my_pic">\n                            <img src="${_mingyan.lazypic}" data-src="https://s-sh-1943-pic1.oss.dogecdn.com${i}" data-pic-id=${a} class="mypic lazyload mdui-hoverable mdui-img-rounded fancybox" data-fancybox-group="ERSS_mingyan_pic"></img>\n                        </div>`}return lazyload(),`<div id="my_text" ${t}>${a}</div>`};let reloadTime=0;localStorage.getItem("reload-time")&&(localStorage.setItem("___mingyan_reload_time__",localStorage.getItem("reload-time")),localStorage.removeItem("reload-time")),localStorage.getItem("___mingyan_reload_time__")&&(reloadTime=localStorage.getItem("___mingyan_reload_time__")),_mingyan.addReloadTime=function(){reloadTime++,localStorage.setItem("___mingyan_reload_time__",reloadTime),db(reloadTime);let n;switch(reloadTime){case 10:n="点击 100 次有惊喜";break;case 100:n="点击 500 次有惊喜";break;case 500:n="点击 1000 次有惊喜，\n很大的惊喜哦！";break;case 1e3:n="点击 10000 次有惊喜，\n你都到这一步了，干嘛不看看后面的惊喜呢？";break;case 1e4:n="你好无聊啊……";break;default:n=""}n&&swal({title:"获得成就",text:n,icon:"success",button:"关闭",closeOnClickOutside:!1})};let faceClickTime="";_mingyan.checkFaceClickTime=function(n){"xhemj"==n&&(faceClickTime+="1"),"BlackToy"==n&&(faceClickTime+="2"),"Oranjezelv"==n&&(faceClickTime+="3"),db(faceClickTime),-1!=faceClickTime.indexOf("1")&&-1!=faceClickTime.indexOf("2")&&-1!=faceClickTime.indexOf("3")&&(swal({title:"获得成就",text:"彩蛋还没做好~~",icon:"info",button:"关闭",closeOnClickOutside:!1}),faceClickTime="")},_mingyan.onMingyanClick=function(){if(-1!=$("#mingyan").text().indexOf("绿帽子")&&swal({title:"Fuck ♂ You ♂",text:"骚骚恪曾经说过：Fuck ♂ You ♂",icon:"",button:"关闭",closeOnClickOutside:!1}),-1!=$("#mingyan").text().indexOf("垃圾真好吃")&&swal({title:"获得成就",text:"最美垃圾人",icon:"success",button:"关闭",closeOnClickOutside:!1}),-1!=$("#mingyan").text().indexOf("来一起唱啊！！")){swal({title:"获得成就",text:"Shape OF You！",icon:"success",button:"关闭",closeOnClickOutside:!1});var n=new APlayer({container:document.getElementById("player"),fixed:!0,lrcType:3,audio:[{name:"Shape of You",artist:"Ed Sheeran",url:"https://s-sh-1943-pic1.oss.dogecdn.com/static%2Fmingyan-js-org%2FEd%20Sheeran%20-%20Shape%20of%20You.mp3",cover:"https://i.loli.net/2020/12/19/L1NY8U7nhRjyQMa.jpg",lrc:"https://s-sh-1943-pic1.oss.dogecdn.com/static%2Fmingyan-js-org%2FShape%20of%20You.lrc"}]});$(".aplayer .aplayer-lrc").css("transform","translateY(-55px)"),n.play()}},_mingyan.checkText=function(n){if(n=n.split("：")[1],null!=specialVerbList[n]){return specialVerbList[n]}return"曾经说过"},_mingyan.print=function(){_mingyan.showAll();let n=$("body").html();$("#searchbar").hide();let e=document.getElementById("showall").innerHTML.replace(/<a /g,"<span ").replace(/<\/a>/g,"</span>"),a=window.open("","","toolbar=no,scrollbars=yes,menubar=no");a.document.body.innerHTML="<title>名言 | ERSS</title>"+document.head.innerHTML+e+"</body></html>",a.print(),$("#searchbar").show(),a.close(),window.document.body.innerHTML=n,location.reload()},_mingyan.encodeMingyan=function(n,e){return db(n),db(e),md5("1"+md5(encodeURI(n+"||"+e+"ERSS MINGYAN (c) xhemj")))},_mingyan.decodeMingyan=function(n){for(i=0;i<mingyan.length;i++){let e=mingyan[i].split("：")[0];db(e);let a=mingyan[i].split("：")[1];if(db(a),n==_mingyan.encodeMingyan(e,a))return db("encode:"+n),db(i),i;db("no")}},_mingyan.share=function(){let n=$("#name").text(),e=$("#mingyan").text().replace(/\s*/g,"");swal({title:"分享当前名言",text:"请手动复制下面的链接，把他发给别人吧",icon:"info",content:{element:"input",attributes:{placeholder:"加载出错了？刷新试试吧",value:location.protocol+"//"+location.host+"/"+_mingyan.encodeMingyan(n,e),type:"text"}}}),$(".swal-content__input").attr("value",location.protocol+"//"+location.host+"/"+_mingyan.encodeMingyan(n,e)),$(".swal-content__input").attr("onclick","this.select()"),$(".swal-content__input").select()},_mingyan.download=function(){let n=new Blob([mingyan.join("\n")],{type:"text/plain;charset=utf-8"});saveAs(n,"名言列表（"+_mingyan.version+"）")};let skipCheckHash=!1;if(_mingyan.show=function(n){initfancybox();try{if($("#md").hide(),$("#main").hide(),0==mingyan.length)return!1;{if(db("加载名言列表成功"),n)e=n;else if(""!=qs("id"))var e=qs("id");else if(""!=location.hash&&1!=hashName[location.hash]){db("n="+(e=location.hash.replace("#","")))}else if(localStorage.getItem("___mingyan_id__"))var e=localStorage.getItem("___mingyan_id__");else e=randomNumber(0,mingyan.length-1);if(1==hashName[location.hash])return;skipCheckHash=!0,location.hash="#"+e,skipCheckHash=!1,localStorage.setItem("___mingyan_id__",e);let t=mingyan[e].split("：")[0];if(db(t),2==mingyan[e].split("：").length)db(a=mingyan[e].split("：")[1]);else if(3==mingyan[e].split("：").length){var a;db(a=mingyan[e].split("：")[1]+"："+mingyan[e].split("：")[2])}db("已选取第"+e+"条名言："+a),_hmt.push(["_trackEvent","名言","查看","自动",t+"："+a]),$("p#info").html(`<div class="info-text">\n                    <a href="#${e}" class="label label-rounded label-warning">#${e}</a>&nbsp;\n                    \x3c!-- <a href="javascript:;" onclick="_mingyan.share()" class="label label-rounded label-warning">\n                    <i class="mdui-icon material-icons" style="font-size: 15px;">share</i>分享</a> --\x3e\n                    </br><a style="color:#9B4DC9" id="reload" href="#${randomNumber(0,mingyan.length-1)}" onclick="_mingyan.addReloadTime();_hmt.push(['_trackEvent', '名言', '刷新', '手动' , '点击查看更多名言']);" >点击</a>查看更多名言</div>`),$("span#mingyan").html(_mingyan.checkPic(t+"："+a));let i=_mingyan.checkText(t+"："+a);$("span#name").text(t),$("span#verb").html(i),$("#main").fadeIn(),-1!=$("#mingyan").text().indexOf("来一起唱啊！！")&&loadJs("https://cdn.jsdelivr.net/npm/aplayer@1.10.0/dist/APlayer.min.js");let o="名言 | "+a;document.title=o;let l=t+i+"："+a;$('meta[name="description"]').attr("content",l),$('meta[property="og:description"]').attr("content",l),$('meta[name="og:description"]').attr("content",l),$('meta[property="og:title"]').attr("content",o),$('meta[name="og:title"]').attr("content",o),lazyload()}}catch(n){throw console.error("名言加载失败"),$("#mingyan").text("名言加载失败"),$("#info").html("错误信息：</br>"+n+'</br>建议：<a href="javascript:_mingyan.reload()">点我刷新页面</a>'),$("#main").fadeIn(),$("#info").fadeIn(),new Error(n)}},"Mobile"!=ua.device){let n="60%";$("#main").css("transform","translateY(15%)")}else{let n="auto";$("#main").css("transform","translateY(30%)"),$("#md").css("transform","translateY(50px)")}_mingyan.checkPicForMobie=function(){"Mobile"==ua.device?$("#main").css("transform","translateY(15%)"):$("#main").css("transform","translateY(10%)"),lazyload()},_mingyan.reload=function(){$("#reload").attr("href")?_mingyan.show($("#reload").attr("href").split("#")[1]):location.hash="#"+randomNumber(0,mingyan.length-1)},_mingyan.hideElement=function(){$("#md").hide(),$("#showall").hide(),$("#main").fadeIn(),$("footer").html(footer),"#search"==location.hash&&(location.href="#")},_mingyan.showAll=function(){$("#md").hide(),$("#main").hide(),$("input#searchbar").val("");let n='<input style="'+inputbar_width+'" onclick="this.select()" type="search" id="searchbar" placeholder="搜索……" results="5"></input></br></br><span class="e"></span>';for(i=0;i<mingyan.length;i++)n+='<div><a style="color:black" id="showall_item" class="'+i+'" href="./#'+i+'" onclick="_mingyan.hideElement()">'+mingyan[i]+"</a></div>";n+="</br></br></br>",$("#showall").html(n),$("#showall").fadeIn(),$("footer").html("当前名言数量："+mingyan.length+'</br><a class="aline" href="./" onclick="_mingyan.hideElement()">返回</a>'),$("#searchbar").focus()},_mingyan.mdToHtml=function(n,e){$("#md").hide(),$("#main").hide(),$("#showall").hide(),$(n).html('<strong><div style="text-align: center" class="mdui-ripple"><style>h1{font-size:30px}</style><h1>加载中……</h1></div></strong></br></br></br></br>'),$.get(e,(function(e){marked.setOptions({breaks:!0});let a=marked(e);a=a.replace(/<a /g,'<a target="_blank" '),$(n).html("<strong>"+a+"</strong></br></br></br></br>"),$(n).fadeIn()})),$("footer").html("当前名言数量："+mingyan.length+'</br><a class="aline" href=javascript:; onclick="_mingyan.hideElement()">返回</a>'),$("#md").fadeIn()},_mingyan.more=function(){_mingyan.mdToHtml("#md","./src/md/more.md?t="+_mingyan.config.___date_version___)},_mingyan.about=function(){_mingyan.mdToHtml("#md","./src/md/about.md?t="+_mingyan.config.___date_version___)},_mingyan.showAllMingyan=function(){$("#md").hide(),$("#main").hide(),$("#showall").hide();let n="";for(i=0;i<mingyan.length;i++)n+=mingyan[i]+"</br>";n+="</br></br></br></br>",$("#md").html(marked(n)),$("#md").fadeIn()},_mingyan.tongji=function(){$("#md").hide(),$("#main").hide(),$("#showall").hide();let n="";for(i=0;i<mingyan.length;i++){try{mingyan[i].split("：")[0],mingyan[i+1].split("：")[0]}catch(n){}db(a1+"-"+a2),a1==a2?n+=a1:n+=a2}let e="";e+=["数学老王："+n.match(/老王/g).length,"英语老俞："+n.match(/老俞/g).length,"数学潘哥："+n.match(/潘哥/g).length,"语文老朱："+n.match(/老朱/g).length,"物理刘老师："+n.match(/物理刘老师/g).length,"物理王老师："+n.match(/物理王老师/g).length,"地理吴老师："+n.match(/地理吴老师/g).length,"地理朱老师："+n.match(/地理朱老师/g).length,"政治王老师："+n.match(/政治王老师/g).length,"化学吴老师："+n.match(/化学吴老师/g).length,"历史李老师："+n.match(/历史李老师/g).length,"美术林老师："+n.match(/美术林老师/g).length,"体育吴老师："+n.match(/体育吴老师/g).length,"体育俞老师："+n.match(/体育俞老师/g).length,"生物吴老师："+n.match(/生物吴老师/g).length].join(" 句</br>")+" 句</br></br></br></br>",$("#md").html(marked(e)),$("#md").fadeIn()},_mingyan.search=function(){if($("#searchbar").is(":focus")||""!=qs("q"))if($("input#searchbar").val())switch($("input#searchbar").val()){case"::auto_reload":location.href="./?force_action=auto_reload";break;default:let now1=$("input#searchbar").val(),now2=$("input#searchbar").val();now1==now2&&($("a#showall_item").each((function(){if(-1!=$(this).text().indexOf($("input#searchbar").val())){let reg="/"+$("input#searchbar").val()+"/g";$(this).html($(this).text().replace(eval(reg),'<span class="label label-secondary">'+$("input#searchbar").val()+"</span>")),$(this).show()}else $(this).hide()})),$(".e").hide())}else $("a#showall_item").show(),$("a#showall_item").each((function(){$(this).html($(this).html().replace('<span class="label label-secondary">',"")),$(this).html($(this).html().replace("</span>",""))}));null!=$("#showall")[0].innerText.match(/^\s*$/)?($(".e").text("无结果"),$(".e").show()):$("#searchbar").is(":focus")&&$(".e").hide()};let search=setInterval(_mingyan.search,100);qs("mail")&&(window.open("mailto:"+qs("mail").replace("---","@")),_mingyan.reload());let title="名言 | ERSS",titleTime;document.addEventListener("visibilitychange",(function(){document.hidden?(document.title="名言 | 来看名言呀！",clearTimeout(titleTime)):document.title=title}));const app=cloudbase.init({env:"xhemj-0gjckebwf7276129"}),auth=app.auth();async function login(){await auth.anonymousAuthProvider().signIn();const n=await auth.getLoginState();db("登陆成功"),console.log(n)}function onHashChange(){if(initfancybox(),1==hashName[location.hash])switch(location.hash){case"#/about":location.pathname="/",_mingyan.hideElement(),_mingyan.about();break;case"#/search":location.pathname="/",_mingyan.hideElement(),_mingyan.showAll();break;case"#/more":location.pathname="/",_mingyan.hideElement(),_mingyan.more()}else location.hash.split("#").length>1&&!skipCheckHash&&_mingyan.show(location.hash.split("#")[1])}switch(login(),_mingyan.rankingApi={add:function(n,e){return new Promise((function(a,t){app.callFunction({name:"mingyan",data:{event:"add",name:n.toString(),ip:e,ua:navigator.userAgent.toString()||""}}).then((n=>{db("添加成功"),console.log(n),a(n)})).catch((function(n){t(n)}))}))},update:function(n,e){return new Promise((function(a,t){app.callFunction({name:"mingyan",data:{event:"update",id:n,data:{name:e}}}).then((n=>{db("获取成功"),console.log(n),a(n)})).catch((function(n){t(n)}))}))},getIp:function(){return new Promise((function(n,e){$.getJSON("https://ip.xhemj.now.sh/api/ip",(function(e){db("获取成功");let a={ip:e.ip};n(a)})).catch((function(n){e(n)}))}))},getNum:function(){return new Promise((function(n,e){app.callFunction({name:"mingyan",data:{event:"getnum"}}).then((e=>{db("获取成功"),console.log(e),n(e)})).catch((function(n){e(n)}))}))}},_mingyan.ranking=function(){(new Date).getTime()>=16094304e5&&_mingyan.rankingApi.getIp().then((function(n){console.log(n.ip);let e=n.ip;localStorage.getItem("___mingyan_2021_ranking_data__")||(db("新用户"),localStorage.setItem("___mingyan_2021_ranking_data__",`__${e}__`),_mingyan.rankingApi.add("一位不知道名字的访客",e).then((function(n){localStorage.setItem("___mingyan_2021_ranking_data__",`__${e}__`);let a=n.result.res.id;_mingyan.rankingApi.getNum().then((function(n){let e=n.result.res1.data[0].num;swal({title:`第${e}个人！！`,text:`恭喜你成为2021年第${e}个查看名言的人！！`,icon:"success",content:{element:"input",attributes:{placeholder:"写个名字记录一下你是谁吧！",type:"text"}},closeOnClickOutside:!1}).then((n=>{n&&(_mingyan.rankingApi.update(a,n).then((function(n){console.log(n)})).catch((function(n){console.error(n)})),location.href="./")}))})).catch((function(n){console.error(n)}))})).catch((function(n){console.error(n)})))})).catch((function(n){console.error(n)}))},window.addEventListener("hashchange",onHashChange),onHashChange(),location.pathname){case"/about":location.hash="#/about";break;case"/search":location.hash="#/search";break;case"/more":location.hash="#/more";break;case"/index.html":case"/":switch($(document).ready((function(){_mingyan.show(),db("show：L960")})),"2020"!=qs("force_action")&&localStorage.getItem("___mingyan_2021_ranking_data__")||_mingyan.ranking(),qs("force_action")||qs("do")){case"clear_save":localStorage.removeItem("___mingyan_2021_ranking_data__");break;case"auto_reload":setInterval((function(){_mingyan.show()}),3e3)}break;default:if(32==location.pathname.split("/")[1].length){let n=_mingyan.decodeMingyan(location.pathname.split("/")[1]),e=new Number(n);$(document).ready((function(){_mingyan.show(e.toString()),db("show：L988")}))}else clearInterval(search),$(".app").load("./src/_404.html")}if(Headroom.cutsTheMustard){let n=document.getElementById("header"),e=new Headroom(n,{offset:300,tolerance:5});e.init()}function initfancybox(){setTimeout((()=>{$(".fancybox").fancybox({buttons:["zoom","share","slideShow","fullScreen","download","close"],lang:"zh-cn",i18n:{"zh-cn":{CLOSE:"关闭",NEXT:"下一张",PREV:"前一张",ERROR:"图片加载失败， <br/> 请稍后再试。",FULL_SCREEN:"全屏",THUMBS:"略缩图",DOWNLOAD:"下载",SHARE:"分享",ZOOM:"缩放"}}})}),500)}lazyload(),setInterval(lazyload,1e3),_mingyan.console=function(){let n="font-weight: 900;color: #9b4dca;font-size: 15px",e="font-weight: 900;color: #ffb700;font-size: 15px";console.log("\n%c诗曰：                  %c________\n%c  王颢维尼熊猫，        %c| ERSS |\n%c  老杜金门菜刀，        %c| 名言 |\n%c  老王还在抠脚。        %c|______|\n%c  三天之内，\n  抠出一根面条。\n      ————— 天净沙·梗\n",n,e,n,e,n,e,n,e,n)},_mingyan.console()})(_mingyan);
