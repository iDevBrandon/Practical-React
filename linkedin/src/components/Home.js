import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 55px;
  max-width: 100%;
`;

const Section = styled.section``;

const Home = (props) => {
  return (
    <Container>
      <Section>
        <h5>
          <a href="/home">Hiring in a hurry? - </a>
        </h5>
        <p>Find talented pros in upwork and keep business moving forward </p>
      </Section>
    </Container>
  );
};

export default Home;
