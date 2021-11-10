import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./containers/Home";
import { Formulario } from "./containers/Formulario/Formulario";
import { Downloadpage } from "./containers/Downloadpage/Downloadpage";
import { About } from "./containers/About/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  //Me toco mover la logica del state aca, porque es mas facil moverlo a los hijos ya que son dos componentes diferentes que ocupan la misma data
  // de esta forma es mas facil pasar la data de padre a hijo a traves de props,
  //Siempre intentemos manejar la logica desde el container padre.
  const [datos, setDatos] = useState({
    name: '',
    month: '',
    day: ''
  })
  // const [name, setName] = useState("");
  // const [month, setMonth] = useState("");
  // const [day, setDay] = useState("");

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/downloadpage">
            <Downloadpage
              datos={datos}
            />
          </Route>
          <Route path="/formulario">
            {/* El formulario se le envian los metodos que actualizan el estado y los estados */}
            <Formulario
              setDatos={setDatos}
              datos={datos}
            />
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
