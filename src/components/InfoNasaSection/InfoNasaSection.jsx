import { InfoNasaStyles } from "./InfoNasaStyles";
import imgHublle from "../../assets/image/telescopio-hubble.png";
import { Button } from "../Button/Button";
import { ImArrowRight2 } from "react-icons/im";

export function InfoNasaSection() {
  return (
    <InfoNasaStyles>
      <div className="bd-container infoNasa-container">
        <div className="infoNasa-box">
          <article className="infoNasa__info">
            <h3>Acerca de las imagenes espaciales </h3>

            <p>
              Viajar al espacio, fue uno de los grandes pasos de la humanidad
              como civilización, que con fortuna consiguió hace unas decadas.
              Una vez conseguimos ese logro, lo que seguía era dejar un rastro
              que corrobore tal asaña en la historia. ha pasado mucho tiempo
              desde que se tomó la primera foto en el espacio, a día de hoy
              contamos con Herramientas que facilitan esto, cómo el telescopio
              Hubble.
            </p>
            <Button className="btn-infoNasa" outline>
              Visitar la web de la nasa <ImArrowRight2 className="arrow-nasa" />
            </Button>

            {/* <h6>Copyright: {photoData.copyright}</h6> */}
          </article>
          <picture className="infoNasa__img">
            <img src={imgHublle} alt="Telescopio Hubble" />
          </picture>
        </div>
      </div>
    </InfoNasaStyles>
  );
}
