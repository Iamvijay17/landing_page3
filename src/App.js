import "./App.css";
import Cards from "./Components/Cards";
import Carsole from "./Components/Carsole";
import Navbars from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Error from "./Components/Error";
import About from "./Components/About";
import Footer from "./Components/footer";

import Undersite from "./Components/Under_Maintance"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Under_Maintance from "./Components/Under_Maintance";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbars />
        {/* <link to="/" > Home</link>
        <link to="/" > Contact</link> */}
        {/* <Carsole /> */}
        {/* <Under_Maintance/> */}

        <Routes>
          <Route path="/" element={<Carsole />} />
          <Route path="/" />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/contactform" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Error />} />
          <Route path="/under_maintance" element={<Under_Maintance />} />

        </Routes>
        
      {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
