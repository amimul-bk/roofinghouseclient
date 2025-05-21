import React from 'react';
import TeamSection from './Team/TeamSection';
import MeetUs from './MeetUs/MeetUs';
import WhoWeAre from './Team/Whoweare/WhoWeAre';

const OurTeamPage = () => {
    return (
        <div>
            <MeetUs></MeetUs>
            <WhoWeAre></WhoWeAre>
           <TeamSection></TeamSection>
        </div>
    );
};

export default OurTeamPage;