// import logo from './logo.svg';
import './App.css';
import Allroutes from './components/Allroutes';
import WithAction from './components/Navbar';
import SignupCard from './pages/Register';
// import SignupCard from './pages/Register';

function App() {
  return (
    <div className="App">
      <WithAction/>
      {/* <SignupCard/> */}
      <Allroutes />
    </div>
  );
}

export default App;
