function check_and_show_user() {
    var my_url_data = new URLSearchParams(window.location.search);
    var name_from_url = my_url_data.get('user');
    var my_saved_name = name_from_url || window.name || localStorage.getItem("currentUser");

    if (my_saved_name && my_saved_name !== "" && my_saved_name !== "username" && my_saved_name !== "null") {
        window.name = my_saved_name;
        localStorage.setItem("currentUser", my_saved_name);
        
        var name_display_area = document.getElementById("nav-username");
        if (name_display_area) {
            name_display_area.textContent = my_saved_name;
        }
        
        add_user_to_all_links(my_saved_name);
    } else {
        show_login_signup_buttons();
    }
}

function show_login_signup_buttons() {
    var name_display_area = document.getElementById("nav-username");
    var parent_div = name_display_area ? name_display_area.parentElement : null;
    
    if (parent_div) {
        parent_div.innerHTML = `
            <a href="../login/login.html" class="auth-btn btn-login-nav">Log In</a>
            <a href="../signup/signup.html" class="auth-btn btn-signup-nav">Sign Up</a>
        `;
    }
}

function add_user_to_all_links(the_user_name) {
    var all_links = document.getElementsByTagName('a');
    for (var i = 0; i < all_links.length; i++) {
        var link_path = all_links[i].getAttribute('href');
        if (link_path && link_path !== "#" && !link_path.includes("user=")) {
            var mark = link_path.includes("?") ? "&" : "?";
            all_links[i].href = link_path + mark + "user=" + encodeURIComponent(the_user_name);
        }
    }
}

window.addEventListener('load', check_and_show_user);
check_and_show_user();
