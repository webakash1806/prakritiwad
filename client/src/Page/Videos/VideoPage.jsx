import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoPage = () => {
    // const [videos, setVideos] = useState([]);

    const videos = ["hGhKiFCK3-Y", "dw5pmgcpObY", "BvRyCSkvC-g", "YjgkDgM8LBE", "mfslbTSfA70", "ZfNX8AxryD0"]

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(
    //                 `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAr4g0yw8t3ZYYR87YhpEBmjkaFQ0PACjE&channelId=UCPotnGNahFjLWjfsq4KYvuQ&order=date&part=snippet&type=video&maxResults=6`
    //             );
    //             console.log(response)
    //             setVideos(response.data.items);
    //         } catch (error) {
    //             console.error('Error fetching videos:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <div className='mt-20 lg:mt-32'>
            {/* <h2>Latest Videos</h2> */}
            <div className="flex flex-wrap lg:w-[70rem] items-center justify-center gap-4 video-list">
                {videos.map(video => (
                    <div key={video} className=" video-responsive">
                        <iframe className='w-[20rem] h-[11.5rem] md:w-[22rem] md:h-[13rem] rounded'

                            src={`https://www.youtube.com/embed/${video}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoPage;
