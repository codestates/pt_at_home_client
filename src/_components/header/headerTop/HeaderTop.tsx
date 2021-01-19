import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
`;
const LoginBtn = styled.button`
  opacity: 1;
  color: #f0f0f0;
  background: #202230;
  border: none;
  line-height: 35px;
  padding: 0 20px;
  border-radius: 5px;
`;
const ItemsDiv = styled.div`
  display: flex;
  flex: 1;
`;
const LeftItem = styled(ItemsDiv)`
  justify-content: flex-start;
`;
const RightItem = styled(ItemsDiv)`
  justify-content: flex-end;
`;

const HeaderTop = () => {
  return (
    <Wrap>
      <ItemsDiv>
        <LeftItem></LeftItem>
      </ItemsDiv>
      <ItemsDiv>
        <RightItem>
          <LoginBtn>LOGIN</LoginBtn>
        </RightItem>
      </ItemsDiv>
    </Wrap>
  );
};

export default HeaderTop;
