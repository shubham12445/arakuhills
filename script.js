gsap.from("#page2 .box1, .box2, .box3, .box4, .box5, .box6",{
    scale:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller: "body",
    }
})
gsap.from("#page3 .boxx1, .boxx2, .boxx3, .boxx4, .boxx5, .boxx6, .boxx7, .boxx8",{
    scale:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page3 .boxx1",
        scroller: "body",
    }
})
