import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Main.style';

function Main() {
  return (
    <S.Container>
      <S.Wrap>
        <Link to="/pagination1">
          <S.Btn>Pagination1</S.Btn>
        </Link>
        <Link to="/pagination2">
          <S.Btn>Pagination2</S.Btn>
        </Link>
      </S.Wrap>
    </S.Container>
  );
}

export default Main;
