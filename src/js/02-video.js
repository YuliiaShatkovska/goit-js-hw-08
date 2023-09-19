import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe, {
  id: '19231868',
  width: 640,
});

const localStorageKey = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(localStorageKey, data.seconds);
  }, 1000)
);

player
  .setCurrentTime(Number(localStorage.getItem(localStorageKey)))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
