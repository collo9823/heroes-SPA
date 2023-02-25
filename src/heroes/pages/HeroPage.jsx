import React from 'react'
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  
  const {id, ...rest} = useParams();
  
  const navigate = useNavigate();

  // const hero = getHeroById(id);
  const hero = useMemo(()=> getHeroById(id), [id]); 

  const publishUrl = (hero)=>{
    console.log(hero)
    if(hero.publisher == 'Marvel Comics'){
      console.log('marvel')
      return ('marvel')
    }
    if(hero.publisher == 'DC Comics') { 
      console.log('dc')
      return ('dc')
    }
  }

  const publish = publishUrl(hero)
  

  console.log(hero)
  console.log(hero.id)
  const onNavigateBack = ()=>{
    navigate(-1);
    // navigate(`/${publishUrl(hero)}`,{
    //   replace: true,
    // })
  }

  if(!hero){
    return <Navigate to="/marvel"/>
  }
  return (
    <div className='row mt-5'>
      <div className="col-4 animate__animated animate__bounce"> 
        <img 
          src={`/assets/heroes/${id}.jpg`} 
          alt={hero.superhero} 
          className='img-thumbnail'  
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b> {hero.publisher}</li>
          <li className='list-group-item'><b>First apperance:</b> {hero.first_appearance}</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
         <p> {hero.characters}</p>

        <button 
          className="btn btn-outline-info"
          onClick={onNavigateBack}
          >Back</button> 
      </div>
    </div>
  )
}
