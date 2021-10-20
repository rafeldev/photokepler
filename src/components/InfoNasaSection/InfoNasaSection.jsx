import styled from "styled-components";
import imgHublle from "../../assets/image/telescopio-hubble.png";
import { Button } from "../Button/Button";
import { ImArrowRight2 } from "react-icons/im";
const PhotoDay = styled.section`
  padding: 3rem 0;
  background-color: var(--secun-color);
  .photoDay-container {
    /* padding: 2rem 3rem; */
  }
  .photoDay-title {
    margin-bottom: 20px;
  }
  .photoDay-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    h4 {
      margin-bottom: 10px;
    }
  }
  .photoDay__img {
    width: 330px;
    height: 272px;
    margin-right: 50px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  .photoDay__info {
    width: 600px;
    margin-bottom: 30px;

    h3 {
      font-size: var(--h1-font-size);
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 10px;
    }
  }
  .btn-infoNasa {
    display: flex;

    path {
      margin-top: 10px;
      align-self: center;
      height: 100%;
    }
  }
`;

export function InfoNasaSection() {
  return (
    <PhotoDay>
      <div className="bd-container photoDay-container">
        <div className="photoDay-box">
          <article className="photoDay__info">
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
          <picture className="photoDay__img">
            <img src={imgHublle} alt="Telescopio Hubble" />
          </picture>
        </div>
      </div>
    </PhotoDay>
  );
}
