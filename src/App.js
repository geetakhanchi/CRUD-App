import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import AllUsers from './components/allusers';
import AddUser from './components/adduser';



function App() {
  return (
    <div className="App">
        <NavBar /> 
        <Home />
        <AllUsers />
        <AddUser />
    </div>
  );
}

export default App;
