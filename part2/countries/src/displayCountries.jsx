const DisplayCountries = ({countries}) => {
  if (countries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    );
  } else if (countries.length > 1 && countries.length <= 10) {
    return (
      <ul>
        {countries.map((countrie) => <li key={countrie.ccn3}>{countrie.name.common} *official {countrie.name.official}</li>)}
      </ul>
    );
  } else if (countries.length === 1){
    const countrie = countries[0];
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
        <img src={countrie.flags.png}/>
      </div>
    )
  }
}

export default DisplayCountries;
