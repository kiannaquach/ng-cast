angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.selected = this.videos[0];

    this.url = "https://www.youtube.com/embed/" + this.selected.id.videoId;
    this.title = this.selected.snippet.title;
    this.description = this.selected.snippet.description;


    this.select = (function(index) {      
      this.selected = this.videos[index];
      this.url = "https://www.youtube.com/embed/" + this.selected.id.videoId;
      this.title = this.selected.snippet.title;
      this.description = this.selected.snippet.description;
      // console.log('Select: ',this);      
    }).bind(this);

    // search function for fetching data
    var options = {
      q: '',
      key: window.YOUTUBE_API_KEY,
      part: 'snippet',
      maxResults: 5
    }

    this.input = '';

    this.search = (function(response) {
      this.videos = response.data.items;
      this.selected = this.videos[0];
      this.url = "https://www.youtube.com/embed/" + this.selected.id.videoId;
      this.title = this.selected.snippet.title;
      this.description = this.selected.snippet.description;
    }).bind(this);

    youTube.getRequest(options, this.search);

    this.request = _.debounce(function(inputText) {
      var options = {
        q: inputText,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        maxResults: 5
      }
      youTube.getRequest(options, this.search);
    }, 500).bind(this);
  },
  templateUrl: 'src/templates/app.html'
});
