import React from 'react';
import { Navbar } from '../../ui';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DcPage, MarvelPage, SearchPage, HeroPage } from '../../heroes';

export const HeroRoutes = () => {
    return (
        <>
            <div>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Navigate to={'/marvel'}/>}/>

                    <Route path="dc" element={<DcPage/>}/>
                    <Route path="marvel" element={<MarvelPage/>}/>

                    <Route path="search" element={<SearchPage/>}/>
                    <Route path="hero/:id" element={<HeroPage />}/>
                </Routes>
            </div>
        </>
    );
};
