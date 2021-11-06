import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardmainStyles } from "./CardmainStyles";
//Services
import { getPhotoByDate } from "../../services";
import { Button } from "../Button/Button";

export function Cardmain() {
  const dispatch = useDispatch();

  const photoByDate = useSelector((state) => state.photoByDate);

  const date = "2018-12-11";

  useEffect(() => {
    dispatch(getPhotoByDate(date));
  }, [dispatch]);

  if (!photoByDate) return <div />;

  return (
    <CardmainStyles>
      <div className="cardmain-container" id="cardmain">
        <picture className="cardmain-img">
          <img id="img" src={photoByDate.url} alt={photoByDate.title} />
        </picture>
        <section>
          <h3 className="cardmain__name">Miguel Ruz!</h3>
          <p>Esta foto se tomó en espacio el día de tu cumple</p>
          <em>“ 11-Diciembre ”</em>
          <p className="cardmain__description">
            La galaxia Andromeda es una galaxia espiral con un diámetro de
            doscientos veinte mil años luz.
          </p>
        </section>
      </div>

      {/* <button>Descargar</button> */}
      <div className="card__download-bts">
        <Button>Descargar</Button>
      </div>
    </CardmainStyles>
  );
}
