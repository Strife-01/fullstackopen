const Filter = ({persons, setShowAll, setPersonsToShow}) => {

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

return (
  <form>
    <div>
      filter shown with <input onChange={handleSearch} name="search"/>
    </div>
  </form>
)
}

export default Filter;
