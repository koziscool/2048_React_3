
var FOUR = 4;
var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var Board2048 = React.createClass({

  getInitialState: function() {
    return {
      tiles: []
    };
  },

  updateTileState: function() {
    var row, col;
    for ( var i = 0; i < model2048.numTiles; i++ ){
      row = Math.floor( i/FOUR );
      col = i % 4;
      var value = model2048.getTile( row, col );
      this.state.tiles[i] = value;
    }
  },

  componentWillMount: function() {
    model2048.init();
    this.updateTileState();
  },

  render: function() {
    var children = [];

    var row, col;
    for ( var i = 0; i < model2048.numTiles; i++ ){
      row = Math.floor( i/FOUR );
      col = i % 4;
      var value = model2048.getTile( row, col );
      children.push( <Tile2048 key={i} index={i} value={value} className="animateItem"/> )
    }
    return (
      <CSSTransitionGroup
        className="animateExample"
        transitionEnterTimeout={250}
        transitionLeaveTimeout={250}
        transitionName="example">
      {children}
      </CSSTransitionGroup>
    );
  },

});

var Tile2048 = React.createClass({

  render: function () {

    var colors =  [ 'lightgray','orange', 'khaki', 'firebrick', 'lightgreen', 'deepskyblue', 
        'goldenrod', 'red', 'gray', 
        'blue', 'purple', 'brown', 'black', 'darkyellow', 'lightblue', 'pink'];
    var row = Math.floor( this.props.index / FOUR );
    var col = this.props.index % 4;
    var colorIndex = Math.max( Math.floor( Math.log2( this.props.value)), 0 );

    var style = {
      left: 128* col,
      top:  128 * row,
      background: colors[ colorIndex ]
    };

    return (
      <div className="animateItem" style={style}>{ this.props.value }</div>
    );
  }
});

ReactDOM.render(
  <Board2048/>,
  document.getElementById('root')
);
