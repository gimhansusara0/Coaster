window.addEventListener('scroll', () => {
    const element = document.querySelector('.top-add');
    if (window.scrollY > 0) { // Change 0 to whatever scroll position you want to trigger at
        element.classList.add('pop-out');
    } else {
        element.classList.remove('pop-out');
    }
});


window.addEventListener('scroll', () => {
    const sidebar = document.querySelector('.sticky');
    const footer = document.querySelector('.footer');

    const sidebarTop = sidebar.offsetTop;
    const footerTop = footer.offsetTop;

    const scrollY = window.scrollY;

    if (scrollY + sidebar.offsetHeight >= footerTop) {
        sidebar.style.position = 'absolute';
        sidebar.style.top = (footerTop - sidebar.offsetHeight) + 'px';
    } else {
        sidebar.style.position = 'fixed';
        sidebar.style.top = '0';
    }
});