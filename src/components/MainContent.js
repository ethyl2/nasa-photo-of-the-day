import React, { useState, useEffect } from "react";
import axios from "axios";

import MainContentHeader from './MainContentHeader';
import PhotoBox from './PhotoBox';

function MainComponent() {
    const [photoData, setPhotoData] = useState({});

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=lzlI8r4upKEp4bFovBRvoTweZT9jpHGQyxuNDZyQ")
        .then(response => {
            //console.log(response.data);
            setPhotoData(response.data);
            
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

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
        </div>
    );
}

export default MainComponent;