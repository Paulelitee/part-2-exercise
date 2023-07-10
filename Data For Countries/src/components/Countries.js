import { CountryDetails } from "./CountryDetails"
import { useState } from 'react'

//declaring the main component function
export const Countries = ({ country, weather, filter }) => {

//initializing all states 
const [show, setShow] = useState(false)
const [showId, setShowId] = useState(0)
const [tooMany, setTooMany] = useState(false)

//event handling function to toggle country detail visibility on button click
const handleShow = (nation, id) => {
    setShow(!show)
    setShowId(id)
    if(nation.length > 0)  {
        console.log(nation[id].show)
    } else return console.log('null')
}

const handleTooMany = () => {
    setTimeout(() => {
        setTooMany(!tooMany)
    }, 500)

    return tooMany && <div className = {'too-many'}>'too many countries'</div>
}

//this function cnontains the main render of this component with quite a lot of conditionals
    const mainRender = () => {
        if(country.length > 10) {
            return handleTooMany()
        } else if(country.length > 1) {
            return (<div>{country.map((nation, i) => <div  key = {i}>
                {nation.name.common}<button onClick = {(nation, id) => handleShow(country, i)}>{i === showId && show ? 'hide' : 'show'}</button>                
            </div>)}
            {show ? <CountryDetails country = {country} id = {showId} showId = {showId} filter = {filter} weather = {weather}/> : null }

        </div>
        )} else if(country.length === 1 ) {
            return <CountryDetails country = {country} id = {0} showId = {showId} filter = {filter} weather = {weather}/>
        } else return null
    }

//this is the return statement of the function that calls the mainRender function
    return (
        <div>
            {
               mainRender()
            }
        </div>

    )
}