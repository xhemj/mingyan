/*
* ©2020 xhemj
* 2020/11/28
*/
my = {};
(function (t) {
    t.version = "2020/11/28";
    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0673dbbe4e6ea51a92a74e3ba2bc051b";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s)
    })();
    loadJs = function (url) {
        var su = document.createElement("script");
        su.src = url;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(su, s)
    };
    loadJs("https://www.bilibili.com/gentleman/polyfill.js?features=fetch");
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-RE30WVG95Q');
    var dn = 1;
    db = function (i) {
        console.log("#" + dn + " -> " + "%c[DB]%c" + i, "color:red", "color:black");
        dn++;
    };
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js?t=20201180917');
        })
    };
    window.onload = function () {
        var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        db('Page load time is ' + loadTime + "ms");
    };
    var ua = new Browser();
    /* 页面基础功能 */
    var footer = $("footer").html().replace("999+", mingyan.length);
    $("#md").hide();
    $("#showall").hide();
    $("footer").html(footer);
    /****/
    qs = function (qs) {
        var s = location.href;
        s = s.replace("?", "?&").split("&");
        var re = "";
        for (i = 1; i < s.length; i++) {
            if (s[i].indexOf(qs + "=") == 0) {
                re = s[i].replace(qs + "=", "");
            };
        };
        return re;
    };
    rdNum = function (minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        };
    };
    $('h1').fontFlex(30, 50, 70);
    $('h3').fontFlex(30, 50, 70);
    /* 图片彩蛋 */
    t.lazypic = "./src/loading.svg";
    t.pic = function (my) {
        var name = my.split("：")[0];
        var my = my.split("：")[1];
        if (my == "虾扯蛋" || my == "解") {
            if (my == "虾扯蛋") {
                var pic = "https://s-sh-1943-pic1.oss.dogecdn.com/2020/10/16/TQ3i5EH2wD9KF6d.jpg"
                //https://xhemj.coding.net/api/share/download/5642985d-4d3d-40e8-8196-686744cb84f8
                //https://ae01.alicdn.com/kf/U4cc17e6537ff4e0ea028b59088da67aeJ.jpg
            };
            if (my == "解") {
                var solvePicUrl = {
                    "数学老王": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/11/01/KPVwxYQXM2fLODN.jpg",
                    "数学潘哥": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/11/01/iTkIWzwKaL92otl.jpg",
                    "语文老朱": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/11/01/xvUdlJW8XG1zbeZ.jpg",
                    "英语老俞": "https://s-sh-1943-pic1.oss.dogecdn.com/2020/11/01/lURnTwHouGbM8B7.jpg"
                };
                var pic = solvePicUrl[name];
            };
            t.PicMobie();
            lazyload();
            return my + "<\/br><img src=\"" + t.lazypic + "\" data-src=\"" + pic + "\" class=\"mypic lazyload mdui-hoverable\"><\/img>"
        } else {
            lazyload();
            return my
        }
    };
    /****/
    /* 功能 */
    t.print = function () {
        t.all();
        var oldstr = $("body").html();
        var headstr = "<title>名言 | ERSS</title>";
        var footstr = "</body></html>";
        $("#searchbar").hide();
        var printData = document.getElementById("showall").innerHTML.replace(/<a /g, "<span ").replace(/<\/a>/g, "<\/span>");
        var wind = window.open("", "", "toolbar=no,scrollbars=yes,menubar=no");
        wind.document.body.innerHTML = headstr + document.head.innerHTML + printData + footstr;
        wind.print();
        $("#searchbar").show();
        wind.close();
        window.document.body.innerHTML = oldstr;
        location.reload();
    };
    /****/
    /* 下载功能 */
    t.download = function () {
        var blob = new Blob([mingyan.join("\n")], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "名言列表（" + my.version + "）");
    };
    /* 已使用FileSaver.js替代 - 2020-11-28
    t.dfile = function (fileName, content) {
        const aTag = document.createElement('a');
        const blob = new Blob([content]);
        aTag.download = fileName;
        aTag.style = "display: none";
        aTag.href = URL.createObjectURL(blob);
        document.body.appendChild(aTag);
        aTag.click();
        setTimeout(function () {
            document.body.removeChild(aTag);
            window.URL.revokeObjectURL(blob);
        }, 100);
    };*/

    /****/
    /* 主功能：名言显示 */
    t.show = function () {
        try {
            $("#md").hide();
            $("#main").hide();
            if (mingyan.length != 0) {
                db("加载名言列表成功");
                if (qs("id") != "") {
                    var n = qs("id");
                } else if (location.hash != "" && location.hash != "#search") {
                    var n = location.hash.replace("#", "");
                } else {
                    var n = rdNum(0, mingyan.length - 1);
                };

                var name = mingyan[n].split("：")[0];
                db(name);
                if (mingyan[n].split("：").length == 2) {
                    var my = mingyan[n].split("：")[1];
                    db(my);
                } else if (mingyan[n].split("：").length == 3) {
                    var my = mingyan[n].split("：")[1] + "：" + mingyan[n].split("：")[2];
                    db(my);
                };
                db("已选取第" + n + "条名言：" + my);
                _hmt.push(['_trackEvent', "名言", "查看", "自动", name + "：" + my]);
                $("p#info").html(
                    "<div class=\"info-text\"><a href=\"" + "//" + location.hostname + location.pathname + "#" + n + "\" class=\"label label-rounded label-warning\">" + "#" + n + "</a></br><a href=\"javascript:;\" onclick=\"my.reload();_hmt.push(['_trackEvent', '名言', '刷新', '手动' , '点击查看更多名言']);\" >点击</a>查看更多名言</div>");
                if (my == "虾扯蛋" || my == "解") {
                    $("span#mingyan").html(t.pic(name + "：" + my));
                } else {
                    $("span#mingyan").html(my);
                }
                $("span#name").text(name);
                $("#main").fadeIn();
                var title = "名言 | " + my;
                document.title = title;
                var description = name + "曾经说过：" + my;
                $('meta[name="description"]').attr("content", description);
                $('meta[property="og:description"]').attr('content', description);
                $('meta[name="og:description"]').attr('content', description);
                $('meta[property="og:title"]').attr('content', title);
                $('meta[name="og:title"]').attr('content', title);
                lazyload();
            }
        } catch (err) {
            console.error(err);
            console.error("名言加载失败");
            $("#mingyan").text("名言加载失败");
            $("#info").html("错误信息：</br>" + err + "</br>建议：<a href=\"javascript:my.reload()\">点我刷新页面</a>");
            $("#main").fadeIn();
            $("#info").fadeIn();
            //location.href = "http://" + location.hostname + ":" + location.port + location.pathname;
        };
    };
    if (ua.device != 'Mobile') {
        var inputbar_width = "60%";
        $("#main").css("transform", "translateY(15%)");
    } else {
        var inputbar_width = "auto";
        $("#main").css("transform", "translateY(30%)");
        $("#md").css("transform", "translateY(50px)");
    };
    /****/
    /* 修复手机端图片菜单位置 */
    t.PicMobie = function () {
        if (ua.device == 'Mobile') {
            $("#main").css("transform", "translateY(15%)");
        } else {
            $("#main").css("transform", "translateY(10%)");
        };
        lazyload();
    };
    /****/
    /* 刷新名言 */
    t.reload = function () {
        if (location.hash != "") {
            location.href = "//" + location.hostname + ":" + location.port + location.pathname;
        } else if (qs("id") != "" || qs("mail") != "") {
            location.href = "//" + location.hostname + ":" + location.port + location.pathname;
        } {
            t.show();
        };
        lazyload();
    };
    /****/
    /* 隐藏搜索列表 */
    t.hide_showall = function () {
        $("#md").hide();
        $("#showall").hide();
        $("#main").fadeIn();
        $("footer").html(footer);
        if (location.hash == "#search") {
            location.href = "#";
        }
    };
    /****/
    /* 搜索列表功能 */
    t.all = function () {
        $("#md").hide();
        $("#main").hide();
        $("input#searchbar").val("");
        var showall = "<input style=\"" + inputbar_width + "\"" + " onclick=\"this.select()\" type=\"search\" id=\"searchbar\" placeholder=\"搜索……\" results=\"5\"></input></br></br><span class=\"e\"></span>";
        for (i = 0; i < mingyan.length; i++) {
            showall += "<div><a style=\"color:black\" id=\"showall_item\" class=\"" + i + "\" href=\"./?id=" + i + "\">" + mingyan[i] + "</a></div>";
        };
        showall += "</br></br></br>";
        $("#showall").html(showall);
        $("#showall").fadeIn();
        $("footer").html("当前名言数量：" + mingyan.length + "</br><a class=\"aline\" href=javascript:; onclick=\"my.hide_showall()\">返回<\/a>");
        $("#searchbar").focus();
    };
    /****/
    /* Markdown转html */
    t.md = function (id, url) {
        $("#md").hide();
        $("#main").hide();
        $("#showall").hide();
        $(id).html("<strong>" + `<div style="text-align: center" class="mdui-ripple"><style>h1{font-size:30px}</style><h1>加载中……</h1></div>` + "</strong></br></br></br></br>");
        $.get(url, function (data) {
            marked.setOptions({
                breaks: true
            });
            var html = marked(data);
            html = html.replace(/<a /g, "<a target=\"_blank\" ");
            $(id).html("<strong>" + html + "</strong></br></br></br></br>");
            $(id).fadeIn();
        });
        $("footer").html("当前名言数量：" + mingyan.length + "</br><a class=\"aline\" href=javascript:; onclick=\"my.hide_showall()\">返回<\/a>");
        $("#md").fadeIn();
    };
    /****/
    /* 更多页面 */
    t.more = function () {
        t.md("#md", "./src/md/more.md?t=202011281532");
    }
    t.about = function () {
        t.md("#md", "./src/md/about.md?t=202011280000");
    };
    /****/
    /* Markdown名言列表 */
    t.md_all = function () {
        $("#md").hide();
        $("#main").hide();
        $("#showall").hide();
        var out = ``;
        for (i = 0; i < mingyan.length; i++) {
            out += mingyan[i] + "</br>"
        };
        out += `</br></br></br></br>`;
        $("#md").html(marked(out));
        $("#md").fadeIn()
    }
    /****/
    /*function time(i) {
        var a = i;
        a = a.split("T");
        var time = a[1];
        time = time.split(":");
        var h = time[0] * 1 + 8;
        var min = time[1];
        var s = time[2].split("Z")[0];
        var ut = a[0] + " " + h + ":" + min + ":" + s;
        return ut;
    };
    $.get("https://api.github.com/repos/xhemj/mingyan/commits?page=1&per_page=1000", function (data) {
        for (i = 0; i < data.length; i++) {
            console.log(time(data[i]["commit"]["committer"]["date"]) + " " + data[i]["commit"]["message"])
        }
    });
    $.get("https://api.github.com/repos/xhemj/mingyan/commits?page=2&per_page=1000", function (data) {
        for (i = 0; i < data.length; i++) {
            console.log(time(data[i]["commit"]["committer"]["date"]) + " " + data[i]["commit"]["message"])
        }
    });* /
    /* Markdown名言列表 */
    t.tongji = function () {
        $("#md").hide();
        $("#main").hide();
        $("#showall").hide();
        var o = "";
        for (i = 0; i < mingyan.length; i++) {
            try {
                var a1 = mingyan[i].split("：")[0];
                var a2 = mingyan[i + 1].split("：")[0];
            } catch (e) { }
            db(a1 + "-" + a2);
            if (a1 == a2) {
                o += a1
            } else {
                o += a2
            };
        };
        //console.log(out);
        var count = [
            "数学老王：" + o.match(/老王/g).length,
            "英语老俞：" + o.match(/老俞/g).length,
            "数学潘哥：" + o.match(/潘哥/g).length,
            "语文老朱：" + o.match(/老朱/g).length,
            "物理刘老师：" + o.match(/物理刘老师/g).length,
            "物理王老师：" + o.match(/物理王老师/g).length,
            "地理吴老师：" + o.match(/地理吴老师/g).length,
            "地理朱老师：" + o.match(/地理朱老师/g).length,
            "政治王老师：" + o.match(/政治王老师/g).length,
            "化学吴老师：" + o.match(/化学吴老师/g).length,
            "历史李老师：" + o.match(/历史李老师/g).length,
            "美术林老师：" + o.match(/美术林老师/g).length,
            "体育吴老师：" + o.match(/体育吴老师/g).length,
            "体育俞老师：" + o.match(/体育俞老师/g).length,
            "生物吴老师：" + o.match(/生物吴老师/g).length
        ];
        window.count = count;
        //console.log(count);
        var out = "";
        out += count.join(" 句</br>") + " 句</br></br></br></br>";
        $("#md").html(marked(out));
        $("#md").fadeIn()
    };
    /****/
    /* 搜索功能 */
    t.search = function () {
        if ($("#searchbar").is(":focus") || qs("q") != "") {
            if ($("input#searchbar").val()) {
                var now1 = $("input#searchbar").val();
                var now2 = $("input#searchbar").val();
                if (now1 == now2) {
                    $("a#showall_item").each(function () {
                        if ($(this).text().indexOf($("input#searchbar").val()) != -1) {
                            var reg = "/" + $("input#searchbar").val() + "/g";
                            $(this).html($(this).text().replace(eval(reg), "<span class=\"label label-secondary\">" + $("input#searchbar").val() + "</span>"));
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    });
                    $(".e").hide();
                }
            } else {
                $("a#showall_item").show();
                $("a#showall_item").each(function () {
                    $(this).html($(this).html().replace("<span class=\"label label-secondary\">", ""));
                    $(this).html($(this).html().replace("</span>", ""));
                })
            }
        }
        if ($("#showall")[0]["innerText"].match(/^\s*$/) != null) {
            $(".e").text("无结果");
            $(".e").show();
        } else {
            if ($("#searchbar").is(":focus")) {
                $(".e").hide();
            }
        }
    };
    var search = setInterval(t.search, 100);
    /****/
    /* 邮箱 */
    if (qs("mail")) {
        window.open("mailto:" + qs("mail").replace("---", "@"));
        t.reload()
    };
    /****/
    /* 标题变化 */
    var title = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            document.title = '名言 | 来看名言呀！';
            clearTimeout(titleTime);
        }
        else {
            document.title = title;
        }
    });
    /****/
    lazyload();
    /* 路由 */
    if (location.pathname == "/about" || location.pathname == "/search") {
        if (location.pathname == "/about") {
            my.about()
        };
        if (location.pathname == "/search") {
            my.all();
            if (qs("q")) {
                $("#searchbar").val(decodeURI(qs("q")));
                $("#searchbar").focus();
            }
        };
    } else if (location.pathname == "/") {
        t.show();
    } else {
        clearInterval(search);
        $(".app").load("./src/_404.html");
    };
    /****/
})(my)