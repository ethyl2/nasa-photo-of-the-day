import React, { useState, useEffect } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import axios from "axios";

function CarouselSection() {
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
            setPhotoData2(response.data); 
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=lzlI8r4upKEp4bFovBRvoTweZT9jpHGQyxuNDZyQ&date=${photoDate3}`)
        .then(response => {
            setPhotoData3(response.data); 
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const items = [
    {
        src: photoData1.url,
        altText: photoData1.date,
        caption: photoData1.title
    },
    {
        src: photoData2.url,
        altText: photoData2.date,
        caption: photoData2.title
    },
    {
        src: photoData3.url,
        altText: photoData3.date,
        caption: photoData3.title
    }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
          </CarouselItem>
        );
    });

    return (
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    ); 
}
export default CarouselSection;