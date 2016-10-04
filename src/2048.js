
var FOUR = 4;
var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var Board2048 = React.createClass({

  render: function() {
    var children = [];

    for ( var i = 0; i < 16; i++){
      var value = 4;
      children.push( <Tile2048 key={i} index={i} value={22} className="animateItem"/> )
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

    var style = {
      left: 128* col,
      top:  128 * row,
      background: colors[6]
    };

    return (
      <div className="animateItem" style={style}>{ 32 }</div>
    );
  }
});

ReactDOM.render(
  <Board2048/>,
  document.getElementById('root')
);
