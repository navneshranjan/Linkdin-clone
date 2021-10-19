import styled from "styled-components";
import Styled from "styled-components";
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";

const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          <a>Hiring in hurry ?</a>
        </h5>
        <p>
          -Find talented props in recorded time with Upwork and keep business
          moving
        </p>
      </Section>
      <Layout>
        <Leftside />
        <Rightside />
        <Main />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin-right: auto;
  margin-left: auto;
`;

const Section = styled.div`
  min-height: 50px;
  padding: 16px 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;

    font-weight: 700;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  } ;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside  main  rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 12fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-row: auto;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0, 5px;
  } ;
`;

export default Home;
