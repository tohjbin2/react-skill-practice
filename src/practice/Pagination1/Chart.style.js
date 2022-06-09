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

  background-color: #f8f9fa;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  padding: 50px 0;
  /* border: solid 2px blue; */

  @media (max-width: 1200px) {
    margin: 0 80px;
  }
`;

export const ContentsContainer = styled.div`
  background-color: white;
  box-shadow: 10px 10px 20px -1px #c1c1c1;
  /* 좌우 위아래 블러 (크기) 색상 *
  /* border: solid 1px black; */
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const PaginationContainer = styled.div`
  /* display: flex-start; */
  padding: 40px 0px;
  /* background-color: tomato; */

  @media (max-width: 1200px) {
    padding: 20px 10px;
  }
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
