import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./containers/Home";
import { Formulario } from "./containers/Formulario/Formulario";
import { Downloadpage } from "./containers/Downloadpage/Downloadpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/formulario/downloadpage">
            <Downloadpage />
          </Route>
          <Route path="/formulario">
            <Formulario />
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
