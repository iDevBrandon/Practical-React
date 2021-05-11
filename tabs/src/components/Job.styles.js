import styled from "styled-components";

export const JobContainer = styled.div`
  width: 80vw;
`;

export const Button = styled.button`
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-9);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  font-weight: 700;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  display: block;
  width: 12rem;
  text-align: center;
  margin: 0 auto;
  margin-top: 3rem;
`;

export const JobTitle = styled.small`
  text-transform: uppercase;
  color: #617d98;
  color: #617d98;
  background: #dae2ec;
  background: #dae2fe;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border-radius: 0.2rem;
`;

export const JobDesc = styled.div`
  display: flex;

  svg {
    margin: 1rem;
  }
`;
