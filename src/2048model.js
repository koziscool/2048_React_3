
var model2048 =  {

  numTiles: 16,
  numRows: 4,
  numCols: 4,
  initialSquares: 2,
  probabilityNewTwo: 0.9,

  tileValues: ['','2','4','8','16', '32', '64', '128', '256', '512', '1024', '2048', '4096', '8192', '16384' ],
  tiles: {},

  init: function() {
    this.buildInitialGrid();
  },

  tileKey: function( row, col ) {
    return row.toString() + ',' + col.toString();
  },

  setTile: function( row, col, value) {
    this.tiles[ this.tileKey(row, col) ] = value
  },

  getTile: function( row, col ) {
    return this.tiles[ this.tileKey( row, col) ];
  },

  randomNewValue: function() {
    return Math.random() < this.probabilityNewTwo ? '2' : '4'
  },

  getEmptySquares: function() {
    var empties = [];
    for( i=0; i<this.numRows; i++){
      for( j=0; j<this.numCols; j++){
        if( this.getTile( i, j) === '' ){
          empties.push( this.tileKey( i, j) );
        }
      }
    }
    return empties;
  },

  addNewSquare: function() {
    var empties = this.getEmptySquares();
    var randomEmpty = empties[ Math.floor(Math.random() * empties.length)];
    var row = randomEmpty.split(",")[0];
    var col = randomEmpty.split(",")[1];
    this.setTile( row, col, this.randomNewValue() );
  },

  buildInitialGrid: function( ) {
    var i;
    for( i=0; i<this.numRows; i++){
      for( j=0; j<this.numCols; j++){
        this.setTile( i, j, '');
      }
    }

    for (i = 0; i<this.initialSquares; i++){
      this.addNewSquare();
    }

  },


};