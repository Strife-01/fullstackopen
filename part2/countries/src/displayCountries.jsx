import IndividualCountrie from './individualCountrie.jsx'
import Show from './show.jsx'
import {useState} from 'react'

const DisplayCountries = ({countries}) => {

  const [show, setShow] = useState(true);
  const [visibleCountries, setVisibleCountries] = useState([]);
 
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
    return <IndividualCountrie countrie={countrie}/>
  }
}

export default DisplayCountries;
