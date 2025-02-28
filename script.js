const toggleButton = document.querySelector('.aside_btn');
const menu = document.querySelector('.aside_section_nav_bar_display_none_on_pphone');
//For debugging purposes!!
console.log(toggleButton);
console.log(menu);

//Showing and hiding the menu and the toggle button

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.style.left = 0;
        toggleButton.style.display = 'none';
    } else {
        menu.style.left = '-400px';
        toggleButton.style.display = 'block';
    }
});

//For debugging purposes!!
console.log(window.innerWidth);

toggleButton.addEventListener('click', () => {
    if (menu.style.left === '-400px'&&window.innerWidth<768) {
        menu.style.left = 0;
    } else {
        if(window.innerWidth
            <768)
        menu.style.left = '-400px';
    }
});

//Hiding the menu when the user clicks outside the menu
window.addEventListener('click', (e) => {
    if (e.target !== toggleButton && e.target !== menu&&window.innerWidth<768) {
        menu.style.left = '-400px';
    }
});