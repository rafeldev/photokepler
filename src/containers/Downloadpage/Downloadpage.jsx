import { Cardmain } from "../../components/Cardmain/Cardmain";
import { DownloadpageStyles } from "./DownloadpageStyles";
import "./Downloadpage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Downloadpage({ datos }) {
  // Animacion Aos settting:
  useEffect(() => {
    Aos.init({ duration: 4000 });
  }, []);

  return (
    <DownloadpageStyles className="download-main">
      <div className="download-container">
        <div className="download__card" data-aos="fade">
          <Cardmain datos={datos} />
          {/* <div className="download__card-bts">
            <Button>Descargar</Button>
          </div> */}
        </div>
      </div>
    </DownloadpageStyles>
  );
}
