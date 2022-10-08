import styled from "styled-components";

const ContainerInformation = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  background-color: #f0efef;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 90%;
    max-width: 660px;
  }

  h3 {
    color: #fa2e3f;
    font-size: 1.9rem;
    border-left: 5px solid #fa2e3f;
    border-right: 5px solid #fa2e3f;
    width: max-content;
    padding-left: 15px;
    padding-right: 15px;
  }

  .containerAllInfo {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  ul {
    list-style-type: square;
  }
  li {
    font-size: 1.2rem;
    font-weight: 600;
  }
  .titleSub {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 55px;

    p {
      font-size: 1.3rem;
      color: #494949;
    }
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
  @media screen and (max-width: 990px) {
    .titleSub {
      padding: 0;
      text-align: center;
      word-wrap: break-word;
    }
    h3 {
      padding: 0;
    }
  }
  @media screen and (max-width: 796px) {
    h3 {
      font-size: 1.95rem;
    }
    .endTitle,
    .startTitle {
      font-size: 1rem;
    }
    .endTitle {
      font-size: 0.7rem;
    }
  }
  @media screen and (max-width: 319px) {
    .titleSub p {
      font-size: 1rem;
    }
    .titleSub {
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;

export default ContainerInformation;
