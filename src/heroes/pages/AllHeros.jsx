import { HeroList } from '../components'

export const AllHero = () => {
  
  return (
    <>
    
        <div className="row">
            <h1>DC Comics</h1>
            <hr />

            <ul className='col-12'>
                <HeroList publisher={'DC Comics'}/>
            </ul>
            <h1>Marvel Comics</h1>
            <hr />
            <ul>
                <HeroList publisher={'Marvel Comics'}/>
            </ul>
        </div>        
            
    
    </>
  )
}
