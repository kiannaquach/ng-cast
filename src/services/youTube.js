angular.module('video-player')
.service('youTube', function($http){
  this.getRequest = function(options, callback) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: options
    }).then(function success(response) {
      callback(response)
    }, function error(response) {
      console.log('error', response)
    });
  };

    this.getRequestVideos = function(options, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/videos',
        params: options
      }).then(function success(response) {
        callback(response)
      }, function error(response) {
        console.log('error', response)
      }); 
    };
});
