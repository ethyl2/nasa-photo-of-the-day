import React, { useState, useEffect } from "react";
import axios from "axios";

function Carousel() {
    const [photoData1, setPhotoData1] = useState({});
    const [photoData2, setPhotoData2] = useState({});
    const [photoData3, setPhotoData3] = useState({});

    // Generate 3 random dates for APOD photos
    function randomDate(start, end) {
        const newDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      
        let month = '' + (newDate.getMonth() + 1),
              day = '' + (newDate.getDate()),
              year = newDate.getFullYear();
      
        if (month.length < 2) { 
              month = '0' + month;
          }
        if (day.length < 2) { 
              day = '0' + day;
          }  
        return [year, month, day].join('-');
      }

    const [photoDate1] = useState(randomDate(new Date(1996, 0, 1), new Date()));
    const [photoDate2] = useState(randomDate(new Date(1996, 0, 1), new Date()));
    const [photoDate3] = useState(randomDate(new Date(1996, 0, 1), new Date()));

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=lzlI8r4upKEp4bFovBRvoTweZT9jpHGQyxuNDZyQ&date=${photoDate1}`)
        .then(response => {
            setPhotoData1(response.data); 
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=lzlI8r4upKEp4bFovBRvoTweZT9jpHGQyxuNDZyQ&date=${photoDate2}`)
        .then(response => {
            setPhotoData1(response.data); 
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=lzlI8r4upKEp4bFovBRvoTweZT9jpHGQyxuNDZyQ&date=${photoDate3}`)
        .then(response => {
            setPhotoData1(response.data); 
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <h1>Carousel goes here
            </h1>
            </div>
    )
}
export default Carousel;