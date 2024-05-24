function openVenue(){
    document.getElementById("venues").style.height = "100%";
    document.getElementById("venueTitle").style.display = "block";
    document.getElementById("venueContainer").style.display = "flex";
    document.getElementById("close-btn").style.display = "block";
    document.getElementById("open-btn").style.display = "none";
}

function closeVenue(){
    document.getElementById("venues").style.height = "0";
    document.getElementById("venueTitle").style.display = "none";
    document.getElementById("venueContainer").style.display = "none";
    document.getElementById("close-btn").style.display = "none";
    document.getElementById("open-btn").style.display = "block";
}

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