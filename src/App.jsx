import logo from './logo.svg';
import './App.css';
import SignIn from "./Component/SignIn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignIn checkLogin={(user, pass) => {
            return user === "user" && pass === "password"
        }}/>

      </header>
    </div>
  );
}

export default App;
