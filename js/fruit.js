;(function($){
	var common = (function(){
		//显示遮罩层
		var showMask = function(){
			if($("#ui-id-mask").length == 0){
				$("<div class='ui-id-mask' id='ui-id-mask'></div>").appendTo($("body"));
			}
		},
		//删除遮罩层
		hideMask = function(){
			if($("#ui-id-mask") && $("#ui-id-mask").length>0){
				$("#ui-id-mask").remove();
			}
		},
		nextDiv = function($el){
		},
		//绑定事件程序
		index = function(){
			$("section.center").show();
			$("section.bank").hide();
			//点击开始按钮，出弹窗和遮罩层
			$("#start-btn").on("click",function(){
				$("#box").show();
				//showMask();
			})
			//点击弹窗的关闭按钮，关闭弹窗和遮罩层
			$("#alert_close").on("click",function(){
				$("#box").hide();
				hideMask();
			})
			//点击开始测试，进入信息采集页
			$("#alert_btn").on("click",function(){
				$("#box").hide();
				hideMask();
				$(".base_sex").css({
					"top" : 0
				})
				$(".index").hide();
			})

			//点击性别页跳转
			$("#sex_btn").on("click",function(){
				$(".base_sick").css({
					"top" : 0
				});
				$(".base_sex").hide();
			})
			//点击病名页跳转
			$("#sick_btn").on("click",function(){
				$(".base_sick").hide();
				$(".base_like").css({
					"top" : 0
				})
			})
			//点击过敏食物跳转
			$("#like_btn").on("click",function(){
				$(".base_like").hide();
				$(".base_hate").css({
					"top" : 0
				})
			})
			//病名列表的出现和隐藏
			$(".base_sick input").on("click",function(){
				if($("#have").prop('checked')){
					$(".sick_list").show();
				}else{
					$(".sick_list").hide();
				}
			})
			//食物列表的出现和隐藏
			$(".base_like input").on("click",function(){
				if($("#has").prop('checked')){
					$(".sick_list").show();
				}else{
					$(".sick_list").hide();
				}
			})
			//点击开始测试
			$("#beign_btn").on("click",function(){
				$("section.center").hide();
				$("section.bank").show();
			})
			

			//是否被选中
			var flag = false;
			$(".sick_list").on("click","span",function(){
				if(!flag){
					$(this).addClass("on");
					flag = true;
				}else{
					$(this).removeClass("on");
					flag = false;
				}
				
			})

		},
		data = function(){

			var $bank = $("#bank"),
			init = function(){
				$.ajax({
					url : 'data/question_sources1.json',
					dataType : "json",
					type : 'post',
					async:false,
					success : function(o){
						renderData(o);

						bind();
					}
				})
				
			},
			renderData = function(o){
				var str = '',
					len = o.length,
					num = 5,
					pages = Math.ceil(len/5);
				str+='<div class="bank_wrap">'
				for(var k = 1; k <= pages; k++){
					str+='<div class="bp bp'+k+'">';
					for(var i = (k-1)*num; i<k*num;i++){
						if(i>=len) return;
						str+='<h1>'+o[i].qName+'</h1><p><span>没有</span><span>很少</span><span>有时</span><span>经常</span><span>总是</span></p>'
					};
					str+='</div>';
					$("#bank").html(str);
				}
				str+='</div>';
			},
			bind = function(){
				//答题，点击高亮
				var ff = false,
					$p = $(".bp").find("p");
				
				$p.on("click",'span',function(){
					if(!ff){
						$(this).addClass("on").siblings().removeClass("on");
						ff = true;
					}else{
						$(this).removeClass("on");
						ff = false;
					}
				}) 
			}
			init();
		}
		return {
			index : index,
			data : data
		}
	})();
	
	window.common = common;
	
})(Zepto)