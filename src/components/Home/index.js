import LogoTitle from "../../assets/images/logo-R.png";
import { Link } from "react-router-dom";
import './index.scss';
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = ()=>{

    const [letterClass , setLetterClass] = useState('text-animate')

    const nameArray = ['R','a','h','u','l']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r']
  
    useEffect(() => {
        // Create a variable to store whether the component is mounted
        let isMounted = true;
      
        const timeoutId = setTimeout(() => {
          // Check if the component is still mounted before setting the state
          if (isMounted) {
            setLetterClass('text-animate-hover');
          }
        }, 4000);
      
        // Set isMounted to false when the component unmounts
        return () => {
          isMounted = false;
          clearTimeout(timeoutId);
        };
      }, []);

    return (
        <>
        <div className="container home-page">
          <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass}_12`}>i,</span>
            <br></br>
            <span className={`${letterClass}_13`}>I</span>
            <span className={`${letterClass}_14`}>'m</span>
            <img src={LogoTitle} alt="developer"/>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
             <br/>
             <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
             </h1>
             <h2> Frontend Developer / Javascript Expert / Sophomore @IIIT BHOPAL</h2>
             <Link to="/contact" className="flat-button">CONTACT ME</Link>
          </div>
        <Logo/>
        </div>
        <Loader type="pacman"/>
        </>
    )

}

export  default Home