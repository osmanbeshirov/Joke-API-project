import React from 'react';
import { Wrapper, Row, Header, Img } from './components/styled/index';

import owl from '../src/images/owl2.png'


const App = () => {
  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Joker</Header>
          <Img src={owl} alt='owl' />
        </Row>
        <h1>App</h1>
      </Wrapper>
    </div>
  )
}

export default App