
/* INICIALIZA */
import { initScrollHorizontal } from './scrollH.js'; /* HORIZONTAL SCROLL */
import { initMenu } from './nav.js'; /* NAV */

document.addEventListener('DOMContentLoaded', () => {
    //applyPerspectiveEffect();
    initScrollHorizontal();
    initMenu();
});

setTimeout(() => {
    document.querySelector("#load").style.transform = "translateY(-100%)"
}, 500)

/* VIDEOPLAYER */
/* setear overflow del body cuadno se va, 
setear videoplayer al punto inicial cuando se cierra */

let body = document.querySelector("body")

let videoplayer = document.querySelector("#videoplayer");
let intro = document.querySelector("#intro video");
let options = document.querySelector("#options")

let triggerV1 = document.querySelector("#trigger-v1");
let triggerV2 = document.querySelector("#trigger-v2");
let reelV1 = document.querySelector("#reel-v1 video");
let reelV2 = document.querySelector("#reel-v2 video");
let contReelV1 = document.querySelector("#reel-v1");
let contReelV2 = document.querySelector("#reel-v2");

let closeBT = document.querySelector("#close")


console.log(localStorage.getItem('hasVisited'));

if (!localStorage.getItem('hasVisited')) {
    console.log("First visit.");
    videoplayer.classList.remove("hidden")
    body.style.overflow = "hidden"
    localStorage.setItem('hasVisited', 'true');
} else {
    // The user has visited before
    console.log("Welcome back!");
    videoplayer.classList.add("hidden")
    body.style.overflow = "auto"
}

document.querySelector("#inicio").addEventListener("click", () => {
    videoplayer.classList.remove("hidden")
})


intro.addEventListener("timeupdate", () => {
    console.log(intro.currentTime);

    if (intro.currentTime >= 15) {
        options.classList.remove("hide")
    }
})

triggerV1.addEventListener("click", () => {
    options.classList.add("hide")
    contReelV1.classList.remove("reel-oculto")
})

triggerV2.addEventListener("click", () => {
    options.classList.add("hide")
    contReelV2.classList.remove("reel-oculto")
})

reelV1.addEventListener("timeupdate", () => {
    if (reelV1.currentTime >= 9) {
        closeBT.classList.remove("hidden")
    }

})

reelV2.addEventListener("timeupdate", () => {
    if (reelV2.currentTime >= 9) {
        closeBT.classList.remove("hidden")
    }

})


closeBT.addEventListener("click", () => {

    videoplayer.classList.add("hidden")
    body.style.overflow = "auto"
    reelV1.classList.add("reel-oculto")
    reelV2.classList.add("reel-oculto")
    closeBT.classList.add("hidden")
})



/* INICIALIZA GSAP */
gsap.registerPlugin(ScrollTrigger);


/* SCROLL ROL */
let txtRoles = document.querySelector("#rol-anim h2")
let rolIndex = 1;
setInterval(() => {
    //console.log("hola");

    if (rolIndex === 5) {
        rolIndex = 1
        txtRoles.style.transform = `translateY(0em)`
    } else if (rolIndex < 5) {
        txtRoles.style.transform = `translateY(-${rolIndex}em)`
        rolIndex += 1
        //console.log(rolIndex);
    }
}, 1500)


/* PERPECTIVE CONTENT */
let persCont = document.querySelectorAll('.perspective-content');
let persCont2 = document.querySelectorAll('.perspective-content2');

persCont.forEach(_persCont => {
    gsap.fromTo(_persCont,
        {
            scale: 1.5,
            xPercent: "-35",
        },
        {
            scrollTrigger: {
                trigger: _persCont,
                scrub: .8,
                // markers: true
            },
            scale: 0.7,
            xPercent: "-15",
        });

    gsap.to(_persCont, {
        filter: "blur(5px)",
        scrollTrigger: {
            trigger: _persCont,
            start: "bottom 50%",
            end: "bottom top",
            scrub: .8,
            // markers: true
        }
    })
})
persCont2.forEach(_persCont2 => {
    gsap.fromTo(_persCont2,
        {
            scale: 1.5,
            xPercent: "35",
        },
        {
            scrollTrigger: {
                trigger: _persCont2,
                scrub: .8,
                // markers: true
            },
            scale: 0.7,
            xPercent: "15",
        });

    gsap.to(_persCont2, {
        filter: "blur(5px)",
        scrollTrigger: {
            trigger: _persCont2,
            start: "bottom 50%",
            end: "bottom top",
            scrub: .8,
            // markers: true
        }
    })
})

/* MOUSE CONTACTO */
document.querySelector("#final_h1").addEventListener("mouseenter", () => {
    document.querySelector("#contacto").classList.remove("hidden")
})

document.querySelector("#final_h1").addEventListener("mouseleave", () => {
    document.querySelector("#contacto").classList.add("hidden")
})

document.querySelector("#final_h1").addEventListener("mousemove", (e) => {
    console.log("holla");

    const x = e.clientX; // X position relative to window
    const y = e.clientY; // Y position relative to window

    document.querySelector("#contacto").style.top = y + "px";
    document.querySelector("#contacto").style.left = x + "px";

})


