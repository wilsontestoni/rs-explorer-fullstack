import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 112rem;
  margin: auto;
  margin-top: 4.6rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.6rem;

    > h1 {
      font-size: 3.2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.WHITE};
      white-space: nowrap;
    }
  }
`;

export const Movies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  height: 71.6rem;
  overflow-y: auto;
  margin: 4rem 0;

  &::-webkit-scrollbar {
    width: 22px;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px ${({ theme }) => theme.COLORS.PINK};
    border: solid 7px transparent;
    border-radius: 20px;
  }
`;

export const ButtonNewMovie = styled(Link)`
  width: 206px;
  height: 56px;

  background: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 10px;

  font-weight: 500;
  font-size: 1.6rem;

  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  > svg {
    width: 23px;
    height: 23px;
    padding-right: 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.PINK_800};
  }
`;
