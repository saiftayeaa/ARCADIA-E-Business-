const buy_button = document.getElementById('buy-btn');
const basket_button = document.getElementById('add-btn');

const my_url_data = new URLSearchParams(window.location.search);
const current_user = my_url_data.get('user');

const storage_key_owned = 'game ownership';
const storage_key_basket = 'inCart';

let game_is_bought = localStorage.getItem(storage_key_owned) === 'true';
let game_is_in_basket = localStorage.getItem(storage_key_basket) === 'true';

console.log("Status Check:", { bought: game_is_bought, basket: game_is_in_basket });

function refresh_page_buttons() {
    if (!buy_button || !basket_button) return;

    if (game_is_bought) {
        buy_button.textContent = 'View in Library';
        buy_button.classList.add('owned');
    } else {
        buy_button.textContent = 'Buy now';
        buy_button.classList.remove('owned');
    }

    if (game_is_in_basket) {
        basket_button.textContent = 'Remove from cart';
    } else {
        basket_button.textContent = 'Add to cart';
    }
}

refresh_page_buttons();

if (buy_button) {
    buy_button.onclick = function() {
        if (!current_user) {
            alert("Please Login first!");
            return;
        }

        if (game_is_bought) {
            alert("This game is already yours!");
        } else {
            game_is_bought = true;
            localStorage.setItem(storage_key_owned, 'true');
            refresh_page_buttons();
            console.log("Success: Game bought");
            alert("Game Purchased successfully!");
        }
    };
}

if (basket_button) {
    basket_button.onclick = function() {
        if (!current_user) {
            alert("Please Login first!");
            return;
        }

        game_is_in_basket = !game_is_in_basket;
        localStorage.setItem(storage_key_basket, game_is_in_basket);
        refresh_page_buttons();
        console.log("Basket Updated: " + game_is_in_basket);
    };
}
