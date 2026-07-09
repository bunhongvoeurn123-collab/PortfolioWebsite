// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.getElementById('loginForm');
//     const submitBtn = document.getElementById('submitBtn');

//     loginForm.addEventListener('submit', function (e) {
//         e.preventDefault();

//         submitBtn.innerText = 'Verifying...';
//         submitBtn.disabled = true;

//         const username = document.getElementById('username').value;

//         setTimeout(() => {
//             alert(`Welcome back, ${username}`);

//             submitBtn.innerText = 'Sign In';
//             submitBtn.disabled = false;

//             loginForm.reset();
//             let user = document.getElementById("username").value;

//             let pass = document.getElementById("password").value;


//             if(user == "admin" && pass == "1234"){

//             window.location.href = "hong.html";

//             }else{

//             alert("Wrong username or password");

//             }
//         }, 1200);
        
        
//     });
// });

// document.getElementById("loginForm")
// .addEventListener("submit", function(e){

//     e.preventDefault();


//     let user = document.getElementById("username").value;

//     let pass = document.getElementById("password").value;


//     if(user == "admin" && pass == "1234"){

//         window.location.href = "hong.html";

//     }else{

//         alert("Wrong username or password");

//     }

// });

document.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();


    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    let button = document.querySelector("button");


    if(username == "BunHong" && password == "bunhong123"){


        button.innerHTML = "Verifying...";

        button.disabled = true;


        setTimeout(function(){


            alert("Welcome back, " + username);


            window.location.href = "New Portfolio.html";


        },2000);



    }else{


        alert("Wrong password");


    }


});

function showPassword(){

    let pass = document.getElementById("password");


    if(pass.type === "password"){

        pass.type = "text";

    }else{

        pass.type = "password";

    }

}