import VideoListEntry from './VideoListEntry.js';

// whatever obj gets passed in, i want to refer to only it's video property
// instead of passing in 'props' each time by using Object destructuring
// can pass in multiple items to destructing
var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((video) => (
      <VideoListEntry
        video={video}
        setCurrentVideo={props.setCurrentVideo} />
    ))}
  </div>
);

// this is being written as a functional stateless component

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

// key={props.video.id.videoId}