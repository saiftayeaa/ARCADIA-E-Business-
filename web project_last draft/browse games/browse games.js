let current_slide_number = 0;
let slider_timer;

const all_slides = document.querySelectorAll('.featured-slide');
const dots_area = document.getElementById('slider-dots');
const back_button = document.getElementById('prev-btn');
const forward_button = document.getElementById('next-btn');

function change_active_slide(target_index) {
    current_slide_number = target_index;

    all_slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === current_slide_number);
    });

    const all_dots = dots_area.querySelectorAll('.slider-dot');
    all_dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === current_slide_number);
    });

    run_slider_timer();
}

function go_to_next() {
    current_slide_number = (current_slide_number + 1) % all_slides.length;
    change_active_slide(current_slide_number);
}

function go_to_back() {
    current_slide_number = (current_slide_number - 1 + all_slides.length) % all_slides.length;
    change_active_slide(current_slide_number);
}

function run_slider_timer() {
    clearInterval(slider_timer);
    slider_timer = setInterval(go_to_next, 5000);
}

back_button.addEventListener('click', (event) => {
    event.preventDefault();
    go_to_back();
});

forward_button.addEventListener('click', (event) => {
    event.preventDefault();
    go_to_next();
});

dots_area.addEventListener('click', (event) => {
    if (event.target.classList.contains('slider-dot')) {
        event.preventDefault();
        const clicked_index = parseInt(event.target.getAttribute('data-index'));
        change_active_slide(clicked_index);
    }
});

run_slider_timer();
change_active_slide(0);
