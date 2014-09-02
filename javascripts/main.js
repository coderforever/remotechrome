$(function(){
	var Functions={
		"保护色":function(){}
	};

	if(window.webkitSpeechRecognition){
		var rec=new webkitSpeechRecognition();
		//当用户停止说话时，语音识别将结束
		rec.continuous=true;
		//
		rec.interimResults=false;
		//语言
		rec.lang="cmn-Hans-CN";
		rec.start();
		rec.onstart=function(){
			console.log("start");
		};
		rec.onresult=function(event){
			var result="";
			for(var i=event.resultIndex;i<event.results.length;++i){
				if(event.results[i].isFinal){
					result+=event.results[i][0].transcript;
				}
			}
			Functions[result]();
		};
		rec.onerror=function(event){
			console.log(event);
		};
	}
});