import {useState} from 'react'
import serverDataProcessing from '../requestsServerModule.js'

const PersonForm = ({persons, setPersons, personNextId}) => {
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const number = e.target.number.value;
    
    let isInList = false;
    
    // Validate the input
    if (name === '') {
      window.alert(`Name cannot be empty!`);
    }

    const update_person = persons.find(person => person.name === name);
    if (update_person != undefined) {
      isInList = true;
      const change_number = window.confirm(`${update_person.name} is already in the list! Replace the old number with the new one?`);
      if (change_number === true) {
        serverDataProcessing
          .updateData(update_person, number)
          .then(data => {
            const newPersons = persons.filter((person) => person.id != update_person.id);
            setPersons(() => newPersons.concat(data.data));
          })
      }

    }
      
    if (isInList === false && name != '') {
      serverDataProcessing.insertData(name, number)
      .then(person => {
          setPersons(persons.concat(person.data));
      });
      //setPersons(persons.concat({name: name, number: number, id: personNextId.current}));
      //personNextId.current++;
    }

    setNewName('');
    setNewNumber('');
    e.target.name.value = '';
    e.target.number.value = '';
  }

  const handleChangeInputName = (e) => {
    setNewName(() => e.target.value);
  }
  
  const handleChangeInputNumber = (e) => {
    setNewNumber(() => e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={handleChangeInputName} type="text" name="name" />
      </div>
      <div>
        number: <input onChange={handleChangeInputNumber} type="text" name="number"/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm;
