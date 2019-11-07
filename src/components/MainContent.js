import React, { useState, useEffect } from "react";
import axios from "axios";

import MainContentHeader from './MainContentHeader';
import PhotoBox from './PhotoBox';
import InputBox from './InputBox';

function MainComponent() {
    const [photoData, setPhotoData] = useState({});

    // Get today's date as the initial date:
    const today = new Date();
    let month = '' + (today.getMonth() + 1),
        day = '' + (today.getDate()),
        year = today.getFullYear();

    if (month.length < 2) { 
        month = '0' + month;
    }
    if (day.length < 2) { 
        day = '0' + day;
    }
    
    const currentDay = [year, month, day].join('-');
    const [photoDate, setPhotoDate] = useState(currentDay);

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


    const handleClick = (newDateChosen) => {
        //console.log(newDateChosen);
        setPhotoDate(newDateChosen);
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