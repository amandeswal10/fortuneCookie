//writing a function to return horoscope
//when given a date of birth by the user
import './birthday.css';
import React from "react";

function Birthday(){

    return(
        <div>
            <form>

            <label>
                <input className="birthdayEntry" type="text"/>
                <input className="birthdayEntry" type="submit" value="Submit"/>
            </label>
            </form>

            <h2> or </h2>
        </div>
    )
}

export default Birthday;

