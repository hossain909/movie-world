import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Header from './Header/Header';
import Home from './Home/Home';
import MovieDetail from './MovieDetail/MovieDetail';
import NoMatch from './NoMatch/NoMatch';
function App() {
  return (
      <>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home> 
            </Route>
            <Route path="/home">
              <Home></Home> 
            </Route>
            <Route path="/movie/:id">
              <MovieDetail></MovieDetail>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </>
  );
}

export default App;
