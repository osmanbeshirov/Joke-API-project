import React, { useState } from 'react';
import axios from 'axios';

import { Wrapper, Row, Header, Img, Form, Search, Button } from './components/styled/index';
import JokeItem from './components/JokeItem';

import {IJoke} from './common/types'

import owl from '../src/images/owl-cartoon.png'


const BASE_URL = 'https://v2.jokeapi.dev/joke/Any'

const App = () => {

  const [search, setSearch] = useState<string>("");

  const [error, setError] = useState(false);

  const [jokes, setJokes] = useState<IJoke[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const END_POINT = `${BASE_URL}?contains=${search}&amount=10`;
    const { data } = await axios.get(END_POINT);

    if (data.error) {
      setError(true)
      setJokes([])
    }
    else {
      setError(false);
      setJokes(data.jokes)
    }

    setSearch('')

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

        {/* Jokes area */}
        <div>
          {error && <p>Sorry, we dont find any jokes...</p>}

          {jokes.length > 0 && jokes.map(joke => <JokeItem key={joke.id} joke={joke} />)}
        </div>

      </Wrapper>
    </div>
  )
}

export default App