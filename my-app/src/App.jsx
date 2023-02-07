import { useEffect, useState } from 'react';
import './App.css';
import Resume from './Components/Resume/Resume';
import HomePage from './Components/HomePage/HomePage';
import { client } from './utils';

const App = () => {
  const [submit, setSubmit] = useState(false);
  const [person, setPerson] = useState(null)
  const [error, setError] = useState(false);
  const [repos, setRepos] = useState([]);

  const handleClick = async(boolean, username) => {
    if (!username) {
      return
    } else {
      try {
        const user = await client.getUserInfo(username);
        const userRepos = await client.getRepos(username);
        setPerson(user);
        setSubmit(boolean);
        setRepos(userRepos);
        console.log(userRepos)
      } catch {
        setError(true);
      } 
      // finally {
      //   setError(false);
      // }
    }
  }

  const onChange = () => {
    setError(false);
  }

  return (
    <div className="App">
    {submit
      ? <Resume
          person={person}
          repos={repos}
        />
      : (
        <HomePage
          onClick={handleClick}
          onChange={onChange}
          error={error}
        />
      )
    }
  </div>
  );
}

export default App;
