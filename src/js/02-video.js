import Player from '@vimeo/player';
import _ from 'lodash';

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

const storedTime = localStorage.getItem('videoplayer-current-time');

let currentTime = 0;
if (storedTime) {
  currentTime = parseFloat(storedTime);
} else {
  currentTime = 0;
};

player.setCurrentTime(currentTime);

const updateLocalStorage = _.throttle((time) => {
    localStorage.setItem('videoplayer-current-time', time.toFixed(2));
  }, 1000);

player.on('timeupdate', (data) => {
    const time = parseFloat(data.seconds);
    updateLocalStorage(time);
  });




