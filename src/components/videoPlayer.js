angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    url: "<",
    description: "<",
    title: "<"
  },

  controller: function() {
    console.log(this)
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
