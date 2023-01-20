import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DCPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container mx-auto'>
                <Routes>
                    <Route path="marvel" element={<MarvelPage/>} />
                    <Route path="dc" element={<DCPage/>} />

                    <Route path="search" element={<SearchPage/>} />
                    <Route path="hero/:heroeId" element={<HeroPage/>} />

                    <Route path="/" element={<Navigate to='/login'/>} />
                </Routes>
            </div>

        </>
    )
}
