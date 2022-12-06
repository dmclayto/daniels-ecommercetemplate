
function imgSlider(anything) {
            
      
    document.getElementById('display__image').src = anything;
}

function changeCircleColor (color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}



// Scroll to anchor ID using scrollTO event


document.querySelectorAll('a[href^= "#').forEach(scroll =>{
    scroll.addEventListener("click", function (s){
        s.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
        
    });
});