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
    <div class="project">
      <a href="./pages/Projects/Projects"> 
        <img src="./public/proyecto2.jpg"></img>
        <p>Descripción de la segunda imagen</p>
      </a>
    </div>
  `;
  
  main.appendChild(destacadosSection);
};