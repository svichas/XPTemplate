

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
    $(this).addClass("open");
  });

  $(document).click(function() {
    $(".xp_startmenu").removeClass("open");
  });

  $(".xp_window").draggable().resizable();

  setTime();
  setInterval(setTime, 1000);

  function setTime() {
    var currentDateTime = new Date();
    $(".xp_bottom_bar_time").html(currentDateTime.getHours() + ":" + currentDateTime.getMinutes());
  }

});
