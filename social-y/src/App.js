import './App.css';
import Landing from './Landing';
import LoginHeader from './global_components/LoginHeader'
import Events from './components/Events';
import FindUsers from './components/FindUsers';
import { Route, Switch, Redirect } from 'react-router-dom';


function App() {
  return (
    <div>
      <header>
        <LoginHeader />
      </header>
      <main className='main'>
        <div className="content">
          <Switch>
            <Route path='/login' render={Landing} />
            <Route path='/events' render={Events} exact>
              <Events />
            </Route>
            <Route path='/events/:eventsId/users'>
              <FindUsers />
            </Route>
            <Redirect to='/login' />
          </Switch>
        </div>
      </main>
      <footer className='footer'>
        {/* footer */}
      </footer>
    </div>
  );
}

export default App;
