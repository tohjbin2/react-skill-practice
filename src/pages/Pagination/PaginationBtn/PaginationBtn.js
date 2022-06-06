import React from 'react';
import styled from 'styled-components';

function PaginationBtn({ postsPerPage, totalPosts, paginate }) {
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

const BtnList = styled.div``;

const Btn = styled.button`
  cursor: pointer;

  :hover {
    color: green;
  }

  /* MEMO: 버튼 클릭시 유지되는 효과 */
  :focus {
    color: gold;
  }
`;
