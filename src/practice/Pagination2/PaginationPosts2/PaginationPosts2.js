import React from 'react';
import styled, { css } from 'styled-components';

function PaginationPosts({ posts, loading }) {
  // MEMO: 1000단위마다 콤마로 구분짓기
  function comma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    // <Container>
    <Container className="list-group mb-4">
      <TitleContainer>
        <Name>대상</Name>
        <Province>지역</Province>
        <Households>세대수</Households>
        <Area>관리면적</Area>
      </TitleContainer>

      <ListContainer>
        {posts.map(post => (
          <ListBox key={post.id} className="list-group-item">
            <NameContainer>{post.ContractName}</NameContainer>
            <ProvinceContainer>{post.AreaCodeName}</ProvinceContainer>
            <HouseholdsContainer>{comma(post.NoOfHouse)}</HouseholdsContainer>
            <AreaContainer>{comma(post.ManagedArea)}</AreaContainer>
          </ListBox>
        ))}
      </ListContainer>
    </Container>
    // </Container>
  );
}

export default PaginationPosts;

const postsStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: solid 1px green;
`;

const borderRadiusTop = css`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const borderRadiusBottom = css`
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   border: solid 3px green;
// `;

// MEMO: ----- 2차 -----start
const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const commonStyle = css`
  height: 60px;
  margin: 0 0.5px;
  padding: 0 10px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const titleStyle = css`
  ${center}
  ${commonStyle}
  color: #343a40;
  font-size: 16px;
`;

const cellStyle = css`
  ${center}
  ${commonStyle}
  /* border: solid 1px black; */
  /* border-bottom: solid 2px white; */
  color: #343a40;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  /* letter-spacing: -1px; */
  cursor: default;

  :hover {
    /* color: white; */
    color: #bba171;
    /* transition: all 0.3s ease; */
    transition: all 0.7s;
    /* background: transparent; */
    /* background: rgba(187, 161, 113, 0.7); */
    /* #bba171 */
    /* background: #eaeaea; */
    background: #f1f3f5;
    /* background: #f8f9fa; */
    /* box-shadow: none; */
  }
`;

const nameStyle = css`
  width: 340px;
`;

const provincesStyle = css`
  width: 120px;
`;

const householdsStyle = css`
  width: 100px;
`;

const areaStyle = css`
  width: 150px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const Name = styled.div`
  ${nameStyle}
  ${titleStyle}
  background-color:  #bba171;
  /* border: solid 1px black; */
  /* border-right: solid 1px white; */
`;

const Province = styled.div`
  ${provincesStyle}
  ${titleStyle}
  background-color:  #bba171;
  /* border: solid 1px black; */
  /* border-right: solid 1px white; */

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Households = styled.div`
  ${householdsStyle}
  ${titleStyle}
  background-color:  #bba171;
  /* border: solid 1px black; */
  /* border-right: solid 1px white; */

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Area = styled.div`
  ${areaStyle}
  ${titleStyle}
  background-color:  #bba171;
  /* border: solid 1px black; */

  @media (max-width: 1200px) {
    display: none;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
`;

const ListBox = styled.div`
  display: flex;
  /* display: grid; */
`;

const NameContainer = styled.div`
  ${nameStyle}
  background-color: white;
  /* border-bottom: solid 1px gray; */
  border-bottom: solid 1px #eaeaea;

  ${cellStyle}

  @media (max-width: 1200px) {
    width: 340px;
  }
`;

const ProvinceContainer = styled.div`
  ${provincesStyle}
  background-color: #f8f9fa;
  /* background-color: #f1f3f5; */
  /* border-bottom: solid 1px gray; */
  border-bottom: solid 1px #eaeaea;
  ${cellStyle}

  @media (max-width: 1200px) {
    display: none;
  }
`;

const HouseholdsContainer = styled.div`
  ${householdsStyle}
  width: 100px;
  background-color: white;
  /* border-bottom: solid 1px gray; */
  border-bottom: solid 1px #eaeaea;

  ${cellStyle}

  @media (max-width: 1200px) {
    display: none;
  }
`;

const AreaContainer = styled.div`
  ${areaStyle}
  background-color: #f8f9fa;
  /* background-color: #f1f3f5; */
  /* border-bottom: solid 1px gray; */
  border-bottom: solid 1px #eaeaea;

  ${cellStyle}

  @media (max-width: 1200px) {
    display: none;
  }
`;
// MEMO: ----- 2차 -----end
