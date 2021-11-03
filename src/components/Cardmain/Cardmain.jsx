import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardmainStyles } from "./CardmainStyles";

//Services
import { getPhotoByDate } from "../../services";

export function Cardmain() {
  const dispatch = useDispatch();

  const photoByDate = useSelector((state) => state.photoByDate);

  const date = "2010-12-11";

  useEffect(() => {
    dispatch(getPhotoByDate(date));
  }, [dispatch]);

  if (!photoByDate) return <div />;
  return (
    <CardmainStyles>
      <picture className="cardmain-img">
        <img src={photoByDate.url} alt={photoByDate.title} />
      </picture>
      <section>
        <h3>Miguel Ruz!</h3>
        <p>Esta foto se tomó en espacio el día de tu cumple</p>
        <h4>“ 11-Diciembre ”</h4>
        <p>
          La galaxia Andromeda es una galaxia espiral con un diámetro de
          doscientos veinte mil años luz.
        </p>
      </section>
    </CardmainStyles>
  );
}
