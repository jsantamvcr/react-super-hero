import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {

    /* This component retrieves a hero by its ID from the URL parameters*/
    const { id } = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => {
        return getHeroById(id);
    }, [id]);


    const onNavigateBack = () => {
        navigate(-1); // Navigate back to the previous page
    }

    if (!hero) {
        return <Navigate to={'/'}/>;
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${id}.jpg`}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={hero.superhero}
                />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First Appearance:</b> {hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                {/* Link to more details: */}
                <button className="btn btn-outline-primary" onClick={onNavigateBack}>

                    Back
                </button>
            </div>
        </div>
    );
};
