
// Core site script - improved toggles and helpers
document.addEventListener('DOMContentLoaded', function () {
    // Menu toggle (mobile)
    var menu = document.getElementById('MenuItems');
    var btn = document.getElementById('menuToggleBtn');
    if (btn && menu) {
        btn.addEventListener('click', function () {
            var expanded = btn.getAttribute('aria-expanded') === 'true';
            if (menu.classList.contains('show')) {
                menu.classList.remove('show');
                btn.setAttribute('aria-expanded', 'false');
            } else {
                menu.classList.add('show');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    }
    // Make product images clickable to open details (if product cards use .product-card)
    document.querySelectorAll('.product-card').forEach(function(card){
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(e){
            var link = card.querySelector('a');
            if (link && link.getAttribute('href')) {
                window.location = link.getAttribute('href');
            }
        });
    });

    // Fix any elements with data-show attribute to toggle visibility on click
    document.querySelectorAll('[data-toggle-target]').forEach(function(btn){
        btn.addEventListener('click', function(){
            var sel = btn.getAttribute('data-toggle-target');
            var el = document.querySelector(sel);
            if (el) el.classList.toggle('show');
        });
    });

    // Simple accessibility improvement for search input focus outline
    var search = document.querySelector('input[type="search"], input.search');
    if (search) {
        search.addEventListener('focus', function(){ this.classList.add('has-focus'); });
        search.addEventListener('blur', function(){ this.classList.remove('has-focus'); });
    }
});
