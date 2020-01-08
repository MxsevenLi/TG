var resgister_btn=document.getElementById("login-button");
var u_input_tip=document.getElementById("s-email");
var psw_input_tip=document.getElementById("s-password");

if(!window.localStorage)
    {
	    alert('不支持localStorage!')
	}else{
		if(localStorage.registerLsts){
		register_lsts=JSON.parse(localStorage.registerLsts);
	}
}

// 邮箱地址(email) 反馈
//例如：90203918@qq.com、nbilly@126.com
function isTelCode(str){
    var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return reg.test(str);
}

resgister_btn.onclick=function(){
    var u_input=document.getElementById("s-email").value;
    var psw_input=document.getElementById("s-password").value;

    if(u_input==""){
        u_input_tip.innerHTML="帐号不能为空";
        return false;
    }
    else{
        if(!isTelCode(u_input)){
            u_input_tip.innerHTML="帐号必须是手机号";
            return false;
        }
        
    }
    if(psw_input==""){
        psw_input_tip.innerHTML="密码不能为空";
        return false;
    }
    var se=false;
	for(var i=0;i<register_lsts.lenghth;i++){
	if(paw_input==register_lsts[i].username){
		se=true;
		break;
	}else{
		alert('密码不对！');
		break;
	    }
    }
}
if(se){
    localStorage.loginname=u_input;
    console.log(u_input)
    //self.localStorage='subMenu.html';
}
    
    if(!window.localStorage){
        alert('不支持localStorage');
    }else{
        var user_name=localStorage.getItem('username');
        var user_psw=localStorage.getItem('userpsw');
        
        if(u_input==user_name && psw_input==user_psw){
            self.location='../mxsrc/index.html';
        }
        else{
            alert('该用户不存在，请注册');
        }
    }