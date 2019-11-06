import React from "react";

function InputBox( {handleClick}) {

    return (
        <div className="input-box">
            <p> Choose a Different Day </p>
            <form>
                <label>Date: </label>
            <input name="newDate" type="date" id="user-input-date" />
            </form>
            <input type="submit" 
                value="Submit" 
                id="submit-button" 
                onClick={() => {
                    const myNewDate = document.getElementById("user-input-date");
                    handleClick(myNewDate.value)}} />
        </div>
    );
}

export default InputBox;