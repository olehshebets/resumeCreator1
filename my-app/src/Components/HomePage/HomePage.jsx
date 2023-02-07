import React, { useState } from "react";

const HomePage = ({ onClick, error, onChange }) => {
  const [username, setUserName] = useState('');

  return (
    <div className="container">
      <header role="banner">
        <h1>My GitHub R&eacute;sum&eacute;</h1>
      </header>
    <article role="main">
    <div className="yui-g">
      <p className="enlarge-medium">
        GitHub resume custom creator
      </p>
      <p><br /></p>
      <p className="enlarge-medium">
        I hope it will make your life easier
      </p>
      <p><br /><br /></p>

      <form id="run" 
      onSubmit={(e) => {
        e.preventDefault();
        onClick(true, username);
      }}>
        <p>
          <input
            id="username"
            type="text"
            placeholder="Enter your GitHub username and click on generate" 
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
              onChange();
            }}
          />
          <button type="submit" id="gen">Generate</button>
        </p>
          {error && (
            <h3 style={{color: 'red'}}>
              User doesn't exist
            </h3>
          )}
      </form>

    </div>

    <div className="yui-g last">
      <div className="yui-main">
        <br /><br />
        <h2>Notes, Information and Future features</h2>
        <p className="enlarge-medium"><br />
        This is the first version. I am planning to add loads of features here
        <br /><br />
        </p>
        </div>
      </div>
    </article>

      <footer role="contentinfo">
      </footer>
    </div>
  )
}

export default HomePage;
