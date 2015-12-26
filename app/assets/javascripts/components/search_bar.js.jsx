var SearchBar = React.createClass({
  performSearch: function(){
    this.props.history.pushState(null, '/search', {term: this.refs.term.value})
  },

  keyDown: function(event){
    if(event.keyCode == 13 || event.keyCode == 9){
      this.performSearch();
    }
  },

  termChange: function(event){
    _.throttle(this.performSearch, 300)()
  },

  componentDidMount: function(){
    if(this.props.noFocus)
      return
    this.refs.term.focus(); 
    Util.moveCursorToEnd(this.refs.term)
  },

  render: function() {
    return (
      <div className="input-group col-sm-12 col-md-8 col-md-offset-2" id="search-bar">
        <input type="search" ref="term" onChange={this.termChange} defaultValue={this.props.term} className="form-control" placeholder="search product here" onKeyDown={this.keyDown}/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.performSearch}>
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </button>
        </span>
      </div>
    );
  }
});