$(document).ready(function () {

    var url0 = "https://www.baidu.com/s?wd=";
    var url1 = "https://www.google.com/search?q=";
    var url2 = "https://bing.com/search?q=";
    var url3 = "https://www.zhihu.com/search?type=content&q=";
    var url4 = "https://www.toutiao.com/search/?keyword=";
    var url5 = "/so?p=1&q=site:v2ex.com/t ";
    var url6 = "https://s.taobao.com/search?q=";
    var url7 = "https://search.jd.com/Search?keyword=";
    var url8 = "/so?p=1&q=";
    var url = "";

    //根据操作系统判断是否为移动端
    function IsMobile() {
        var isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i) ? true : false;
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i) ? true : false;
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i) ? true : false;
            },
            any: function () {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
            }
        };
        return isMobile.any(); //是移动设备
    }
    // console.log($(window).height());
    function DealMobile() {
        if (IsMobile()) {
            $(".f-m").hide();
            $("footer").removeClass("fixed-bottom");
            var h = $(window).height();
            var style = "background-image:url(" + img + ");background-repeat:no-repeat;background-attachment: fixed;background-size:auto " + h + "px;";
            $("body").attr("style", style);
        }
    }

    function Begin() {
        var fs = localStorage.getItem("f-s");
        console.log(fs);
        if (fs == "t") {
            $(".f-s").attr("hidden", true);
            if (IsMobile()) {
                $("footer").addClass("fixed-bottom");
            }
        } else if (fs == "f") {
            $(".f-s").attr("hidden", false);
        } else {
            $(".f-s").attr("hidden", false);
            localStorage.setItem("f-s", "f");
        }
        var ch = localStorage.getItem("ch");
        if (ch != null) {
            switch (ch) {
                case "0":
                    url = url0;
                    $("#o0").attr("selected", true);
                    break;
                case "1":
                    url = url1;
                    $("#o1").attr("selected", true);
                    break;
                case "2":
                    url = url2;
                    $("#o2").attr("selected", true);
                    break;
                case "3":
                    url = url3;
                    $("#o3").attr("selected", true);
                    break;
                case "4":
                    url = url4;
                    $("#o4").attr("selected", true);
                    break;
                case "5":
                    url = url5;
                    $("#o5").attr("selected", true);
                    break;
                case "6":
                    url = url6;
                    $("#o6").attr("selected", true);
                    break;
                case "7":
                    url = url7;
                    $("#o7").attr("selected", true);
                    break;
                case "8":
                    url = url8;
                    $("#o8").attr("selected", true);
                    break;
            }
        } else {
            localStorage.setItem("ch", "8");
            $("#o8").attr("selected", true);
            url = url8;
        }
    }

    function DoHeight() {
        if ($(window).height() < $(document).height()) {
            $("footer").removeClass("fixed-bottom");
        } else {
            $("footer").addClass("fixed-bottom");
        }
        console.log($(window).height());
        console.log($(document).height());
    }

    $("#ch").change(function () {
        var ch = $("#ch").val();
        switch (ch) {
            case "0":
                url = url0;
                $("#o0").attr("selected", true);
                break;
            case "1":
                url = url1;
                $("#o1").attr("selected", true);
                break;
            case "2":
                url = url2;
                $("#o2").attr("selected", true);
                break;
            case "3":
                url = url3;
                $("#o3").attr("selected", true);
                break;
            case "4":
                url = url4;
                $("#o4").attr("selected", true);
                break;
            case "5":
                url = url5;
                $("#o5").attr("selected", true);
                break;
            case "6":
                url = url6;
                $("#o6").attr("selected", true);
                break;
            case "7":
                url = url7;
                $("#o7").attr("selected", true);
                break;
            case "8":
                url = url8;
                $("#o8").attr("selected", true);
                break;
        }
        localStorage.setItem("ch", ch);
    });

    $("#csm").click(function () {
        $(".f-s").attr("hidden", false);
        localStorage.setItem("f-s", "f");
        if (IsMobile()) {
            $("footer").removeClass("fixed-bottom");
        }
        // $("footer").removeClass("fixed-bottom");
        DoHeight();
    });
    $("#jjb").click(function () {
        $(".f-s").attr("hidden", true);
        localStorage.setItem("f-s", "t");
        if (IsMobile()) {
            $("footer").addClass("fixed-bottom");
        }
        DoHeight();
    });
    $("#in").keyup(function (event) {
        if (event.keyCode == 13) {
            var q = $("#in").val();
            if (q != "") {
                location.href=url + q;
            }
        }
    });
    DealMobile();
    Begin();
    DoHeight();
});