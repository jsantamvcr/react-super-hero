import React, { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {

    /* This component retrieves a hero by its ID from the URL parameters*/
    const { id } = useParams();

    const hero = useMemo(() => {
        return getHeroById(id);
    }, [id]);

    if (!hero) {
        return <Navigate to={'/'}/>;
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${id}.jpg`}
                    className="img-thumbnail"
                    alt={hero.superhero}
                />
            </div>
        </div>
    );
};
