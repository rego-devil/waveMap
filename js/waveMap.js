var WaveMap = createClass({
	static: {
		CELL_WIDTH: 20,
		BORDER_COLOR: '#000',
		BORDER_WIDTH: 1,
		BORDER_DELTA: function(){
			return this.BORDER_WIDTH / 2
		}, 
		POINT_COLOR: '#ff0000',
		NUMERAL_COLOR: '#000',
		NUMERAL_FONT: 'normal 15px Arial',
		WALL_COLOR: 'grey',
		POINT_FONT: 'bold 20px Arial',
	},
	construct: function(id, matrix, startPos, endPos){

		this._canvas = document.getElementById(id);
		this._context = this._canvas.getContext("2d");
	
		this._matrix = matrix;
		this._startPos = startPos;
		this._endPos = endPos;
		
		this.initCanvas();
		this.init();
	
	},
	
	initCanvas: function(){
		this._canvas.width = WaveMap.CELL_WIDTH*this._matrix.getCols() + WaveMap.BORDER_WIDTH; 	// canvas width
		this._canvas.height = WaveMap.CELL_WIDTH*this._matrix.getRows() + WaveMap.BORDER_WIDTH;	// canvas height
	},

	init: function() {
		this.clearField();
		this.drawMatrix();
	},
	
	clearField: function() {
		this._context.clearRect(0, 0, this._canvas.width, this._canvas.height); 
	},
	
	drawCell: function(i,j){
		this._context.lineWidth = WaveMap.BORDER_WIDTH;
		this._context.strokeStyle = WaveMap.BORDER_COLOR;
		this._context.strokeRect( WaveMap.BORDER_DELTA() + i*WaveMap.CELL_WIDTH, WaveMap.BORDER_DELTA() + j*WaveMap.CELL_WIDTH, WaveMap.CELL_WIDTH, WaveMap.CELL_WIDTH);
	},

	drawPoint: function(i,j,value) {
		this._context.fillStyle = WaveMap.POINT_COLOR; 
		this._context.font = WaveMap.POINT_FONT;
		this._context.fillText(value,WaveMap.CELL_WIDTH*i + 3, WaveMap.CELL_WIDTH*(j+1) - 2 );
	},
	
	drawMatrixValue: function(i,j,value) {
		this._context.fillStyle = WaveMap.NUMERAL_COLOR; 
		this._context.font = WaveMap.NUMERAL_FONT;
		this._context.fillText(value,WaveMap.CELL_WIDTH*i + 3, WaveMap.CELL_WIDTH*(j+1) - 4 );
	},

	drawObstacle: function(i,j) {
		this._context.fillStyle = WaveMap.WALL_COLOR;
		this._context.fillRect(WaveMap.CELL_WIDTH*j + WaveMap.BORDER_WIDTH,WaveMap.CELL_WIDTH*i + WaveMap.BORDER_WIDTH,WaveMap.CELL_WIDTH - WaveMap.BORDER_WIDTH,WaveMap.CELL_WIDTH - WaveMap.BORDER_WIDTH);
	},

	drawMatrix: function() {
		for( var i=0; i < this._matrix.getRows(); i++ ) {
			for( var j=0; j < this._matrix.getCols(); j++ ) {

				this.drawCell(j,i);

				if( i == this._startPos.i && j == this._startPos.j) {
					this.drawPoint(j,i,'A');
				} else if( i == this._endPos.i && j == this._endPos.j) {
					this.drawPoint(j,i,'B');
				} else 	if ( this._matrix[i][j] == null) {
					this.drawObstacle(i,j);
				} else if ( this._matrix[i][j] != 0 ) {
					this.drawMatrixValue(j,i,this._matrix[i][j])
				}
				
			}

		}
	}

});