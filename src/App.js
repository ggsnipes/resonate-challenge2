import './App.css';
import Id from './Id.js'
import { useEffect, useState } from 'react';

function App() {

  const [contacts, setContacts] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res => setContacts(res))
  }, [])

  const handleClick = (event) => {
    event.preventDefault()
    console.log("this works")
  }

  return (
    <div className="App">
      <section>
        {contacts ? contacts.map(contact => <a href={contact.id} onClick={handleClick}>{contact.name}</a>) : "now loading contacts..."}
      </section>

      <section>

      </section>

    </div>
  );
}

export default App;
