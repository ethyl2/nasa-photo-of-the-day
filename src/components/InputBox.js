import React from "react";
import styled from "styled-components";

function InputBox( {handleClick}) {

    const InputBoxDiv = styled.div`
        background: #CD321D;
        width: 40%;
        margin: 6rem auto;
        padding: 0.25rem 1rem 2rem 1rem;
        color: white;
        h3 {
            font-size: 2.5rem;
        }
        label, input {
            margin: 1rem auto;
            font-size: 2.5rem;
            padding: 1rem;
            &[type="submit"] {
                border-radius: 1rem;
            }
            &[type="submit"]:hover {
                font-style: italic;
            }
            &[type="submit"]:active {
                transform: translatey(-4px);
                transition: transform 0.2s;
            }
        }
    `;

    return (
        <InputBoxDiv>
            <h3> Choose a Different Day </h3>
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
        </InputBoxDiv>
    );
}

export default InputBox;