

function toggleStartMenu() {
  var startMenu = document.querySelector(".xp_startmenu")
  startMenu.classList.toggle("open");
}


function closeStartMenu() {
  var startMenu = document.querySelector(".xp_startmenu")
  startMenu.classList.remove("open");
}




function setTime() {
  var timeElement = document.querySelector(".xp_bottom_bar_time");
  var currentdate = new Date();
  timeElement.innerHTML = currentdate.getHours() + ":" + currentdate.getMinutes();
}


window.onload = function() {
  setTime();
  setInterval(setTime, 1000);
}
