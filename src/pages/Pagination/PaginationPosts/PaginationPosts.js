import React, { useState } from 'react';
import styled, { css } from 'styled-components';

function PaginationPosts({ posts, loading }) {
  // MEMO: 1000단위마다 콤마로 구분짓기
  function comma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  /*
  const [Total, setTotal] = useState(0); 
  let ccc = (posts: any) => {
    let total = 0;
    posts.map((post: any) => {
      total += parseInt(post.ManagedArea);
    });
    setTotal(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  };
  */

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Container>
      {/* <div className="list-group mb-4">
        {posts.map((post: any) => (
          <UlStyle key={post.id} className="list-group-item">
            <li>{post.id}</li>
            <li>{post.date}</li>
            <li>{post.content}</li>
          </UlStyle>
        ))}
      </div> */}
      <Wrapper className="list-group mb-4">
        {/* 
        <NameContainer>
          <Name>이름</Name>
          {posts.map((post: any) => (
            <div key={post.id} className="list-group-item">
              <p>{post.ContractName}</p>
            </div>
          ))}
        </NameContainer>
        <HouseholdsContainer>
          <Households>세대수</Households>
          {posts.map((post: any) => (
            <div key={post.households} className="list-group-item">
              <p>{comma(post.NoOfHouse)}</p>
              <p>{post.NoOfHouse}</p> ->MEMO: 주석처리 할 것 
            </div>
          ))}
        </HouseholdsContainer>
        <AreaContainer>
          <Area>관리면적</Area>
          {posts.map((post: any) => (
            <div key={post.id} className="list-group-item">
              <p>{comma(post.ManagedArea)}</p>
              <p>{post.ManagedArea}</p> >MEMO: 주석처리 할 것
            </div>
          ))}
        </AreaContainer>
        <ContractContainer>
          <Contract>계약기간</Contract>
          {posts.map((post: any) => (
            <div key={post.contract} className="list-group-item">
              <p>{post.ContractEndDate}</p>
            </div>
          ))}
        </ContractContainer>
        */}
        <TitleContainer>
          <Name>대상</Name>
          <Households>세대수</Households>
          <Area>관리면적</Area>
          <Contract>계약기간</Contract>
        </TitleContainer>

        <ListContainer>
          {posts.map(post => (
            <ListBox key={post.id} className="list-group-item">
              <NameContainer>{post.ContractName}</NameContainer>
              <HouseholdsContainer>{comma(post.NoOfHouse)}</HouseholdsContainer>
              <AreaContainer>{comma(post.ManagedArea)}</AreaContainer>
              <ContractContainer>{post.ContractEndDate}</ContractContainer>
            </ListBox>
          ))}
        </ListContainer>
      </Wrapper>
    </Container>
  );
}

export default PaginationPosts;

const postsStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 0 30px; */
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  border: solid 3px green;
`;

const UlStyle = styled.ul`
  display: flex;
`;

// MEMO: ----- 1차 -----start
// const Wrapper = styled.div`
//   display: flex;
// `;

// // name: 단지명 (아파트 이름)
// const NameContainer = styled.div`
//   ${postsStyle}
// `;
// const Name = styled.div`
//   ${postsStyle}
//   ${borderRadiusTop}
//   padding: 0 100px;
//   background-color: #f7f7f7;
// `;

// // households: 세대수
// const HouseholdsContainer = styled.div`
//   ${postsStyle}
// `;
// const Households = styled.div`
//   padding: 0 40px;
//   background-color: #f7f7f7;
// `;

// // area: 관리면적
// const AreaContainer = styled.div`
//   ${postsStyle}
// `;
// const Area = styled.div`
//   padding: 0 40px;
//   background-color: #f7f7f7;
// `;

// // contract: 계약기간
// const ContractContainer = styled.div`
//   ${postsStyle}
// `;
// const Contract = styled.div`
//   padding: 0 40px;
//   background-color: #f7f7f7;
// `;
// MEMO: ----- 1차 -----end

// MEMO: ----- 2차 -----start
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  border: solid 1px black;
  width: 300px;
  background-color: olive;
`;

const Households = styled.div`
  display: flex;
  justify-content: center;
  border: solid 1px black;
  width: 100px;
  background-color: olive;
`;

const Area = styled.div`
  display: flex;
  justify-content: center;
  border: solid 1px black;
  width: 150px;
  background-color: olive;
`;

const Contract = styled.div``;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListBox = styled.div`
  display: flex;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  border: solid 1px black;
  width: 300px;
`;
const HouseholdsContainer = styled.div`
  display: flex;
  justify-content: center;
  border: solid 1px black;
  width: 100px;
`;
const AreaContainer = styled.div`
  display: flex;
  justify-content: center;
  border: solid 1px black;
  width: 150px;
`;
const ContractContainer = styled.div`
  padding: 0 20px;
`;
// MEMO: ----- 2차 -----end
