import { CardmainStyles } from "./CardmainStyles";
export function Cardmain({ photoOfDay }) {
  if (!photoOfDay) return <div />;
  return (
    <CardmainStyles>
      <picture className="cardmain-img">
        <img src={photoOfDay.url} alt={photoOfDay.title} />
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
