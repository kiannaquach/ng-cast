angular.module('video-player')
.service('youTube', function(options, callback){
  $http({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search'
  }).then(function success(response) {
    callback(response)
  }, function error(response) {
    console.log('error', response)
  });
});
