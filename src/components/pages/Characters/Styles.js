import styled from "styled-components";

const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 55px;

  .containerCharacters {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  ul {
    list-style: square;
  }

  li {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .descriptionCharacter {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 55px;
  }

  p {
    font-size: 1.3rem;
    color: #494949;
  }

  img {
    width: 100%;
    border-radius: 12px;
    max-width: 950px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  }

  a {
    text-decoration: none;
    color: #186be7;
    font-size: 1.2rem;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 960px) {
    .containerCharacters {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .containerImage img {
      width: 90%;
    }
    .containerImage {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media screen and (max-width: 530px) {
    .descriptionCharacter {
      padding: 0 25px;
    }
    .descriptionCharacter p {
      font-size: 1.1rem;
    }
  }
`;

export default ContainerInfo;
