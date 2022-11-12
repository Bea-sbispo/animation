import styled from "styled-components";
import background from "../../assets/jpg/back.jpg";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: end;
  overflow: hidden;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

export const Father = styled.div`
  position: relative;
  width: 90vw;
  @media screen and (min-width: 320px) and (max-width: 769px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 320px) and (max-width: 769px) {
    justify-content: center;
  }
`;

export const Textarea = styled.div`
  @media screen and (min-width: 320px) and (max-width: 769px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
  }
`;

export const Grabtext = styled.div`
  transform: rotate(4deg);
`;

export const Title = styled.h2`
  font-family: satisfy;
  font-size: 64px;
  color: white;
  padding: 0 90px;
  margin-top: 48px;
  text-shadow: 9px 2px 8px #151515b0;
  @media screen and (max-width: 321px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 322px) and (max-width: 376px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 377px) and (max-width: 769px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.h1`
  font-family: satisfy;
  font-size: 128px;
  color: white;
  text-shadow: 9px 2px 8px #151515b0;
  @media screen and (max-width: 321px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 322px) and (max-width: 376px) {
    font-size: 4rem;
  }
  @media screen and (min-width: 377px) and (max-width: 769px) {
    font-size: 5rem;
  }
`;

export const Showcase = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  height: 30vh;
  border-radius: 30px 30px 0 0;
  width: fit-content;
  position: absolute;
  bottom: 0;

  .frappuccino-showcase {
    animation: showcase 1s;
    display: flex;
    align-items: end;
  }
  .frappuccino-showcase img {
    width: 8rem;
    height: 11rem;
  }
  .first-frap {
    animation: showcase 1s;
    margin: 0 0 0 2rem;
  }
  .second-frap {
    animation: showcase 1.5s;
    margin: 0;
  }
  .third-frap {
    animation: showcase 2s;
    margin: 0 2rem 0 0;
  }

  @keyframes showcase {
    from {
      transform: translatey(900px);
    }
  }
  @media screen and (min-width: 320px) and (max-width: 769px) {
    width: 100%;
    .first-frap,
    .second-frap,
    .third-frap {
      margin: 0;
    }
  }
  @media screen and (max-width: 321px) {
    height: 22vh;
    .frappuccino-showcase img {
      width: 5rem;
      height: 6.5rem;
    }
  }
  @media screen and (min-width: 322px) and (max-width: 376px) {
    height: 22vh;
    .frappuccino-showcase img {
      width: 6rem;
      height: 7.5rem;
    }
  }
  @media screen and (min-width: 377px) and (max-width: 769px) {
    width: 100%;
    height: 25vh;
    .frappuccino-showcase img {
      width: 6rem;
      height: 7.5rem;
    }
  }
`;

export const Imagearea = styled.div`
  @media screen and (min-width: 320px) and (max-width: 769px) {
    display: none;
  }
`;

export const Fourthfrap = styled.img`
  height: 75vh;
  animation: main-frappuccino 1s;

  @keyframes main-frappuccino {
    from {
      transform: translateX(900px);
    }
  }
`;

export const Widthmobile = styled.div`
  @media screen and (min-width: 320px) and (max-width: 769px) {
    width: 100%;
  }
`;
