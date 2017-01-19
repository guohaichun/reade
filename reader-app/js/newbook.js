$(function() {
    $(".Tab").click(function () {
        var index = $(this).index(".Tab");
        $(".Tab").css({
            "border": "none",
            "background": "#2a3441"
        })
        $(".Tab").eq(index).each(function () {
            $(this).css({
                "border": "1px solid #fff",
                "background": "#29a6dc"
            })
        })

        $(".body>div").eq(index).show().siblings().hide();
    })
})