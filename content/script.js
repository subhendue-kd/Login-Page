

document.addEventListener("DOMContentLoaded", (event) => {
    

    function valid() {

        var user_name = document.getElementById("ur").value.trim();
        var email_name = document.getElementById("emil").value.trim();
        var pass = document.getElementById("pwd").value.trim();
        if (!user_name) {
            alert("Please Fillup All The Fields");
        }
        else if (!email_name) {

            alert("Please Fillup All The Fields");

        }

        else if (!pass) {
            alert("Please Fillup All The Fields");



        }

        else {
            alert("Login Successful");
        }

    }

    document.getElementById("submitbtn").addEventListener("click", function (event) {
        event.preventDefault();
        valid();




    });

});




