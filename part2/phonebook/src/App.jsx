import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    setPersons(persons.concat({name: name}));
    setNewName('');
    e.target.name.value = '';
  }

  const handleChangeInputName = (e) => {
    setNewName(() => e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChangeInputName} name="name" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <div>{person.name}</div>)}
      </div>

      <div>debug: {newName}</div>
    </div>
  )
}

export default App
