import React, { useState, useEffect } from "react";
import axios from "axios";

import MainContentHeader from './MainContentHeader';
import PhotoBox from './PhotoBox';
import InputBox from './InputBox';

function MainComponent() {
    const [photoData, setPhotoData] = useState({});
    const [photoDate, setPhotoDate] = useState('2019-11-05');

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=lzlI8r4upKEp4bFovBRvoTweZT9jpHGQyxuNDZyQ&date=${photoDate}`)
        .then(response => {
            //console.log(response.data);
            setPhotoData(response.data);
            
        })
        .catch(err => {
            console.log(err);
        })
    }, [photoDate]);


    const handleClick = (testStr) => {
        console.log('clicked');
        console.log(testStr);
        setPhotoDate(testStr);
    }

    //console.log(photoData);

    return (
        <div className="main-component">
            <MainContentHeader 
                date={photoData.date}
                title={photoData.title}
            />
            <PhotoBox
                url={photoData.url}
                title={photoData.title}
                explanation={photoData.explanation} 
            />
            <InputBox handleClick={handleClick}/>
        </div>
    );
}

export default MainComponent;