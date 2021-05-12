import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    // passing those props along - take all the props on react.components
    // and passing it to the app

    this.state = { // current instance of our component
      videos: [],
      currentVideo: {
        id: {videoId: ''},
        snippet: {title: '', description: ''}
      }
    };
  }
  /* state contains the variables that are being presented to the users in such a way that when
  they change, the visual representation must be re-drawn on the screen
  */

  getYouTubeVideos(query) {
    searchYouTube(query, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  componentDidMount() {
    this.getYouTubeVideos('hamsters');
  }
  // as soon as a component is rendered to the DOM, invokes

  setCurrentVideo(video) {
    this.setState({
      currentVideo: video,
    });
  }
  // why only changing currentVideo
  // setState - built in such a way that it only wants to ID the property that changes,
  // so only re-renders the components that must be re-rendered

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchChange={this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.videos}
              setCurrentVideo={this.setCurrentVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// can pass event handlers along as prop - setCurrentVideo

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;