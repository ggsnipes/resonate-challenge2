import './App.scss';
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

    
  }

  return (
    <div className="App">
      <ul className='contact-area'>
        {contacts ? contacts.map(contact =>
          <div className='contact-card'>
            <article className='card-content'>
              <p>{"Name: "}{contact.name}{"\n"}</p>
              <p>{"User: "}{contact.username}{"\n"}</p>
              <p>{"Email: "}{contact.email}{"\n"}</p>
            </article>
          </div>) : "now loading contacts..."}
      </ul>

      <section>
        {/* <Id/> */}
      </section>

    </div>
  );
}

export default App;
