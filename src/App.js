
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import BookingProcess from './Components/BookingProcess/BookingProcess';
import MyBooked from './Components/MyBooked/MyBooked';
import AddNewService from './Components/AddNewService/AddNewService';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
      <Route exact path='/'><Home></Home></Route>
        <Route exact path='/home'><Home></Home></Route>
        <PrivateRoute exact path='/my-booked'><MyBooked></MyBooked></PrivateRoute>
        <PrivateRoute exact path='/addNewService'><AddNewService></AddNewService></PrivateRoute>
        <PrivateRoute exact path='/booking-process/:bookingId'><BookingProcess></BookingProcess></PrivateRoute>
        <Route exact path='/login'><Login></Login></Route>
        
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
      </AuthProvider>
      
      
    </div>
  );
}

export default App;
