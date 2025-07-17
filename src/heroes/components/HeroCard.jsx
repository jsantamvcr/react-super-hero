import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
                             id,
                             superhero,
                             publisher,
                             alter_ego,
                             first_appearance,
                             characters,
                         }) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`;
    const charactersByHero = (<p>{characters}</p>)

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div>
                    <img src={heroImageUrl} className="card-img-top" alt={superhero}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">Publisher: {publisher}</p>
                    <p className="card-text">Alter Ego: {alter_ego}</p>
                    <p className="card-text">
                        <div className='text-muted'>First Appearance: {first_appearance}</div>
                    </p>
                    {
                        (alter_ego !== characters) && charactersByHero
                    }

                    {/*Link to more details:*/}
                    <Link to={`/hero/${id}`}>
                        <button className="btn btn-primary">
                            More details
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};
