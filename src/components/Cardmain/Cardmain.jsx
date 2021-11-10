import { useSelector } from "react-redux";
import { CardmainStyles } from "./CardmainStyles";
import html2canvas from "html2canvas";

//Services
import { Button } from "../Button/Button";

import styled from "styled-components";

export function Cardmain({datos}) {
  const photoByDate = useSelector((state) => state.photoByDate);
  const { name } = datos

  if (!photoByDate) return <div />;

  const onClickExportar = function (evento) {
    html2canvas(document.querySelector(".cardmain-container"), {
      logging: true,
      letterRendering: 1,
      allowTaint: true,
      useCORS: true,
    }).then((canvas) => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = `mifoto.jpg`;
      link.href = img;
      link.click();
    });
  };

  const ImgCard = styled.picture`
    background-image: url(${photoByDate.url});
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
      <button onClick={onClickExportar}>Descragar</button>
      {/* <button>Descargar</button> */}
      {/* <div className="card__download-bts">
        <Button>Descargar</Button>
      </div> */}
    </CardmainStyles>
  );
}
