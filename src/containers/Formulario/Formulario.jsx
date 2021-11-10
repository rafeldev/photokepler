import { FormularioStyles } from "./FormularioStyles";
import { months, numberDays } from "./FormularioData";
import { Link, useHistory } from "react-router-dom";
import { getPhotoByDate } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import FullPageLoader from "../../utils/FullPageLoader/FullPageLoader";

import { Alertcard } from "../../components/Alertcard/Alertcard";
import { useEffect } from "react";
import { useState } from "react";

export function Formulario({ setDatos, datos }) {
  const [aviso, setAviso] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();
  const date = `2019-${datos.month}-${datos.day}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPhotoByDate(date));
    history.push("/downloadpage");
  };

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
    console.log("fecha", datos.name + " " + datos.month + " " + datos.day);
  };
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

  const isLoading = useSelector((state) => state.loading);

  // function handleChangeName(event) {
  //   setName(event.target.value);
  // }

  // function handleChangeMonth(event) {
  //   setMonth(event.target.value);
  // }
  // function handleChangeDay(event) {
  //   setDay(event.target.value);
  // }
  return (
    <>
      <FormularioStyles>
        <section className="  fomulario-container">
          <div className="formulario__info">
            <div className="formulario__info-text">
              <h2 className="formulario__title">Bienvenido a PhotoKepler</h2>
              <p>
                PhotoKepler te sirve para ver que foto se tomó al espacio el día
                de tu cumpleaños, para verlas en un formato divertido y que
                puedes compartir con amigos.
              </p>

              <ul>
                <li>Tu información NO se guarda ni se comparte</li>
                <li>Es una web segura</li>
                <li>
                  Las fotos son sacadas directamente de la galeria de la API
                  NASA official
                </li>
              </ul>
            </div>
          </div>
          <form onSubmit={handleSubmit} action="" className="formulario__form">
            <div className="formulario__form-grup">
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                name="name"
                placeholder="Introduce tu nombre o apodo aquí"
                // value={name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="formulario__form-grup">
              <label htmlFor="">Selecciona tu fecha de cumpleaños</label>

              {/* ============================ select ============================================================= */}

              <div className="formulario__selects">
                <select
                  placeholder={datos.month}
                  name="month"
                  id="month"
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  required
                >
                  {numberDays.map((day) => (
                    <option key={day.value} value={day.value}>
                      {day.value}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit">Confirmar</button>
            </div>
          </form>
        </section>
        <FullPageLoader isLoading={isLoading} />
      </FormularioStyles>
    </>
  );
}
