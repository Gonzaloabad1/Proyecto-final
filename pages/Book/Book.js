import "./Book.css";
import { cleanPage } from "../../utils/cleanPage";

export const Book = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="book">
      <h1>Book</h1>
      <section class="book" id="book">
        <img src="public/libro.jpg" alt="Portada del libro" />
        <div class="bio animate__animated animate__shakeX">
        <p>Editorial:EDITORIAL CIRCULO ROJO</p>
<p>Año de edición:
2020</p>
<p>
Ficción moderna y contemporánea</p>
<p>ISBN: 978-84-1350-421-6</p>
<p>Páginas: 200</p>
<p>Encuadernación: Rústica</p>
          <h2 class="bio-titulo">Sinopsis</h2>
          
          <p class="bio-texto">
          Sueños de un joven escritor es una reco­pilación de relatos escritos por el mero placer que esto conlleva, que mezcla misterio, aventura y terror entre otros géneros. Este libro está redactado mi­nuciosamente con el fin de atrapar y sumergir al lector en cada una de sus historias, haciéndolo partícipe de las aventuras y misterios que esto supone.
          </p>
          <center>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Z_74EPqCf1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>
        </div>
      </section>
    </section>
  `;
};