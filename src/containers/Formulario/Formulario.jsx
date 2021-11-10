import { useState } from "react";
import { FormularioStyles } from "./FormularioStyles";
import { months, numberDays } from "./FormularioData";
import { Link } from "react-router-dom";

import { Alertcard } from "../../components/Alertcard/Alertcard";
import { useEffect } from "react";

export function Formulario() {
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [aviso, setAviso] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  function handleChangeMonth(event) {
    console.log(`Seleccionaste ${event.target.value}`);
    setMonth(event.target.value);
  }
  function handleChangeDay(event) {
    console.log(`Seleccionaste ${event.target.value}`);
    setDay(event.target.value);
  }

  const closeAlert = (e) => {
    setAviso(false);
  };

  function Aviso() {
    if (aviso) {
      return (
        <Alertcard close={closeAlert}>
          Hey! la información que introduces solo es para encontrar la foto, no
          se guarda en ningun lado.
        </Alertcard>
      );
    }
  }

  return (
    <FormularioStyles>
      <section className="  fomulario-container">
        {Aviso()}
        <div className="formulario__info">
          <div className="formulario__info-text">
            <h2 className="formulario__title">Bienvenido a Skycomeet</h2>
            <p>
              Skycomeet te sirve para ver que foto se tomó al espacio el día de
              tu cumpleaños, para verlas en un formato divertido y que puedes
              compartir con amigos.
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
            <input
              type="text"
              placeholder="Introduce tu nombre o apodo aquí"
              value={name}
              onChange={handleSubmit}
              required
            />
          </div>
          <div className="formulario__form-grup">
            <label htmlFor="">Selecciona tu fecha de cumpleaños</label>

            {/* ============================ select ============================================================= */}

            <div className="formulario__selects">
              <select
                name="month"
                id="month"
                value={month}
                onChange={handleChangeMonth}
              >
                {months.map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.name}
                  </option>
                ))}
              </select>
              <select
                name="day"
                id="day"
                value={day}
                onChange={handleChangeDay}
                required
              >
                {numberDays.map((day) => (
                  <option key={day.value} value={day.value}>
                    {day.value}
                  </option>
                ))}
              </select>
            </div>
            <Link to="/formulario/downloadpage">
              <button type="submit">Confirmar</button>
            </Link>
          </div>
        </form>
      </section>
    </FormularioStyles>
  );
}
