var resgister_btn=document.getElementById("login-button");
var u_input_tip=document.getElementById("s-email");
var psw_input_tip=document.getElementById("s-password");
var checkpsw_input_tip=document.getElementById("d-password");

var link=document.querySelector('.link');
var register_lsts=[];
var first=true;

//提取localStorage里的注册用户信息到数组里的register_lsts
if(!window.localStorage)
{
    alert('不支持localStorage!')
}
else{
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
	var checkpsw_input=document.getElementById("d-password").value;
}
//表单验证
if(u_input==""){
    u_input_tip.innerHTML="帐号不能为空";
    return false;
}else{
    if(!isTelCode(u_input)){
        u_input_tip.innerHTML="帐号必须是手机号";
        return false;
    
}else{
        u_input_tip.innerHTML = '';
        }
}
if(psw_input==""){
    psw_input_tip.innerHTML="密码不能为空";
    return false;
}else{
    if(checkpsw_input==""){
        checkpsw_input_tip.innerHTML="确认密码不能为空";
        return false;
    }else{
        if(psw_input!=checkpsw_input){
            checkpsw_input_tip.innerHTML="确认密码与密码不一致";
            return false;
        }
        
    }
    
}

//判断用户账号是否已经在注册表里(register_lsts)里是否存在
for(var i=0;i<register_lsts.length;i++){
    if(u_input==register_lsts[i].username){
        alert('该用户已存在，请重新注册');
        break;
    }
}

if(i==register_lsts.length){
    register_lsts.push({username:u_input,userpsw:psw_input});
}
console.log(register_lsts);


//当跳转回主页面时进行register_lsts的JSON序列化并把它保存到localStorage.registerLsts
link.onclick=function(){
if (!window.localStorage) {
    alert("不支持LocalStorage");
} else {
   localStorage.registerLsts=JSON.stringify(register_lsts);
   self.location="../mxsrc/index.html";      
}
}