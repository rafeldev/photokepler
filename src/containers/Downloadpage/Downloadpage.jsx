import { Cardmain } from "../../components/Cardmain/Cardmain";
import { DownloadpageStyles } from "./DownloadpageStyles";
import "./Downloadpage.css";
// import { Button } from "../../components/Button/Button";

export function Downloadpage({datos}) {
  return (
    <DownloadpageStyles className="download-main">
      <div className="download-container">
        <div className="download__card">
          {/* <h2>Hey Miguel, esta es tu foto!</h2> */}
          <Cardmain
            datos={datos}
          />
          {/* <div className="download__card-bts">
            <Button>Descargar</Button>
          </div> */}
        </div>
      </div>
    </DownloadpageStyles>
  );
}
