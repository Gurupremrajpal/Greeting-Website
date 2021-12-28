import React from 'react';

function App(params) {
    //new Date (year, month, day, hours, minutes, seconds, milliseconds)
    let currentDate = new Date();
    currentDate = currentDate.getHours();
    let greeting= '';

    const cssStyle= {};

    if(currentDate >= 1 && currentDate <12){
        greeting ='Good Morning';
        cssStyle.color = 'green';
    } else if(currentDate >=12 && currentDate < 19){
        greeting= "Good Afternoon";
        cssStyle.color = 'Orange';
    } else{
        greeting= "Good Night";
        cssStyle.color = 'Black'
    }

    return (
    <>
        <div>
            <h1>
                Hello Sir, <span style={cssStyle}>{greeting} </span> 
            </h1>
        </div>
    </>
);
}

export default App;