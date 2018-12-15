

$(function() {

  $(".xp_start_btn").click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(".xp_startmenu").toggleClass("open");
  });

  $(".xp_startmenu").click(function(e) {
    e.stopPropagation();
  });

  $(document).on("click", ".xp_application", function(e) {
    $(".xp_window").removeClass("focus");

    var apid = $(this).find(".xp_window_topbar_title_text").html();

    $(this).addClass("open").find('.xp_window').addClass('focus');

    if ($(".xp_bottom_bar_applications").find(".xp_window_topbar_title[data-apid='"+apid+"']").length) {

    } else {
      $(".xp_bottom_bar_applications").append($(this).find(".xp_window_topbar_title").clone().attr("data-apid", apid));
    }
  });

  $(document).on("click", ".xp_window_btn_maximize", function(e) {
    e.stopPropagation();
    $(".xp_window").removeClass("focus");
    $(this).parents(".xp_window").addClass('focus').css({
      'width': '100vw',
      'height': 'calc(100vh - 30px)',
      'top': 0,
      'left': 0
    });
  });

  $(document).on("click", ".xp_window_topbar_title", function(e) {
    e.stopPropagation();
    var apid = $(this).find(".xp_window_topbar_title_text").html();

    $(".xp_window").removeClass("focus")

    $(".xp_application[data-apid='"+apid+"']").addClass("open")
    .find(".xp_window").addClass("focus");

  });

  $(document).on("click", ".xp_window_btn_minimize", function(e) {
    e.stopPropagation();
    $(this).parents(".xp_application").removeClass("open");
  });

  $(document).on("click", ".xp_window_btn_close", function(e) {
    e.stopPropagation();
    var app = $(this).parents(".xp_application");
    app.removeClass("open").find(".xp_window").prop("style", false);
    var apid = app.find(".xp_window_topbar_title_text").html();
    $(".xp_bottom_bar_applications").find(".xp_window_topbar_title[data-apid='"+apid+"']").remove();
  });

  $(document).on("click", ".xp_window_topbar", function(e) {
    e.stopPropagation();
    $(".xp_window").removeClass("focus");
    $(this).parents(".xp_window").addClass('focus');
  });

  $(document).click(function() {
    $(".xp_startmenu").removeClass("open");
  });

  $(".xp_window").draggable().resizable({
    minHeight: 300,
    minWidth: 300
  });

  setTime();
  setInterval(setTime, 1000);

  function setTime() {
    var currentDateTime = new Date();
    $(".xp_bottom_bar_time").html(currentDateTime.getHours() + ":" + currentDateTime.getMinutes());
  }

});
