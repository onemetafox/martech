import React, { useEffect, useState } from 'react';
import Header from '../../header';
import Footer from '../../footer';
import Content from './content';

const Budget = () =>{
    return(
        <div
            style={{flexDirection: 'column', justifyContent:'space-between', alignItems:"stretch", flex: 1}}
        >
            <div style={{flex: 1,}}>
                <Header title={'Budget'}/>
                <Content />
            </div>
            <div style={{flex: 1}}>
                <Footer />
            </div>
        </div>

    );
}
export default Budget;