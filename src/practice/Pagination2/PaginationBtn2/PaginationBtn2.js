import React, { useEffect } from 'react';
import styled from 'styled-components';

function PaginationBtn({ postsPerPage, totalPosts, paginate }) {
  useEffect(() => {}, [totalPosts]);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <BtnContainer className="pagination">
        {pageNumbers.map(number => (
          <BtnList key={number} className="page-item">
            <Btn onClick={() => paginate(number)} className="page-link">
              {number}
            </Btn>
          </BtnList>
        ))}
      </BtnContainer>
    </nav>
  );
}

export default PaginationBtn;

const BtnContainer = styled.div`
  display: flex;
`;

const BtnList = styled.div`
  margin: 20px 0 0 0;
`;

const Btn = styled.button`
  /*
  display: flex;
  justify-content: center;
  align-items: center;
  */
  width: 30px;
  height: 30px;
  margin: 0 4px;
  background: rgba(187, 161, 113, 1);
  border-style: none;
  border-radius: 50%;
  color: white;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  :hover {
    /* transition: all 0.3s ease; */
    transition: all 0.5s;

    background: transparent;
    color: rgba(187, 161, 113, 1);
    /* box-shadow: none; */
  }

  :focus {
    background: transparent;
    color: rgba(187, 161, 113, 1);
  }
`;
