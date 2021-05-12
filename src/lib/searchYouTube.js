import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  $.ajax({
    url: `https://app-hrsei-api.herokuapp.com/api/recastly/videos/?youtube_api_key=${YOUTUBE_API_KEY}`,
    type: 'GET',
    data: {
      part: 'snippet',
      q: query,
      maxResults: 5,
      type: 'video',
      videoEmbeddable: true
    },
    contentType: 'application/json',
    success: (data) => {
      callback(data);
    },
    error: () => {
      console.error('YouTube failed to get video');
    }
  });
};

export default searchYouTube;

/*
'https://www.googleapis.com/youtube/v3/search'
*/