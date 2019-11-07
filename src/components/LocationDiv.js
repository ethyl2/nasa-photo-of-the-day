import React from "react";
import styled from "styled-components";

const LocationDiv = () => {
    const LocationBox = styled.div`
        width: 40%;
        background: white;
        margin: 2rem auto;
        padding: 2rem;

    `;

    let latitude;
    let longitude;

    function handleClick() {
        getLocation();
    }

    function getLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showLocation);
        } else {
            alert("Sorry, browser does not support geolocation!");
         }
    }

    function showLocation(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        alert("Latitude : " + latitude + " Longitude: " + longitude);
     }
    
    return (

        <LocationBox>
            <h3>Click to get your current position on planet Earth</h3>
            <button onClick={() => handleClick()}>Where Am I?</button>
        </LocationBox>
    );

}
export default LocationDiv;