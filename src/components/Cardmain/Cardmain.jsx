import { useSelector } from "react-redux";
import { CardmainStyles } from "./CardmainStyles";

import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

//Services
import { Button } from "../Button/Button";

import styled from "styled-components";

export function Cardmain({ datos }) {
  const photoByDate = useSelector((state) => state.photoByDate);
  const { name } = datos;

  //Recorte de string de la descripcion de la foto:
  let descriptionByDate =
    photoByDate.explanation && photoByDate.explanation.slice(0, 130) + " ...";

  //Validar:
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
      <h2 className="cardmain__title">Hey {name}, esta es tu foto!</h2>

      <div className="cardmain-container" id="photo">
        <ImgCard className="cardmain-img">
          <img id="img" src={photoByDate.url} alt={photoByDate.title} />
        </ImgCard>
        <section className="cardmain__info">
          <h3 className="cardmain__name">{name}</h3>
          <p>Esta foto se tomó en el espacio el día de tu cumple</p>
          <em>{photoByDate.date}</em>
          <strong>{photoByDate.title}</strong>
          <p className="cardmain__description">{descriptionByDate}</p>
        </section>
      </div>

      {/* <button onClick={copyImage}>crear</button> */}
      {/* <button onClick={onClickExportar}>Exportar</button> */}

      <div className="card__download-bts">
        <Button>Descargar</Button>
      </div>
    </CardmainStyles>
  );
}
