import {React} from 'react';
import Header from './header';
import TitleSection from './titleSection';
import ServiceSection from './serviceSection';
import TimeLine from './timeLine';
import './timeline.css';
const About = () => {
    return(
        <div>
            <Header />
            <TitleSection />
            <ServiceSection />
            <TimeLine />
            
        </div>
    );
}

export default About;
