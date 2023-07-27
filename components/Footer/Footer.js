import "./Footer.css";

const template = () => {
return `
    <p class="idfooter">©2023 GONZALO ABAD-ESCRITOR</p>`;
};

export const Footer = () => {
    document.querySelector("footer").innerHTML = template();
};
