import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', timeVideoPlayer);

function timeVideoPlayer(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
window.o;
player
  .setCurrentTime(parseFloat(timeVideoPlayer))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
