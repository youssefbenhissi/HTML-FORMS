$(document).ready(function () {
    $(".gras").click(function () {
        $(".test").css("font-weight", "bold");
    });
});
$(document).ready(function () {
    $(".italique").click(function () {
        $(".test").css("font-style", "italic");
    });
});
$(document).ready(function () {
    $(".souligne").click(function () {
        $(".test").css("text-decoration", "underline");
    });
});
$(document).ready(function () {
    $(".size").change(function () {
        var a;
        a = document.getElementById('size1').value;
        var b = a + 'px';
        $(".test").css("font-size", `${b}`);
    });
});
$(document).ready(function () {
    $(".myFont").change(function () {
        var a;
        a = document.getElementById('font').value;
        $(".test").css("font-family", a);
    });
});