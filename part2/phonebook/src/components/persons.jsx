import DeleteButton from './deleteButton.jsx'

const Persons = ({persons, personsToShow, showAll, setPersons, setPersonsToShow, setMessage, setMessageStyle}) => {

  return (
    <div>
      {
        showAll ? (
          persons.map((person) => <div key={person.id}>{person.name} {person.number} <DeleteButton id={person.id} name={person.name} persons={persons} setPersons={setPersons} setMessage={setMessage} setMessageStyle={setMessageStyle}/></div>)
        ) : (
          personsToShow.map((person) => <div key={person.id}>{person.name} {person.number} <DeleteButton id={person.id} persons={personsToShow} setPersons={setPersonsToShow} setMessage={setMessage} setMessageStyle={setMessageStyle}/></div>)
        )
      }
    </div>
  );
}

export default Persons;
