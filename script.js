var conteudo = document.getElementById("inputZone");


function register(){
    let inputZone = document.getElementById("inputZone");
    inputZone.innerHTML = '<input class="loginInput" type="text" placeholder="Username"><input class="loginInput" type="text" placeholder="E-mail adress"> <input class="loginInput" type="password" placeholder="Password"> ';
}

function login(){
    inputZone.innerHTML = '<input class="loginInput" type="text" placeholder="Login"><div class="divider"></div> <input class="loginInput" type="password" placeholder="Password">';
}

