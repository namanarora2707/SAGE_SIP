$(document).ready(function () {

    // Selector Example
    $("#heading").css("color", "blue");

    // Click Event
    $("#hideBtn").click(function () {
        $("#box").hide();
    });

    $("#showBtn").click(function () {
        $("#box").show();
    });

    $("#toggleBtn").click(function () {
        $("#box").toggle();
    });

    // Double Click
    $("#heading").dblclick(function () {
        alert("Heading Double Clicked!");
    });

    // Mouse Events
    $("#box").mouseenter(function () {
        $(this).css("background", "orange");
    });

    $("#box").mouseleave(function () {
        $(this).css("background", "lightblue");
    });

    // Keypress
    $("#inputBox").keypress(function () {
        console.log("Typing...");
    });

    // Focus and Blur
    $("#inputBox").focus(function () {
        $(this).css("background", "lightgreen");
    });

    $("#inputBox").blur(function () {
        $(this).css("background", "white");
    });

    // Fade Effects
    $("#fadeBtn").click(function () {
        $("#box").fadeToggle();
    });

    // Slide Effects
    $("#slideBtn").click(function () {
        $("#box").slideToggle();
    });

    // Animate
    $("#animateBtn").click(function () {
        $("#box").animate({
            left: '250px',
            opacity: '0.5'
        });
    });

    // DOM Manipulation
    $("#changeText").click(function () {
        $("#heading").text("Text Changed using jQuery");
        $("#box").html("<b>HTML Changed</b>");
    });

    // Add Remove Toggle Class
    $("#addClass").click(function () {
        $("#box").toggleClass("active");
    });

    // Append
    $("#appendBtn").click(function () {
        $("#box").append("<p>New Paragraph Added</p>");
    });

    // Chaining Example
    $(".para").click(function () {
        $(this)
            .css("color", "red")
            .slideUp(1000)
            .slideDown(1000);
    });

});