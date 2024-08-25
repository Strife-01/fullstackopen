import { useState, useRef } from 'react'
import PersonForm from './components/personform.jsx'
import Filter from './components/filter.jsx'
import Persons from './components/persons.jsx'

const App = () => {
  const [persons, setPersons] = useState(() => [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [personsToShow, setPersonsToShow] = useState([]);
  const [showAll, setShowAll] = useState(true);
  
  let personNextId = useRef(5);

  
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
