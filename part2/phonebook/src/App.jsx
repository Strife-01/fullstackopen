import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/personform.jsx'
import Filter from './components/filter.jsx'
import Persons from './components/persons.jsx'

const URL = 'http://localhost:3001/persons';

const App = () => {
  /*
  const [persons, setPersons] = useState(() => [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  */
  const [persons, setPersons] = useState(() => []);
  const [personsToShow, setPersonsToShow] = useState([]);
  const [showAll, setShowAll] = useState(true);
  
  let personNextId = useRef(5);

  useEffect(() => {
    async function fetchData() {
    /*
      try {
        const data = await fetch(URL);
        const json_data = await data.json();
        setPersons(json_data);
      } catch (error) {
        console.log(error)
      }

    */
    
      try {
        const data = await axios.get(URL);
        setPersons(data.data);
      } catch (error) {
        console.log(error);
      }
    
    }
    
    fetchData();
  
  }, [])
  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setShowAll={setShowAll} setPersonsToShow={setPersonsToShow}/>

      <h2>Add new number</h2>
      <PersonForm 
        persons={persons}
        setPersons={setPersons}
        personNextId={personNextId}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} personsToShow={personsToShow} showAll={showAll}/> 
    </div>
  )
}

export default App
