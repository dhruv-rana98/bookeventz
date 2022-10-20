import logo from "./logo.svg";
import "./App.css";
import StateCounter from "./components/StateCounter";
import FeedbackForm from "./components/FeedbackForm";
import SubmitForm from "./components/SubmitForm";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <StateCounter />
      <FeedbackForm /> */}
      <SubmitForm />
    </div>
  );
}

export default App;
