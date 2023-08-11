// VAriables

const loadingPage = document.getElementById("loadingPage");
const deployableButton = document.getElementById("deployable");
const deployMenu = document.getElementById("deployed");
const ex = document.getElementById("ex");
const navSticky = document.querySelector("nav");
const elemGuide = document.querySelectorAll(".divider");
const deployList = document.getElementById("deployList");

let lightModeActivated = false;

const lightModeCSSTag = document.getElementById("linkLightModeCSS");
const lightDarkModeIcons = document.querySelectorAll(".lightDarkModeIcon");
const logo3speakComunidad = document.getElementById("logo3speakComunidad");
const logoHiveComunidad = document.getElementById("logoHiveComunidad");

const termsAccept = document.getElementById("aceptarTerminos");
const deployableTermsAndConditions = document.getElementById(
  "terminosYCondicionesDesplegable"
);
const deployButtonTermsAndConditions = document.getElementById(
  "terminosYCondiciones"
);

const deployArrow = document.querySelectorAll(".deployEventArrow");

//Inicio elementos padre donde se agregan los eventos.
const eventsShowed = document.getElementById("eventosMostrados");

const events2023 = document.getElementById("eventos2023");
let events2023ItsDeployed = false;

const events2022 = document.getElementById("eventos2022");
let events2022ItsDeployed = false;
//Fin elementos padre sonde se agregan los eventos

//Objeto que contiene la lista de la informacion de cada evento.
import eventsList from "./eventos.js";

//Limites de qué eventos se van a insertar segun el padre.
const eventsListShowed = [0, 3];
const eventsList2022 = [3, 9];
const eventsList2023 = [9, eventsList.title.length];

let navItsDeployed = false;

// Eventos

//Eventos de los botones para desplegar events2022
deployArrow[0].addEventListener("click", () => {
  // Se ejecuta una condicional para saber cual es el estado del desplegable y se niega
  if (!events2022ItsDeployed) {
    //Si es true se agrega el display block y con un set timeout, nos aseguramos que se visualice una animacion
    events2022.style.display = "block";
    setTimeout(() => {
      events2022.style.opacity = "1";
    }, 1);
    events2022ItsDeployed = true;
    deployArrow[0].style.transform = "rotate(180deg)";
  } else {
    //En caso contrario, se realiza la animacion, y esperamos a que termine para aplicar el display none
    events2022.style.opacity = "0";
    setTimeout(() => {
      events2022.style.display = "none";
    }, 400);
    events2022ItsDeployed = false;
    deployArrow[0].style.transform = "rotate(0deg)";
  }
  // Se ejecuta una condicional luego de la ejecucion de las animaciones para evitar bugs debido a los timers
  setTimeout(() => {
    if (events2022ItsDeployed) {
      events2022.style.display = "block";
      events2022.style.opacity = "1";
    } else {
      events2022.style.display = "none";
      events2022.style.opacity = "0";
    }
  }, 401);
});

// Este evento funciona exactamente igual que la anterior pero despliega events2023
deployArrow[1].addEventListener("click", () => {
  if (!events2023ItsDeployed) {
    events2023.style.display = "block";
    events2023ItsDeployed = true;
    setTimeout(() => {
      events2023.style.opacity = "1";
    }, 1);
    deployArrow[1].style.transform = "rotate(180deg)";
  } else {
    events2023.style.opacity = "0";
    setTimeout(() => {
      events2023.style.display = "none";
    }, 400);
    events2023ItsDeployed = false;
    deployArrow[1].style.transform = "rotate(0deg)";
  }
  setTimeout(() => {
    if (events2023ItsDeployed) {
      events2023.style.display = "block";
      events2023.style.opacity = "1";
    } else {
      events2023.style.display = "none";
      events2023.style.opacity = "0";
    }
  }, 401);
});

// Evento del boton de desplegar menu Nav responsive
deployList.addEventListener("click", (e) => {
  deployMenu.style.opacity = "0";
  setTimeout(() => {
    deployMenu.style.display = "none";
    navItsDeployed = false;
  }, 500);
});

//Inicio Eventos Pagina de Carga y carga de pagina

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loadingPage.style.display = "none";
  }, 2000);

  // Evento que agrega los eventos realizados por SWC; el primer parametro indica los elementos que se van a agregar, y el segun parametro indica el elemento al que se van a agregar.
  addEvents(eventsList2022, events2022);
  addEvents(eventsList2023, events2023);
  addEvents(eventsListShowed, eventsShowed);
});

// Evento que identifica si uno de las flechas de los sliders / galerias de imagens, ha sido clickeado.
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("buttons")) {
    //De ser ese el caso, se envia como parametros el elemento que fue tocado, y el elemento padre del elemento que lo contiene.
    moveEvent(e.target.value, e.target.parentElement.parentElement);
  } else if (e.target.classList.contains("imageSlider")) {
    let link = e.target.getAttribute("data-value");
    window.open(link);
  } else if (
    e.target.classList.contains("lightDarkModeIcon") ||
    e.target.classList.contains("toggleDarkLightMode")
  ) {
    darkLightMode();
  }
});

window.onload = () => {
  loadingPage.style.display = "none";
};

//Fin Eventos Pantalla de carga y carga de pagina

// Eventos menu desplegable responsive

// Evento del boton para desplegar el menu aplicando props CSS
deployableButton.onclick = () => {
  deployMenu.style.display = "block";
  setTimeout(() => {
    deployMenu.style.opacity = "1";
    navItsDeployed = true;
  }, 10);
};

// Evento del boton para cerrar el menu quitando props CSS
ex.onclick = () => {
  deployMenu.style.opacity = "0";
  setTimeout(() => {
    deployMenu.style.display = "none";
    navItsDeployed = false;
  }, 500);
};

window.onscroll = () => {
  if (navItsDeployed) {
    deployMenu.style.opacity = "0";
    setTimeout(() => {
      deployMenu.style.display = "none";
      navItsDeployed = false;
    }, 500);
  }

  //Fin eventos menu desplegable responsive

  // Inicio barra nav Sticky
  // Si el elemento guia (Divisor de la seccion principal a la seccion), esta a 200 pixeles de el tope del viewport o mas arriba, se agregan propiedades CSS
  if (elemGuide[0].getBoundingClientRect().top < 200) {
    navSticky.style.position = "fixed";
    navSticky.style.backgroundColor = "rgb(11, 11, 18)";
    navSticky.style.top = "0";
    navSticky.style.opacity = "0";
    navSticky.style.opacity = "1";
    navSticky.style.borderBottom = "lightgrey 1px solid";
    navSticky.style.color = "white";
  } else {
    // si no es asi se eliminan las propiedades CSS
    navSticky.style.top = "2vh";
    navSticky.style.position = "absolute";
    navSticky.style.borderBottom = "none";
    navSticky.style.backgroundColor = "transparent";
  }
};

// FIn Eventos de Barra Nav Sticky

// Eventos aceptar terminos, desplegar el menú y esconderlo

termsAccept.addEventListener("click", () => {
  deployableTermsAndConditions.style.opacity = "0";
  setTimeout(() => {
    deployableTermsAndConditions.style.display = "none";
  }, 500);
});

deployButtonTermsAndConditions.addEventListener("click", () => {
  deployableTermsAndConditions.style.display = "block";
  setTimeout(() => {
    deployableTermsAndConditions.style.opacity = "1";
  }, 1);
});

// Funciones

// Función que agrega los divs html de cada evento del objeto EventsList
function addEvents(eventPrint, fatherEventDiv) {
  for (let i = eventPrint[0]; i < eventPrint[1]; i++) {
    let images = eventImgSumHTML(transfDriveLink(eventsList.imgs[i]))
    let event = `<div>
    <h2>${eventsList.title[i]}</h2>
    <p>
      ${eventsList.description[i]}
    </p>
    <h3>Fecha de realización: ${eventsList.fecha[i]}.</h3>
    <h3>Información del evento e imágenes</h3>
    <p>
      <a href="${eventsList.informacion[i]}">
      Visualizar las imagenes del evento.</a>
    </p>
    <h3>Instagram</h3>
    <p><a href="${eventsList.instagram[i]}">Ver el instagram.</a></p>
    <div class="eventNav" data-value="0">
                <ul id="moveButtons">
                    <li class="buttons" value="1"><</li>
                    <li class="contador">1</li>
                    <li class="buttons" value="2">></li>
                </ul>
            </div>
            <div class="sliderContainer">
                ${images}
            </div>
  </div>`;
    fatherEventDiv.insertAdjacentHTML("beforeend", event);
  }
}

// Funcion que agrega funcionalibilidad a los botones de los sliders / galerias
function moveEvent(target, parentDiv) {
  let dataValueAttr = parseInt(parentDiv.getAttribute("data-value"));
  let elemCountNum = parentDiv.nextElementSibling.childElementCount - 1;
  let setATTR = (valueToSet) => {
    parentDiv.setAttribute("data-value", valueToSet);
  };

  // Se mueve el scroll a 0 para utilizarlo de referencia
  parentDiv.scroll(0, 0);

  switch (target) {
    // Si se presiona el primer boton, se disminuye el valor del data-value que contiene una referencia de donde se encuentra ubicado el slider
    case 1:
      if (dataValueAttr === 0) {
        setATTR(elemCountNum);
      } else if (dataValueAttr > 0) {
        setATTR(dataValueAttr - 1);
      }
      break;
    // Si se presiona el segundo boton, se aumenta el valor del data-value que contiene una referencia de donde se encuentra ubicado el slider

    case 2:
      if (dataValueAttr === elemCountNum) {
        setATTR(0);
      } else if (dataValueAttr < elemCountNum) setATTR(dataValueAttr + 1);
      break;
  }
  // Luego de que se identifica que boton se presiono, se utiliza el valor de referencia del data-value y se multiplica para hacer scroll

  dataValueAttr = parseInt(parentDiv.getAttribute("data-value"));

  parentDiv.nextElementSibling.scroll(
    parentDiv.nextElementSibling.clientWidth * dataValueAttr,
    0
  );
  // Enumerador de imagenes
  parentDiv.childNodes[1].childNodes[3].textContent = dataValueAttr + 1;
}

// Funcion que agrega los divs contenedores de las imagenes de cada evento, para luego ser insertadas en el slider
function eventImgSumHTML(arrayImgsLinks) {

  let htmlDivImgArray = arrayImgsLinks.map((img) => {
    let divImg = `<div><div class="imageSlider" data-value="${img}" style="background-image: url(${img}); background-position: center; background-size: cover;"></div></div>`;
    return divImg;
  });
  
  let HTMLToInject = (array) => {
    let divs= ""
    for (let i = 0; i < array.length; i++) {
      divs += array[i];
    }
    return divs
  };
  
  return HTMLToInject(htmlDivImgArray);
}

// Funcion que modifica las hojas de estilo dependiendo del modo seleccionado, y cambia los iconos necesarios
function darkLightMode() {
  if (lightModeActivated) {
    lightModeCSSTag.removeAttribute("href");
    lightModeActivated = false;
    lightDarkModeIcons[0].setAttribute("src", "assets/icons/darkMode.svg");
    lightDarkModeIcons[1].setAttribute("src", "assets/icons/darkMode.svg");
    logo3speakComunidad.setAttribute("src", "assets/3speakLogo.png");
    logoHiveComunidad.setAttribute("src", "assets/logoHive2.png");
  } else {
    lightModeCSSTag.setAttribute("href", "lightModeTrue.css");
    lightModeActivated = true;
    lightDarkModeIcons[0].setAttribute("src", "assets/icons/lightMode.svg");
    lightDarkModeIcons[1].setAttribute("src", "assets/icons/lightMode.svg");
    logo3speakComunidad.setAttribute("src", "assets/3speakLogo2.png");
    logoHiveComunidad.setAttribute("src", "assets/logoHive3.png");
  }
}

// Funcion que inserta los ID de los links directos de Google Drive dentro de un formato valido para HTML, para reducir el tiempo necesario para insertar nuevos eventos. Puede recibir un array de links GD o un link unico.
function transfDriveLink(links) {
  if (Array.isArray(links)) {
    links = links.map((linkSelected) => {
      let id = linkSelected.slice(32, 65);
      return `http://drive.google.com/uc?export=view&id=${id}`;
    });
  } else if (typeof links === "string") {
    let id = links.slice(32, 65);
    return `http://drive.google.com/uc?export=view&id=${id}`;
  } else {
    console.log("Ingrese un array de links de Drive o un link unico de Drive");
  }
  return links;
}
