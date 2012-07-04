function func_0628(str) {
	if(str==null){
		return null;
	}
	if(str==""){
		return "";
	}
	var strNew="";
	for(var i=str.length-1;i>=0;i--){
	strNew +=str[i];
	
	}
	return strNew;
}
	
