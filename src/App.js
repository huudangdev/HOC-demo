import React, {useState, useEffect} from 'react';
import './App.css';

import Feed from './components/Feed';

function App() {
  const [contacts, setContacts] = useState([{}]);

  useEffect(() => {
    const fetchDataUsers = async () => {
      fetch("https://api.randomuser.me/?results=50")
      .then(response => response.json())
      .then(parsedResponse =>
        parsedResponse.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          thumbnail: user.picture.thumbnail
        }))
      )
      .then(contacts => setContacts(contacts));
    }
    fetchDataUsers();
  }, []);

  return (
    <div className="App">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              HOC Demo app
            </a>
          </li>
        </ul>
      </nav>
      <Feed contacts={contacts}/>
    </div>
  );
}

export default App;
