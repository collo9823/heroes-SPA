import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../UI'
import { DcPage, MarvelPage, HeroPage, SearchPage } from '../pages'
import { AllHero } from '../pages/AllHeros'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>

            <Routes>

                <Route path='marvel' element={<MarvelPage/>} />
                <Route path='dc' element={<DcPage/>} />
                <Route path='search' element={<SearchPage/>} />
                <Route path='all' element={<AllHero/>} />
                <Route path='hero/:id' element={<HeroPage/>} />

                {/*Search, Hero by id  */}

                <Route path='/' element={<Navigate to='/all'/>} />

            </Routes>
        </div>
    </>
  )
}
