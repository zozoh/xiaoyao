function func_0619(str, sub) {
    if(str == null || sub == null || sub.length>str.length) {
        return false;
    }
    var a = str.split("");
    var b = sub.split("");
    for(var i=0;i<sub.length;i++){
        if(b[i]!=a[i]){
            return false;
        }
        
    }
    return true;
}
