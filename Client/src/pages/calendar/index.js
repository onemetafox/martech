import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Content from './content';

const Calendar = () =>{
    return(
        <div>
            <Header title={'Team Calendar'}/>
            <Content />
            <Footer />
        </div>
    );
}
export default Calendar;