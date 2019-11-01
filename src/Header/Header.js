import React from 'react';
import * as S from './HeaderStyle';
import download from '../Image/download.svg';

const Header = () => {
  return (
    <>
    <S.HeaderContainer>
      <S.NavHeader>
        <S.NavLeft>
        <S.HeaderText>그녀저장소</S.HeaderText>
        </S.NavLeft>
        <S.NavCenter></S.NavCenter>
        <S.NavRight>
        <S.ImageDownload>
          <img src={download} alt={'download'}/>
        </S.ImageDownload>
        </S.NavRight>
      </S.NavHeader>
    </S.HeaderContainer>
    </>
  )
}

export default Header;