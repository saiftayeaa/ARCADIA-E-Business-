document.getElementById("signupBtn").onclick = function () {

    var new_user = document.getElementById("username").value;
    var new_email = document.getElementById("email").value;
    var new_pass = document.getElementById("password").value;
    var confirm_pass = document.getElementById("confirmPassword").value;

    if (new_user == "") {
        alert("Please enter username");
        return;
    }

    if (new_email == "") {
        alert("Please enter email");
        return;
    }

    if (new_email.includes("@") == false) {
        alert("Email must contain @");
        return;
    }

    if (new_pass == "") {
        alert("Please enter password");
        return;
    }

    if (new_pass.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    if (new_pass.includes(" ")) {
        alert("Password must not contain spaces");
        return;
    }

    if (new_pass != confirm_pass) {
        alert("Passwords do not match");
        return;
    }

    var accounts_list = JSON.parse(localStorage.getItem("users") || "{}");
    accounts_list[new_user] = new_pass;
    localStorage.setItem("users", JSON.stringify(accounts_list));
    
    localStorage.setItem("currentUser", new_user);
    window.name = new_user;

    alert("Account created successfully!");

    window.location.href = "../browse games/browse games.html?user=" + new_user;
};