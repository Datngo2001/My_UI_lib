var navbar = document.getElementById('NavBar');

window.document.addEventListener('scroll', function(){
    if (window.scrollY > 0)
    {
        navbar.classList.add('scrollDown');
    }
    else
    {
        navbar.classList.remove('scrollDown');
    }
})

var dropDown = document.getElementById('dropDown');

dropDown.addEventListener('click', function(){

    navbar.classList.toggle('dropped');

    var dropMenu = document.getElementById('right-nav');

    dropMenu.classList.toggle('droppedMenu');
})