import styled from "styled-components";

const ContainerMaps = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 55px;
  text-align: center;
  .containerAllInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .descriptionMap {
    font-size: 1.3rem;
    color: #494949;
    padding: 0 55px;
  }

  img {
    width: 100%;
    border-radius: 12px;
    max-width: 950px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);
  }

  h3 {
    color: #fa2e3f;
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
`;

export default ContainerMaps;
