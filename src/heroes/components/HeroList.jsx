import React from 'react'
import { getHeroeByPublisher } from '../helpers'

export const HeroList = ({publisher}) => {

    const heroes = getHeroeByPublisher(publisher)

  return (
        <ul>
            {
                heroes.map(hero => (
                    <li key={hero.id}>
                        {hero.superhero}
                    </li>
                ))
            }
        </ul>
    )
}
