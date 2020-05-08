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
    // var img_url = "/api/img";
    var top_url = "/api/keji";
    var ejs_url = "/static/f-ejs/top.ejs";

    function getImg() {
        // $.ajax({
        //     url: img_url, success: function (result) {
        // $("body").attr("style", "background-image:url(" + result + ");background-repeat:no-repeat;background-attachment: fixed;background-size:cover;");
        $.ajax({
            // url: result,
            url: img_url,
            success: function (data) {
                // console.log(data);
                $("body").attr("style", "background-image:url(" + img_url + ");background-repeat:no-repeat;background-attachment: fixed;background-size:cover;");
                // $("#ImagePic").attr("src", "data:image/png;base64," + data);
            },
        });
        //     }
        // });
    }

    function getTop() {
        $.ajax({
            url: ejs_url,
            success: function (e) {
                // console.log(e);
                $.ajax({
                    url: top_url,
                    dataType: "json",
                    success: function (result) {
                        for (var one in result["result"]["data"]) {
                            var html = ejs.render(e, result["result"]["data"][one]);
                            // console.log(html);
                            $("#cont").append(html);
                        }
                    }
                });
            }
        });
    }

    function Begin() {
        var fs = localStorage.getItem("f-s");
        // console.log(fs);
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
    $("#in").keyup(function (event) {
        if (event.keyCode == 13) {
            var q = $("#in").val();
            if (q != "") {
                location.href = url + q;
            }
        }
    });
    $("#go").click(function () {
        var q = $("#in").val();
        if (q != "") {
            location.href = url + q;
        }
    });
    getImg();
    getTop();
    Begin();
});