import { WiCloud, WiRain, WiCloudDown, WiDaySunny } from "weather-icons-react"

//this component contains the extra details of the countries that is toggles in the show.hide button click
export const CountryDetails = ({ country, id, weather }) => {

    //function to render languages 
    const renderLanguages = (country, id) => {
       const languages = Object.entries(country[id].languages)
       return languages.map(language => <p key = {language[0]}> {language[1]}</p>)
        }

    //function to render weather
    const weatherRender = () => {
        if  (weather.toLowerCase() === 'partially cloudy') 
             return <WiCloud size = {60} />
        else if (weather.toLowerCase() === 'overcast')
            return <WiCloudDown size = {60} />
        else if (weather.toLowerCase() === 'rainy')
            return <WiRain size = {60} />
        else if (weather.toLowerCase() === 'overcast')
            return <WiDaySunny size = {60} />
             else return null
    }

    //logging weather to console to confirm synchrony between current weather status and the icon being displayed
    console.log(weather)

    //this is function for the main render
    const mainRender = () => {
        if(country.length > 0)  {
            return(
                <div>
                    <h2>{country[id].name.common}</h2>
                    <p>capital - {country[id].capital}</p>
                    <p>area - {country[id].area}</p>
                    <h3>languages</h3>
                    <ul>
                        {renderLanguages(country, id)}
                    </ul>
                    <img src = {country[id].flags.png} alt = {country[id].name.common}></img>
                    <div>
                        {weatherRender()}
                    </div>
                </div>
            )
        }

        return null

    } 

    //main return statement
    return mainRender()
}