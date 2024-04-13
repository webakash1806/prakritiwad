import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TeamData from '../hook/TeamData';
import TeamCard from '../Components/TeamCard';

const responsive = {
    0: { items: 1 },
    640: { items: 2 },
    768:{items:3},
    1024: { items: 4 },
};


const items=TeamData.map((val)=>{
   return(
    <div className='border border-b-orange-600 ]'>
     <TeamCard img={val.img} name={val.name}/>
    </div>
   )
})

const Team = () => (
    <div className='w-[20.5rem] sm:w-[39rem] md:w-[43rem] lg:w-[61rem] flex items-center justify-center'>
    <AliceCarousel
        mouseTracking
        autoPlayInterval={1200}
        animationDuration={1200}
        infinite
        disableButtonsControls
        // disableDotsControls
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
    />
    </div>
);


export default Team