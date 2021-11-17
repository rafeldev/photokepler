import { useSelector } from "react-redux";
import { CardmainStyles } from "./CardmainStyles";

import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

//Services
import { Button } from "../Button/Button";

import styled from "styled-components";
import { useEffect, useState } from "react";

export function Cardmain({ datos }) {
  const photoByDate = useSelector((state) => state.photoByDate);
  const [loading, setLoading] = useState(true);
  const { name } = datos;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

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

  const loader = () => {
    return (
      <CardmainStyles>
        <h2 className="cardmain__title">Hey {name}, esta es tu foto!</h2>

        <div className="cardmain-container-active">
          <picture className="cardmain-img-active"></picture>
          <section className="cardmain__info-active">
            <h3 className="cardmain__name-active"></h3>
            <p></p>
            <em> </em>
            <strong></strong>
            <p className="cardmain__description-active"></p>
          </section>
        </div>
      </CardmainStyles>
    );
  };

  if (loading) {
    return loader();
  }

  return (
    <CardmainStyles>
      <h2 className="cardmain__title">Hey {name}, esta es tu foto!</h2>

      <div className="cardmain-container-one" id="photo">
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
      {/* ======================== la vista ============================ */}
      <div className="cardmain-container-active">
        <ImgCard className="cardmain-img-active">
          <img id="img" src={photoByDate.url} alt={photoByDate.title} />
        </ImgCard>
        <section className="cardmain__info-active">
          <h3 className="cardmain__name-active">{name}</h3>
          <p>Esta foto se tomó al espacio el día de tu cumpleaños</p>
          <em>{photoByDate.date}</em>
          <strong lang="en">{photoByDate.title}</strong>
          <p className="cardmain__description-active" lang="en">
            {descriptionByDate}
          </p>
        </section>
      </div>

      {/* <button onClick={copyImage}>crear</button> */}
      {/* <button onClick={onClickExportar}>Exportar</button> */}

      {/* <div className="card__download-bts">
        <Button>Descargar</Button>
      </div> */}
    </CardmainStyles>
  );
}
