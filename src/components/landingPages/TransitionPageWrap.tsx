import React from 'react';
import styled from 'styled-components';

interface ITransitionPageWrap {
  children: JSX.Element;
  backgroundColor: string;
}

const TransitionPageWrap = ({
  children,
  backgroundColor,
}: ITransitionPageWrap) => {
  return <Wrap backgroundColor={backgroundColor}>{children}</Wrap>;
};

const Wrap = styled.div`
  position: absolute;
  background-image: url(${(props: { backgroundColor: string }) =>
    props.backgroundColor});
  background-size: cover;
  width: 100%;
  height: 100%;
  top: 0;
  transform: translateX(100%);
  &.page-enter {
    transform: translateX(100%);
  }
  &.page-enter-done {
    transform: translateX(0);
  }
  &.page-exit {
    transform: translateX(0);
  }
  &.page-exit-done {
    transform: translateX(100%);
  }
  transition: transform 400ms;
`;

export default TransitionPageWrap;
