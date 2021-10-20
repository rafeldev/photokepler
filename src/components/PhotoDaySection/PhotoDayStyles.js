import styled from "styled-components";
export const PhotoDayStyles = styled.section`
  padding: 3rem 0;
  background-color: var(--tercer-color);
  .photoDay-container {
    /* padding: 2rem 3rem; */
  }
  .photoDay-title {
    margin-bottom: 20px;
  }
  .photoDay-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    h4 {
      margin-bottom: 10px;
    }
  }
  .photoDay__img {
    width: 600px;
    height: 500px;
    /* margin-right: 50px; */
    margin-bottom: 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  .photoDay__info {
    width: 600px;

    h3 {
      font-size: var(--h1-font-size);
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 10px;
    }
  }
`;
