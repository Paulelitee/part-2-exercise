import { useState, useEffect } from 'react'
import { Filter } from './components/Filter.js'
import { Countries } from './components/Countries.js'
import Axios from 'axios'
import './App.css'

//declaring the App component
const App = () => {

  //initializng all states
const [countries, setCountries] = useState([])
const [filter, setFilter] = useState('')
const [filteredCountries, setFilteredCountries] = useState([])
const [location, setLocation] = useState('london')
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=PBLV3LGKGSTYS5ZTLB9Q2WJHK`
const [weather, setWeather] = useState('fetching weather')

//printing the url to log to see the location in which the weather data is actually being fetched from
console.log(url)

//side effect for ferching the countries and filtering them based on the keywords in the filter input
useEffect(() => {
  Axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
  .then(response =>   {
    setCountries(response.data)
    setFilteredCountries(countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase())))
    filteredCountries.map(language => Object.assign(language, {'show': false})) 
    console.log(filteredCountries)
    console.log(countries)
  })}, [filter])

  //this is the event handler for the filter input field
const handleChange = (event, setChange, change) => {
  setChange(event.target.value)
}

//side effect to fetch weather data for a given country
useEffect(() => {
  const getWeather = async () => 
  Axios.get(url)
  .then(response => {
      setWeather(response.data.currentConditions.conditions)
      let capital = filteredCountries[0].name.common
      setLocation(capital)
  })
  console.log(weather)

  //catching error from weather data
  getWeather().catch(error => console.log(error))

}, [filter])

//main return function
  return(
    <div>
      <h1 className={'headers'}>Phonebook</h1>
      <Filter filter = {filter} handleChange = {(event, setChange, change) => handleChange(event, setFilter, filter)}/>
      <Countries country = {filteredCountries} setCountry={setFilteredCountries} weather = {weather} filter = {filter}/>
    </div>
  )

}

export default App