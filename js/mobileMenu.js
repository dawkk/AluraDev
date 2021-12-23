const btnMenuOpen = document.querySelector('[btn-mobile-open]');
const btnMenuClose = document.querySelector('[btn-mobile-close]');
const navMobile = document.querySelector('[mobile-menu]');
const logo = document.querySelector('[header-logo]');


function mobileMenu() {
    if (navMobile.style.display == 'flex') { navMobile.style.display = 'none';
    } else {
        navMobile.style.display = 'flex';
    }
}

btnMenuOpen.addEventListener('click', mobileMenu);
btnMenuClose.addEventListener('click', mobileMenu);


const btnSearch = document.querySelector('[btn-mobile-search]');
const search = document.querySelector('[search-bar]');
const btnCloseSearch = document.querySelector('[btn-mobile-close-search]');


btnSearch.addEventListener('click', mobileSearch);
btnCloseSearch.addEventListener('click', mobileSearch);

function mobileSearch() {
    if (search.style.display == 'flex') { 
     search.style.display = 'none';
    logo.style.display = 'flex';
    btnCloseSearch.style.display = 'none';
    btnSearch.style.display = 'flex';
    btnMenuOpen.style.display = 'flex';
    
    } else {
        search.style.display = 'flex';
        logo.style.display = 'none';
        btnCloseSearch.style.display = 'flex';
        btnSearch.style.display = 'none';
        btnMenuOpen.style.display = 'none';
    }
}



