import React from 'react';
import TeamSection from './Team/TeamSection';
import MeetUs from './MeetUs/MeetUs';
import WhoWeAre from './Team/Whoweare/WhoWeAre';
import OurProjects from '../HomePage/OurProjects/OurProjects.jsx';
import  { useEffect,} from "react";

const OurTeamPage = () => {
     useEffect(() => {
    window.scrollTo(0, 0);
    // setVisible(true);
  }, []);
  
    return (
        <div>
            <MeetUs></MeetUs>
            <WhoWeAre></WhoWeAre>
           <TeamSection></TeamSection>
           <OurProjects></OurProjects>
        </div>
    );
};

export default OurTeamPage;