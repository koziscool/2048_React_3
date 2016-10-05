
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

  stripBlanks: function( arr ) {
    retArray = [];
    arr.forEach( function( elt ){
      if (elt !== '')
        retArray.push( elt );
    });
    return retArray
  },

  collapseArray: function( arr ) {
    for ( var i = 0;  i < arr.length - 1 ; i++ ) {

      if ( arr[i] === '' ) {
        arr[i] = arr[ i+1 ];
        arr[i+1] = '';
      }

      if ( arr[i] === arr[i+1] ) {
        var newVal = 2 * (+arr[i]);
        arr[i] = newVal.toString();
        this.gameScore += newVal;
        arr[i+1] = '';
      }
    }
  },

  moveUp: function() {
    for ( var col = 0; col < this.numCols; col++ ) {
      values = [];
      for (var row=0; row < this.numRows; row++ ){
        values.push( this.getTile(row, col));
      }
      values = this.stripBlanks( values );
      this.collapseArray( values );

      for (var row=0; row < this.numRows; row++ ){
        if ( values[row] ){
          this.setTile( row, col, values[row]);
        } else {
          this.setTile( row, col, '' );
        }
      }
    }
  },

  moveDown: function() {
    for ( var col = 0; col < this.numCols; col++ ) {
      values = [];
      for (var row=this.numRows - 1; row >= 0; row-- ){
        values.push( this.getTile(row, col));
      }
      values = this.stripBlanks( values );
      this.collapseArray( values );

      for (var row=this.numRows - 1; row >= 0; row-- ){
        if ( values[this.numRows - 1 - row] ){
          this.setTile( row, col, values[this.numRows - 1 - row]);
        } else {
          this.setTile( row, col, '' );
        }
      }
    }
  },

  moveLeft: function() {
    for ( var row = 0; row < this.numRows; row++ ) {
      values = [];
      for (var col=0; col < this.numCols; col++ ){
        values.push( this.getTile(row, col));
      }
      values = this.stripBlanks( values );
      this.collapseArray( values );

      for (var col=0; col < this.numCols; col++ ){
        if ( values[col] ){
          this.setTile( row, col, values[col]);
        } else {
          this.setTile( row, col, '' );
        }
      }
    }
  },

  moveRight: function() {
    for ( var row = 0; row < this.numRows; row++ ) {
      values = [];
      for (var col = this.numCols - 1; col >= 0; col-- ){
        values.push( this.getTile(row, col));
      }
      values = this.stripBlanks( values );
      this.collapseArray( values );

      for (var col = this.numCols - 1; col >= 0; col-- ){
        if ( values[this.numCols - 1 - col] ){
          this.setTile( row, col, values[this.numCols - 1 - col]);
        } else {
          this.setTile( row, col, '' );
        }
      }
    }
  },



};