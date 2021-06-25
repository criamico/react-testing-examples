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

  const selectPage = () => {
    if (page === 0)
      return <Form />;
    else if (page === 1)
      return <FetchData />;
    else if (page === 2)
      return <CheckList />;
  }

  return (
    <>
      <Navigation page={page} setPage={setPage} max={MAX_PAGES}/>
      <StyledDiv className="App">
        { selectPage() }
      </StyledDiv>
    </>
  );
}

export default App;
