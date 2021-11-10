import { useSelector } from "react-redux";
import { CardmainStyles } from "./CardmainStyles";
import html2canvas from "html2canvas";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

//Services
import { Button } from "../Button/Button";

import styled from "styled-components";

export function Cardmain({ datos }) {
  const photoByDate = useSelector((state) => state.photoByDate);
  const { name } = datos;

  if (!photoByDate) return <div />;

  const onClickExportar = () => {
    htmlToImage
      .toJpeg(document.getElementById("photo"), { quality: 0.95 })

      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  const ImgCard = styled.picture`
    background-image: url(${photoByDate.url});
    background-size: cover;
  `;

  return (
    <CardmainStyles>
      <div className="cardmain-container" id="photo">
        <ImgCard className="cardmain-img">
          <img id="img" src={photoByDate.url} alt={photoByDate.title} />
        </ImgCard>
        <section>
          <h3 className="cardmain__name">{name}!</h3>
          <p>Esta foto se tomó en espacio el día de tu cumple</p>
          <em>{photoByDate.date}</em>
          <p className="cardmain__description">
            La galaxia Andromeda es una galaxia espiral con un diámetro de
            doscientos veinte mil años luz.
          </p>
        </section>
      </div>

      {/* <button onClick={copyImage}>crear</button> */}
      <button onClick={onClickExportar}>Exportar</button>
      {/* <button>Descargar</button> */}
      {/* <div className="card__download-bts">
        <Button>Descargar</Button>
      </div> */}
    </CardmainStyles>
  );
}
