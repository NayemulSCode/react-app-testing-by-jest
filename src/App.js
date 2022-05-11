import './App.css';
import CheckboxWithLabel from './components/CheckBoxTest/CheckboxWithLabel';
import Link from './components/LinkTest/Link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>React app test with JEST</h1>
       <Link />
       <CheckboxWithLabel />
      </header>
    </div>
  );
}

export default App;
