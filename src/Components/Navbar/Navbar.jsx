import React, {useState} from "react";
import './navbar.css'
import { Link } from "react-router-dom";
import {MdOutlineModeOfTravel} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbDots} from 'react-icons/tb'

const Navbar = () => {
    const [active, setActive] = useState('navBar')

    const showNav= () =>{
        setActive('navBar activeNavbar')
    }

    const removeNavbar= () =>{
        setActive('navBar')
    }

    return(
        <section className="navBarSection">
            <header className="header flex">

                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdOutlineModeOfTravel className='icon'/>  Travel</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                        <div className="navLink">
                                <Link to="/"> Home </Link>
                            </div>
                        </li>

                       
                        <li className="navItem">
                        <div className="navLink">
                                <Link to="/places"> Places </Link>
                            </div>
                        </li>

                        <li className="navItem">
                            <div className="navLink">
                                <Link to="/about"> About </Link>
                            </div>
                        </li>


                        <button className="btn">
                        <Link to="/book"> Book Us </Link>                           
                        </button>

                    </ul>
                    <div onClick={removeNavbar} 
                    className="closeNavBar">
                        <AiFillCloseCircle className='icon'/>
                    </div>
                </div>

                <div onClick={showNav}
                className="toggleNavbar">
                    <TbDots className="icon"/>
                </div>

            </header>
        </section>
    )
}

export default Navbar