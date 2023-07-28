import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
export const About = () => {
const main = document.querySelector("main");
cleanPage(main);
main.innerHTML = `
<section class="about">
      <h1>About</h1>
      <img src ="/people1.jpg", alt="about" />
      <p>
      Soy estudiante de Desarrollo web, informático , escritor novel y miembro del club de novela negra (MANCHANEGRA)de Ciudad Real.
      Desarrollo mi creatividad en diversos géneros , entre los cuales caben destacar la narración breve.
      
      Desde muy pequeño la lectura fue una vía de escape que fue desarrollando poco a poco mi mundo interior y que me llevó a escribir mis primeras historias con once años. A esa edad pensaba que publicar un libro era un sueño inalcanzable ya que nunca había mostrado a nadie ninguno de mis relatos, pero en septiembre de 2015 decidí crear este blog, el cual me dio la fuerza para seguir escribiendo.
      <p>La escritura es mi pasión 📖🖋</p>
      </p>
      <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="/people2.jpg" alt="Avatar" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
    <!-- Formulario de contacto -->
    <h2>Contacto</h2>
    <form action="mailto:goabad18@outlook.com" method="post" enctype="text/plain">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" required>
      <br>
      <label for="email">Correo electrónico:</label>
      <input type="email" id="email" name="email" required>
      <br>
      <label for="mensaje">Mensaje:</label>
      <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
      <br>
      <input type="submit" value="Enviar">
    </form>
  </section>
`;
};