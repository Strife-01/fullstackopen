import serverDataProcessing from '../requestsServerModule.js'

const DeleteButton = ({id, name, persons, setPersons}) => {
  const handleClick = (e) => {
    const confirmDeletion = window.confirm(`Delete ${name}?`);
    if (confirmDeletion) {
      serverDataProcessing
        .deleteData(id)
        .then(data => {
          const newList = persons.filter((person) => person.id !== data.data.id);
          setPersons(newList);
          window.alert(`${name} has been deleted`);
        });
    }
  }

  return (
  <button onClick={handleClick}>
    Delete
  </button>
  )
}

export default DeleteButton;
