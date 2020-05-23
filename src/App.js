import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
     
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Register} />
            <Route  path="*">
              <PrivateRoute path="/dashboard">
                    <Dashboard /> 
              </PrivateRoute>
            
            </Route>
          </Switch>  
     
    </div>
    </Router>
  );
}

export default App;
