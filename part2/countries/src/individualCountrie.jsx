const IndividualCountrie = ({countrie}) => {
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
      </div>
    )

}

export default IndividualCountrie;
