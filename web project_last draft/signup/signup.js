document.getElementById("signupBtn").onclick = function() {

    var newUsername    = document.getElementById("username").value;
    var newEmail       = document.getElementById("email").value;
    var newPassword    = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (newUsername == "") {
        alert("Please enter username");
        return;
    }

    if (newEmail == "") {
        alert("Please enter email");
        return;
    }

    if (newEmail.indexOf("@") === -1) {
        alert("Email must contain @");
        return;
    }

    if (newPassword == "") {
        alert("Please enter password");
        return;
    }

    if (newPassword.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    if (newPassword.indexOf(" ") !== -1) {
        alert("Password must not contain spaces");
        return;
    }

    if (newPassword != confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    localStorage.setItem("user_" + newUsername, newPassword);
    localStorage.setItem("currentUser", newUsername);
    window.name = newUsername;

    alert("Account created successfully!");

    window.location.href = "../browse games/browse games.html?user=" + newUsername;
};