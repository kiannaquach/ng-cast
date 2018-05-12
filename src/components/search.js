angular.module('video-player')

.component('search', {
  bindings: {
    input: '=',
    request: '<'
  },
  
  templateUrl: 'src/templates/search.html'
});
