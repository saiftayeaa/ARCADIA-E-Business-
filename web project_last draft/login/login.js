document.getElementById("loginBtn").onclick = function() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "") {
        alert("Please enter username");
        return;
    }

    if (password == "") {
        alert("Please enter password");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    if (password.indexOf(" ") !== -1) {
        alert("Password must not contain spaces");
        return;
    }

    var savedPassword = localStorage.getItem("user_" + username);

    if (!savedPassword) {
        alert("User not found. Please sign up first.");
        return;
    }

    if (savedPassword !== password) {
        alert("Incorrect password!");
        return;
    }

    localStorage.setItem("currentUser", username);
    window.name = username;

    window.location.href = "../browse games/browse games.html?user=" + username;
};