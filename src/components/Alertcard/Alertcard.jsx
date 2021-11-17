import "./Alercard.css";

export function Alertcard({ children, close }) {
  return (
    <div className="alertcard">
      <p>{children}</p>
      <button className="alertcard__button" onClick={close}>
        Aceptar
      </button>
    </div>
  );
}
