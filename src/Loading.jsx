import React, { useState } from 'react';
import {Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Loading () {
    
    return (
        <div className='Loading'>
            <Spinner className='Loader' color="secondary"></Spinner>
        </div>
    );
};

export default Loading;