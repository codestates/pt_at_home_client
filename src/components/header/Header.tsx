import React from 'react';
import styled from 'styled-components';
import HeaderBottom from './headerBottom/HeaderBottom';
import HeaderTop from './headerTop/HeaderTop';
import HeaderMiddle from './hederMiddle/HeaderMiddle';

const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #13141c;
  box-shadow: 0 1px 30px 0 rgba(2, 2, 3, 0.7);
  padding: 30px;
`;

interface IHeader {
  title: string;
}

const Header = ({ title }: IHeader) => {
  return (
    <HeaderWrap id="asd">
      <HeaderTop />
      <HeaderMiddle title={title} />
      <HeaderBottom />
    </HeaderWrap>
  );
};

export default Header;
