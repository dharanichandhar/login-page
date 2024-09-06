function login (){
    const username = document.getElementById("userid").value
    const password = document.getElementById("password").value
    if(username==="dharani" & password==="chandhar"){
        alert("Welcome dharani")
        window.document.location.href="index.html";
    }
    else{
        alert("Wrong user name (or) password please try again")
    }
    }
    