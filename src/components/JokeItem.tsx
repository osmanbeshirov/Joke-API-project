import React from 'react'
import { FlagKeys } from '../common/types'

import * as Tags from '../components/styled/Card'

import { IJoke } from '../common/types'


interface JokeItemProps {
    joke: IJoke
}

const JokeItem: React.FC<JokeItemProps> = ({ joke }) => {

    const flags = Object.keys(joke.flags).filter((key) => {
        return joke.flags[key as FlagKeys]
    }).join(" ,  ");


    return (
        <div>
            <Tags.CardWrapper>
                <Tags.CardTop>
                    {joke.type === "single" ? (
                        <p>{joke.joke}</p>
                    ) : (
                        <>
                            <Tags.Setup>{joke.setup}</Tags.Setup>
                            <Tags.Delivery>{joke.delivery}</Tags.Delivery>
                        </>
                    )}
                </Tags.CardTop>
                <Tags.CardBottom>
                    <p>{joke.category}</p>
                    <div>{flags}</div>
                </Tags.CardBottom>
            </Tags.CardWrapper>
        </div>
    )
}

export default JokeItem;