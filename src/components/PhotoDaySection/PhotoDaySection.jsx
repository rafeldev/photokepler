import { PhotoDayStyles } from "./PhotoDayStyles";

export function PhotoDaySection({ photoOfDay }) {
  
  if (!photoOfDay) return <div />;

  return (
    <PhotoDayStyles>
      <div className="bd-container photoDay-container">
        <h1 className="photoDay-title">Fotografía del día:</h1>
        <div className="photoDay-box">
          <picture className="photoDay__img">
            <img src={photoOfDay.url} alt={photoOfDay.title} />
          </picture>
          <article className="photoDay__info">
            <h3>{photoOfDay.title}</h3>
            <h4>{photoOfDay.date}</h4>
            <p class="card-text">{photoOfDay.explanation}</p>

            {/* <h6>Copyright: {photoData.copyright}</h6> */}
          </article>
        </div>
      </div>
    </PhotoDayStyles>
  );
}
