import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import serverDataProcessing from './requestsServerModule.js'
import PersonForm from './components/personform.jsx'
import Filter from './components/filter.jsx'
import Persons from './components/persons.jsx'
import Message from './components/message.jsx'

const App = () => {
  const [persons, setPersons] = useState(() => []);
  const [personsToShow, setPersonsToShow] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [message, setMessage] = useState(null);
  const [messageStyle, setMessageStyle] = useState("message");
  
  // let personNextId = useRef(5);

  useEffect(() => {
    serverDataProcessing.fetchData()
      .then((data) => setPersons(data.data));
  }, [])
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} messageStyle={messageStyle}/>
      <Filter 
        persons={persons} 
        setShowAll={setShowAll} 
        setPersonsToShow={setPersonsToShow}
      />

      <h2>Add new number</h2>
      <PersonForm 
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
        setMessageStyle={setMessageStyle}
      />

      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        personsToShow={personsToShow} 
        showAll={showAll}
        setPersons={setPersons}
        setPersonsToShow={setPersonsToShow}
        setMessage={setMessage}
        setMessageStyle={setMessageStyle}
      /> 
    </div>
  )
}

export default App
