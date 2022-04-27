
let namevalue = document.getElementById("accountName");
let pw = document.getElementById("pw");


function store(){
	if (!window.localStorage) {
	    	alert("로컬스토리지를 지원하지 않습니다.");
	    	return;
	    }

    localStorage.setItem(namevalue.value,pw.value);//회원정보를 로컬스토리지에 저장
}


function check() {
    if (!window.localStorage) {
	    	alert("로컬스토리지를 지원하지 않습니다.");
	    	return;
	    } 

	

     let userName = document.getElementById("userName");
     let userPassword = document.getElementById("userPw");
	 let storePassword = localStorage.getItem(userName.value);
	if(storePassword == null){//회원정보 없음
			alert("ID 혹은 password가 잘못되었습니다.");
	}

    if(userPassword.value == storePassword) {//회원정보 일치
       alert('sucsess')//로그인 성공
 		window.open("login.html", "", "");
    }
    else{
        alert("error.");//로그인 실패
    }
};