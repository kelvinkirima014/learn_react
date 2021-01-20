import React from 'react';


function TodaysDate(){
    const date = new Date();
    const hours = date.getHours();
    const styles = {
        fontSize: 30
    }

    let timeOfDay;
    if (hours < 12) {
        timeOfDay = 'morning';
        styles.color = '#262626'
    } else if (hours >= 12 && hours< 17){
        timeOfDay = 'afternoon'
        styles.color = '#262626'
    } else{
        timeOfDay = 'night'
        styles.color = '#2E0927'
    }
    return(
        <h2>it is {timeOfDay}</h2>
    )


}
export default TodaysDate;