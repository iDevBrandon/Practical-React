import styled from "styled-components";

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 10px 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;

  img {
    width: 130px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  margin-right: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  padding: 10px 24px;
  color: #0a66c2;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  transition-duration: 160ms;
  text-align: center;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-top: 40px;
   position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    z-index: 5;
    padding-bottom: 0;
    width: 55%;
    font-size: 3rem;
    color: #2977c9;
    font-weight: 200;
    @media (max-width: 768px) {
      text-align: center;
      width: 100%;
    }
  }

  img {
    position: absolute;
    top: -100px;
    z-index: -1;
    width: 100%;
    @media (max-width: 768px) {
      top: 230px;
      position: initial;
    }
  }
`;

const Form = styled.form`
  margin-top: 100px;
  width: 300px;
`;

const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 20px;
  background-color: #fff;
  width: 100%;
  height: 50px;
  img {
    width: 30px;
  }
`;

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/linkedin-logo.png" alt="" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community.</h1>
          <img src="/images/hero.jpg" alt="" />
        </Hero>
        <Form>
          <Google>
            <img src="images/google.png" alt="" />
            Sign with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

export default Login;
