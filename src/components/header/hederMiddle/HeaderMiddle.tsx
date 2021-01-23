import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  margin-bottom: 25px;
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
const MainTitle = styled.span`
  line-height: 32px;
  font-weight: 700;
  font-size: 32px;
  color: #f0f0f0;
`;

interface IHeaderMiddle {
  title: string;
}

const HeaderMiddle = ({ title }: IHeaderMiddle) => {
  return (
    <Wrap>
      <ItemsDiv>
        <LeftItem>
          <MainTitle>{title}</MainTitle>
        </LeftItem>
      </ItemsDiv>
      <ItemsDiv>
        <RightItem></RightItem>
      </ItemsDiv>
    </Wrap>
  );
};

export default HeaderMiddle;