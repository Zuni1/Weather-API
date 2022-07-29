import React from 'react'

export default function Home({name, temp, day, date, sky, time, image}) {

    return(
        <div className='box'>
            <h3>{name}</h3>
            <div className = 'top'>
                <div className = "container">
                    <h2>{day}</h2>
                    <h5>{date} {time}</h5>
                    <img src = {image} alt=""/>
                    <h2>{temp} ºF</h2>
                    <h5>{sky}</h5>
                </div>
            </div>
        </div>
    )
}