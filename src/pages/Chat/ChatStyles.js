import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
  }

  .container.open {
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 768px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 0% 100%;
    }
  }

  .container.closed {
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 768px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 100% 0%;
    }
  }
`;
