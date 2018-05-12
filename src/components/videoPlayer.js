angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    url: "<",
    description: "<",
    title: "<",
    details: "<"
  },

  controller: function() {
    console.log(this)
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
