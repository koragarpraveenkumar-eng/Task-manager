import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index';
import TaskContextProvider from './context/taskContext';
import Modal from './components/modal';
import ModalProvider from './context/modalContext';

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <ModalProvider>
        <Modal/>
        <RouterProvider router={router} />
        </ModalProvider>
      </TaskContextProvider>
    </div>
  );
}

export default App;
