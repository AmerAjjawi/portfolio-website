//create the variables



function toggleheader () {
    const topnav = document.querySelector(".topNav");
    console.log(topnav);
    
    if (topnav.className === '.topNav') {
        topnav.className += 'responsive';
    } else {
        topnav = 'topNav'
    }
}
toggleheader();