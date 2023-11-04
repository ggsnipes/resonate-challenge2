import './App.scss';
import { useEffect, useState } from 'react';

function App() {

  const [contacts, setContacts] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(res => setContacts(res))
  }, [])

  // const handleClick = (event) => {
  //   event.preventDefault()
  //   let card = document.getElementsByClassName('card-content')
  //   card.innerHTML = '<p>hi, did this work</p>'
  // }

  return (
    <div className="App">
      <section className='contact-area'>
        {contacts ? contacts.map(contact =>
          <div className='contact-card'>
            <article className='card-content'>
              <p className='name'>{contact.name}{"\n"}</p>
              <p>{"User: "}{contact.username}{"\n"}</p>
              <p>{"Email: "}{contact.email}{"\n"}</p>
              <p>{"Phone: "}{contact.phone}</p>
            </article>
          </div>) : "now loading contacts..."}
      </section>
    </div>
  );
}

export default App;
