import { FormularioStyles } from "./FormularioStyles";

export function Formulario() {
  return (
    <FormularioStyles>
      <section className="  fomulario-container">
        <div className="formulario__info">
          <div className="formulario__info-text">
            <h2 className="formulario__title">Bienvenido a PhotoKepler</h2>
            {/* <p>
              PhotoKepler te sirve para ver que foto se tomó al espacio el día
              de tu cumpleaños, para verlas en un formato divertido y que puedes
              compartir con amigos.
            </p> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              voluptatem voluptatibus? Ad sequi, corporis quaerat ipsum at.
              Consequuntur placeat autem excepturi commodi fuga quas adipisci
              dolorum rerum.
            </p>
            <ul>
              <li>Tu información NO se guarda ni se comparte</li>
              <li>Es una web segura</li>
              <li>
                Las fotos son sacadas directamente de la galeria de la API NASA
                official
              </li>
            </ul>
          </div>
        </div>
        <form action="" className="formulario__form">
          <div className="formulario__form-grup">
            <label htmlFor="">Nombre</label>
            <input type="text" placeholder="Introduce tu nombre o apodo aquí" />
          </div>
          <div className="formulario__form-grup">
            <label htmlFor="">Selecciona tu fecha de cumpleaños</label>
            {/* <input type="month" name="mesnacimiento"></input> */}
            <div className="formulario__selects">
              <select name="" id="">
                <option value="">Enero</option>
                <option value="">Febrero</option>
                <option value="">Marzo</option>
                <option value="">Abril</option>
                <option value="">Mayo</option>
                <option value="">Junio</option>
                <option value="">Julio</option>
                <option value="">Agosto</option>
                <option value="">Septiembre</option>
                <option value="">Octubre</option>
                <option value="">Noviembre</option>
                <option value="">Diciembre</option>
              </select>
              <select name="" id="">
                <option value="">1</option>
                <option value="">1</option>
              </select>
            </div>
            <button type="submit">Confirmar</button>
          </div>
        </form>
      </section>
    </FormularioStyles>
  );
}
