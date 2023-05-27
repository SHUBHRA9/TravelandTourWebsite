import React, {useEffect} from 'react'

import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'

import {GoLocation} from 'react-icons/go'
import {BsClipboardCheck} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'


const Data=[
    {
        id:1,
        imgSrc:img,
        destTitle: 'Chitrakote Falls',
        location: 'Jagdalpur',
    },

]


const Main=() => {

    useEffect(() => {
        Aos.init({duration:2000})

    }, [])



    return(
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos='fade-right' className="title">
                    Images 
                </h3>
            </div>

            <div className="secContent grid">


                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description}) =>{
                        return(
                            <div key ={id} data-aos="fade-up" className="singleDestination">
                                
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <GoLocation className='icon'/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>  +1</small></span>                                           
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                        
                                    </div>

                                    
                                    <button className='btn flex'>
                                    <Link to="/images"> More Images <BsClipboardCheck className='icon'/> </Link>
                                         
                                    </button>
                                

                                </div>
                            </div>
                        )
                        }
                    )
                }
            </div>
        </section>
    )
}
export default Main