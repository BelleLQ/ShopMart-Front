import React, {useContext} from 'react'
import HeroContext from '../contexts/HeroContext';
import HeroItem from './HeroItem';


const Hero = () => {
  const{heros} = useContext(HeroContext);
    return (
      <section id="hero-section container-fluid" style={{overflow: 'hidden', height: 'fit-content'}}>
        <div id="carouselExampleControls" className="carousel slide m-0" data-bs-ride="carousel">
          <div className="carousel-inner">
            {heros!==undefined && heros.map((hero,index)=>{
                      if(index===0){return   <HeroItem key={index} data={hero} active='true'/>}
                      else return   <HeroItem key={index} data={hero}/>
                        })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    )
}

export default Hero
