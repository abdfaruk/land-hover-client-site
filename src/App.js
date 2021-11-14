import './App.css';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivetRoute from './Pages/Login/Login/PrivetRoute/PrivetRoute';
import Explore from './Pages/Explore/Explore';
import Booking from './Pages/Booking/Booking/Booking';
import About from './Pages/Home/About/About';
import Footer from './Pages/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ShowReview from './Pages/Home/ShowReview/ShowReview';
import HomeExplore from './Pages/Home/HomeExplore/HomeExplore';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <HomeExplore></HomeExplore>
              <About></About>
              <ShowReview></ShowReview>
            </Route>
            <Route path="/home">
              <Home></Home>
              <HomeExplore></HomeExplore>
              <About></About>
              <ShowReview></ShowReview>
            </Route>
            <PrivetRoute path="/explore">
              <Explore></Explore>
            </PrivetRoute>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivetRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
