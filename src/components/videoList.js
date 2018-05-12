angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    select: '<'
  },
  controller: function() {
    // this.videos = exampleVideoData;
    // console.log(exampleVideoData);
  },
  templateUrl: 'src/templates/videoList.html'
});
