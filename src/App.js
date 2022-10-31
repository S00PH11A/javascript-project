import logo from './logo.svg';
import './App.css';

function App() {

  function doubler(numbers){
    let numbersDoubled = [];
     for(let i=0; i<numbers.length; i+=1){
        let oldNum = numbers[i];
        let newNum = oldNum * 2;
        numbersDoubled = numbersDoubled.concat(newNum);
      } return numbersDoubled;
  }

  console.log(doubler([2,4,5,6]));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloadsw.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
