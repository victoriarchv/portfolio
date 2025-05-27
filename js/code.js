
/* INICIALIZA */
import { initScrollHorizontal } from './scrollH.js'; /* HORIZONTAL SCROLL */
import { initMenu } from './nav.js'; /* NAV */

let body = document.querySelector("body")

document.addEventListener('DOMContentLoaded', () => {
    //applyPerspectiveEffect();
    initScrollHorizontal();
    initMenu();
    body.style.overflow = "hidden";
});

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


/* VIDEOPLAYER */

/* setear overflow del body cuadno se va, 
setear videoplayer al punto inicial cuando se cierra */

let videoplayer = document.querySelector("#videoplayer");
let intro = document.querySelector("#intro");
let options = document.querySelector("#options")

let triggerV1 = document.querySelector("#trigger-v1");
let triggerV2 = document.querySelector("#trigger-v2");
let reelV1 = document.querySelector("#reel-v1");
let reelV2 = document.querySelector("#reel-v2");

let closeBT = document.querySelector("#close")

setTimeout(() => {
    options.classList.remove("hide")
}, 16000)

triggerV1.addEventListener("click", () => {
    reelV1.classList.remove("reel-oculto")

    setTimeout(() => {
        closeBT.classList.remove("hidden")
    }, 5000)
})

triggerV2.addEventListener("click", () => {
    reelV2.classList.remove("reel-oculto")

    setTimeout(() => {
        closeBT.classList.remove("hidden")
    }, 5000)
})

closeBT.addEventListener("click", () => {
    videoplayer.classList.add("hidden")
    body.style.overflow = "auto"

    options.classList.add("hide")
    reelV1.classList.add("reel-oculto")
    reelV2.classList.add("reel-oculto")
    closeBT.classList.add("hidden")
})

document.querySelector("#inicio").addEventListener("click", () => {
    videoplayer.classList.remove("hidden")
})

