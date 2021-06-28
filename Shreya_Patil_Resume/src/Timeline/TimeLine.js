import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
   <Section id="about">
     <SectionDivider/>
     <br/>
     <SectionTitle>About me</SectionTitle>
     <SectionText>
       Education :<br/>
       SSC (10th Maharastra State Board)<br/>
        Maratha Highschool , Gangapur Road , Nashik<br/>
        Percentage : 95.60%<br/>
       HSC (12th Maharashtra State Board)<br/>
        Matoshri College , Eklahare<br/>
        Percentage : 86.31%<br/>
       Graduation (An Autonomous Institute Affiliated with Savitrbai Phule Pune University)<br/>
        MKSSS's Cummins College of Engineering of Women,Pune<br/>
        First Year CGPA  : 8.4<br/>
        Second Year CGPA : 8.0
     </SectionText>
   </Section>
  );
};

export default Timeline;
