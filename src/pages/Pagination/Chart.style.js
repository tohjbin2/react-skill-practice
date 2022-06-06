import styled, { css } from 'styled-components';

const contentsBtnStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: gray;
  border: solid 1px red;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1100px;
  background-color: #f8f9fa;
`;

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 10px;
  border: solid 2px blue;

  @media (max-width: 1200px) {
    margin: 0 80px;
  }
`;

export const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationContainer = styled.div`
  display: flex-start;
  border: solid 1px red;
  background-color: tomato;
`;

export const PostsTitle = styled.div`
  display: flex;
`;

export const SummaryBtn = styled.div`
  ${contentsBtnStyle}
`;

export const SecurityBtn = styled.div`
  ${contentsBtnStyle}
`;

export const CleaningBtn = styled.div`
  ${contentsBtnStyle}
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
