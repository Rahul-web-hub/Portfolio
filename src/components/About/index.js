import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About =() => {

    const [letterClass , setLetterClass] = useState('text-animate');

    useEffect(() => {
        let isMounted = true;
      
        const timeoutId = setTimeout(() => {

          if (isMounted) {
            setLetterClass('text-animate-hover');
          }
        }, 3000);
      
               return () => {
          isMounted = false;
          clearTimeout(timeoutId);
        };
      }, []);

    return(
        <>
        <div className='container about-page'>
        <div className='text-zone'>
            <h1>
              <AnimatedLetters
              letterClass={letterClass}
                strArray={['A','b','o','u','t',' ','m','e']}
                idx={15}
              />
            </h1>
            <p>As a sophomore web developer, I'm dedicated to crafting engaging websites and applications that incorporate the latest technologies to create dynamic user experiences. My goal is to contribute creatively to the evolving digital landscape through innovative coding and design practices</p>
            <p> I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.</p>
            <p>If I need to define myself in one sentence that would be a student , a sports fanatic, tech-obsessed!!! 
</p>
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon  icon={faBootstrap} color='#DD0031'/>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon  icon={faHtml5} color='#F06529'/>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon  icon={faCss3} color='#28A429'/>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon  icon={faReact} color='#53D4F4'/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon  icon={faJsSquare} color='#EFD81D'/>
                </div>
                <div className='face6'>
                    <FontAwesomeIcon  icon={faGitAlt} color='#EC4D28'/>
                </div>
            </div>
        </div>
             
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About