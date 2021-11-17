import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  /* background-color: #f8f8f8AD; */
  background: rgba(0, 0, 0, 0.4);
`;
export const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 15;
  & .iMguRD, .JiMIV, .fDjuEZ {
    width: 24px;
    height: 24px;
  }
`;