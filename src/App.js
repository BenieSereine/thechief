import './App.css';
import Navbar from '../src/components/Navbar/navbar'
import Home from './components/Home/home';
import Cards from './components/Home/Cards';
import Services from './components/Services'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
     <Home />
     <Route path='/cards' component={Cards} />
    </Switch>
    <Services />
    <Footer />
    </Router>
  );
}

export default App;
