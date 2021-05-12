var Search = (props) => (
  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onKeyUp={_.debounce((event) => {}, 500)}
      onChange={(event) => props.handleSearchChange(event.target.value)}
    />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// event.target.value - what is the current text input value of this component

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;