
let namevalue = document.getElementById("accountName");
let pw = document.getElementById("pw");


function store(){
	if (!window.localStorage) {
	    	alert("로컬스토리지를 지원하지 않습니다.");
	    	return;
	    }

    localStorage.setItem(namevalue.value,pw.value);
}


function check() {
    if (!window.localStorage) {
	    	alert("로컬스토리지를 지원하지 않습니다.");
	    	return;
	    } 

	

     let userName = document.getElementById("userName");
     let userPassword = document.getElementById("userPw");
	 let storePassword = localStorage.getItem(userName.value);
	if(storePassword == null){
			alert("없습니다.");
	}

    if(userPassword.value == storePassword) {
       alert('sucsess')
     
    }
    else{
        alert("error.");
    }
};