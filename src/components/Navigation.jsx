import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 10px;
  background: #306af2;
  color: white;
  font-size: 0.8em;
  padding: 8px;
  border-radius: 4px;
  border: none;
`
const StyledDiv = styled.div`
  background: #dfdcdc;
`
const Navigation = ({ page, setPage, max }) => {

  const goToNext = () => page < max - 1 ? setPage(page + 1) : setPage(0);
  const goToPrev = () => page > 0 ? setPage(page - 1) : setPage(0);

  return (
    <StyledDiv>
      {page > 0 ? <StyledButton onClick={goToPrev}>Prev Example</StyledButton> : null}
      <StyledButton onClick={goToNext}>{page < max - 1 ? 'Next Example' : 'Start Over!'}</StyledButton>
    </StyledDiv>
  );
};

export default Navigation;
