import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
    My name is Shreya Patil.
    </SectionTitle>
    <SectionText>
    I am a Computer Engineer and an artist who does a bit of doodling.<br/>
    My main areas of expertise include java,html,css,javascript.
    </SectionText>
    <Button onClick={()=>window.location="#projects"}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;