import { useEffect, useState } from "react";
import { PhotoDayStyles } from "./PhotoDayStyles";

export function PhotoDaySection() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const API_KEY = "dlAkNXEebX2nyYtPL4SyEfk8Z6u9DHw0DJfLAdwX";
      const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

      const response = await fetch(API_URL);
      const data = await response.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <PhotoDayStyles>
      <div className="bd-container photoDay-container">
        <h1 className="photoDay-title">Fotografía del día:</h1>
        <div className="photoDay-box">
          <picture className="photoDay__img">
            <img src={photoData.url} alt={photoData.title} />
          </picture>
          <article className="photoDay__info">
            <h3>{photoData.title}</h3>
            <h4>{photoData.date}</h4>
            <p class="card-text">{photoData.explanation}</p>

            {/* <h6>Copyright: {photoData.copyright}</h6> */}
          </article>
        </div>
      </div>
    </PhotoDayStyles>
  );
}
