import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: ${({ theme, isNew }) =>
    isNew ? "18.0rem" : "auto"};

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

  span {
    padding-right: 1.6rem;
    padding-bottom: .3rem;
  }

  > input {
    width: 100%;
  }

  > span, input {
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
