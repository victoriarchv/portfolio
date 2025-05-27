/* CARGAR CONTENIDO */
import contenido from './contenido.js';

let detalle = document.querySelector("#detalle");
detalle.innerHTML = "";

let ruta = window.location.href;
let id = ruta.substring(ruta.indexOf("=") + 1).substring(0, 2);
let proyecto = contenido.find(obj => obj.id === id)
let proyectoHTML = ``;

proyecto.detalle.forEach(e => {
    //console.log(e);
    //console.log(checkTipo(e));
    proyectoHTML += checkTipo(e);
})

proyectoHTML += `<div  class="back">
                <h1><a href="#detalle">↑ ↑ ↑</a></h1>
            </div>`;

/* ESCRIBIR EL HTML */
detalle.innerHTML = proyectoHTML;

if (document.querySelector("audio") != null) {
    document.querySelector("audio").style.width = "100%";

}



function checkTipo(e) {
    //console.log(e);
    let contHTML = ""

    let tipo = e.tipo;
    let contenido = e.cont;
    let ps = "";
    let imgs = "";

    switch (tipo) {
        case "portada":

            ps = "";
            contenido[2].forEach(c => {
                ps += `<p>${c}</p>`
            })

            contHTML = `<div id="portada"><h1>${contenido[0]}</h1><p><em>${contenido[1]}</em></p><div>${ps}</div></div>`;

            break

        case "video":
            console.log(contenido);

            contHTML = `<div class="video">${contenido}</div>`

            break

        case "txt1":
            ps = "";
            contenido[1].forEach(c => {
                ps += `<p>${c}</p>`
            })

            contHTML = `<div class="txt1">
           <h2>${contenido[0]}</h2>
        ${ps}
       </div>`
            break

        case "txt2":
            ps = "";
            contenido[1].forEach(c => {
                ps += `<p>${c}</p>`
            })

            contHTML = `<div class="txt2">
           <h2>${contenido[0]}</h2>
        ${ps}
       </div>`
            break

        case "miro":
            contHTML = `<div class="miro">
         ${contenido}
       </div>`
            break

        case "highlight":
            ps = "";
            contenido[1].forEach(c => {
                ps += `<p>${c}</p>`
            })

            contHTML = `<div class="highlight">
           <h2>${contenido[0]}</h2>
        ${ps}
       </div>`
            break

        case "img-full":
            contHTML = `  <div class="img-full">
           <img src="${contenido}" alt="">
       </div>`
            break

        case "img-medium":
            contHTML = `  <div class="img-medium">
           <img src="${contenido}" alt="">
       </div>`
            break

        case "scroll-appear":
            contenido.forEach(i => {
                imgs += `<img class="perspective-img" src="${i}" alt="">`
            })

            contHTML = `<div class="scroll-appear">
            ${imgs}
       </div>`
            break

        case "scroll-h":
            contenido.forEach(i => {
                imgs += `<img src="${i}" alt="">`
            })

            contHTML = `<div class="sticky_parent">
           <div class="sticky">
               <div class="scroll_section">
                   ${imgs}
               </div>
           </div>
       </div>`
            break
    }

    //console.log(contHTML);
    return contHTML;
}


/* INICIALIZA */
import { initMenu } from './nav.js'; /* NAV */

document.addEventListener('DOMContentLoaded', () => {
    initMenu();

    // Delay animation setup until after everything is loaded
    window.addEventListener('load', () => {
        initAnimations();
        ScrollTrigger.refresh();
    });


});




/* ANIMACIONES */
/* INICIALIZA GSAP */
gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
    let pImg = document.querySelectorAll('.perspective-img');
    pImg.forEach(pImg => {
        gsap.fromTo(pImg,
            {
                scale: 1.2,
            },
            {
                scrollTrigger: {
                    trigger: pImg,
                    scrub: .8,
                    //markers: true
                },
                scale: 0.5,
            });

        gsap.to(pImg, {
            filter: "blur(5px)",
            scrollTrigger: {
                trigger: pImg,
                start: "bottom 50%",
                end: "bottom top",
                scrub: .8,
                //markers: true
            }
        })
    })


    let scrolls = document.querySelectorAll(".scroll_section")
    scrolls.forEach(scroll => {
        let sticky = scroll.parentElement;
        let stickyParent = sticky.parentElement;

        stickyParent.style.height = scroll.scrollWidth + "px";

        console.log(stickyParent);


        let endX = "-" + (scroll.scrollWidth - window.innerWidth)

        /*  console.log(scroll.scrollWidth);
         console.log(window.innerWidth);
         console.log(endX);
  */

        gsap.to(scroll, {
            scrollTrigger: {
                trigger: stickyParent,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                ease: "none",
                // markers: true
            },
            x: endX

        })
    })

}