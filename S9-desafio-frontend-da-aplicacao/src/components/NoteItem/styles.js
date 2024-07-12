import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.GRAY_700};
  padding: 1.6rem;

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_600}` : "none"};
  border-radius: 10px;

  > button {
    border: none;
    background: none;
    cursor: pointer;
    line-height: 0;

    > svg {
      font-size: 2rem;
    }
  }

  .button-color {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    max-width: 14.2rem;
    font-size: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
