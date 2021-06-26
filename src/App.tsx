import { BrowserRouter, Route, Switch} from 'react-router-dom'

import { Home } from "./pages/Home";
import { Room } from './pages/Room';
import { NewRoom } from './pages/NewRoom';
import { AdminRoom } from './pages/AdminRoom';
import { AuthContextProvider } from './context/AuthContext';
import './styles/global.scss'




function App() {
 
  return (
    <BrowserRouter>
      <AuthContextProvider >
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/room/new" component={NewRoom}/>
          <Route path="/room/:id" component={Room}/>
          <Route path="/admin/room/:id" component={AdminRoom}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
