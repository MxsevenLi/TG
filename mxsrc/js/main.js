window.onload = function () {
    var sub_title = document.getElementById("subTitle");
    var j_uinfo_welcom = document.getElementById("j-uinfo-welcom");
    if (localStorage.username) {
        sub_title.innerHTML = localStorage.username;
        j_uinfo_welcom.innerHTML =  '�˳�';
    }
    sub_title.onclick=function(){
        if(j_uinfo_welcom.innerHTML == '��¼'){
            self.location="../Other pages/login.html";
        }else{
            if(j_uinfo_welcom.innerHTML == '�˳�'){
                localStorage.removeItem("loginname");
                self.location = 'index.html';
            }
        }
    }
}