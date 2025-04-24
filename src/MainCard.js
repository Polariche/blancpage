import React, { useState, useEffect } from 'react';
import './maincard.css';

import BlancIcon from './img/blanc.png';
import { FaXTwitter } from "react-icons/fa6";

const MainCard = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <>
        <div className="mainCard">
            <div className="mainCardInner">
                <img src={BlancIcon}/>
                <h1>B L A N C</h1>
                <a href="https://x.com/DracoFenrir"><FaXTwitter /></a>
            </div>
        </div>
        </>
    )
}

export default MainCard