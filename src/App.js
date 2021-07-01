import React, { useState } from "react";
import FetchData from './components/FetchData';
import CheckList from './components/CheckList';
import Form from './components/Form';
import Navigation from './components/Navigation';
import styled from 'styled-components';
const MAX_PAGES = 3;

const StyledDiv = styled.div`
  margin: 20px;
`

function App() {
  const [ page, setPage ] = useState(0);

  const comps = [
    <Form />,
    <CheckList />,
    <FetchData />
  ];

  return (
    <>
      <Navigation page={page} setPage={setPage} max={MAX_PAGES}/>
      <StyledDiv className="App">
        { comps[page] }
      </StyledDiv>
    </>
  );
}

export default App;
