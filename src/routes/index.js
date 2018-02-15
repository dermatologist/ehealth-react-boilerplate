import React from 'react'
import {CounterContainer, DrugContainer} from 'containers'
import {Header} from 'components'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import styled from 'styled-components'

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
