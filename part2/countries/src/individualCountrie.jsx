const IndividualCountrie = ({weather, countrie}) => {
    return (
      <div>
        <h1>{countrie.name.common}</h1>
        <p>Official: {countrie.name.official}</p>
        <div>
          <p>capital {countrie.capital}</p>
          <p>area {countrie.area}</p>
        </div>
        <h3>Languages</h3>
        <ul>
          {Object.entries(countrie.languages).map(([key, value]) => <li key={key}>{value}</li>)}
        </ul>
        <img src={countrie.flags.png} alt={countrie.flags.alt}/>
        {(weather != null) && <>
          <h2>Weather in {countrie.capital}</h2>
          <p>Temperature {weather.current.temp} Celsius</p>
          <img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt="Weather Icon" />
          <p>Wind speed {weather.current.wind_speed} m/s</p>
        </>}
      </div>
    )

}

export default IndividualCountrie;
