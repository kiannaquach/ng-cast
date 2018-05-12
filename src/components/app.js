angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = exampleVideoData;
    this.selected = this.videos[0];
    this.name = "hello";
    this.url = "https://www.youtube.com/embed/" + this.selected.id.videoId;
    this.title = this.selected.snippet.title;
    this.description = this.selected.snippet.description;

    this.select = (function(index) {      
      this.selected = this.videos[index];
      this.url = "https://www.youtube.com/embed/" + this.selected.id.videoId;
      this.title = this.selected.snippet.title;
      this.description = this.selected.snippet.description;
      console.log('Select: ',this);      
    }).bind(this);
  },
  templateUrl: 'src/templates/app.html'
});
