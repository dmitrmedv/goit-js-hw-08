import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const STORAGE_KEY = "current-time";

player.on("timeupdate", throttle(saveCurrentTime, 1000));
function saveCurrentTime(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
}

function setTime() {
  const time = localStorage.getItem(STORAGE_KEY);
  if (time) {
    player.setCurrentTime(time);
  }
}

setTime();
