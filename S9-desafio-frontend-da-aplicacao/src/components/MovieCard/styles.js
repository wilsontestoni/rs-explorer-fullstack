import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 3.2rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.CARDS_BACKGROUND};

  > h2 {
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    margin-top: 1.5rem;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
    line-height: 19px;
  }

  > ul {
    margin-top: 2.5rem;
    display: flex;
    gap: 0.8rem;
  }
`;
