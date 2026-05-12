let loginForm = document.querySelector("form");

if(loginForm){

    loginForm.addEventListener("submit", function(event){

        event.preventDefault();

        window.location.href = "admin-dashboard.html";
    });
}

let deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach(function(button){

    button.addEventListener("click", function(){

        let row = button.parentElement.parentElement;

        row.remove();
    });
});