/* eslint-disable react/jsx-no-target-blank */
import { CardCreatorsStyles } from "./CardCreatorsStyles";
import { creatorData } from "../../assets/Data/CreatorsData";
import { Button } from "../Button/Button";
import { ImArrowRight2 } from "react-icons/im";

export function CardCreators() {
  return (
    <CardCreatorsStyles>
      {creatorData.map((creator) => (
        <div className="cardcreator">
          <picture className="cardcreator__img">
            <img src={creator.img} alt={creator.name} />
          </picture>

          <strong className="cardcreator__name">{creator.name}</strong>
          <p className="cardcreator__rol">{creator.rol}</p>

          <Button btnLink={creator.link}>
            {creator.network} <ImArrowRight2 className="arrow-nasa" />
          </Button>
        </div>
      ))}
    </CardCreatorsStyles>
  );
}
