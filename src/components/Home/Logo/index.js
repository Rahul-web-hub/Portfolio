import React, { useEffect, useRef } from 'react';
import './index.scss'; // Import your SCSS for styling
import LogoS from "../../../assets/images/logo-R.png";
import gsap from 'gsap';

const Logo = () => {
//   const bgRef = useRef(null);
//   const logoRef = useRef(null);

//   useEffect(() => {
//     const timeline = gsap.timeline();

//     timeline.to(bgRef.current, {
//       duration: 1,
//       opacity: 1,
//     });

//     timeline.fromTo(
//       logoRef.current,
//       {
//         scale: 0,
//         opacity: 0,
//       },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 1,
//         delay: 1,
//       }
//     );
//   }, []);

  return (
    <div className='logo-container'>
      <img  className='solid-logo' src={LogoS} alt="S" />
    </div>
  );
};

export default Logo;

