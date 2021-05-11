import styled from "styled-components";

export const TabContainer = styled.div`
  width: 40%;
  list-style-type: none;
`;

export const Button = styled.button`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  margin: 0 0.5rem;
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;

  &:hover {
    color: #2caeba;
    box-shadow: 0 2px #2caeba;
  }
`;
