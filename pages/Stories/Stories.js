import "./Stories.css";
import { cleanPage } from "../../utils/cleanPage";

export const Stories = () => {
const main = document.querySelector("main");
cleanPage(main);

main.innerHTML = `
<section class="stories">
<h1>Stories</h1>
<br></br>
<section>

     <h2> Ángel de la guarda</h2>
    <center> <img src ="public/polaroid.jpg", alt="about"/></center>
      <p>
      Era un fresco y grisáceo día de octubre. Aquella mañana en un pequeño chalet alejado de todo ruido, Luis le daba un último sorbo a su taza de café.
      Había preparado parte de su despacho para revelar las fotos que había realizado a lo largo de este año. Es un gran amante de la fotografía, cuando apenas tenía 6 años empezó a hacer fotografías con una vieja cámara polaroid.
      Todo estaba preparado, había algunos focos rojos iluminando la estancia y apenas podía ver sus propias manos con un leve tono rojizo.
      Cuando las fotografías estuvieron listas quedó totalmente aliviado.
      Ahí estaba ella otra vez en la foto; no importaba lo que hiciera, a donde fuera o que fotografiara, su abuela siempre estaba ahí mirándole fijamente desde aquellas fotografías para cuidarle.
      </p>
      
      <section>
      <h2> Viaje en el Tiempo 3º Parte</h2>
      <center><img src ="public/tiempo2.jpg", alt="about" /></center>
      <p>
      Recorte de Basket zeitung, 24 de agosto 2020
Alberto Carrasco, reputado físico teórico nacido en Madrid, España, hace 30 años, ha recibido el mayor galardón científico […] Se le hace entrega del premio Nobel de Física por la contribución altruista y de incalculable valor que ha brindado a la humanidad. La solución propuesta como Teoría de paradoja ha revolucionado el mundo de la física tal y como lo conocíamos hasta ahora.
---------------

6 días antes -Madrid, 18 de agosto 2020
Alberto había conseguido terminar su máquina antes de lo planeado. Era momento de comenzar con las pruebas.
En ese instante enciende su videocámara y graba:

Espero haber hecho bien todos los cálculos. Nadie sabe lo que estoy haciendo, pero si alguien se enterase de lo que he conseguido descubrir me tacharían de psicópata sin aprecio por la vida humana. No, no puede ser, soy un genio. Ningún ser humano hubiera concebido jamás que algo así pudiera llevarse a cabo. Es solo que… no saben ver más allá de los riesgos.
Son riesgos altos, sí, nunca nadie había generado una singularidad, mucho menos una de este tipo. Si el agujero no se estabiliza, o no consigo contenerlo, rasgaría el débil velo que protege la realidad en este universo.
No, no puedo pensar en el fracaso. Esto va a ser un éxito. Los cálculos son exactos y las simulaciones no registran ningún error superior a uno elevado a la menos dieciocho por ciento.
      </p>
      </section>
      <section>
      <h2>Encuentro en la Universidad </h2>
      <center> <img src ="public/fantasma-uni.jpg", alt="about" /></center>
      <p>
      La universidad tiene más de doscientos años, por ella han pasado varios miembros de su familia y algunas celebridades de la ciudad.

En los últimos años, habían ocurrido varios sucesos extraños.
Un día durante el horario escolar tanto alumnos como profesores no paraban de repetir que habían visto a varios fantasmas en los pasillos y estancias del centro.
Pero lo que ellos no sabían era que aquellos fantasmas no eran simples fantasmas, eran fantasmas un tanto especiales.

Uno de los alumnos comentaba a sus compañeros de al lado que vio a uno de ellos cuando regresaba del servicio.
.
   -Era el fantasma de una mujer, estoy seguro. Vestía con una toca y una capa. 

Fue entonces cuando uno de sus profesores al oír la conversación comentó:

    -Antiguamente la universidad fue Casa de la Misericordia. El lugar sirvió como orfanato llevado por monjas, hasta que años más tarde durante la Guerra de Independencia los militares la utilizaron como cuartel de artillería.
      </p>
      </section>
      </section>`;
};