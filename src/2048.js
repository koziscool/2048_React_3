
var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var Board2048 = React.createClass({

  render: function() {
    var children = [];

    for ( var i = 0; i < 16; i++){
      var value = 4;
      children.push( <p>Tetris</p> )
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

    return (
      <div className="animateItem" >{ 32 }</div>
    );
  }

});

ReactDOM.render(
  <Board2048/>,
  document.getElementById('root')
);
