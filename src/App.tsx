import React from 'react';
import { Wrapper, Row, Header, Img, Form, Search } from './components/styled/index';

import owl from '../src/images/owl-cartoon.png'


const App = () => {
  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Joker</Header>
          <Img src={owl} alt='owl' />
        </Row>
        <Form>
          <Search type={'text'} placeholder={'Type any word...'} />
        </Form>
      </Wrapper>
    </div>
  )
}

export default App