Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos: ["./assets/hneg.mp4"]});

gsap.to(".fleftelem",{
    scrollTrigger: {
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
});

let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
    style: 4,
    config: {onMouse: {value:1}, "zindex":{"value":"999999","range":[-9999999,9999999]}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section, index){
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog){
                    setScroll(prog.progress+index);
                },
            });
        });
    },
  });

