function swiper(opt){

	this.wrap = opt.wrap;

	this.next = opt.next;

	this.prev = opt.prev;

	this.type = opt.type;

	this.callback = opt.callback;

	this.page = opt.page;

	this.btn = opt.btn;


	this.init();

	this._initDom();

	this._initEvent();
}

swiper.prototype = {

	init : function(){
	
		this._width = $(window).width();
		
		this._index = 0;
	},
	_initDom : function(){
		
		this._item=this.wrap.find(this.page);

		var self = this;
		
		for(var i = 0; i < self._item.length; i++){

			$(self._item[i]).css("-webkit-transform","translate3d("+i*self._width+"px,0,0)");

			self.btn.on("tap",function(){

				self.btn.attr("href","ti"+(self._index+1)+".html");
			
			})
			
		}
	},

	_initEvent : function(){

		var self = this;

		this._item.on("touchstart",function(e){

			//e.preventDefault();

			self._startx = e.touches[0].screenX;

			self._offsetX = 0;
		})

	
		this._item.on("touchmove",function(e){

			//e.preventDefault();

			self._movex = e.touches[0].screenX;

			self._offsetX = self._movex - self._startx;

			var _width=this._width,

				_offsetX=self._offsetX;
			
			for( var i = 0;i < self._item.length;i++){

				$(self._item[i]).css("-webkit-transform","translate3d("+((i-self._index)*_width+_offsetX)+"px,0,0)");
				
				$(self._item[i]).css("-webkit-transition","none");
			
			}
		})

		this._item.on("touchend",function(e){
			
			var _offset = self._offsetX;
			
			if(_offset < 0){
			
				self._start("+1",e.type);
		
			}else if(_offset > 0){
			
				self._start("-1",e.type);
				
			}
		})
	
		this.next.on("click",function(e){
		
			self._start("+1",e.type);
		
		})
	
		this.prev.on("click",function(e){
		
			self._start("-1",e.type);
		
		})
	},
	
	_start:function(num,type){
		
		var w = this._width,
		
			item = this._item,
		
			len = item.length,
			
			index = this._index;
		
		if( typeof num == "string"){
		
			newnum = index+num*1;
		
		}
		
		if( typeof num == "number"){
		
			newnum = num;
		
		}

		if(newnum<=0){ 
		
			newnum = 0;
		
		}else if(newnum>len-1){
		
			newnum = len-1;
		
		}

		//now page
		item[newnum] && ($(item[newnum]).css({"-webkit-transform":"translate3d(0,0,0)","-webkit-transition":"transform 0.3s ease-in"}));
		
		//pre page
		item[newnum-1] && ($(item[newnum-1]).css({"-webkit-transform":"translate3d("+-w+"px,0,0)","-webkit-transition":"transform 0.3s ease-in"}));
		
		//next page
		item[newnum+1] && ($(item[newnum+1]).css({"-webkit-transform":"translate3d("+w+"px,0,0)","-webkit-transition":"transform 0.3s ease-in"}));
		
		this._index = newnum;

		if(type.indexOf(this.type)>-1){
		
			this.callback && this.callback();
		
		}
		$(item[newnum]).find("p").show();
		$(item[newnum-1]).find("p").hide();
		$(item[newnum+1]).find("p").hide();

	}
}
