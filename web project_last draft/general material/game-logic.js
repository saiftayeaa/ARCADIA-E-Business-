var buyBtn = document.getElementById('buy-btn');
var cartBtn = document.getElementById('add-btn');

var pageSearch = window.location.search;
var loggedUser = null;

if (pageSearch.indexOf('user=') !== -1) {
    var uStart = pageSearch.indexOf('user=') + 5;
    var uEnd = pageSearch.indexOf('&', uStart);
    if (uEnd == -1) { uEnd = pageSearch.length; }
    loggedUser = pageSearch.substring(uStart, uEnd);
}

var gameID = document.body.getAttribute('data-game-id') || 'unknown-game';
var ownedKey = 'game-' + gameID + '-owned';
var cartKey  = 'game-' + gameID + '-basket';

var isOwned  = localStorage.getItem(ownedKey) === 'true';
var isInCart = localStorage.getItem(cartKey)  === 'true';


function updateButtons() {

    if (!buyBtn || !cartBtn) return;

    if (isOwned) {
        buyBtn.textContent = 'View in Library';
        buyBtn.className = 'buy-btn owned';
    } else {
        buyBtn.textContent = 'Buy now';
        buyBtn.className = 'buy-btn';
    }

    if (isInCart) {
        cartBtn.textContent = 'Remove from cart';
    } else {
        cartBtn.textContent = 'Add to cart';
    }
}

updateButtons();


if (buyBtn) {
    buyBtn.onclick = function() {

        if (!loggedUser) {
            alert("Please Login first!");
            return;
        }

        if (isOwned) {
            alert("This game is already yours!");
        } else {
            isOwned = true;
            localStorage.setItem(ownedKey, 'true');
            updateButtons();
            alert("Game Purchased successfully!");
        }
    };
}

if (cartBtn) {
    cartBtn.onclick = function() {

        if (!loggedUser) {
            alert("Please Login first!");
            return;
        }

        isInCart = !isInCart;
        localStorage.setItem(cartKey, isInCart);
        updateButtons();
    };
}
