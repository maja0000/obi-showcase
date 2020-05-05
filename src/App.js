import React from 'react';
import main from './pictures/obi.png';
import edit from './pictures/edit.png';
import history from './pictures/history.png';
import new1 from './pictures/new1.png';
import new2 from './pictures/new2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="text">
            <p>Task managment feature </p>
            <br />
            Graphic user interface where all the relevant information about
            repairs and maintenance of vehicle fleet can be found, sortet,
            delegated and archived. To achieve this, each new task is assigned a
            ticket. Validated tickets are stored in an database to allow all
            authorized users see them in the app and direct a task to specific
            entity, like a mechanic to take care of the task. App is implemented
            in user friendly drag and drop functionality. I wrote the
            application in a collaboration with another developer, using
            technologies that include : React, Redux, Node.js, Express, MongoDB
            and Mongoose.{' '}
          </div>
          <img className="main" src={main} alt="screenshot" />
          <img className="main" src={edit} alt="screenshot" />
          <img className="main" src={new1} alt="screenshot" />
          <img className="main" src={new2} alt="screenshot" />
          <img className="main" src={history} alt="screenshot" />
          <span>by maja gach </span>
        </div>
      </header>
    </div>
  );
}

export default App;
