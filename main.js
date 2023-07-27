import "./style.css";
//import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import  Header  from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Projects } from "./pages/Projects/Projects";
import { Book } from "./pages/Book/Book";
import { Stories } from "./pages/Stories/Stories";

Header();
Home();
Footer();
linkPage("#homelink", Home);
linkPage("#aboutlink", About);
linkPage("#booklink", Book);
linkPage("#storieslink", Stories);
linkPage("#projectslink", Projects);
