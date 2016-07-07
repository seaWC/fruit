function Slider(opt){

	//创建对象
	this.wrap = opt.wrap;
	this.type = opt.type;
	this.callback = opt.callback;
	this.tagname = opt.tagname;
    this.lock = opt.lock;

	//函数
	this.init();
	this._initDom();
	this._initEvent();
}
Slider.prototype = {   
	//原型实例化
	init : function(){
		//this._width = $(window).width();
		this._height = $(window).height();
		this._index = 0;
	},
	_initDom : function(){
		this._item=this.wrap.find(this.tagname);
		var self = this;
		// item 找对象 位移
		for(var i = 0; i < self._item.length; i++){
			$(self._item[i]).css("-webkit-transform","translate3d(0,"+i*self._height+"px,0)");
		}
	},
	_initEvent : function(){
		var self=this;


		// if(self._index==4){
         
		// 		self._item.on("click",function(){
		// 			self._start("+1",e.type);
		// 		})
		// }
		//分别 获取 startX  moveX  offsetX  的值
		this._item.on("touchstart",function(e){
			//e.preventDefault();
			self._startY = e.touches[0].screenY;
			self._offsetY = 0;
		})

		this._item.on("touchmove",function(e){
			//e.preventDefault();
			if(self.lock){
				return false;
			}
			self._moveY = e.touches[0].screenY;
			self._offsetY = self._moveY - self._startY;
			var _height = this._height,
				_offsetY = self._offsetY;

			//滑动时  位移
			/*for( var i = 0;i < self._item.length;i++){
				$(self._item[i]).css("-webkit-transform","translate3d(0,"+((i-self._index)*_height+_offsetY)+"px,0)");
				$(self._item[i]).css("-webkit-transition","none");

			}*/
		})
		this._item.on("touchend",function(e){

			var _offset = self._offsetY;
			//判断 左右滑动  如果<0  向右滑  >0  向左滑
			if(_offset < 0){
				self._start("+1",e.type);
			}else if(_offset > 0){
				self._start("-1",e.type);
				
			}
			
		})

		
        

		//点击切换下一张    
		// this.next.on('click',function(e){
		// 	self._start("+1",e.type);

		// })
		// //点击切换上一张
		// this.prev.on('click',function(e){
		// 	self._start("-1",e.type);
		// })

		//点击按钮
		
	},
	_getIndex　: function(){
		return this._index;
	},
	_start:function(num,type){   //传参
		var h = this._height,
			item = this._item,
			len = item.length,
			index = this._index;

		//如果  num  的type 为 string
		if( typeof num == "string"){
			newnum = index+num*1;
		}

		//如果  num  的type 为 number
		if( typeof num == "number"){
			newnum = num;
		}

		//滑动限制的范围
		if(newnum<=0){ 
			newnum = 0;
		}else if(newnum>=len-1){
			newnum = len-1;
		}

		//获取当前index   位移
		item[newnum] && ($(item[newnum]).show(200).css({"-webkit-transform":"translate3d(0,0,0)","-webkit-transition":"transform .3s ease-in"}));
		item[newnum-1] && ($(item[newnum-1]).hide().css({"-webkit-transform":"translate3d(0,"+-h+"px,0)","-webkit-transition":"transform .3s ease-in"}));
		item[newnum+1] && ($(item[newnum+1]).hide().css({"-webkit-transform":"translate3d(0,"+h+"px,0)","-webkit-transition":"transform .3s ease-in"}));
		this._index = newnum;

		//indexOf  获取 事件类型


		this.callback && this.callback();

		
       
	}
}
