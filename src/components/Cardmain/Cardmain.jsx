import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardmainStyles } from "./CardmainStyles";
import html2canvas from "html2canvas";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

//Services
import { getPhotoByDate } from "../../services";
import { Button } from "../Button/Button";

import styled from "styled-components";

export function Cardmain() {
  const dispatch = useDispatch();

  const photoByDate = useSelector((state) => state.photoByDate);

  const date = "1997-03-17";

  useEffect(() => {
    dispatch(getPhotoByDate(date));
  }, [dispatch]);

  if (!photoByDate) return <div />;

  // const onClickExportar = function (evento) {
  //   html2canvas(document.querySelector(".cardmain-container"), {
  //     logging: true,
  //     letterRendering: 1,
  //     allowTaint: true,
  //     useCORS: true,
  //   }).then((canvas) => {
  //     let img = canvas.toDataURL("image/png");
  //     let link = document.createElement("a");
  //     link.download = `mifoto.jpg`;
  //     link.href = img;
  //     link.click();
  //   });
  // };

  // const copyImage = () => {
  //   var image = document.querySelector("#image");
  //   var canvas = document.querySelector("canvas");
  //   var ctx = canvas.getContext("2d");

  //   ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  // };

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

  // const ImgCard = styled.picture`
  //   background-image: url(${photoByDate.url});
  //   background-size: cover;
  // `;

  return (
    <CardmainStyles>
      <div className="cardmain-container" id="photo">
        {/* <ImgCard className="cardmain-img">
          <img id="img" src={photoByDate.url} alt={photoByDate.title} />
        </ImgCard> */}
        <picture className="cardmain-img">
          <img id="image" src={photoByDate.url} alt={photoByDate.title} />
        </picture>
        <section>
          <h3 className="cardmain__name">Carlosl!</h3>
          <p>Esta foto se tomó en espacio el día de tu cumple</p>
          <em>“ 17-marzo ”</em>
          {/* <p className="cardmain__description">
            La galaxia Andromeda es una galaxia espiral con un diámetro de
            doscientos veinte mil años luz.
          </p> */}
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
