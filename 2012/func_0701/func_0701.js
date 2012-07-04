function func_0701(str) {
	if(str==null){
		return null;
	}
	var m=str.length;
	if(str.charCodeAt(m)>128||str.charCodeAt(m)<0){
		return "[??]";
	}
	var f01="";
	for(var i=0;i<str.length;i++){
		f01+="["+str.charCodeAt(i)+"]";

	}
	var f02='"'+f01+'"'
	return f02;
	
}

