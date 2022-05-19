import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/LoginPage/loginpage';
import TodoList from './Components/DataFetch/todolist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='background-img'>
        
        <Routes>

          <Route path='/' element={<LoginPage/>}/>
          <Route path='/todo-list' element={<TodoList/>}/>

        </Routes>

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
