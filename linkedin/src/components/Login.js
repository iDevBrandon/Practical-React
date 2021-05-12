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
    </Container>
  );
};

export default Login;
