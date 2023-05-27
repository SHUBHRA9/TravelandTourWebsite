import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {BsFilter} from 'react-icons/bs'
import {CiFacebook} from 'react-icons/ci'
import {CiInstagram} from 'react-icons/ci'
import {FaTripadvisor} from 'react-icons/fa'
import {RiListSettingsFill} from 'react-icons/ri'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Home=() => {
    useEffect(() => {
        Aos.init({duration:2000})

    }, [])

    return(
        <section className='home'>
            <div className='overlay'></div>
            <video src={video} muted autoPlay loop type='video/mp4'></video>
            
            <div className='homeContent container'>
                <div className='textDiv'>
                    <span data-aos="fade-up" className='smallText'>
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up" className='homeTitle'>
                        Search your Holiday
                    </h1>
                </div>

                <div data-aos="fade-up" className='cardDiv grid'>
                    <div className="destinationInput">
                        <label htmlFor='city'>Search your destination : </label>
                        <div className='input flex'>
                            <input type='text' placeholder='Enter name here...'/>
                            <GrLocation className='icon'/>
                        </div>
                    </div>  

                    <div className="dateInput">
                        <label htmlFor='date'>Select your date : </label>
                        <div className='input flex'>
                            <input type='date'/>
                        </div>
                    </div> 

                    <div className="priceInput">
                        <div className='label_total flex'>
                            <label htmlFor='price'>Max Price</label>
                            <h1 className='total'>$6000</h1>
                            </div>
                            <div className='input flex'>
                                <input type='range' max='6000' min='100'/>
                        </div>
                    </div> 

                    <div className="searchOptions flex">
                       <BsFilter className='icon'/>
                       <span> MORE FILTERS </span>
                    </div>
                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                    <a href='https://www.facebook.com'>
                       <CiFacebook className='icon'/></a>  
                       <a href='https://www.instagram.com'>
                       <CiInstagram className='icon'/> </a> 
                       <a href='https://www.tripadvisor.in'>
                       <FaTripadvisor className='icon'/>  </a>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}
export default Home