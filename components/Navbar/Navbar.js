import "./Navbar.css";
 const template = () => {
return`

<nav>
<img class="icono" src="/logo-removebg-preview.png">
<h2></h2>
<ul>
<li>
<a href="#null" id="homelink">Home</a>
</li>
<li>
<a href="#null" id="aboutlink">About</a>
</li>
<li>
<a href="#null" id="booklink">Book</a>
</li>
<li>
<a href="#null" id="storieslink">Stories</a>
</li>
<li>
<a href="#null" id="projectslink">Projects</a>
</li>
</ul>
</nav>
`;
}
const Header =()=> {
    document.querySelector("header").innerHTML = template();
};

export default Header;