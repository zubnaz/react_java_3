import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main_page/mainPage';
import Menu from './pages/menu/menu';
import CreatePage from './pages/create/createPage';
import EditPage from './pages/edit/editPage';
import DeletePage from './pages/delete/deletePage';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route exact path="/" element={<MainPage/>}></Route>
        <Route exact path="/create" element={<CreatePage/>}></Route>
        <Route exact path="/edit/:id" element={<EditPage id={":id"}/>}></Route>
        <Route exact path="/delete/:id" element={<DeletePage id={":id"}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
