import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
  Link
} from "react-router-dom";
import routes from '../src/routes';


function App() {
  
  return (

    <BrowserRouter>
    <Link to='/' className='link'>Home</Link>
    <Routes>
      {routes.map((item) => (
        <Route path={item.path} key={item.name} element={item.Component} />
      ))}
    </Routes>
  </BrowserRouter>

  );
}

export default App;
