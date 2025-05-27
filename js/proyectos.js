/* CARGAR CONTENIDO */
import contenido from './contenido.js';

let scrollTrabajos = document.querySelector("#scroll-trabajos");
let portadasContenido = "";
scrollTrabajos.innerHTML = "";

let listadoTrabajos = document.querySelector("#listado-trabajos table");
let listadoContenido = "";
listadoTrabajos.innerHTML = "";

contenido.forEach(e => {
    portadasContenido += /* html */ `
<article class="move-group">
        <a href="detalle.html?p=${e.id}"><img class="imgL blur-elem" src="${e.imgL}" alt=""></a>
        <a href="detalle.html?p=${e.id}"><h1 class="title blur-elem">${e.name}</h1></a>
        <a href="detalle.html?p=${e.id}"><img class="imgR blur-elem" src="${e.imgR}" alt=""></a>   
</article>
`

    listadoContenido +=/* html */ `
    <tr id="${e.id}"> <!-- añadir acción al elemento -->
                    <td>${e.id}</td>
                    <td>${e.name}</td>
                    <td>${e.lista.desc}
                    </td>
                    <td>${e.lista.año}</td>
                </tr></a>  
`
})

portadasContenido += /* html */ `
<article class="move-group">
                <h1 class="title blur-elem"><a href="#scroll-trabajos">↑ ↑ ↑</a></h1>
            </article>
`
scrollTrabajos.innerHTML = portadasContenido;
listadoTrabajos.innerHTML = listadoContenido;


/* INTERACCIÓN LISTA */
let listElem = document.querySelectorAll("tr");

listElem.forEach(e => {
    e.addEventListener("mouseenter", () => {

        // Get viewport size
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        // Map to 20–80 percent of the viewport
        const x = mapRange(Math.random(), 0, 1, 0.2 * vw, 0.8 * vw);
        const y = mapRange(Math.random(), 0, 1, 0.2 * vh, 0.8 * vh);

        //console.log(e.getAttribute("id"));
        //console.log(contenido.find(obj => obj.id === e.getAttribute("id")));

        document.querySelector("#preview img").setAttribute("src", contenido.find(obj => obj.id === e.getAttribute("id")).imgL)
        document.querySelector("#preview").style.top = `${y}px`;
        document.querySelector("#preview").style.left = `${x}px`;
        document.querySelector("#preview").classList.remove("hide");

    })

    e.addEventListener("click", () => {
        window.location.href = `detalle.html?p=${e.id}`;
    })
})

function mapRange(value, inMin, inMax, outMin, outMax) {
    return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}












































/* INICIALIZA */
import { initMenu } from './nav.js'; /* NAV */

document.addEventListener('DOMContentLoaded', () => {
    initMenu();
});

/* LISTADO */
let btListado = document.querySelector("#bt-listado");
let listado = document.querySelector("#listado-trabajos")

btListado.addEventListener("click", () => {
    listado.classList.toggle("hidden")

    if (btListado.textContent == "Listado") {
        btListado.textContent = "Cerrar";
        //btListado.style.color= "#CF3CA7";
    } else {
        btListado.textContent = "Listado";
        //btListado.style.color= "white";
    }
})

/* ANIMACIÓN PROYECTOS */
let moveGroup = document.querySelectorAll(".move-group")
let blurE = document.querySelectorAll(".blur-elem")
let imgL = document.querySelectorAll('.imgL');
let imgR = document.querySelectorAll('.imgR');
let title = document.querySelectorAll('.title');

/* BLUR */
blurE.forEach(_blurE => {
    gsap.to(_blurE, {
        filter: "blur(5px)",
        scrollTrigger: {
            trigger: _blurE,
            start: "bottom 40%",
            end: "bottom top",
            scrub: .8,
            //markers: true
        }
    })
})


/* MOVE PARENT */
moveGroup.forEach(_moveGroup => {
    gsap.fromTo(_moveGroup, {
        scale: 1
    },
        {
            scrollTrigger: {
                trigger: _moveGroup,
                start: "top bottom",
                end: "bottom top",
                scrub: .2,
                //markers: true
            },
            scale: .5

        })
}
)


/* MOVE CHILDREN */
let xTransform = 0
if (window.innerWidth < 768) {
    xTransform = 100
} else {
    xTransform = 500
}

imgL.forEach(_imgL => {
    gsap.fromTo(_imgL, {
        x: -xTransform, y: 50,
    },
        {
            scrollTrigger: {
                trigger: _imgL,
                start: "top bottom",
                end: "bottom top",
                scrub: .8,
                //markers: true
            },
            x: -xTransform, y: 0,
            ease: "power1.out",

        })
})

title.forEach(title => {
    gsap.fromTo(title, {
        x: 0, y: 150,
    },
        {
            scrollTrigger: {
                trigger: title,
                start: "top bottom",
                end: "bottom top",
                scrub: .8,
                //markers: true
            },
            x: 0, y: -50,
            ease: "power1.out",

        })
})

imgR.forEach(imgR => {
    gsap.fromTo(imgR, {
        x: xTransform, y: 300,
    },
        {
            scrollTrigger: {
                trigger: imgR,
                start: "top bottom",
                end: "bottom top",
                scrub: .8,
                //markers: true
            },
            x: xTransform, y: -200,
            ease: "power1.out",
        })
})



