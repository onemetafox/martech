import React, { useEffect, useState } from 'react';
import Header from '../header';
import Footer from '../footer';
import Content from './Content';
import Box from '@mui/material/Box';

const Calendar = () =>{
    const [winheight, setHeight] = useState(0);
    
    useEffect(() => {
        setHeight(document.body.scrollHeight - 48);
    }, [])
    return(

        <div>
            <Header title={'Team Calendar'}/>
            <Content />
            <Footer />
        </div>
    );
}
export default Calendar;