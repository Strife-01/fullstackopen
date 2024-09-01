import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import serverDataProcessing from './requestsServerModule.js'
import PersonForm from './components/personform.jsx'
import Filter from './components/filter.jsx'
import Persons from './components/persons.jsx'

const App = () => {
  const [persons, setPersons] = useState(() => []);
  const [personsToShow, setPersonsToShow] = useState([]);
  const [showAll, setShowAll] = useState(true);
  
  // let personNextId = useRef(5);

  useEffect(() => {
    serverDataProcessing.fetchData()
      .then((data) => setPersons(data.data));
  }, [])
  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        persons={persons} 
        setShowAll={setShowAll} 
        setPersonsToShow={setPersonsToShow}
      />

      <h2>Add new number</h2>
      <PersonForm 
        persons={persons}
        setPersons={setPersons}
      />

      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        personsToShow={personsToShow} 
        showAll={showAll}
        setPersons={setPersons}
        setPersonsToShow={setPersonsToShow}
      /> 
    </div>
  )
}

export default App
