const Persons = ({persons, personsToShow, showAll}) => {
  return (
    <div>
      {
        showAll ? (
          persons.map((person) => <div key={person.id}>{person.name} {person.number}</div>)
        ) : (
          personsToShow.map((person) => <div key={person.id}>{person.name} {person.number}</div>)
        )
      }
    </div>
  );
}

export default Persons;
