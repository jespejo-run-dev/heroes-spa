import React from 'react'
import { Link } from 'react-router'

const CharactersByHero = ({alter_ego, characters}) => {
    if(alter_ego === characters) return (<></>);

    return <p className="card-text">Characters: {characters}</p>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`

    // const charactersByHero = <p className="card-text">Characters: {characters}</p>

  return (
    <div className="col">
        <div className="card">

            <div className="row no-gutter">

                <div className="col-4">
                    <img src={heroImageUrl} className='card-img' alt={superhero} />
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>

                        <CharactersByHero characters={characters}  alter_ego={alter_ego} />

                        <p className='card-test'>
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${id}`}>
                            Más...
                        </Link>

                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}
