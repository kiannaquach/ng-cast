angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    url: "<",
    description: "<",
    title: "<",
    details: "<",
    next: "<"
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
