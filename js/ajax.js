function DataAjax(opt){
	var s = $.extend({},{

		wrap : opt.wrap

	},opt)
	var html = '<div class="bank">'+

					'<h1>1</h1>'+

					'<p>'+

						'<span>没有</span><span>很少</span><span>有时</span><span>经常</span><span>总是</span>'+
					
					'</p>'+

			   '</div>';

	s.wrap.html(html);

}