import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    
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
      setPersons(persons.concat({name: name, phone: phone}));
    }

    setNewName('');
    setNewPhone('');
    e.target.name.value = '';
    e.target.phone.value = '';
  }

  const handleChangeInputName = (e) => {
    setNewName(() => e.target.value);
  }
  
  const handleChangeInputPhone = (e) => {
    setNewPhone(() => e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChangeInputName} name="name" />
        </div>
        <div>
          phone: <input onChange={handleChangeInputPhone} name="phone"/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => <div>{person.name} {person.phone}</div>)}
      </div>

      <div>debug: {newName} {newPhone}</div>
    </div>
  )
}

export default App
