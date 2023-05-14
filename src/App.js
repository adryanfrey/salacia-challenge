import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import PieChart from './pages/PieChart/PieChart';
import BarChart from './pages/BarChart/BarChart'
import LineChart from './pages/LineChart/LineChart'
import ColumnChart from './pages/ColumnChart/ColumnChart'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PieChart/>}/>
          <Route path='/barChart' element={<BarChart/>}/>
          <Route path='/columnChart' element={<ColumnChart/>}/>
          <Route path='/lineChart' element={<LineChart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
