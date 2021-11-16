import logo from '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/images/logo.svg';
import title from '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/images/title.svg';
import enteruser from '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/images/enteruser.svg';
import enterpwd from '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/images/enterpwd.svg';
import login from '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/images/login.svg';
import signup from '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/images/signup.svg';
import whiterect from '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/images/whiterect.svg';
import '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        
        <div class = "App-Heading">
        <img src={logo} className="App-logo" />
        <img src={title} className="App-Name" />
        </div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <div className="App-content">
       
        <img src={enteruser} className="App-items" />

        <form class = "formLocation">
        <input type="text" class = "InputBox"></input>
        </form>
        <img src={enterpwd} className="App-items" />
        <form class = "formLocation">
        <input type="text" class = "InputBox"></input>
        </form>
      </div>
      

      <div class = "ButtonDiv">
        <div class = "TopButtonDiv">
      <button type="button"  class = "Button"><span>Log In</span></button>
      </div>
      <div class = "BottomButtonDiv">
      <button type="button" class = "Button"><span>Sign up</span></button>
      </div>
      </div>
      
     
    </div>
  );
}

export default App;
