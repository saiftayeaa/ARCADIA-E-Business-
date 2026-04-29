document.getElementById("loginBtn").onclick = function () {

    var input_user = document.getElementById("username").value;
    var input_pass = document.getElementById("password").value;

    if (input_user == "") {
        alert("Please enter username");
        return;
    }

    if (input_pass == "") {
        alert("Please enter password");
        return;
    }

    if (input_pass.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    if (input_pass.includes(" ")) {
        alert("Password must not contain spaces");
        return;
    }

    var saved_accounts = JSON.parse(localStorage.getItem("users") || "{}");

    if (!saved_accounts[input_user]) {
        alert("User not found. Please sign up first.");
        return;
    }

    if (saved_accounts[input_user] !== input_pass) {
        alert("Incorrect password!");
        return;
    }

    localStorage.setItem("currentUser", input_user);
    window.name = input_user;
    
    window.location.href = "../browse games/browse games.html?user=" + input_user;
};