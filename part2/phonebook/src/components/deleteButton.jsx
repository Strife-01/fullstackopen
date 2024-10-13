import serverDataProcessing from '../requestsServerModule.js'

const DeleteButton = ({id, name, persons, setPersons, setMessage, setMessageStyle}) => {
  const handleClick = (e) => {
    const confirmDeletion = window.confirm(`Delete ${name}?`);
    if (confirmDeletion) {
      serverDataProcessing
        .deleteData(id)
        .then(data => {
          const newList = persons.filter((person) => person.id !== data.data.id);
          setPersons(newList);
          // window.alert(`${name} has been deleted`);
        })
        .catch(error => {
          setMessageStyle("error");
          setMessage(`${name} has already beed deleted from the database`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
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
