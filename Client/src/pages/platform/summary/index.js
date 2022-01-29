import React from 'react';
import Header from '../../header';
import Footer from '../../footer';
import Content from './content';

const Summary = () =>{
    return(
        <div
            style={{flexDirection: 'column', justifyContent:'space-between', alignItems:"stretch", flex: 1}}
        >
            <div style={{flex: 1}}>
                <Header title={'EC2 Instance'}/>
                <Content />
            </div>
            <div style={{flex: 1}}>
                <Footer />
            </div>
        </div>
    );
}
export default Summary;