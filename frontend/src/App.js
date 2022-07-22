import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import Header from './components/layout/Header'

import Catalogue from './components/Catalogue';
import ShoppingList from './components/ShoppingList';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router >
      <div className="App">
        <ToastContainer
          theme='dark'
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Catalogue />} exact />
            <Route path='/shopping-list' element={<ShoppingList />} exact />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
