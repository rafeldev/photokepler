import { PhotoDayStyles } from "./PhotoDayStyles";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function PhotoDaySection({ photoOfDay }) {
  // Animacion Aos settting:
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (!photoOfDay) return <div />;

  return (
    <PhotoDayStyles id="photoDay">
      <div className="bd-container photoDay-container" data-aos="fade-up">
        <h1 className="photoDay-title">Imagen astronomica del día:</h1>
        <div className="photoDay-box">
          <article className="photoDay__info">
            <h3 lang="en">{photoOfDay.title}</h3>
            <h4>{photoOfDay.date}</h4>
            <p lang="en" class="card-text">
              {photoOfDay.explanation}
            </p>

            {/* <h6>Copyright: {photoData.copyright}</h6> */}
          </article>
          <picture className="photoDay__img">
            <img src={photoOfDay.url} alt={photoOfDay.title} />
          </picture>
        </div>
      </div>
    </PhotoDayStyles>
  );
}
