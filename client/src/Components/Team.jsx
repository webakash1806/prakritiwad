import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useTeamData } from '../Hooks/useTeamData';
import TeamCard from '../Components/TeamCard';

const responsive = {
    0: { items: 1 },
    640: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
};


const items = useTeamData.map((val, ind) => {
    return (
        <div key={ind + 1} className=''>
            <TeamCard img={val.img} name={val.name} desc={val?.desc} />
        </div>
    )
})

const Team = () => (
    <div className='w-[20rem] relative mt-10 sm:w-[39rem] md:w-[50rem] lg:w-[65rem] flex flex-col items-center justify-center'>
        <h1 className='absolute top-0 text-white text-center w-full text-[1.5rem] font-semibold pt-1 z-[100]'>Our Team</h1>
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