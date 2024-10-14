import DisplayCountries from './displayCountries.jsx'
import {useState, useEffect} from 'react'


const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [fullCountriesData, setFullCountriesData] = useState(null);
  useEffect(() => {
    fetch("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(data => {
      return data.json()
    })
    .then(data => setFullCountriesData(data))
  
  }, [])
  

  const handleSearch = (e) => {
    if (e.target.value != ""){
      setCountries(fullCountriesData.filter((countrie) => countrie.name.official.toLowerCase().includes(e.target.value.toLowerCase())))
    } else {
      setCountries([])
    }
  }

  return (
    <>
      <label htmlFor="countrie">find countries</label>
      <input onChange={handleSearch} name="countrie"/>
      <DisplayCountries countries={countries}/>
    </>
  )
}

export default Countries;
