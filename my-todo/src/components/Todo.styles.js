import styled from "styled-components";

export const TodoItem = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  .checkbox {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;
