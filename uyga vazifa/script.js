function Register() {
    let doc = document,
        signup = doc.getElementById("signup"),
        login = doc.getElementById('login'),
        signup_btn = doc.getElementById('signup_btn'),
        login_btn = doc.getElementById('login_btn');

    if (localStorage.getItem("data")) {
        signup.style.display = "none";
        login.style.display = "block";
    }
    signup_btn.onclick = () => {
        event.preventDefault();
        let signupName = doc.getElementById('name'),
            signupLastname = doc.getElementById('lastname'),
            signupUsername = doc.getElementById('username'),
            signupPass = doc.getElementById('pass'),
            signupConfirm_pass = doc.getElementById('confirm_pass'),
            signupErrorText = doc.getElementById('errorText');

            if (!signupName.value.trim() || !signupLastname.value.trim() || !signupUsername.value.trim() || !signupPass.value.trim() || !signupConfirm_pass.value.trim()) {
                signupErrorText.style.display = "block";
                signupErrorText.textContent = "Barcha maydonni to'ldiring!";
                return;
            }
            if (signupPass.value.trim() !== signupConfirm_pass.value.trim()) {
                signupErrorText.style.display = "block";
                signupErrorText.textContent = "Qayta kiritilgan parol xato";
                return;
            }
            signup.style.display = "none";
            login.style.display = "block";
            const myData = {
                'name' : signupName.value,
                'lastname' : signupLastname.value,
                'username' : signupUsername.value,
                'pass' : signupPass.value,
                inn : function () {
                    let innDiv = document.getElementById('myData');
                    innDiv.innerHTML = `${this.name} ${this.lastname} ${this.username} ${this.pass}`;
                }
            }
            localStorage.setItem("data", JSON.stringify(myData));
            login_btn.onclick = () => {
                event.preventDefault();
                let login_username = doc.getElementById("login_username"),
                    login_pass = doc.getElementById("login_pass"),
                    login_Erorrtext = doc.getElementById("login_Erorrtext");
                if (!login_username.value.trim() || !login_pass.value.trim()) {
                    login_Erorrtext.textContent = "Barcha maydonni to'ldiring!";
                    return;
                }
                let localData = JSON.parse(localStorage.getItem("data"));
                if (localData) {
                    if (localData.username == login_username.value.trim() && localData.pass == login_pass.value.trim()) {
                        login.style.display = "none";
                        document.getElementById('myData').style.display = "block";
                        document.getElementById('myData').innerHTML = `<div class="r1"><img src="work3.jpg"
        class="img"><h1 style ="text-align:center;color:grey;">Ismingiz:  ${localData.name}<br> Emeil:  ${localData.lastname}<br> Parol:  ${localData.username} ${localData.pass}</h1>
        <button class="w3">Tasdiqlash</button>
        </div>`;
                                return;
                    }else{
                        login_Erorrtext.style.display = "block";
                        login_Erorrtext.textContent = "Login yoki porol xato!";
                    }
                }
            }
            
            myData.inn();
    }

     login_btn.onclick = () => {
      event.preventDefault();
      let login_username = doc.getElementById("login_username"),
    login_pass = doc.getElementById("login_pass"),
    login_Erorrtext = doc.getElementById("login_Erorrtext");
     if (!login_username.value.trim() || !login_pass.value.trim()) {
    login_Erorrtext.textContent = "Barcha maydonni to'ldiring!";
    return;
     }

        let localData = JSON.parse(localStorage.getItem("data"));
        if (localData) {
        if (localData.username == login_username.value.trim() && localData.pass == login_pass.value.trim()) {
        login.style.display = "none";
        document.getElementById('myData').style.display = "block";
        document.getElementById('myData').innerHTML = `<div class="r1"><img src="work3.jpg"
        class="img"><h1 style ="text-align:center;color:grey;">Ismingiz:  ${localData.name}<br> Emeil:  ${localData.lastname}<br> Parol:  ${localData.username} ${localData.pass}</h1>
        <button class="w3">Tasdiqlash</button>
        </div>`;
        return;
            }else{
                doc.getElementById("login_Erorrtext").style.display = "block";
                doc.getElementById("login_Erorrtext").textContent = "Login yoki porol xato!";
            }
                
        }
    }
}
Register();