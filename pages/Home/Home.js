import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
    <section class="home">
      <p class="id">LOS SUEÑOS SON HISTORIAS, AÚN NO CONTADAS.</p>
   
    </section>
  `;

  const destacadosSection = document.createElement("section");
  destacadosSection.classList.add("destacados");
  destacadosSection.innerHTML = `
    <u><h2>DESTACADO</h2></u>
    <center>
    <section class="proyectos" id="proyectos">
      <div class="contenedor-de-proyectos">
        <div class="contenedor-de-proyecto tarjeta-de-proyecto">
          <img
            src="/polaroid.jpg"
            alt="greeny-earth"
            loading="lazy"
            class="project-pic"
          />
          <h3 class="titulo-de-proyecto">Ángel de la guarda</h3>
          <br></br>
    
        </div>
      </div>
    </section>
    </center>
  `;
  
  main.appendChild(destacadosSection);
};