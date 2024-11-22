document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission from reloading the page
    
    // Get the form data
    var userEmail = document.getElementById('email').value;
    var userFeedback = document.getElementById('feedback').value;

    // Create the mailto link
    var mailtoLink = `mailto:chetanchunole1804@gmail.com?subject=Feedback from ${encodeURIComponent(userEmail)}&body=${encodeURIComponent(userFeedback)}`;

    // Open Gmail compose window with prefilled data
    window.location.href = mailtoLink;
});
// var item = document.getElementById("item")
// var float = 1;
// const menubar=()=>{
//     if(float ==1){
//         item.style.display = "none"
//         // item.style.transition = "2s"
//         float = 0;
//     }else{
//         item.style.display = ""
//         // item.style.transition = "2s"
//         float = 1;
//     }
// }

var tl2 = gsap.timeline()
var menu = document.querySelector("#menu");
var close = document.querySelector("#close")

tl2.to("#item",{
    top:0,
    duration:0.5
})

tl2.from("#item a",{
    // right:-50,
    x:150,
    duration:0.4,
    stagger:0.2,
    opacity:0
})

tl2.from("#item i",{
    opacity:0
})

tl2.pause()

menu.addEventListener("click", function(){
    tl2.play()
})

close.addEventListener("click", function(){
    tl2.reverse()
})


var tl = gsap.timeline()

tl.from("#loader h2",{
    x:30,
    opacity:0,
    stagger:0.2,
    duration:1
})
tl.to("#loader h2",{
    x:-30,
    opacity:0,
    stagger:0.2,
    duration:1
})
tl.to("#loader",{
    opacity:0,
    duration:1.3
    // display:'none'
})
tl.to("#loader",{
    display:'none'
})

tl.from(".navbar",{
    y:-30,
    duration:0.6,
    opacity:0,
});

tl.from(".navbar li", {
    opacity:0,
    stagger:0.3
})

gsap.from("#profile-info",{
    // delay:3,
    y:50,
    opacity:0,
    duration:2.2,
    delay:2.5,
    stagger:0.5
})

gsap.from("#profile-image",{
    // delay:3,
    x:-50,
    opacity:0,
    duration:2.2,
    ease:"power2.out",
    delay:2.5,
})

gsap.from("#about-info",{
    x:40,
    opacity:0,
    duration:2.2,
    delay:0.5,
    scrollTrigger:{
        marker:true,
        trigger:"#about-info",
        scroller:"body",
        start:"top 70%"
    }
})

gsap.from("#about-image",{
    x:50,
    opacity:0,
    duration:2.2,
    ease:"power2.out",
    delay:0.5,
    scrollTrigger:{
        marker:true,
        trigger:"#about-info",
        scroller:"body",
        start:"top 70%"
    }
})



gsap.from(".card1", {
    y:-50,
    opacity:0,
    stagger:1,
    scrollTrigger:".card-grp",
    duration:1.6
    
})
gsap.from(".skill", {
    x:-50,
    opacity:0,
    stagger:0.8,
    scrollTrigger:".skillset",
    duration:1
    
})
gsap.from(".page1",{
    x:-50,
    opacity:0,
    duration:2,
    scrollTrigger:".page1"
})
gsap.from(".page2",{
    x:50,
    opacity:0,
    duration:2,
    scrollTrigger:".page2"
})



// const swiper = new Swiper('.swiper', {
//     navigation: {
//         nextEl: '.custom-next',
//         prevEl: '.custom-prev',
//     },
// });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // autoplay: {
    //     delay: 2500,
    //     // duration:1.5,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// var card = document.querySelector(".card1");
// var cardData = document.querySelector(".card-data");

// card.addEventListener("mouseenter", function(){
//     cardData.style.top = "0%";
//     cardData.style.duration = "2s";
//     console.log("hello")
// })
// card.addEventListener("mouseleave", function(){
//     cardData.style.top = "100%";
//     cardData.style.duration = "2s";
//     console.log("hello")
// })