$(function(){
	//各个函数
	var protect_eye=function(){
		$("body,html,div").addClass("eye_protect");
	}
	//中文编码和函数的对应映射
	var Functions={
		"%E4%BF%9D%E6%8A%A4%E8%89%B2":protect_eye
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
			console.log(result+"--"+encodeURI(result));
			//执行函数
			Functions[encodeURI(result)]();
		};
		rec.onerror=function(event){
			console.log(event);
		};
	}
});