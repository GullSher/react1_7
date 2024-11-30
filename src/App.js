import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Item from './Item.jsx';

function App() {
  return (
    <div className="App">
<BrowserRouter>
    <Routes>
    <Route path="/" element={<Item/>} />
    <Route path="/" element={'Home'} />
    <Route path="/" element={'About'} />
    </Routes>
    </BrowserRouter>      





    </div>
  );
}

export default App;
