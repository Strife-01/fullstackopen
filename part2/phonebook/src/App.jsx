import { useState, useRef } from 'react'

const App = () => {
  const [persons, setPersons] = useState(() => [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [personsToShow, setPersonsToShow] = useState([]);
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [showAll, setShowAll] = useState(true);
  let personNextId = useRef(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const number = e.target.number.value;
    
    let isInList = false;
    
    // Validate the input
    if (name === '') {
      window.alert(`Name cannot be empty!`);
    }

    persons.forEach(person => {
      if (person.name === name) {
        window.alert(`${name} is already in the list!`);
        isInList = true;
      }
    });
      
    if (isInList === false && name != '') {
      setPersons(persons.concat({name: name, number: number, id: personNextId.current}));
      personNextId.current++;
    }

    setNewName('');
    setNewNumber('');
    e.target.name.value = '';
    e.target.number.value = '';
  }

  const handleSearch = (e) => {
    const s = e.target.value.toLowerCase();
    setShowAll(false);
    if (s === '') {
      setShowAll(true);
      setPersonsToShow([]);
    } else {
      const tempPersons = [];
      persons.forEach(person => {
        if (person.name.toLowerCase().includes(s)) {
          tempPersons.push(person);
        }
      });
      setPersonsToShow(tempPersons);
      setShowAll(false);
    }
  }

  const handleChangeInputName = (e) => {
    setNewName(() => e.target.value);
  }
  
  const handleChangeInputNumber = (e) => {
    setNewNumber(() => e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with <input onChange={handleSearch} name="search"/>
        </div>
      </form>

      <h2>Add new number</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChangeInputName} name="name" />
        </div>
        <div>
          number: <input onChange={handleChangeInputNumber} name="number"/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          showAll ? (
            persons.map((person) => <div key={person.id}>{person.name} {person.number}</div>)
          ) : (
            personsToShow.map((person) => <div key={person.id}>{person.name} {person.number}</div>)
          )
        }
      </div>

      <div>debug: {newName} {newNumber}</div>
    </div>
  )
}

export default App
