
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';
import Cards from './component/Cards';
import CardsData from './component/CardsData';
import CardsDetails from './component/CardsDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Cards></Cards>}></Route>
      <Route path='/cartdetails/:id' element={<CardsDetails></CardsDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
