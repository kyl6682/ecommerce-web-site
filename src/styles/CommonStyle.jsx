import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${( props ) => props.$padding || '0'};
  flex-direction: ${(props) => props.$direction || 'row'};

`