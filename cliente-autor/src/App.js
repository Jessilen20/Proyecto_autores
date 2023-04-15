import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AuthorsList from './views/AuthorsList';
import AuthorsNew from './views/AuthorsNew';
import AuthorEdit from './views/AuthorEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthorsList />}></Route>
          <Route path='/new' element={<AuthorsNew />}></Route>
          <Route path='/edit/:id' element={<AuthorEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
