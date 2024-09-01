import axios from 'axios'

const URL = 'http://localhost:3001/persons';

async function fetchData() {
    /*
      try {
        const data = await fetch(URL);
        const json_data = await data.json();
        setPersons(json_data);
      } catch (error) {
        console.log(error)
      }

    */
    
      try {
        const data = await axios.get(URL);
        return data;
      } catch (error) {
        console.log(error);
      }
    
}

async function insertData(name, number){
  try {
    const data = await axios.post(URL, {
        name: name,
        number: number
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function deleteData(id) {
  try {
    const del_URL = `${URL}/${id}`;
    const data = await axios.delete(del_URL)
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default {fetchData, insertData, deleteData}
