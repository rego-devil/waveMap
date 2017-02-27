var Matrix = createClass({
	construct: function(hCount,vCount) {
		this._matrix = null;
		this._hCount = hCount;
		this._vCount = vCount;
		this._begPoint = { i:Math.round(Math.random()*(this._vCount-1)), j:Math.round(Math.random()*(this._hCount-1)) };
		this._endPoint = { i:Math.round(Math.random()*(this._vCount-1)), j:Math.round(Math.random()*(this._hCount-1)) };
		this.init();
	},
		
	init: function(){
		this._matrix = new Array(this._vCount);
	
		for( var i = 0; i < this._vCount; i++ ) {
			this._matrix[i] = new Array(this._hCount);
			for(var j = 0; j < this._hCount; j++)
				this._matrix[i][j] = 0;
		}

		this.createObstacles();
	},
	
	getMatrix: function(){
		return this._matrix;
	},
		
	getObstacleCount: function(){
		return this._hCount * this._vCount / 5;	
	},
	
	getRandomCounts: function(){
		return this._hCount * this._vCount / 5;	
	},
		
	getBeginPoint: function(){
		return this._begPoint;	
	},

	getEndPoint: function() {
		return this._endPoint;
	},
	

	createObstacles: function() {
	
		for(var i=0; i < this.getObstacleCount(); ++i) {

			var randi = Math.round(Math.random()*(this._vCount-1)); 
			var randj = Math.round(Math.random()*(this._hCount-1)); 

			
			if( !(randi == this._begPoint.i && randj == this._begPoint.j) && !(randi == this._endPoint.i && randj == this._endPoint.j) ) {
				this._matrix[randi][randj] = null;
				
			}
			
		}
	
		
	},
	
	randomFillMartrix: function(){
		
		for ( var i = 0; i < this.getRandomCounts(); i++) {
			
			var randi = Math.round(Math.random()*(this._vCount-1)); 
			var randj = Math.round(Math.random()*(this._hCount-1));
			
			if (this._matrix[randi][randj] != null && !(randi == this._begPoint.i && randj == this._begPoint.j) && !(randi == this._endPoint.i && randj == this._endPoint.j) ) {
				this._matrix[randi][randj] = Math.ceil( Math.random() * Math.max(this._vCount,this._hCount) );
			}
		}
		
	}
});
