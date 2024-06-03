import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import LogoutButton from './components/LogoutButton'
import ProtectedRoute from './components/ProtectedRoute'

import Header from './components/Header'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route path="/bad-path" component={NotFound} />
      <Route path="/not-found" component={NotFound} />
      <Route component={NotFound}/>
    </Switch>
  </>
)

export default App
