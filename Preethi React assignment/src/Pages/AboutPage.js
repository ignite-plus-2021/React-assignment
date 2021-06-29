import React from 'react';
import Tittle from '../components/Tittle';
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
function AboutPage() {
    return (
        <div className="AboutPage">
           <Tittle title={'About Me'} span={'About Me'}/>  
             <ImageSection />
             <Tittle title={'My Skills'} span={'My Skills'}/> 
             <div className="skillsContainer">
                <SkillsSection skill={'Python'}   />
                <SkillsSection skill={'C'}  />
                <SkillsSection skill={'Java'}   />
                <SkillsSection skill={'React Js'}   />
                <SkillsSection skill={'HTML'}   />
                <SkillsSection skill={'Javascript'}   />
               
                <SkillsSection skill={'Web Design'}  />
               
            </div>
            
            </div>
    )
}

export default AboutPage;