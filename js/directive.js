function showHide($rootScope,$location){
	return {
		link : function(scope,ele){
			//弹框
			var box = ele.find(".box");
			//点击按钮出弹窗
			var start = ele.find(".start");
			//点击关闭弹窗
			var close = ele.find(".alert_close");
			//点击到下一页
			var next = ele.find(".alert_btn");
			start.on('click',function(){
				box.show();
			})
			close.on("click",function(){
				box.hide();
			})
		}
	}
}

function getCheck(){
	return {
		link : function(scope,ele){
			var span = ele.find("span");
			//被选中的高亮显示
			span.on("click",function(){
				$(this).addClass("on");
			})
		}
	}
}
function getChecked(){
	return {
		link : function(scope,ele){
			//被选中的高亮显示
			ele.on("click","p>span",function(){
				$(this).addClass("on").siblings().removeClass("on");
			})

			//翻页效果
			ele.on("click",".btn",function(){
				var len = $(this).parent().find("span[class=on]").length;
				if(len==5){
					$(this).parent().next().css("z-index","99").siblings().css("z-index",0);
				}else{
					alert("请选着完整！！！")
				}
				if($(this).attr("id") == "btn11"){
					//跳转页面
					$(this).attr("href","views/result.html")
				}
			})
		}
	}
}

function changePage(){
	return {
		link : function(scope,ele){
			/*if(){
				return false;
			}*/
			ele.on("click",'.ok',function(){
				var page = ele.find(".bp");
				var idx = $(this).attr("id").substr(3)*1;
				$(".bp"+(idx+1)).css("z-index","99").siblings().css("z-index",0)
				
			})
		}
	}
}

function yesNo(){
	return {
		link : function(scope,ele){
			ele.on("click","input[type=radio]",function(){
				var box = ele.find(".sick_list")
				$(this).prop("checked",true);
				if($(this).attr("id") == "have"){
					$(box).css("opacity","1");
				}else{
					$(box).css("opacity","0");
				}
			})
		}
	}
}
function backTo(){
	return {
		link : function(scope,ele){
			var back = ele.find("#back");
			back.on("click",function(){
				
			})
			console.log();
		}
	}
}
angular.module("app")
	   .directive("showHide",showHide)
	   .directive("getCheck",getCheck)
	   .directive("getChecked",getChecked)
	   .directive("changePage",changePage)
	   .directive("yesNo",yesNo)
	   .directive("backTo",backTo)
	 