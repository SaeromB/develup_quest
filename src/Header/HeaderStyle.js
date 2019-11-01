import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background : #f6f6f6;
  height: 6rem;
`
export const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
export const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;
export const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;
export const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  svg {
    margin-right: 40px;
  }
`;
export const HeaderText = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: #333;
  text-decoration: unset;
`
export const ImageDownload = styled.div`
  width: 1rem;
  text-align: right;
  padding-right: 10rem;
`
