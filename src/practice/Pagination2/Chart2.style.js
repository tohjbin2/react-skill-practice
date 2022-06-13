import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const TitleContainer = styled.div`
  ${({ theme }) => theme.titleImgBar()}

  ::before {
    ${({ theme }) => theme.titleImgBefore('/images/title-img-service.jpg')}
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor.lightGray};

  @media (max-width: 1100px) {
    /* width: auto; */
  }
`;

export const TitleWrap = styled.div`
  width: ${({ theme }) => theme.guide.width};

  @media (max-width: 1100px) {
    /* display: none; */
  }
`;

export const MainTitle = styled.p`
  position: relative;
  color: white;
  font-size: 45px;
  font-weight: 600;
  letter-spacing: -1px;
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 160px;

  div {
    position: relative;
    color: ${({ theme }) => theme.fontColor.black};
    font-size: 45px;
    font-weight: 600;
    letter-spacing: -1px;

    p:before {
      ${({ theme }) => theme.titleUnderLineBefore()}
    }
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1050px;
  padding: 180px 0;
  /* height: 1400px; */

  @media (max-width: 1100px) {
    width: auto;
  }
`;

// 페이지네이션 -----start
const contentsBtnStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 45px 60px 45px;

  color: ${({ theme }) => theme.fontColor.black};
  font-size: 34px;
  font-weight: 600;
  letter-spacing: -1px;
  cursor: pointer;
`;

export const PaginationContainer = styled.div`
  ${({ theme }) => theme.borderRadiusAll()}
  ${({ theme }) => theme.boxShadow()}

  background-color: white;
`;

export const PaginationWrap = styled.div`
  padding: 40px 0px;

  @media (max-width: 1200px) {
    padding: 20px 10px;
  }
`;

export const PostsTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const SummaryBtn = styled.div`
  ${contentsBtnStyle}
`;

export const SecurityBtn = styled.div`
  ${contentsBtnStyle}

  div {
    position: relative;

    p:before {
      ${({ theme }) => theme.textLineAnimationBefore()}
    }

    p:hover:before {
      ${({ theme }) => theme.textLineAnimationHover()}
    }
  }
`;

export const CleaningBtn = styled.div`
  ${contentsBtnStyle}

  div {
    position: relative;

    p:before {
      ${({ theme }) => theme.textLineAnimationBefore()}
    }

    p:hover:before {
      ${({ theme }) => theme.textLineAnimationHover()}
    }
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// 페이지네이션 -----end
