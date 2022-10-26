import React, { ReactFragment, useState } from 'react';
import { Wrapper, Row, Header, Img, Form, Search, Button } from './components/styled/index';

import owl from '../src/images/owl-cartoon.png'


const App = () => {

  const [search, setSearch] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const getJokes:React.FormEventHandler<HTMLFormElement> =async (event:React.FormEvent<HTMLFormElement>) => {
      
  }

  return (
    <div>
      <Wrapper>
        <Row>
          <Header>Joker</Header>
          <Img src={owl} alt='owl' />
        </Row>
        <Form onSubmit={getJokes}>
          <Search type={'text'} placeholder={'Type any word...'} value={search} onChange={handleChange} />
          <Button>Search</Button>
        </Form>
      </Wrapper>
    </div>
  )
}

export default App