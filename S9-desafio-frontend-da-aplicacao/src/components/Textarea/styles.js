import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27rem;

  font-size: 1.6rem;
  font-family: "Roboto Slab", serif;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  padding: 1.6rem;

  outline: none;
  border: 0;
  border-radius: 1rem;
`;
