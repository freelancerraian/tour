// import logo from './logo.svg';
import './App.css';
import Header from './components/home/Home';
import Detail from './components/details/Detail';
import Main from './components/main-area/Main-area';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Detail></Detail>
      <Main></Main>
    </div>
  );
}

export default App;