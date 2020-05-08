$(document).ready(function () {
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
    function DealMobile() {
        if (IsMobile()) {
            $(".f-m").hide();
            $(".f-m-lg").removeClass("col-5");
            $(".f-m-lg").addClass("col");
            $(".f-m-top").removeClass("col-5");
            $(".f-m-top").addClass("col-8");
            // $("#logo").removeClass("btn-lg");
            $("#logo").attr("style", "width:100%;");
        }
    }
    $("#query").keyup(function (event) {
        if (event.keyCode == 13) {
            var q = $("#query").val();
            if (q != "") {
                location.href = "/so?q=" + q + "&p=1";
            } else {
                location.href = "/";
            }
        }
    });
    $("#go").click(function () {
        var q = $("#query").val();
        if (q != "") {
            location.href = "/so?q=" + q + "&p=1";
        } else {
            location.href = "/";
        }
    });
    // DealMobile();
});