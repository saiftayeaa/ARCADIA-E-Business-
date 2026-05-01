function loadUserSession() {

    var pageURL = window.location.search;
    var userFromURL = null;

    if (pageURL.indexOf('user=') !== -1) {
        var paramStart = pageURL.indexOf('user=') + 5;
        var paramEnd = pageURL.indexOf('&', paramStart);
        if (paramEnd === -1) { paramEnd = pageURL.length; }
        userFromURL = decodeURIComponent(pageURL.substring(paramStart, paramEnd));
    }

    var activeUser = userFromURL || window.name || localStorage.getItem("currentUser");

    if (activeUser && activeUser !== "" && activeUser !== "username" && activeUser !== "null") {
        window.name = activeUser;
        localStorage.setItem("currentUser", activeUser);

        var usernameDisplay = document.getElementById("nav-username");
        if (usernameDisplay) {
            usernameDisplay.textContent = activeUser;
        }

        attachUserToLinks(activeUser);

    } else {
        showAuthButtons();
    }
}


function showAuthButtons() {

    var usernameDisplay = document.getElementById("nav-username");
    var navContainer = usernameDisplay ? usernameDisplay.parentElement : null;

    if (navContainer) {
        navContainer.innerHTML = '<a href="../login/login.html" class="auth-btn btn-login-nav">Log In</a>' +
            '<a href="../signup/signup.html" class="auth-btn btn-signup-nav">Sign Up</a>';
    }
}


function attachUserToLinks(username) {

    var navLinks = document.getElementsByTagName('a');

    for (var i = 0; i < navLinks.length; i++) {
        var href = navLinks[i].getAttribute('href');
        if (href && href !== "#" && href.indexOf("user=") === -1) {
            var separator = href.indexOf("?") !== -1 ? "&" : "?";
            navLinks[i].href = href + separator + "user=" + encodeURIComponent(username);
        }
    }
}


window.addEventListener('load', loadUserSession);
