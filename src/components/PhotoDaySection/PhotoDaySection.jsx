import { useEffect, useState } from "react";
import styled from "styled-components";

const PhotoDay = styled.section`
  /* height: auto; */
  background-color: var(--tercer-color);
  .photoDay-container {
    padding: 2rem 3rem;
  }
  .photoDay-title {
    margin-bottom: 20px;
  }
  .photoDay-box {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    flex-wrap: wrap;
  }
  .photoDay__img {
    width: 600px;
    height: 500px;
    margin-right: 50px;
    margin-bottom: 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  .photoDay__info {
    width: 500px;

    h3 {
      font-size: var(--h1-font-size);
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 10px;
    }
  }
`;

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
    <PhotoDay>
      <div className="bd-container photoDay-container">
        <h1 className="photoDay-title">Imagen del día</h1>
        <div className="photoDay-box">
          <picture className="photoDay__img">
            <img src={photoData.url} alt={photoData.title} />
          </picture>
          <article className="photoDay__info">
            <h3>{photoData.title}</h3>
            <h5>{photoData.date}</h5>
            <p class="card-text">{photoData.explanation}</p>

            <h6>Copyright: {photoData.copyright}</h6>
          </article>
        </div>
      </div>
    </PhotoDay>
  );
}
