

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import Details from "./pages/Details.js";
import AuthProvider from './contexts/AuthProvider';
import Footer from './Component/Footer/Footer';
import PrivateRoute from './PrivateRoute.js/PrivateRoute';


function App(){
  return(
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/about'>
              <About></About>
            </Route>

            <Route path='/contact'>
              <Contact></Contact>
            </Route>

            <Route exact path='/service'>
              <Services></Services>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/signup'>
              <Signup></Signup>
            </Route>

            <PrivateRoute exact path='/service/:key'>
              <Details></Details>
            </PrivateRoute>

            <Route path='*'>
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App;
