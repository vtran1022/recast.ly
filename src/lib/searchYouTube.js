import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      key: YOUTUBE_API_KEY,
      maxResults: 5,
      q: query,
      type: 'video',
      part: 'snippet',
      videoEmbeddable: true
    },
    contentType: 'application/json',
    success: (data) => {
      callback(data);
    }
  });
};

export default searchYouTube;
