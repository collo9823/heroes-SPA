import React from 'react'
import {HeroCard} from '../components'
import {useForm} from '../../../../05-hooks-app/src/hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';


export const SearchPage = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;

  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (e)=>{
    e.preventDefault();
    
    // if(searchText.trim().length == 0) {
      // return navigate(`/all`)};
    
    navigate(`?q=${searchText.toLowerCase().trim()}`)
    // console.log({searchText})
  }

  return (
    <>
      <h1>
        SearchPage
      </h1> 
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text"
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value= {searchText}
              onChange= {onInputChange}
              />

            <button
              className='btn btn-outline-primary mt-1'  
              >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          
          
          {/* {
            (q === '') ? 
            <div className="alert alert-primary">
            Search a hero
            </div>
          : (heroes.length === 0) 
          && (<div className="alert alert-danger">
            No hero with <b>{q}</b> 
            </div>) 

          } */}

            <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none'}}>
              Search a hero
            </div>
            <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ?  '' : 'none'}}>
              No hero with <b>{q}</b> 
            </div>

          {
            heroes.map(hero=>(
              <HeroCard key={hero.id} {...hero}/>              
              ))
          }
          
        </div>
      </div>
    </>
  )
}
