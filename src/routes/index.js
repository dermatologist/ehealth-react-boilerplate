import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import { CounterContainer, DrugContainer } from "../containers";
import { Header } from "../components";

const Container = styled.div`text-align: center;`;

function Routes() {
  return (
    <Router>
      <Container>
        <Header />
        <Route path="/" component={DrugContainer}/>
        <Route path="/counter" component={CounterContainer}/>
      </Container>
    </Router>
  )
}

export default Routes
