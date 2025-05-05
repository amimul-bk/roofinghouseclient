import React, { useState, useEffect } from 'react'
import './VideosComponent.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import video1 from '../../../assets/HomePageImages/video1.mp4'
import video2 from '../../../assets/HomePageImages/video2.mp4'
import video3 from '../../../assets/HomePageImages/video3.mp4'
import video4 from '../../../assets/HomePageImages/video5.mp4'
import video5 from '../../../assets/HomePageImages/video4.mp4'
import PlayButton from '../../../assets/HomePageImages/PlayButton.png'

// Videos data
const videos = [
    { id: 1, url: video1, thumbnail: 'thumbnail-url-1.jpg' },
    { id: 2, url: video2, thumbnail: 'thumbnail-url-2.jpg' },
    { id: 3, url: video3, thumbnail: 'thumbnail-url-3.jpg' },
    { id: 4, url: video4, thumbnail: 'thumbnail-url-4.jpg' },
    { id: 5, url: video5, thumbnail: 'thumbnail-url-5.jpg' }
];

function VideosComponent() {
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
    const [showModal, setShowModal] = useState(false);
    // const videoRef = useRef(null);

    useEffect(() => {
        const box = document.querySelector('.video-carousel');
        const handleScroll = () => {
            const maxScrollLeft = box.scrollWidth - box.clientWidth;
            setIsPrevDisabled(box.scrollLeft <= 0);
            setIsNextDisabled(box.scrollLeft >= maxScrollLeft);
        };
        box.addEventListener('scroll', handleScroll);
        // Run this effect once on mount
        handleScroll();
        // Cleanup event listener on component unmount
        return () => {
            box.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateScrollDistance = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth > 2000) {
            return 1500;
        } else if (screenWidth > 1000) {
            return 750;
        } else if (screenWidth > 778) {
            return 800;
        } else if (screenWidth > 545) {
            return 420;
        } else {
            return 300;
        }
    };

    const btnpressprev = () => {
        let box = document.querySelector('.video-carousel');
        let width = calculateScrollDistance();
        box.scrollLeft -= width;
        setCurrentVideoIndex((prevIndex) => {
            const newIndex = Math.max(0, prevIndex - 1);
            return newIndex <= 0 ? 1 : newIndex;
        });
    };

    const btnpressnext = () => {
        let box = document.querySelector('.video-carousel');
        let width = calculateScrollDistance();
        box.scrollLeft += width;
        setCurrentVideoIndex((prevIndex) => {
            const newIndex = Math.min(videos.length - 1, prevIndex + 1);
            return newIndex <= 0 ? 1 : newIndex;
        });
    };

    const progress = videos.length > 1 ? (currentVideoIndex / (videos.length - 1)) * 100 : 0;

    const openModal = (index) => {
        setCurrentVideoIndex(index + 1);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='videos-section'>
            <div className='video-arrows'>
                <h2 className='videos-heading'>Featured Works</h2>
                <div className='arrowss'>
                    <div className='arrows1'>
                        <div className={`arrow1 ${isPrevDisabled ? 'disabled-icon' : ''}`} onClick={btnpressprev}><FaAngleLeft /></div>
                        <div className={`arrow1 ${isNextDisabled ? 'disabled-icon' : ''}`} onClick={btnpressnext}><FaAngleRight /></div>
                    </div>
                </div>
            </div>
            <div className='video-carousel'>
                <div className='carousel-video'>
                    {videos.map((video, index) => (
                        <div key={index} className='video-container'>
                            <video autoPlay muted playsInline loop className="videos-slide">
                                <source src={video.url} type="video/mp4" />
                            </video>
                            <div className='play-icon' onClick={() => openModal(index)}>
                                <img className='play-icon-img' src={PlayButton} alt='ultimates-roofing-llc' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bar-arrows'>
                <div className='progress-bar'>
                    <div style={{ width: `${progress}%`, height: '3px', backgroundColor: 'black' }}></div>
                </div>
                <div className='arrows'>
                    <div className={`arrow ${isPrevDisabled ? 'disabled-icon' : ''}`} onClick={btnpressprev}><FaAngleLeft /></div>
                    <div className={`arrow ${isNextDisabled ? 'disabled-icon' : ''}`} onClick={btnpressnext}><FaAngleRight /></div>
                </div>
            </div>

            {showModal && (
                <div className="video-modal">
                    <div className="video-modal-content">
                        <video autoPlay controls className="videos-modal-slide">
                            <source src={videos[currentVideoIndex - 1].url} type="video/mp4" />
                        </video>
                        <div className="close-icon" onClick={closeModal}>
                            <FaTimes />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default VideosComponent