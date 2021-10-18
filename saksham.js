const toggler = document.querySelector(".toggle");
const container = document.querySelector(".container");
const nav = document.querySelector(".navigation");
toggler.addEventListener("click", function(){
    container.classList.toggle("active");
    toggler.style.background = "rgba(255, 255, 255,0.2)";
    setTimeout(function(){
        toggler.style.background = "none";
    },100)
})
// remove sidebar when a link is clicked
let link = nav.querySelectorAll('.link');
for (let i = 0; i < link.length; i++) {
    const linkNum = link[i];
    linkNum.onclick = function(){
        container.classList.remove("active");
    }   
}
// remove the sidebar when clicked on the main content
document.addEventListener("click", (e) => {
    console.log(e.target.className);
    if (e.target.className != 'navigation' && e.target != toggler) {
        container.classList.remove("active");
    }
})

// image slider (I could have done this in different way but i thought for two images is better)
const slideT = document.querySelector(".slideToggle");
const images = document.querySelector(".images");

slideT.addEventListener("click", function(e){
    
    if (e.target.classList[0] == 'next') {
        images.style.left = "-100vw";
    }else {
        images.style.left = "0vw";
    }
    
})

// change the height of topBar when scrolled
const topBar = document.querySelector(".topBar");
window.addEventListener("scroll", function() {
    topBar.classList.toggle('sticky', scrollY > 0);
})

