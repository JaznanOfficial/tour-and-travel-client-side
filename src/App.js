import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
        <Route exact path='/'><Home></Home></Route>
          <Route exact path='/home'><Home></Home></Route>
          <Route exact path='/login'><Login></Login></Route>
          
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
