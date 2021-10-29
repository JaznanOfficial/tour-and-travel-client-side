
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import BookingProcess from './Components/BookingProcess/BookingProcess';
import MyBooked from './Components/MyBooked/MyBooked';
import AddNewService from './Components/AddNewService/AddNewService';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
        <Route exact path='/'><Home></Home></Route>
          <Route exact path='/home'><Home></Home></Route>
          <Route exact path='/my-booked'><MyBooked></MyBooked></Route>
          <Route exact path='/addNewService'><AddNewService></AddNewService></Route>
          <Route exact path='/login'><Login></Login></Route>
          <Route exact path='/booking-process/:bookingId'><BookingProcess></BookingProcess></Route>
          
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
