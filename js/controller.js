function main($scope,$location){
	$scope.backPrev = function(){
		console.log($scope)
	}
}
function index($scope,$location){
	
}
function sex($scope,$location){
	
}
function sick($scope,$location){
	
}
function allergy($scope,$location){
	
}
function food($scope,$location){
	
}
function item($scope,$location,$http){
	$http({
		method : "POST",
		url : "data/question_sources1.json",
		headers : {
			'Content-Type' : "appLication/x-www-form-urlencoded"
		}
	}).success(function(data){
		var count = 5,
			data = data,
			num = data.length,
			page = Math.ceil(num/count);

			function baseFn(n){
				// var baseHtml = '';
				var baseArr = ['<div class="bp bp'+(n+1)+'">']
				for(var j=n*5;j<(n+1)*5;j++){
					if(n==11) return;
					var qName = data[j].qName;
					baseArr.push('<h1>'+qName+'</h1>','<p><span>没有</span><span>很少</span><span>有时</span><span>经常</span><span>总是</span></p>')
					//console.log(qName)
					// baseHtml += ''
					// 		  +'<p>'
					// 		  		+'<span>没有</span><span>很少</span><span>有时</span><span>经擦</span><span>总是</span>'
					// 		  +'</p>'
					
				}	
				baseArr.push('<a href="#" class="btn" id="btn'+(n+1)+'"></a></div>')		
				// baseHtml += '<a href="#" class="btn" id="btn'+(n+1)+'"></a></div>'
				return baseArr.join("");
			};
			for(var i=0;i<page;i++){
				//console.log(i)
				$(".bank_wrap").append(baseFn(i));
			}
	})
}

angular.module("app")
	   .controller("main",main)
	   .controller("index",index)
	   .controller("sex",sex)
       .controller("sick",sick)
       .controller("allergy",allergy)
       .controller("food",food)
       .controller("item",item)