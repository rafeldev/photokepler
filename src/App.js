import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./containers/Home";
import { Formulario } from "./containers/Formulario/Formulario";
import { Downloadpage } from "./containers/Downloadpage/Downloadpage";
import { About } from "./containers/About/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/formulario/downloadpage">
            <Downloadpage />
          </Route>
          <Route path="/formulario">
            <Formulario />
          </Route>
          <Route path="/acercade">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
