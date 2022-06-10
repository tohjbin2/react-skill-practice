import styled, { css } from 'styled-components';

const borderRadiusTop = css`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const borderRadiusBottom = css`
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const contentsBtnStyle = css`
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 80px;
  background-color: white;
  /* box-shadow: 10px 10px 20px -1px #c1c1c1; */
  /* 좌우 위아래 블러 (크기) 색상 */
  border: solid 1px red;
  z-index: 5;
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
  width: 1050px;
  margin: 0 10px;
  /* border: solid 2px blue; */

  @media (max-width: 1200px) {
    margin: 0 10px;
  }

  /* -----이하 */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 0 30px;
`;

export const ContentsContainer = styled.div`
  background-color: white;
  box-shadow: 10px 10px 20px -1px #c1c1c1;
  /* 좌우 위아래 블러 (크기) 색상 *
  /* border: solid 1px black; */
  border-top-right-radius: 15px;
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
  /* margin: 20px 0 0 0; */
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
  /* height: 750px; */
  /* margin: 0 20px 20px 20px; */
  /* -----이하 */
`;
