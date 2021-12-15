var scrollAppear = function(){
    var quoteText = document.getElementById("quoteText");
    var quotePosition = quoteText.getBoundingClientRect().top;
    var windowPosition = window.innerHeight / 2;
    console.log(windowPosition);
    console.log(quotePosition);
    if (windowPosition > quotePosition)
    {
        quoteText.classList.add('quoteAppear');
    }
}
document.addEventListener("scroll", scrollAppear);