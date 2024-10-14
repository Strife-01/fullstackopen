import IndividualCountrie from './individualCountrie.jsx'
import Show from './show.jsx'
import {useState, useEffect} from 'react'

const DisplayCountries = ({countries}) => {

  const [show, setShow] = useState(true);
  const [visibleCountries, setVisibleCountries] = useState([]);
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
  
  useEffect(() => {
    if (countries.length === 1) {
      const countrie = countries[0];
      fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${countrie.capitalInfo.latlng[0]}&lon=${countrie.capitalInfo.latlng[1]}&units=metric&appid=${apiKey}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setWeather(data);
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }
    
  }, [countries, apiKey])
  

  const handleShow = (countrie) => {
    setVisibleCountries(prev => {
      if (prev.includes(countrie)) {
        return prev.filter(c => c !== countrie);
      } else {
        return [...prev, countrie];
      }
    });
  };

  if (countries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    );
  } else if (countries.length > 1 && countries.length <= 10) {
    return (
      <ul>
        {
          countries.map((countrie) => {
            countrie.display_info = false;
            return (
              <>
                <li key={countrie.ccn3}>
                  {countrie.name.common} *official {countrie.name.official}
                  <Show countrie={countrie} handleShow={handleShow}/>
                </li>
                {visibleCountries.includes(countrie) && <IndividualCountrie countrie={countrie}/>}
              </>
            )
          })
        }
      </ul>
    );
  } else if (countries.length === 1){
    const countrie = countries[0];
    return <IndividualCountrie weather={weather} countrie={countrie}/>
  }
}

export default DisplayCountries;
